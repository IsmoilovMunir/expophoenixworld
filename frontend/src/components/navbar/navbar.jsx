import { Button, Select } from 'antd'
import { useState } from 'react'
import Flag from 'react-flagkit'
import logo from '../../assets/logo.png'
import { MenuOutlined } from '@ant-design/icons'
import { useLanguage } from '../../context/language-context'
import MobileMenu from '../menu/menu'
import './navbar.css'

const { Option } = Select

const navLinkStyle = {
	fontFamily: 'Graphik LCG',
	color: 'white',
}

const languageOptions = (isEnglish) => [
	{
		value: 'ru',
		label: (
			<div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
				<Flag country='RU' size={18} />
				<span>{isEnglish ? 'Rus' : 'Рус'}</span>
			</div>
		),
	},
	{
		value: 'en',
		label: (
			<div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
				<Flag country='GB' size={18} />
				<span>{isEnglish ? 'Eng' : 'Анг'}</span>
			</div>
		),
	},
]

export default function Navbar() {
	const { language, setLanguage, isEnglish } = useLanguage()
	const [menuBtn, setMenuBtn] = useState(false)
	const navLabels = isEnglish
		? {
				about: 'About',
				benefits: 'Benefits',
				formats: 'Participation formats',
				partners: 'Partners',
				team: 'Team',
				venue: 'Venue',
				contacts: 'Contacts',
				apply: 'Apply',
			}
		: {
				about: 'О выставке',
				benefits: 'Преимущества',
				formats: 'Форматы участия',
				partners: 'Партнеры',
				team: 'Команда',
				venue: 'Площадка',
				contacts: 'Контакты',
				apply: 'Подать заявку',
			}

	const navItems = [
		{ href: '#about', label: navLabels.about },
		{ href: '#why', label: navLabels.benefits },
		{ href: '#formats', label: navLabels.formats },
		{ href: '#partners', label: navLabels.partners },
		{ href: '#team', label: navLabels.team },
		{ href: '#venue', label: navLabels.venue },
		{ href: '#faq', label: 'FAQ' },
		{ href: '#contact', label: navLabels.contacts },
	]

	function openMenu() {
		setMenuBtn(prev => !prev)
	}
	const openApplicationModal = () => {
		window.dispatchEvent(new CustomEvent('phoenix-open-application'))
	}

	return (
		<>
			<nav
				style={
					menuBtn
						? { position: 'fixed', width: '100%', backgroundColor: '#0B0F1A' }
						: { position: 'sticky', top: 0, zIndex: 30 }
				}
				className='navbar-shell relative max-w-350 m-auto flex justify-between items-center'
			>
				<img src={logo} alt='' className='navbar-logo shrink-0' />

				<ul className='navbar-menu hidden md:flex'>
					{navItems.map(item => (
						<li key={item.href}>
							<Button type='text' style={navLinkStyle}>
								<a href={item.href}>{item.label}</a>
							</Button>
						</li>
					))}
				</ul>

				<div className='hidden md:flex items-center gap-2 shrink-0'>
					<Select
						value={language}
						onChange={setLanguage}
						style={{
							width: 96,
							backgroundColor: 'transparent',
							color: 'white',
							border: 'none',
						}}
						popupClassName='custom-select-dropdown'
						className='custom-select'
					>
						{languageOptions(isEnglish).map(option => (
							<Option
								key={option.value}
								value={option.value}
								style={{ backgroundColor: 'transparent', color: 'white' }}
							>
								{option.label}
							</Option>
						))}
					</Select>

					<div className='navbar-apply'>
						<Button
							onClick={openApplicationModal}
							style={{
								...navLinkStyle,
								backgroundColor: 'transparent',
							}}
						>
							{navLabels.apply}
						</Button>
					</div>
				</div>

				<div className='md:hidden flex items-center gap-1.5 shrink-0'>
					<Select
						value={language}
						onChange={setLanguage}
						style={{
							width: 80,
							backgroundColor: 'transparent',
							color: 'white',
							border: 'none',
						}}
						popupClassName='custom-select-dropdown'
						className='custom-select-mobile'
					>
						{languageOptions(isEnglish).map(option => (
							<Option
								key={option.value}
								value={option.value}
								style={{ backgroundColor: 'transparent', color: 'white' }}
							>
								{option.label}
							</Option>
						))}
					</Select>
					<button
						onClick={openMenu}
						className='md:hidden text-white text-lg p-1'
						aria-label={isEnglish ? 'Open menu' : 'Открыть меню'}
					>
						<MenuOutlined />
					</button>
				</div>
			</nav>
			<MobileMenu open={menuBtn} onClose={openMenu} />
		</>
	)
}
