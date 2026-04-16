import { Button } from 'antd'
import { Link } from 'react-router-dom'
import './hero-section.css'

export default function HeroSection() {
	return (
		<>
			<div className='text-white flex max-w-350 m-auto justify-between items-end pt-20 '>
				<aside className='w-[60%] flex flex-col gap-5'>
					<p className='text-[#FFFFFF8A] text-[28.8px]'>
						ВСТРЕЧАЙТЕ БИЗНЕС -ГИГАНТОВ СЕМИ СТРАН
					</p>
					<h1 className='font-extrabold text-[48px]'>
						Международная выставка <br /> BRICS+
					</h1>
					<p className='text-[28.8px]'>
						Встреча лидеров бизнеса, инвесторов, производителей и
						предпринимателей из стран BRICS+ на площадке Villa Fenix.
					</p>
					<Link>
						<Button
							style={{
								color: 'black',
								backgroundColor: '#FFD23E',
								fontWeight: 'bold',
								padding: '35px 50px',
								fontSize: '22px',
								fontFamily: 'Graphik LCG',
								border: 'none',
							}}
						>
							Подать заявку на участие
						</Button>
					</Link>
				</aside>
				<aside className=''>
					<div className='border-5 border-[#FFD23E] h-85 w-92 p-7 px-12 flex flex-col gap-3 '>
						<span className='text-[68px] font-bold text-[#FFD23E]'>3 июля</span>
						<span className='text-[68px] font-bold '>2026</span>
						<p className='text-[24px] font-bold'>г.Москва Вилла Фениск</p>
					</div>
				</aside>
			</div>
		</>
	)
}
