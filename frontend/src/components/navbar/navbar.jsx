import { Button, Checkbox, Input, Modal, Select } from 'antd'
import { useState } from 'react'
import Flag from 'react-flagkit'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useLanguage } from '../../context/language-context'
import './navbar.css'
// import ru from '../../assets/ru.png'
const { Option } = Select
// import MobileMenu from './MobileMenu'
import { MenuOutlined } from '@ant-design/icons'
import MobileMenu from '../menu/menu'

export default function Navbar() {
	const { language, setLanguage, isEnglish } = useLanguage()
	const [menuBtn, setMenuBtn] = useState(false)
	const [isApplicationOpen, setIsApplicationOpen] = useState(false)
	const planOptions = isEnglish
		? [
				{ value: 'PHOENIX PREMIUM', label: 'PHOENIX PREMIUM' },
				{ value: 'PHOENIX LUXURY', label: 'PHOENIX LUXURY' },
				{ value: 'PHOENIX VIP', label: 'PHOENIX VIP' },
			]
		: [
				{ value: 'ФЕНИКС PREMIUM', label: 'ФЕНИКС PREMIUM' },
				{ value: 'ФЕНИКС LUXURY', label: 'ФЕНИКС LUXURY' },
				{ value: 'ФЕНИКС VIP', label: 'ФЕНИКС VIP' },
			]
	const navLabels = isEnglish
		? {
				about: 'About',
				benefits: 'Benefits',
				formats: 'Participation formats',
				partners: 'Partners',
				venue: 'Venue',
				contacts: 'Contacts',
				apply: 'Apply',
			}
		: {
				about: 'О выставке',
				benefits: 'Преимущества',
				formats: 'Форматы участия',
				partners: 'Партнеры',
				venue: 'Площадка',
				contacts: 'Контакты',
				apply: 'Подать заявку',
			}
	function openMenu() {
		setMenuBtn(prev => !prev)
	}
	const openApplication = () => setIsApplicationOpen(true)
	const closeApplication = () => setIsApplicationOpen(false)

	return (
		<>
			<nav
				style={
					menuBtn
						? { position: 'fixed', width: '100%', backgroundColor: '#0B0F1A' }
						: { position: 'sticky', top: 0, zIndex: 30 }
				}
				className='md:px-0 relative max-w-350 m-auto flex justify-between items-center py-3'
			>
				<img src={logo} alt='' className='pl-5 w-28 md:w-auto' />
				<ul className='hidden md:flex gap-5'>
					<li>
						<Button
							type='text'
							style={{
								fontFamily: 'Graphik LCG',
								fontSize: '17px',
								color: 'white',
							}}
						>
							<a href='#about' className=''>
								{navLabels.about}
							</a>
						</Button>
					</li>
					<li>
						<Button
							type='text'
							style={{
								fontFamily: 'Graphik LCG',
								fontSize: '17px',
								color: 'white',
							}}
						>
							<a href='#why'>{navLabels.benefits}</a>
						</Button>
					</li>
					<li>
						<Button
							type='text'
							style={{
								fontFamily: 'Graphik LCG',
								fontSize: '17px',
								color: 'white',
							}}
						>
							<a href='#formats'>{navLabels.formats}</a>
						</Button>
					</li>
					<li>
						<Button
							type='text'
							style={{
								fontFamily: 'Graphik LCG',
								fontSize: '17px',
								color: 'white',
							}}
						>
							<a href='#partners'>{navLabels.partners}</a>
						</Button>
					</li>
					<li>
						<Button
							type='text'
							style={{
								fontFamily: 'Graphik LCG',
								fontSize: '17px',
								color: 'white',
							}}
						>
							<a href=''>{navLabels.venue}</a>
						</Button>
					</li>
					<li>
						<Button
							type='text'
							style={{
								fontFamily: 'Graphik LCG',
								fontSize: '17px',
								color: 'white',
							}}
						>
							<a href='#faq'>FAQ</a>
						</Button>
					</li>
					<li>
						<Button
							type='text'
							style={{
								fontFamily: 'Graphik LCG',
								fontSize: '17px',
								color: 'white',
							}}
						>
							<a href='#contact'>{navLabels.contacts}</a>
						</Button>
					</li>
				</ul>

				<Select
					value={language}
					onChange={setLanguage}
					style={{
						width: 120,
						backgroundColor: 'transparent',
						color: 'white',
						border: 'none',
					}}
					dropdownStyle={{
						backgroundColor: 'transparent',
					}}
					className='custom-select'
				>
					<Option
						value='ru'
						style={{
							backgroundColor: 'transparent',
							color: 'white',
						}}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: 8,
							}}
						>
							<Flag country='RU' size={20} />
							<span>{isEnglish ? 'Rus' : 'Рус'}</span>
						</div>
					</Option>

					<Option
						value='en'
						style={{
							backgroundColor: 'transparent',
							color: 'white',
						}}
					>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
							<Flag country='GB' size={20} />
							<span>{isEnglish ? 'Eng' : 'Анг'}</span>
						</div>
					</Option>
				</Select>

				<div className='hidden md:block'>
					<Button
						onClick={openApplication}
						style={{
							fontFamily: 'Graphik LCG',
							fontSize: '17px',
							padding: '25px 40px',
							color: 'white',
							backgroundColor: 'transparent',
						}}
					>
						{navLabels.apply}
					</Button>
				</div>

				<div className='md:hidden flex items-center gap-1 pr-4'>
					<Select
						value={language}
						onChange={setLanguage}
						style={{
							width: 86,
							backgroundColor: 'transparent',
							color: 'white',
							border: 'none',
						}}
						dropdownStyle={{
							backgroundColor: 'transparent',
						}}
						// className='custom-select'
					>
						<Option
							value='ru'
							style={{
								backgroundColor: 'transparent',
								color: 'white',
							}}
						>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: 8,
								}}
							>
								<Flag country='RU' size={20} />
								<span>{isEnglish ? 'Rus' : 'Рус'}</span>
							</div>
						</Option>

						<Option
							value='en'
							style={{
								backgroundColor: 'transparent',
								color: 'white',
							}}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
								<Flag country='GB' size={20} />
								<span>{isEnglish ? 'Eng' : 'Анг'}</span>
							</div>
						</Option>
					</Select>
					<button
						onClick={openMenu}
						className='md:hidden text-white text-xl'
					>
						<MenuOutlined />
					</button>
				</div>
			</nav>
			<MobileMenu open={menuBtn} onClose={openMenu}/>
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
						defaultValue={planOptions[0].value}
						options={planOptions}
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
