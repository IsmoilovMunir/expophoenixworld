import { Button, Checkbox, Form, Input, Modal, Select, message } from 'antd'
import { AsYouType, getCountries, getCountryCallingCode } from 'libphonenumber-js'
import { useEffect, useMemo, useState } from 'react'
import { useLanguage } from '../../context/language-context'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'
const WEBSITE_PATTERN = /^(https?:\/\/)?(www\.)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i

const getFlagEmoji = countryCode =>
	countryCode
		.toUpperCase()
		.split('')
		.map(char => String.fromCodePoint(127397 + char.charCodeAt()))
		.join('')

export default function ApplicationModal({
	open,
	onClose,
	initialPlan,
	planOptions,
}) {
	const { isEnglish } = useLanguage()
	const [form] = Form.useForm()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const selectedCountry = Form.useWatch('phoneCountryCode', form)
	const displayNames = useMemo(
		() =>
			new Intl.DisplayNames([isEnglish ? 'en' : 'ru'], {
				type: 'region',
			}),
		[isEnglish],
	)
	const countryPhoneOptions = useMemo(
		() =>
			getCountries()
				.map(countryCode => {
					const callingCode = `+${getCountryCallingCode(countryCode)}`
					const countryName = displayNames.of(countryCode) || countryCode
					return {
						value: countryCode,
						callingCode,
						label: `${getFlagEmoji(countryCode)} ${countryName} (${callingCode})`,
					}
				})
				.sort((a, b) => a.label.localeCompare(b.label)),
		[displayNames],
	)
	const countryCallingCodeMap = useMemo(
		() =>
			countryPhoneOptions.reduce((acc, option) => {
				acc[option.value] = option.callingCode
				return acc
			}, {}),
		[countryPhoneOptions],
	)
	const phonePlaceholder = useMemo(() => {
		if (!selectedCountry) return '(___)___-__-__'
		const example = new AsYouType(selectedCountry).input('9991234567')
		return example || '(___)___-__-__'
	}, [selectedCountry])

	useEffect(() => {
		const currentValue = form.getFieldValue('phoneLocal')
		if (!currentValue || !selectedCountry) return
		const digits = String(currentValue).replace(/\D/g, '')
		const formatted = new AsYouType(selectedCountry).input(digits)
		if (formatted !== currentValue) {
			form.setFieldValue('phoneLocal', formatted)
		}
	}, [form, selectedCountry])

	const safeInitialPlan = useMemo(() => {
		if (!planOptions?.length) return undefined
		if (initialPlan && planOptions.some(plan => plan.value === initialPlan)) {
			return initialPlan
		}
		return planOptions[0].value
	}, [initialPlan, planOptions])

	const handleSubmit = async values => {
		setIsSubmitting(true)
		try {
			const normalizedLocalPhone = String(values.phoneLocal || '').replace(/\D/g, '')
			const selectedCallingCode = countryCallingCodeMap[values.phoneCountryCode] || '+7'
			const normalizedPhone = `${selectedCallingCode}${normalizedLocalPhone}`
			const normalizedWebsite = /^https?:\/\//i.test(values.companyWebsite)
				? values.companyWebsite
				: `https://${values.companyWebsite}`
			const payload = {
				fullName: values.fullName,
				email: values.email,
				phone: normalizedPhone,
				companyName: values.companyName,
				companyWebsite: normalizedWebsite,
				plan: values.plan,
				privacyAccepted: values.privacyAccepted,
			}

			const response = await fetch(`${API_URL}/api/applications`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			})

			if (!response.ok) {
				const body = await response.json().catch(() => ({}))
				throw new Error(
					body?.message ||
						(isEnglish
							? 'Failed to submit application'
							: 'Не удалось отправить заявку'),
				)
			}

			message.success(
				isEnglish ? 'Application submitted successfully' : 'Заявка успешно отправлена',
			)
			form.resetFields()
			onClose()
		} catch (error) {
			message.error(
				error.message ||
					(isEnglish
						? 'Failed to submit application'
						: 'Не удалось отправить заявку'),
			)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<Modal
			open={open}
			onCancel={onClose}
			footer={null}
			centered
			width={560}
			title={isEnglish ? 'Leave an application' : 'Оставить заявку'}
			destroyOnHidden
		>
			<Form
				form={form}
				layout='vertical'
				className='mt-2'
				initialValues={{
					plan: safeInitialPlan,
					privacyAccepted: false,
					phoneCountryCode: 'RU',
				}}
				onFinish={handleSubmit}
			>
				<Form.Item
					name='fullName'
					rules={[
						{
							required: true,
							message: isEnglish ? 'Enter full name' : 'Введите ФИО',
						},
						{ min: 2, message: isEnglish ? 'Too short' : 'Слишком короткое имя' },
					]}
				>
					<Input placeholder={isEnglish ? 'Full name' : 'ФИО'} size='large' />
				</Form.Item>

				<Form.Item
					name='email'
					rules={[
						{ required: true, message: isEnglish ? 'Enter email' : 'Введите email' },
						{ type: 'email', message: isEnglish ? 'Invalid email' : 'Некорректный email' },
					]}
				>
					<Input placeholder='Email' size='large' />
				</Form.Item>

				<div className='flex gap-2'>
					<Form.Item
						name='phoneCountryCode'
						className='w-[44%]'
						rules={[
							{
								required: true,
								message: isEnglish ? 'Choose country code' : 'Выберите код страны',
							},
						]}
					>
						<Select
							size='large'
							options={countryPhoneOptions}
							showSearch
							optionFilterProp='label'
						/>
					</Form.Item>

					<Form.Item
						name='phoneLocal'
						className='w-[56%]'
						getValueFromEvent={event => {
							const rawValue = event?.target?.value || ''
							const digits = String(rawValue).replace(/\D/g, '')
							if (!selectedCountry) return digits
							return new AsYouType(selectedCountry).input(digits)
						}}
						rules={[
							{
								required: true,
								message: isEnglish ? 'Enter phone number' : 'Введите номер телефона',
							},
							{
								pattern: /^[0-9\s()-]{5,18}$/,
								message: isEnglish ? 'Invalid phone number' : 'Некорректный номер телефона',
							},
						]}
					>
						<Input
							placeholder={phonePlaceholder}
							size='large'
							maxLength={24}
						/>
					</Form.Item>
				</div>

				<Form.Item
					name='companyName'
					rules={[
						{
							required: true,
							message: isEnglish ? 'Enter company name' : 'Введите название компании',
						},
					]}
				>
					<Input
						placeholder={isEnglish ? 'Company name' : 'Название компании'}
						size='large'
					/>
				</Form.Item>

				<Form.Item
					name='companyWebsite'
					rules={[
						{
							required: true,
							message: isEnglish ? 'Enter website URL' : 'Введите ссылку на сайт',
						},
						{
							validator: (_, value) => {
								if (!value || WEBSITE_PATTERN.test(value.trim())) {
									return Promise.resolve()
								}
								return Promise.reject(
									new Error(
										isEnglish
											? 'Use site.com, www.site.com, http://site.com or https://site.com'
											: 'Введите site.com, www.site.com, http://site.com или https://site.com',
									),
								)
							},
						},
					]}
				>
					<Input
						placeholder={isEnglish ? 'Company website link' : 'Ссылка Сайт вашей компании'}
						size='large'
					/>
				</Form.Item>

				<Form.Item
					name='plan'
					rules={[
						{
							required: true,
							message: isEnglish ? 'Choose a package' : 'Выберите пакет участия',
						},
					]}
				>
					<Select size='large' options={planOptions} />
				</Form.Item>

				<Form.Item
					name='privacyAccepted'
					valuePropName='checked'
					rules={[
						{
							validator: (_, value) =>
								value
									? Promise.resolve()
									: Promise.reject(
											new Error(
												isEnglish
													? 'You must accept the privacy policy'
													: 'Необходимо согласие с политикой конфиденциальности',
											),
										),
						},
					]}
				>
					<Checkbox>
						{isEnglish
							? 'I agree with the privacy policy'
							: 'Cогласен с политикой конфиденциальности'}
					</Checkbox>
				</Form.Item>

				<Button
					type='primary'
					htmlType='submit'
					loading={isSubmitting}
					style={{
						height: 46,
						backgroundColor: '#FFD23E',
						color: 'black',
						fontWeight: 700,
						width: '100%',
					}}
				>
					{isEnglish ? 'Submit application' : 'Отправить заявку'}
				</Button>
			</Form>
		</Modal>
	)
}
