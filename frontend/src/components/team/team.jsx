import { useLanguage } from '../../context/language-context'

const TEAM_PHOTOS = {
	nasrin:
		'https://s3.twcstorage.ru/b3f4d15d-d82b-4143-96cd-c52d1fa07c5e/IMG_2430.JPG',
	mikhail:
		'https://s3.twcstorage.ru/b3f4d15d-d82b-4143-96cd-c52d1fa07c5e/Frame%203.png',
	zoya: 'https://s3.twcstorage.ru/b3f4d15d-d82b-4143-96cd-c52d1fa07c5e/Frame%204.png',
	sergey:
		'https://s3.twcstorage.ru/b3f4d15d-d82b-4143-96cd-c52d1fa07c5e/Frame%205.png',
}

function MemberPhoto({ src, name }) {
	return (
		<div className='flex h-52 md:h-60 w-full items-center justify-center overflow-hidden rounded-xl border border-white/8 bg-[#0B0F1A]/50 p-2 md:p-3'>
			<img
				src={src}
				alt={name}
				loading='lazy'
				decoding='async'
				className='max-h-full max-w-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]'
			/>
		</div>
	)
}

function MemberCard({ member, isEnglish }) {
	return (
		<article className='group flex h-full flex-col gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/3 p-4 md:flex-row md:items-stretch md:gap-4 md:p-5 backdrop-blur-md transition-all duration-300 hover:border-[#FFD23E]/35 hover:bg-white/6 hover:shadow-[0_12px_30px_rgba(255,210,62,0.12)]'>
			<div className='md:w-[46%] md:shrink-0'>
				<MemberPhoto src={member.photo} name={member.name} />
			</div>
			<div className='flex flex-1 flex-col gap-2 md:justify-center'>
				<div className='flex flex-col items-center gap-1.5 text-center md:items-start md:text-left'>
					{member.isFounder && (
						<span className='rounded-full border border-[#FFD23E]/40 bg-[#FFD23E]/10 px-2.5 py-0.5 text-[10px] md:text-[11px] font-semibold uppercase tracking-wide text-[#FFE28A]'>
							{isEnglish ? 'Founder' : 'Основатель'}
						</span>
					)}
					<h3 className='text-[18px] md:text-[20px] font-bold leading-tight'>
						{member.name}
					</h3>
					<p className='text-[13px] md:text-[14px] font-semibold leading-snug text-[#FFD23E]'>
						{member.role}
					</p>
				</div>
				<p className='text-center text-[13px] md:text-[15px] leading-relaxed text-white/85 font-light md:text-left'>
					{member.bio}
				</p>
			</div>
		</article>
	)
}

export default function Team() {
	const { isEnglish } = useLanguage()

	const members = isEnglish
		? [
				{
					id: 'nasrin',
					photo: TEAM_PHOTOS.nasrin,
					name: 'Nasrin Karimovna',
					role: 'Owner, Coffee Phoenix · Phoenix Franchise',
					bio: 'For many years she has immersed herself in the coffee industry and the history of Villa Phoenix. She united expert teams and carefully selected beans to create Coffee Phoenix — a project where love for coffee, hospitality, and the Phoenix story come together.',
					isFounder: true,
				},
				{
					id: 'mikhail',
					photo: TEAM_PHOTOS.mikhail,
					name: 'Mikhail',
					role: 'Chief Financial Officer, Phoenix Team',
					bio: 'An entrepreneur with over 15 years of experience building and developing businesses from the ground up. Today he oversees the financial strategy of Coffee Phoenix and supports the sustainable growth of the Phoenix ecosystem.',
				},
				{
					id: 'sergey',
					photo: TEAM_PHOTOS.sergey,
					name: 'Sergey Petrovich',
					role: 'Director of Development · Analyst',
					bio: 'More than 18 years in business development and analytics. He shapes expansion strategy, evaluates market opportunities, and guides key decisions with a data-driven approach.',
				},
				{
					id: 'zoya',
					photo: TEAM_PHOTOS.zoya,
					name: 'Zoya Nekrasova',
					role: 'Consulting Agency Founder',
					bio: 'Founder of a consulting agency and former leader of Cafe Store, a marketplace for coffee shops. She launches new coffee concepts from scratch and leads rebranding for established venues.',
				},
			]
		: [
				{
					id: 'nasrin',
					photo: TEAM_PHOTOS.nasrin,
					name: 'Насрин Каримовна',
					role: 'Владелец Coffee Phoenix · франшиза «Феникс»',
					bio: 'Многие годы изучала кофейный бизнес и историю Виллы «Феникс». Объединила профессиональные команды и отборное зерно, создав Coffee Phoenix — проект, в котором соединяются любовь к кофе, гостеприимство и история «Феникса».',
					isFounder: true,
				},
				{
					id: 'mikhail',
					photo: TEAM_PHOTOS.mikhail,
					name: 'Михайл',
					role: 'Финансовый директор, команда «Феникс»',
					bio: 'Предприниматель с более чем 15-летним опытом создания и развития бизнес-проектов с нуля. Сегодня курирует финансовую стратегию Coffee Phoenix и обеспечивает устойчивый рост экосистемы «Феникс».',
				},
				{
					id: 'sergey',
					photo: TEAM_PHOTOS.sergey,
					name: 'Сергей Петрович',
					role: 'Директор по развитию · аналитик',
					bio: 'Более 18 лет в сфере делового развития и аналитики. Отвечает за стратегию расширения проекта, оценку рынков и принятие решений на основе данных.',
				},
				{
					id: 'zoya',
					photo: TEAM_PHOTOS.zoya,
					name: 'Зоя Некрасова',
					role: 'Основатель консалтингового агентства',
					bio: 'Создатель консалтингового агентства, бывший руководитель маркетплейса для кофеен Cafe Store. Запускает кофейни с нуля и сопровождает ребрендинг действующих проектов.',
				},
			]

	return (
		<section className='w-full relative pt-15'>
			<div className='px-5 md:px-0 max-w-350 m-auto flex flex-col gap-5 md:gap-6 relative z-10'>
				<div className='text-center md:text-start'>
					<h2 className='md:text-[52px] text-[36px] font-extrabold'>
						<span className='text-[#FFD23E]'>
							{isEnglish ? 'Project' : 'Команда'}
						</span>{' '}
						{isEnglish ? 'TEAM' : 'ПРОЕКТА'}
					</h2>
					<p className='mt-3 md:mt-4 max-w-3xl text-[16px] md:text-[20px] font-light leading-relaxed text-white/75'>
						{isEnglish
							? 'Professionals who bring together experience, passion for coffee, and a shared vision for the Phoenix ecosystem.'
							: 'Профессионалы, которые объединили опыт, любовь к кофе и общее видение развития экосистемы «Феникс».'}
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4'>
					{members.map(member => (
						<MemberCard
							key={member.id}
							member={member}
							isEnglish={isEnglish}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
