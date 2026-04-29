import { Button } from 'antd'
import { useLanguage } from '../../context/language-context'
import './hero-section.css'

export default function HeroSection() {
	const { isEnglish } = useLanguage()
	const openApplicationModal = () => {
		window.dispatchEvent(new CustomEvent('phoenix-open-application'))
	}

	return (
		<>
			<div className='gap-7 md:gap-0 px-5 md:px-0 text-white flex md:flex-row flex-col md:max-w-350 md:m-auto md:justify-between items-center md:items-end pt-3 md:pt-20'>
				<aside className='md:w-[60%] items-center md:items-start md:float-start flex flex-col gap-5 text-center md:text-start'>
					<p className='text-[#FFFFFF8A] md:text-[28.8px] text-[13px] font-light'>
						{isEnglish
							? 'MEET BUSINESS GIANTS FROM SEVEN COUNTRIES'
							: 'ВСТРЕЧАЙТЕ БИЗНЕС -ГИГАНТОВ СЕМИ СТРАН'}
					</p>
					<h1 className='font-extrabold md:text-[48px] text-[32px] uppercase leading-tight'>
						{isEnglish ? 'International exhibition' : 'Международная выставка'}{' '}
						<br className='hidden md:block' />{' '}
						<span className='text-[#FFD23E]'>
							{isEnglish ? 'Phoenix + BRICS' : 'Феникс + БРИКС'}
						</span>
					</h1>
					<p className='md:text-[28.8px] text-[16px] leading-snug font-light'>
						{isEnglish
							? 'A meeting point for business leaders, investors, manufacturers, and entrepreneurs from BRICS+ countries at Villa Phoenix.'
							: 'Встреча лидеров бизнеса, инвесторов, производителей и предпринимателей из стран BRICS+ на площадке Villa Phoenix.'}
					</p>

					<div className='hidden md:block'>
						<Button
							onClick={openApplicationModal}
							style={{
								color: 'black',
								backgroundColor: '#FFD23E',
								fontWeight: 'bold',
								padding: '35px 50px',
								fontSize: '22px',
								fontFamily: 'Graphik LCG',
								border: 'none',
								position: 'sticky',
								zIndex: '1',
							}}
						>
							{isEnglish ? 'Apply for participation' : 'Подать заявку на участие'}
						</Button>
					</div>

					{/* for mobile */}
					<div className='md:hidden w-full'>
						<Button
							onClick={openApplicationModal}
							style={{
								color: 'black',
								backgroundColor: '#FFD23E',
								fontWeight: 'bold',
								padding: '22px 16px',
								fontSize: '16px',
								fontFamily: 'Graphik LCG',
								border: 'none',
								width: '100%',
							}}
						>
							{isEnglish ? 'Apply for participation' : 'Подать заявку на участие'}
						</Button>
					</div>
				</aside>
				<aside className='w-full md:w-90'>
					<div className='md:border-5 border-3 border-[#FFD23E] md:h-85 md:w-92 w-full md:p-7 py-4 px-4 md:px-12 flex flex-col items-center md:items-start md:gap-3'>
						<span className='md:text-[68px] text-[34px] font-bold text-[#FFD23E]'>
							{isEnglish ? '3 July' : '3 июля'}
						</span>
						<span className='md:text-[68px] text-[34px] font-bold'>2027</span>
						<p className='md:text-[24px] text-[14px] font-light whitespace-nowrap'>
							{isEnglish ? 'Moscow, Villa Phoenix' : 'г.Москва Вилла Феникс'}
						</p>
					</div>
				</aside>
			</div>
		</>
	)
}
