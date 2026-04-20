import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'
import { useLanguage } from '../../context/language-context'

export default function WhatItDo() {
	const { isEnglish } = useLanguage()
	const articles = [
		{
			id: 1,
			icon: icon1,
			description:
				isEnglish
					? 'International representation: participants and visitors from different countries.'
					: 'Международное представительство: Участники и посетители из разных стран.',
		},
		{
			id: 4,
			icon: icon4,
			description:
				isEnglish
					? 'Technology, construction, industrial, and trading companies.'
					: 'Технологические, строительные, промышленные и торговые компании;',
		},
		{
			id: 2,
			icon: icon2,
			description: isEnglish ? 'Access to BRICS+ markets' : 'Доступ к рынкам BRICS+',
		},
		{
			id: 5,
			icon: icon5,
			description: isEnglish
				? 'Companies that want to expand their market presence.'
				: 'компании, которые хотят расширить рынок присутствия',
		},
		{
			id: 3,
			icon: icon3,
			description:
				isEnglish
					? 'Investors and representatives of investment institutions.'
					: 'инвесторы и представители инвестиционных структуринвесторы и представители инвестиционных структур',
		},
		{
			id: 6,
			icon: icon6,
			description: isEnglish
				? 'Direct contacts without intermediaries.'
				: 'Прямые контакты без посредников',
		},
	]

	return (
		<>
			<div className='px-5 md:px-0 max-w-350 m-auto flex flex-col text-center md:text-start gap-5'>
				<h1 className='md:text-[52px] text-[36px] font-extrabold leading-tight'>
					{isEnglish ? 'What makes the ' : 'Что делает выставку '}
					<span className='text-[#FFD23E]'>Phoenix</span>{' '}
					<br className='hidden md:block' />
					{isEnglish ? 'unique?' : 'уникальной?'}
				</h1>
				<p className='md:text-[24px] text-[16px] leading-snug font-light'>
					{isEnglish
						? 'The exhibition is for those who think big, seek new '
						: 'Выставка ориентирована на тех, кто мыслит масштабно, ищет новые '}
					<br className='hidden md:block' />
					{isEnglish
						? 'growth directions, and are ready for international expansion.'
						: 'направления роста и готов выходить на международный уровень.'}
				</p>

				<div className='mt-5 flex md:flex-row md:flex-wrap flex-col justify-between'>
					{articles.map(el => (
						<article
							key={el.id}
							className='border md:w-[49%] p-3 md:p-4 flex items-center gap-3 mt-3 md:mt-4 md:h-35 rounded-2xl bg-white/3 backdrop-blur-md border-white/10 text-start'
						>
							<img src={el.icon} alt='' className='w-10 md:w-auto shrink-0' />
							<p className='md:text-[22px] text-[15px] font-bold leading-snug'>{el.description}</p>
						</article>
					))}
				</div>
			</div>
		</>
	)
}
