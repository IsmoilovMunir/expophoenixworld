import { useState } from 'react'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'
import { useLanguage } from '../../context/language-context'

export default function WhatItDo() {
	const { isEnglish } = useLanguage()
	const [expandedId, setExpandedId] = useState(null)
	const articles = [
		{
			id: 1,
			icon: icon1,
			title:
				isEnglish
					? 'International representation'
					: 'Международное представительство',
			fullText: isEnglish
				? 'We bring together delegations and business communities from BRICS+ countries on one platform, helping you establish international partnerships and track global market trends.'
				: 'Соберём на одной площадке делегации и бизнес-сообщества из стран BRICS+ — это шанс наладить контакты с зарубежными партнёрами и изучить глобальные тренды.',
			preview: isEnglish
				? 'Delegations and business communities from BRICS+ on one platform.'
				: 'Делегации и бизнес-сообщества стран BRICS+ на одной площадке.',
		},
		{
			id: 4,
			icon: icon4,
			title:
				isEnglish
					? 'Wide range of participants.'
					: 'Широкий круг участников.',
			fullText: isEnglish
				? 'Participants include technology companies, construction corporations, industrial enterprises, trading organizations, and representatives of investment institutions.'
				: 'В выставке примут участие: технологические компании; строительные корпорации; промышленные предприятия; торговые организации; инвесторы и представители инвестиционных структур.',
			preview: isEnglish
				? 'Technology, construction, industry, trade, and investment participants.'
				: 'Технологические, строительные, промышленные и торговые участники.',
		},
		{
			id: 2,
			icon: icon2,
			title: isEnglish
				? 'Access to promising BRICS+ markets.'
				: 'Доступ к перспективным рынкам BRICS+.',
			fullText: isEnglish
				? 'Discover opportunities in the largest developing economies: expand your footprint, attract new clients, and secure positions in fast-growing markets.'
				: 'Откройте для себя возможности крупнейших развивающихся экономик: расширьте географию присутствия, найдите новых клиентов и закрепитесь на динамично растущих рынках.',
			preview: isEnglish
				? 'Expand your geography in fast-growing BRICS+ markets.'
				: 'Расширяйте географию на динамично растущих рынках BRICS+.',
		},
		{
			id: 5,
			icon: icon5,
			title: isEnglish
				? 'Status and trust'
				: 'Статусность и доверие',
			fullText: isEnglish
				? 'You can build direct business relations with key players: investors, corporations, government institutions, and promising startups.'
				: 'Возможность выстраивать деловые отношения напрямую с ключевыми игроками — инвесторами, корпорациями, государственными структурами и перспективными стартапами.',
			preview: isEnglish
				? 'Participation strengthens trust and your professional status.'
				: 'Участие усиливает доверие и подчёркивает ваш статус.',
		},
		{
			id: 3,
			icon: icon3,
			title:
				isEnglish
					? 'Focus on results.'
					: 'Фокус на результативность.',
			fullText: isEnglish
				? 'The event format is designed to maximize outcomes: from first introductions to signed agreements, every program element is focused on tangible business results.'
				: 'Формат мероприятия продуман так, чтобы максимизировать ваши шансы на успех: от первых знакомств до подписания соглашений — каждый элемент программы нацелен на конкретные бизнес-результаты.',
			preview: isEnglish
				? 'From first contact to agreements, focused on concrete outcomes.'
				: 'От первого контакта до соглашений с фокусом на результат.',
		},
		{
			id: 6,
			icon: icon6,
			title: isEnglish
				? 'Direct contacts without intermediaries.'
				: 'Прямые контакты без посредников',
			fullText: isEnglish
				? 'Participation highlights your professional level and strategic vision. Become part of a prestigious event shaping the trajectory of BRICS+ economies.'
				: 'Участие в выставке подчёркивает ваш высокий профессиональный уровень и стратегическое видение. Станьте частью престижного события, которое задаёт вектор развития экономик BRICS+.',
			preview: isEnglish
				? 'Direct access to key players in business and investments.'
				: 'Прямой доступ к ключевым игрокам рынка и инвестиций.',
		},
	]

	return (
		<>
			<div className='px-5 md:px-0 max-w-350 m-auto flex flex-col text-center md:text-start gap-5'>
				<span className='mx-auto md:mx-0 w-fit text-[11px] md:text-[12px] font-bold uppercase tracking-wide text-black bg-[#FFD23E] rounded-full px-3 py-1'>
					{isEnglish ? '6 strong reasons to join' : '6 сильных причин участвовать'}
				</span>
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
							onClick={() => setExpandedId(prev => (prev === el.id ? null : el.id))}
							className='border md:w-[49%] p-3 md:p-4 flex flex-col gap-3 mt-3 md:mt-4 rounded-2xl bg-white/3 backdrop-blur-md border-white/10 text-start cursor-pointer transition-all duration-200 hover:border-[#FFD23E]/45 hover:bg-white/8'
						>
							<div className='flex items-center gap-3'>
								<img src={el.icon} alt='' className='w-10 md:w-auto shrink-0' />
								<p className='md:text-[22px] text-[15px] font-bold leading-snug'>
									{el.title}
								</p>
							</div>
							<p className='text-[13px] md:text-[14px] text-white/90 font-medium leading-snug'>
								{el.preview}
							</p>
							{expandedId === el.id && (
								<p className='md:text-[16px] text-[14px] leading-relaxed font-light text-left'>
									{el.fullText}
								</p>
							)}
							<div className='mt-1 flex flex-wrap gap-2'>
								<button
									type='button'
									onClick={event => {
										event.stopPropagation()
										setExpandedId(prev => (prev === el.id ? null : el.id))
									}}
									className='mt-4 text-[#FFD23E] font-semibold text-[16px] px-4 py-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md'
								>
									{expandedId === el.id
										? isEnglish
											? 'Hide details'
											: 'Свернуть'
										: isEnglish
											? 'Read more'
											: 'Читать дальше'}
								</button>
							</div>
						</article>
					))}
				</div>
			</div>
		</>
	)
}
