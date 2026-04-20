import { CheckCircleOutlined } from '@ant-design/icons'
import { Button, Checkbox, Input, Modal, Select } from 'antd'
import { useEffect, useState } from 'react'
import { useLanguage } from '../../context/language-context'

export default function Formats() {
	const { isEnglish } = useLanguage()
	const [isApplicationOpen, setIsApplicationOpen] = useState(false)
	const [selectedFormat, setSelectedFormat] = useState(
		isEnglish ? 'PHOENIX PREMIUM' : 'ФЕНИКС PREMIUM',
	)
	const formats = [
		{
			id: 1,
			title: isEnglish ? 'PHOENIX PREMIUM' : 'ФЕНИКС PREMIUM',
			price: 15000,
			color: 'rgba(74,76,77)',
			services: [
				isEnglish ? 'Flight, transfer, and visa support' : 'Перелёт, трансфер и визовая поддержка',
				isEnglish ? '3-day stay at Villa Phoenix' : 'Проживание 3 дня в «Вилла Феникса»',
				isEnglish ? '4 meals a day by chef' : '4-разовое питание от шеф-повара',
				isEnglish ? 'Unlimited access to SPA, pool, and sauna' : 'Безлимитный доступ к SPA, бассейну и бане',
				isEnglish ? 'Premium leisure and active entertainment' : 'Премиальный отдых и активные развлечения',
				isEnglish ? 'Access to government and business circles' : 'Доступ к государственным и деловым кругам',
				isEnglish ? 'Option to conclude partnership agreements' : 'Возможность заключения партнёрских соглашений',
				isEnglish ? 'Participation in exhibition and business program' : 'Участие в выставке и деловой программе',
				isEnglish ? '24/7 personal assistance' : 'Персональное сопровождение 24/7',
			],
		},
		{
			id: 2,
			title: isEnglish ? 'PHOENIX LUXURY' : 'ФЕНИКС LUXURY',
			price: 20000,
			color: 'rgba(24,97,170)',
			services: [
				isEnglish ? 'Flight, transfer, and visa support' : 'Перелёт, трансфер и визовая поддержка',
				isEnglish ? '3-day stay at Villa Phoenix' : 'Проживание 3 дня в «Вилла Феникса»',
				isEnglish ? '4 meals a day by chef' : '4-разовое питание от шеф-повара',
				isEnglish ? 'Unlimited access to SPA, pool, and sauna' : 'Безлимитный доступ к SPA, бассейну и бане',
				isEnglish ? 'Premium leisure and active entertainment' : 'Премиальный отдых и активные развлечения',
				isEnglish ? 'Access to government and business circles' : 'Доступ к государственным и деловым кругам',
				isEnglish ? 'Option to conclude partnership agreements' : 'Возможность заключения партнёрских соглашений',
				isEnglish ? 'Participation in exhibition and business program' : 'Участие в выставке и деловой программе',
				isEnglish ? '24/7 personal assistance' : 'Персональное сопровождение 24/7',
			],
		},
		{
			id: 3,
			title: isEnglish ? 'PHOENIX VIP' : 'ФЕНИКС VIP',
			price: 25000,
			color: 'rgba(2,123,81)',
			services: [
				isEnglish ? 'Flight, transfer, and visa support' : 'Перелёт, трансфер и визовая поддержка',
				isEnglish ? '3-day stay at Villa Phoenix' : 'Проживание 3 дня в «Вилла Феникса»',
				isEnglish ? '4 meals a day by chef' : '4-разовое питание от шеф-повара',
				isEnglish ? 'Unlimited access to SPA, pool, and sauna' : 'Безлимитный доступ к SPA, бассейну и бане',
				isEnglish ? 'Premium leisure and active entertainment' : 'Премиальный отдых и активные развлечения',
				isEnglish ? 'Access to government and business circles' : 'Доступ к государственным и деловым кругам',
				isEnglish ? 'Option to conclude partnership agreements' : 'Возможность заключения партнёрских соглашений',
				isEnglish ? 'Participation in exhibition and business program' : 'Участие в выставке и деловой программе',
				isEnglish ? '24/7 personal assistance' : 'Персональное сопровождение 24/7',
			],
		},
	]
	useEffect(() => {
		if (!formats.some(format => format.title === selectedFormat)) {
			setSelectedFormat(formats[0].title)
		}
	}, [formats, selectedFormat])

	const openApplication = formatTitle => {
		setSelectedFormat(formatTitle)
		setIsApplicationOpen(true)
	}
	const closeApplication = () => setIsApplicationOpen(false)

	return (
		<>
			<div className='px-5 md:px-0 max-w-350 m-auto flex gap-5 flex-col'>
				<h1 className='md:text-[52px] text-[36px] text-center md:text-start font-extrabold'>
					{isEnglish ? 'Participation ' : 'Форматы '}
					<span className='text-[#FFD23E]'>{isEnglish ? 'formats' : 'участия'}</span>
				</h1>
				<div className='flex md:flex-row flex-col justify-between items-center gap-6 md:gap-0'>
					{formats.map(el => (
						<article
							key={el.id}
							className='md:w-[32%] w-full px-4 md:px-5 py-6 md:py-7 rounded-2xl flex flex-col gap-4'
							style={{
								background: `linear-gradient(360deg, ${el.color}, rgba(31,35,38))`,
								backdropFilter: 'blur(12px)',
							}}
						>
							<h1 className='md:text-[32px] text-[28px] font-extrabold'>
								{el.title}
							</h1>
							{el.services.map(elem => (
								<p key={elem} className='md:text-[18px] text-[15px] font-normal leading-snug'>
									<CheckCircleOutlined /> {elem}
								</p>
							))}
							<p className='md:text-[34px] text-[30px] text-[#FFD23E] font-extrabold'>
								{el.price} $
							</p>
							<Button
								onClick={() => openApplication(el.title)}
								type=''
								style={{
									backgroundColor: 'transparent',
									color: 'white',
									padding: '25px 30px',
									fontSize: '17px',
								}}
							>
								{isEnglish ? 'Apply' : 'Подать заявку'}
							</Button>
						</article>
					))}
				</div>
			</div>
			<Modal
				open={isApplicationOpen}
				onCancel={closeApplication}
				footer={null}
				centered
				width={560}
				title={isEnglish ? 'Leave an application' : 'Оставить заявку'}
			>
				<form
					className='mt-2 flex flex-col gap-3'
					onSubmit={event => {
						event.preventDefault()
						closeApplication()
					}}
				>
					<Input placeholder={isEnglish ? 'Full name' : 'ФИО'} size='large' />
					<Input placeholder='Email' size='large' />
					<Input placeholder='+7(___)___-___-___' size='large' />
					<Input
						placeholder={isEnglish ? 'Company name' : 'Название компании'}
						size='large'
					/>
					<Input
						placeholder={isEnglish ? 'Company website link' : 'Ссылка Сайт вашей компании'}
						size='large'
					/>
					<Select
						size='large'
						value={selectedFormat}
						onChange={setSelectedFormat}
						options={formats.map(format => ({
							value: format.title,
							label: format.title,
						}))}
					/>
					<Button
						type='primary'
						htmlType='submit'
						style={{
							height: 46,
							backgroundColor: '#FFD23E',
							color: 'black',
							fontWeight: 700,
						}}
					>
						{isEnglish ? 'Submit application' : 'Отправить заявку'}
					</Button>
					<Checkbox>
						{isEnglish
							? 'I agree with the privacy policy'
							: 'Cогласен с политикой конфиденциальности'}
					</Checkbox>
				</form>
			</Modal>
		</>
	)
}
