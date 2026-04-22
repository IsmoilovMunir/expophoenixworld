import { CloseOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import logo from '../../assets/logo.png'
import { useLanguage } from '../../context/language-context'

export default function MobileMenu({ open, onClose }) {
	const { isEnglish } = useLanguage()
	const labels = isEnglish
		? {
				about: 'About',
				benefits: 'Benefits',
				formats: 'Participation formats',
				partners: 'Partners',
				venue: 'Venue',
				contacts: 'Contacts',
				apply: 'Go to plans',
			}
		: {
				about: 'О выставке',
				benefits: 'Преимущества',
				formats: 'Форматы участия',
				partners: 'Партнеры',
				venue: 'Площадка',
				contacts: 'Контакты',
				apply: 'Перейти к тарифам',
			}

	return (
		<div
			className={`fixed top-0 left-0 w-full h-screen bg-[#0B0F1A]/95 backdrop-blur-xl z-40 transition-all duration-300 overflow-y-auto ${
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
			<div className='mx-5 mt-7 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.35)]'>
				<div className='flex flex-col gap-2 text-white'>
					<a
						href='#about'
						onClick={onClose}
						className='rounded-2xl px-4 py-3 text-[20px] font-semibold tracking-wide transition-all duration-200 active:scale-[0.99] hover:bg-white/10'
					>
					{labels.about}
					</a>
					<a
						href='#why'
						onClick={onClose}
						className='rounded-2xl px-4 py-3 text-[20px] font-semibold tracking-wide transition-all duration-200 active:scale-[0.99] hover:bg-white/10'
					>
					{labels.benefits}
					</a>
					<a
						href='#formats'
						onClick={onClose}
						className='rounded-2xl px-4 py-3 text-[20px] font-semibold tracking-wide transition-all duration-200 active:scale-[0.99] hover:bg-white/10'
					>
					{labels.formats}
					</a>
					<a
						href='#partners'
						onClick={onClose}
						className='rounded-2xl px-4 py-3 text-[20px] font-semibold tracking-wide transition-all duration-200 active:scale-[0.99] hover:bg-white/10'
					>
					{labels.partners}
					</a>
					<a
						href='#venue'
						onClick={onClose}
						className='rounded-2xl px-4 py-3 text-[20px] font-semibold tracking-wide transition-all duration-200 active:scale-[0.99] hover:bg-white/10'
					>
						{labels.venue}
					</a>
					<a
						href='#faq'
						onClick={onClose}
						className='rounded-2xl px-4 py-3 text-[20px] font-semibold tracking-wide transition-all duration-200 active:scale-[0.99] hover:bg-white/10'
					>
						FAQ
					</a>
					<a
						href='#contact'
						onClick={onClose}
						className='rounded-2xl px-4 py-3 text-[20px] font-semibold tracking-wide transition-all duration-200 active:scale-[0.99] hover:bg-white/10'
					>
						{labels.contacts}
					</a>
				</div>
			</div>

			{/* BUTTON */}
			<div className='mt-6 mb-8 px-5 flex justify-center'>
				<a href='#formats' onClick={onClose} className='w-full max-w-[360px]'>
					<Button
						style={{
							fontFamily: 'Graphik LCG',
							fontSize: '20px',
							padding: '20px 24px',
							color: 'black',
							backgroundColor: '#FFD23E',
							width: '100%',
							borderRadius: '16px',
							fontWeight: '700',
						}}
					>
						{labels.apply}
					</Button>
				</a>
			</div>
		</div>
	)
}
