import { Button, Select } from 'antd'
import { useState } from 'react'
import Flag from 'react-flagkit'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './navbar.css'
// import ru from '../../assets/ru.png'
const { Option } = Select
// import MobileMenu from './MobileMenu'
import { MenuOutlined } from '@ant-design/icons'
import MobileMenu from '../menu/menu'

export default function Navbar() {
	const handleChange = value => {
		console.log(`selected ${value}`)
	}
	const [menuBtn, setMenuBtn] = useState(false)
	function openMenu() {
		setMenuBtn(prev => !prev)
	}

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
								О выставке
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
							<a href='#why'>Преимущества</a>
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
							<a href='#formats'>Форматы участия</a>
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
							<a href='#partners'>Партнеры</a>
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
							<a href=''>Площадка</a>
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
							<a href='#contact'>Контакты</a>
						</Button>
					</li>
				</ul>

				<Select
					defaultValue='ru'
					onChange={handleChange}
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
							<span>Рус</span>
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
							<span>Eng</span>
						</div>
					</Option>
				</Select>

				<Link className='hidden md:block'>
					<Button
						style={{
							fontFamily: 'Graphik LCG',
							fontSize: '17px',
							padding: '25px 40px',
							color: 'white',
							backgroundColor: 'transparent',
						}}
					>
						Подать заявку
					</Button>
				</Link>

				<div className='md:hidden flex items-center gap-1 pr-4'>
					<Select
						defaultValue='ru'
						onChange={handleChange}
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
								<span>Рус</span>
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
								<span>Eng</span>
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
		</>
	)
}
