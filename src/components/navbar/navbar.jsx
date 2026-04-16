import { Button } from 'antd'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './navbar.css'

export default function Navbar() {
	return (
		<>
			<nav className='max-w-350 m-auto flex justify-between items-center py-3'>
				<img src={logo} alt='' />
				<ul className='flex gap-8'>
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
							<a href=''>Преимущества</a>
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
							<a href=''>Форматы участия</a>
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
							<a href=''>Партнеры</a>
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
							<a href=''>FAQ</a>
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
							<a href=''>Контакты</a>
						</Button>
					</li>
				</ul>
				<Link>
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
			</nav>
		</>
	)
}
