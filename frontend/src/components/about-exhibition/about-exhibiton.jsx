import { useState } from 'react'
import img1 from '../../assets/img-1.png'
import { useLanguage } from '../../context/language-context'
import './about-exhibition.css'

export default function AboutExhibition() {
	const [isExpandedMobile, setIsExpandedMobile] = useState(false)
	const { isEnglish } = useLanguage()

	const firstParagraph = isEnglish
		? 'The international Fenix exhibition at Villa Fenix is a landmark event in the global business calendar. Industry leaders, influential entrepreneurs, strategic partners, and institutional investors gather here to shape the future of international economics. Participation is your chance to present your business among decision-makers who drive market trends and to access an audience with exceptional decision-making power.'
		: 'Международная выставка Fenix на площадке Villa Fenix — знаковое событие в календаре глобального бизнес-сообщества.  Здесь собираются лидеры отраслей, влиятельные предприниматели, стратегические партнёры и институциональные инвесторы, определяющие векторы развития международной экономики. Участие в выставке — это привилегия представить свой бизнес в кругу тех, чьи решения формируют рыночные тренды, и получить доступ к аудитории с высочайшим уровнем принятия решений.'
	const otherParagraphs = isEnglish
		? [
				'Build direct connections with top-tier partners and investors without bureaucratic barriers: what usually takes quarterly negotiation cycles can be achieved in days of focused networking.',
				'On this platform, you can initiate strategic alliances and validate business hypotheses. One visit opens access to new market segments and international distribution channels, accelerating expansion multiple times.',
				'Participation in this event is an investment in long-term competitive advantages and strategic positioning of your business on the global stage.',
			]
		: [
				'Вы выстраиваете прямые коммуникации с партнёрами и инвесторами высшего эшелона без бюрократических барьеров: то, что обычно требует квартальных циклов переговоров, реализуется за несколько дней интенсивного нетворкинга.',
				'На платформе вы инициируете стратегические альянсы и прорабатываете бизнес-гипотезы — один визит открывает доступ к новым рыночным сегментам и международным каналам дистрибуции, ускоряя экспансию в разы.',
				'Ваше участие на данном мероприятии = инвестиции в долгосрочные конкурентные преимущества и стратегическое позиционирование вашего бизнеса на глобальной арене.',
			]

	return (
		<>
			<div className='px-5 md:px-0 text-center md:text-start max-w-350 m-auto flex justify-between md:flex-row flex-col items-center md:pt-10 gap-6 md:gap-0'>
				<aside className='flex flex-col md:w-[55%]'>
					<h1 className='md:text-[52px] text-[36px] font-bold'>
						{isEnglish ? 'About the ' : 'О '}
						<span className='text-[#FFD23E]'>{isEnglish ? 'exhibition' : 'выставке '} </span>{' '}
					</h1>
					<p className='hidden md:block md:text-[20px] text-[20px] leading-relaxed font-light mt-5 md:mt-7'>
						{firstParagraph}
						<br />
						<br />
						{otherParagraphs[0]}
						<br />
						<br />
						{otherParagraphs[1]}
						<br />
						<br />
						{otherParagraphs[2]}
					</p>
					<div className='md:hidden mt-5'>
						<p className='text-[16px] md:text-[18px] leading-relaxed font-light text-left'>
							{firstParagraph}
						</p>
						{isExpandedMobile && (
							<>
								{otherParagraphs.map(paragraph => (
									<p
										key={paragraph}
										className='text-[16px] md:text-[18px] leading-relaxed font-light mt-4 text-left'
									>
										{paragraph}
									</p>
								))}
							</>
						)}
						<button
							type='button'
							onClick={() => setIsExpandedMobile(prev => !prev)}
							className='mt-4 text-[#FFD23E] font-semibold text-[16px] px-4 py-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md'
						>
							{isExpandedMobile
								? isEnglish
									? 'Hide'
									: 'Скрыть'
								: isEnglish
									? 'Read more'
									: 'Читать дальше'}
						</button>
					</div>
				</aside>
				<img src={img1} alt='' className='w-full md:w-[38%] rounded-2xl' />
			</div>
		</>
	)
}
