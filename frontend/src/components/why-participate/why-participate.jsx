import { useLanguage } from '../../context/language-context'

export default function WhyParticipate() {
	const { isEnglish } = useLanguage()
	const cards = isEnglish
		? [
				{
					id: 1,
					title: 'Direct access to investors and corporations',
					description:
						'Build strategic relationships with the top tier of the investment community: leading funds, multinational corporations, and private capital with multi-billion assets. Speak directly with decision-makers authorized to approve large-scale investments, bypassing bureaucracy and intermediaries.',
				},
				{
					id: 2,
					title: 'New markets and opportunities',
					description:
						'Expand your business geography: the exhibition helps you explore high-potential regions, evaluate promising niches, and build partner networks for international expansion. Gain analytics, insights, and direct contacts that accelerate growth and reduce market-entry risks.',
				},
				{
					id: 3,
					title: 'Premium networking in a trusted and confidential environment',
					description:
						'Immerse yourself in elite business communication: Fenix brings together industry leaders, major capital owners, and top managers of global companies. From closed lounge zones to curated meetings, the format is designed for confidentiality and trust.',
				},
				{
					id: 4,
					title: 'Enhancing company status',
					description:
						'Participation in Fenix is a mark of belonging to the top tier of international business. Your presence becomes a strong reputational signal for partners, clients, and regulators, increasing brand value and unlocking exclusive opportunities.',
				},
				{
					id: 5,
					title:
						'Participation in strategic dialogues with government delegations',
					description:
						'Join closed strategic discussions with senior representatives of state structures and international organizations. Discuss macroeconomic initiatives, regulatory changes, and support mechanisms that shape business conditions in key jurisdictions.',
				},
				{
					id: 6,
					title:
						'Opportunity to secure preliminary agreements in closed sessions',
					description:
						'Use the exclusive format of private negotiation sessions to detail cooperation terms and lock in preliminary agreements with key partners. Move from first contact to a memorandum of understanding within a single event.',
				},
			]
		: [
		{
			id: 1,
			title: 'Прямой контакт с инвесторами и корпорациями',
			description:
				'Установите стратегические связи с элитой инвестиционного сообщества: ведущими фондами, транснациональными корпорациями и частными капиталами с многомиллиардными активами. Общайтесь напрямую с лицами, уполномоченными принимать решения о масштабных вложениях, — минуя бюрократические цепочки и посредников. Это не просто встречи, а возможность презентовать свои инициативы тем, кто формирует инвестиционные тренды глобальной экономики.',
		},
		{
			id: 2,
			title: 'Новые рынки и перспективы',
			description:
				'Расширьте географию влияния: выставка даёт уникальную возможность изучить потенциал новых регионов, проанализировать рыночные ниши с высоким потенциалом роста и выстроить партнёрские сети для выхода на международные рынки. Вы получите доступ к аналитике, инсайтам и прямым контактам, которые ускорят экспансию и минимизируют риски при освоении новых территорий.',
		},
		{
			id: 3,
			title: 'Премиальный нетворкинг в атмосфере доверия и конфиденциальности',
			description:
				'Погрузитесь в среду элитарного делового общения: выставка Феникс объединяет лидеров отраслей, владельцев крупного капитала и топ-менеджеров глобальных компаний. Специально созданные условия — от закрытых лаунж-зон до кураторских встреч — обеспечивают атмосферу абсолютной конфиденциальности и взаимного доверия. Здесь рождаются долгосрочные альянсы и обсуждаются сделки, меняющие расстановку сил на рынках.',
		},
		{
			id: 4,
			title: 'Усиление статуса компании',
			description:
				'Участие в выставке Феникс — знак принадлежности к высшему эшелону международного бизнеса. Ваше присутствие на мероприятии становится мощным репутационным сигналом для партнёров, клиентов и регуляторов. Демонстрация амбиций на престижной площадке повышает капитализацию бренда и открывает доступ к эксклюзивным деловым возможностям.',
		},
		{
			id: 5,
			title:
				'Участие в стратегических диалогах с представителями государственных делегаций',
			description:
				'Станьте участником закрытых стратегических дискуссий с высокопоставленными представителями государственных структур и международных организаций. Обсуждайте макроэкономические инициативы, регуляторные изменения и механизмы господдержки — формируйте повестку, влияющую на условия ведения бизнеса в ключевых юрисдикциях. Ваше мнение может стать частью решений, определяющих будущее отраслей.',
		},
		{
			id: 6,
			title:
				'Возможность заключить предварительные соглашения в формате закрытых сессий',
			description:
				'Воспользуйтесь эксклюзивным форматом закрытых переговорных сессий для детальной проработки условий сотрудничества и фиксации предварительных договорённостей с ключевыми партнёрами. Сэкономьте месяцы рутинных переговоров: на выставке вы можете пройти путь от первого контакта до меморандума о намерениях в рамках одного мероприятия — в обстановке, ориентированной на результативность и скорость принятия решений.',
		},
	]
	return (
		<>
			<div className='max-w-350 m-auto px-5 md:px-0'>
				<h1 className='md:text-[52px] text-[36px] text-center md:text-start font-bold'>
					{isEnglish ? 'Why should you ' : 'Почему стоит '}
					<span className='text-[#FFD23E]'>
						{isEnglish ? 'participate?' : 'участвовать? '}
					</span>{' '}
				</h1>
				<div className='grid grid-cols-1 md:flex md:flex-row md:flex-wrap justify-between'>
					{cards.map(el => (
						<article
							key={el.id}
							className='border md:w-[32%] md:h-55 p-4 mt-5 flex flex-col gap-3 rounded-2xl bg-white/3 backdrop-blur-md border-white/10 overflow-hidden'
						>
							<h2 className='md:text-[22px] text-[20px] font-extrabold leading-tight'>
								{el.title}
							</h2>
							<p className='md:text-[16px] text-[14px] leading-snug text-left flex-1 overflow-visible md:overflow-y-auto md:[scrollbar-width:thin] md:[scrollbar-color:#D9B437_rgba(255,255,255,0.15)] md:[&::-webkit-scrollbar]:w-1.5 md:[&::-webkit-scrollbar-track]:rounded-full md:[&::-webkit-scrollbar-track]:bg-white/10 md:[&::-webkit-scrollbar-thumb]:rounded-full md:[&::-webkit-scrollbar-thumb]:bg-[#D9B437] md:[&::-webkit-scrollbar-thumb]:hover:bg-[#FFD23E]'>
								{el.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</>
	)
}
