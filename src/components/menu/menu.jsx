import { CloseOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function MobileMenu({ open, onClose }) {
	return (
		<div
			className={`fixed top-0 left-0 w-full h-[calc(125vh)] bg-[#0B0F1A] z-40 transition-all duration-300 ${
				open
					? 'opacity-100 translate-y-0'
					: 'opacity-0 -translate-y-5 pointer-events-none'
			}`}
		>
			{/* HEADER */}
			<div className='flex justify-between items-center px-5 py-4 border-b border-gray-700'>
				<img src={logo} alt='' />
				<button onClick={onClose} className='text-white text-xl'>
					<CloseOutlined />
				</button>
			</div>

			{/* MENU */}
			<div className='flex flex-col items-center gap-6 text-white text-[32px] mt-10 '>
				<a href='#about' onClick={onClose}>
					О выставке
				</a>
				<a href='#why' onClick={onClose}>
					Преимущества
				</a>
				<a href='#formats' onClick={onClose}>
					Форматы участия
				</a>
				<a href='#partners' onClick={onClose}>
					Партнеры
				</a>
				<a href='#' onClick={onClose}>Площадка</a>
				<a href='#faq' onClick={onClose}>FAQ</a>
				<a href='#contact' onClick={onClose}>Контакты</a>
			</div>

			{/* BUTTON */}
			<div className='mt-10 flex justify-center'>
				<Link className=' md:hiddem'>
					<Button
						style={{
							fontFamily: 'Graphik LCG',
							fontSize: '30px',
							padding: '25px 40px',
							color: 'black',
							backgroundColor: '#FFD23E',
						}}
					>
						Подать заявку
					</Button>
				</Link>
			</div>
		</div>
	)
}
