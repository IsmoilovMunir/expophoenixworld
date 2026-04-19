import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'

export default function WhatItDo() {
	const articles = [
		{
			id: 1,
			icon: icon1,
			description:
				'Международное представительство: Участники и посетители из разных стран.',
		},
		{
			id: 4,
			icon: icon4,
			description:
				'Технологические, строительные, промышленные и торговые компании;',
		},
		{
			id: 2,
			icon: icon2,
			description: 'Доступ к рынкам BRICS+',
		},
		{
			id: 5,
			icon: icon5,
			description: 'компании, которые хотят расширить рынок присутствия',
		},
		{
			id: 3,
			icon: icon3,
			description:
				'инвесторы и представители инвестиционных структуринвесторы и представители инвестиционных структур',
		},
		{
			id: 6,
			icon: icon6,
			description: 'Прямые контакты без посредников',
		},
	]

	return (
		<>
			<div className='px-5 md:px-0 max-w-350 m-auto flex flex-col text-center md:text-start gap-5'>
				<h1 className='md:text-[52px] text-[45px] font-extrabold'>
					Что делает выставку <span className='text-[#FFD23E]'>Fenix+</span>{' '}
					<br />
					уникальной?
				</h1>
				<p className='text-[24px] font-bold'>
					Выставка ориентирована на тех, кто мыслит масштабно, ищет новые <br />
					направления роста и готов выходить на международный уровень.
				</p>

				<div className='mt-5 flex md:flex-row md:flex-wrap flex-col justify-between '>
					{articles.map(el => (
						<article
							key={el.id}
							className='border md:w-[49%] p-3 flex items-center gap-3 mt-4 md:h-35 rounded-2xl bg-white/3 backdrop-blur-md border-white/10 text-start'
						>
							<img src={el.icon} alt='' />
							<p className='md:text-[22px] text-[17px] font-bold'>{el.description}</p>
						</article>
					))}
				</div>
			</div>
		</>
	)
}
