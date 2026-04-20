import { Button } from 'antd'
import { Link } from 'react-router-dom'
import './hero-section.css'

export default function HeroSection() {
	return (
		<>
			<div className='gap-7 md:gap-0 px-5 md:px-0 text-white flex md:flex-row flex-col md:max-w-350 md:m-auto md:justify-between items-center md:items-end pt-3 md:pt-20'>
				<aside className='md:w-[60%] items-center md:items-start md:float-start flex flex-col gap-5 text-center md:text-start'>
					<p className='text-[#FFFFFF8A] md:text-[28.8px] text-[13px] font-light'>
						ВСТРЕЧАЙТЕ БИЗНЕС -ГИГАНТОВ СЕМИ СТРАН
					</p>
					<h1 className='font-extrabold md:text-[48px] text-[32px] uppercase leading-tight'>
						Международная выставка <br className='hidden md:block' />{' '}
						<span className='text-[#FFD23E]'>Fenix+</span>
					</h1>
					<p className='md:text-[28.8px] text-[16px] leading-snug font-light'>
						Встреча лидеров бизнеса, инвесторов, производителей и
						предпринимателей из стран BRICS+ на площадке Villa Fenix.
					</p>

					<Link className='hidden md:block'>
						<Button
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
							Подать заявку на участие
						</Button>
					</Link>

					{/* for mobile */}
					<Link className='md:hidden w-full'>
						<Button
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
							Подать заявку на участие
						</Button>
					</Link>
				</aside>
				<aside className='w-full md:w-90'>
					<div className='md:border-5 border-3 border-[#FFD23E] md:h-85 md:w-92 w-full md:p-7 py-4 px-4 md:px-12 flex flex-col items-center md:items-start md:gap-3'>
						<span className='md:text-[68px] text-[34px] font-bold text-[#FFD23E]'>
							3 июля
						</span>
						<span className='md:text-[68px] text-[34px] font-bold'>2027</span>
						<p className='md:text-[24px] text-[14px] font-light whitespace-nowrap'>
							г.Москва Вилла Фениск
						</p>
					</div>
				</aside>
			</div>
		</>
	)
}
