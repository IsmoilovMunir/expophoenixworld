import { CheckCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import ApplicationModal from '../application-modal/application-modal'
import { useLanguage } from '../../context/language-context'

export default function Formats() {
	const { isEnglish } = useLanguage()
	const [isApplicationOpen, setIsApplicationOpen] = useState(false)
	const [activeFormatId, setActiveFormatId] = useState(1)
	const [selectedFormat, setSelectedFormat] = useState(
		isEnglish ? 'PHOENIX PREMIUM' : 'ФЕНИКС PREMIUM',
	)
	const formats = [
		{
			id: 1,
			title: isEnglish ? 'PHOENIX PREMIUM' : 'ФЕНИКС PREMIUM',
			price: 15000,
			color: 'rgba(43,58,86)',
			intro: isEnglish
				? 'Optimal package for business professionals focused on expanding contacts and entering new markets.'
				: 'Оптимальное решение для бизнес-профессионалов, нацеленных на расширение деловых контактов и изучение новых рынков.',
			includesLabel: isEnglish ? 'Package includes:' : 'В пакет включено:',
			services: [
				isEnglish ? 'Flight to the exhibition venue' : 'Перелёт до места проведения выставки',
				isEnglish ? 'Airport transfer to the park hotel' : 'Трансфер от аэропорта до парк-отеля',
				isEnglish ? 'Three meals a day during the event' : 'Трёхразовое питание на протяжении всего мероприятия',
				isEnglish ? 'Accommodation at a five-star park hotel' : 'Проживание в пятизвёздочном парк-отеле',
				isEnglish ? 'Access to a base of 400+ manufacturers and suppliers' : 'Доступ к базе более 400 производителей и поставщиков',
				isEnglish ? 'Networking with manufacturers from 7 countries' : 'Возможность установить контакты с производителями из 7 стран',
				isEnglish ? 'Meetings with government representatives' : 'Знакомство с представителями государственных структур',
				isEnglish ? 'Participation in a business seminar' : 'Участие в семинаре для бизнес-предпринимателей',
				isEnglish ? 'Attendance at BRICS country presentations' : 'Посещение выступлений представителей стран БРИКС',
				isEnglish ? 'Participation in show programs' : 'Участие в шоу-программах',
				isEnglish ? 'Performances by artists from participating countries' : 'Просмотр выступлений артистов из стран-участниц выставки',
			],
		},
		{
			id: 2,
			title: isEnglish ? 'PHOENIX LUXURY' : 'ФЕНИКС LUXURY',
			price: 20000,
			color: 'rgba(24,97,170)',
			intro: isEnglish
				? 'Extended package for those who seek both business results and full-value leisure among like-minded people.'
				: 'Расширенный пакет для тех, кто стремится не только к деловым достижениям, но и к полноценному отдыху в кругу единомышленников.',
			includesLabel: isEnglish
				? 'Everything from Premium, plus:'
				: 'Всё из тарифа «Premium», а также:',
			services: [
				isEnglish ? 'Horseback riding through scenic surroundings' : 'Прогулка на лошадях по живописным окрестностям',
				isEnglish ? 'Quad bike riding on dedicated routes' : 'Катание на квадроциклах по специально подготовленным маршрутам',
				isEnglish ? 'Contact zoo visit for leisure and relaxation' : 'Посещение контактного зоопарка для отдыха и релаксации',
				isEnglish ? 'Spa treatment package for recovery' : 'Комплекс спа-процедур для восстановления энергии',
				isEnglish ? 'Fishing in equipped area with full gear' : 'Рыбалка в оборудованной зоне с полным снаряжением',
				isEnglish ? 'Media support in industry magazines and TV' : 'Медиа-поддержка: возможность заявить о себе в профильных журналах и на ТВ',
				isEnglish ? 'Option to attend the forum with family' : 'Возможность посещения форума вместе с семьёй',
			],
		},
		{
			id: 3,
			title: isEnglish ? 'PHOENIX VIP' : 'ФЕНИКС VIP',
			price: 25000,
			color: 'rgba(2,123,81)',
			intro: isEnglish
				? 'Premium package for business leaders who require maximum support in organizational and negotiation processes.'
				: 'Премиальный пакет для лидеров бизнеса, требующих максимальной поддержки в деловых и организационных вопросах.',
			includesLabel: isEnglish
				? 'Everything from Premium and Luxury, plus:'
				: 'Всё из тарифов «Premium» и «Luxury», а также:',
			services: [
				isEnglish ? 'Legal support across all partnership stages' : 'Юридическое сопровождение на всех этапах взаимодействия с партнёрами',
				isEnglish ? 'Professional interpreter for international negotiations' : 'Услуги профессионального переводчика для международных переговоров',
				isEnglish ? 'Private negotiation office/room for closed meetings' : 'Предоставление переговорного офиса/комнаты для закрытых встреч',
				isEnglish ? 'Extended media support in top business media and TV' : 'Расширенная медиа-поддержка: публикации в ведущих деловых изданиях и сюжеты на ТВ',
				isEnglish ? 'Option to attend the forum with family' : 'Возможность посещения форума с семьёй',
				isEnglish ? 'Support in building ties with government institutions' : 'Содействие в налаживании контактов с государственными структурами и получение их поддержки для реализации проектов',
			],
		},
	]
	const resolvedSelectedFormat = formats.some(
		format => format.title === selectedFormat,
	)
		? selectedFormat
		: formats[0].title

	const openApplication = useCallback(formatTitle => {
		setSelectedFormat(formatTitle)
		setIsApplicationOpen(true)
	}, [])

	const closeApplication = () => setIsApplicationOpen(false)

	useEffect(() => {
		const onOpenFromHero = () => {
			const defaultTitle = isEnglish ? 'PHOENIX PREMIUM' : 'ФЕНИКС PREMIUM'
			openApplication(defaultTitle)
		}
		window.addEventListener('phoenix-open-application', onOpenFromHero)
		return () => window.removeEventListener('phoenix-open-application', onOpenFromHero)
	}, [isEnglish, openApplication])
	const activeDesktopFormat =
		formats.find(format => format.id === activeFormatId) ?? formats[0]

	const renderFormatCard = (el, compact = false) => (
		<article
			key={el.id}
			className={`w-full px-4 md:px-5 py-6 md:py-7 rounded-2xl flex flex-col gap-4 border transition-all duration-300 h-full ${
				el.id === 2
					? 'border-[#FFD23E]/70 shadow-[0_18px_50px_rgba(255,210,62,0.2)]'
					: 'border-white/12'
			}`}
			style={{
				background: `linear-gradient(360deg, ${el.color}, rgba(31,35,38))`,
				backdropFilter: 'blur(12px)',
			}}
		>
			{el.id === 2 && (
				<span className='w-fit text-[11px] md:text-[12px] font-bold uppercase tracking-wide text-black bg-[#FFD23E] rounded-full px-3 py-1'>
					{isEnglish ? 'Most popular' : 'Рекомендуем'}
				</span>
			)}
			<h1 className='md:text-[32px] text-[28px] font-extrabold'>{el.title}</h1>
			<p className='md:text-[18px] text-[15px] font-medium leading-snug text-white/95'>
				{el.intro}
			</p>
			<p className='md:text-[17px] text-[14px] font-semibold text-[#FFD23E]'>
				{el.includesLabel}
			</p>
			{el.services.map(elem => (
				<p
					key={elem}
					className={`${compact ? 'md:text-[16px]' : 'md:text-[18px]'} text-[15px] font-normal leading-snug`}
				>
					<CheckCircleOutlined /> {elem}
				</p>
			))}
			<p className='md:text-[34px] text-[30px] text-[#FFD23E] font-extrabold'>
				{el.price} $
			</p>
			<Button
				onClick={() => openApplication(el.title)}
				type=''
				className='mt-auto'
				style={{
					backgroundColor: el.id === 2 ? '#FFD23E' : 'transparent',
					color: el.id === 2 ? 'black' : 'white',
					padding: '25px 30px',
					fontSize: '17px',
					fontWeight: 700,
					borderColor: el.id === 2 ? '#FFD23E' : 'rgba(255,255,255,0.4)',
				}}
			>
				{isEnglish ? 'Apply' : 'Подать заявку'}
			</Button>
		</article>
	)

	return (
		<>
			<div className='px-5 md:px-0 max-w-350 m-auto flex gap-5 flex-col'>
				<h1 className='md:text-[52px] text-[36px] text-center md:text-start font-extrabold'>
					{isEnglish ? 'Participation ' : 'Форматы '}
					<span className='text-[#FFD23E]'>{isEnglish ? 'formats' : 'участия'}</span>
				</h1>
				<div className='text-center md:text-start flex flex-col gap-2 md:gap-3'>
					<p className='md:text-[20px] text-[16px] font-medium leading-snug text-white/95'>
						{isEnglish
							? 'Choose the package that matches your business goals and get the most out of participating in the "Phoenix + BRICS" exhibition!'
							: 'Выбирайте тариф, который соответствует вашим бизнес-целям, и получите максимум от участия в выставке «Феникс + БРИКС»!'}
					</p>
				</div>
				<div className='hidden md:flex flex-col gap-4'>
					<div className='flex gap-2'>
						{formats.map(format => (
							<Button
								key={format.id}
								onClick={() => setActiveFormatId(format.id)}
								style={{
									backgroundColor:
										activeFormatId === format.id ? '#FFD23E' : 'transparent',
									color: activeFormatId === format.id ? 'black' : 'white',
									borderColor:
										activeFormatId === format.id
											? '#FFD23E'
											: 'rgba(255,255,255,0.35)',
									fontWeight: 700,
								}}
							>
								{format.title}
							</Button>
						))}
					</div>
					{renderFormatCard(activeDesktopFormat, true)}
				</div>
				<div className='md:hidden flex flex-col gap-6'>
					{formats.map(format => renderFormatCard(format))}
				</div>
				<div className='mt-1 md:mt-2 rounded-2xl border border-[#FFD23E]/35 bg-[#FFD23E]/10 px-4 md:px-6 py-3 md:py-4'>
					<p className='text-center md:text-start md:text-[18px] text-[15px] leading-snug text-[#FFE28A] font-semibold'>
						{isEnglish
							? 'The number of places in each package is limited - book in advance to secure your place among key players in the international market.'
							: 'Количество мест по тарифам ограничено — забронируйте участие заранее, чтобы гарантировать себе место среди ключевых игроков международного рынка.'}
					</p>
				</div>
			</div>
			<ApplicationModal
				open={isApplicationOpen}
				onClose={closeApplication}
				initialPlan={resolvedSelectedFormat}
				planOptions={formats.map(format => ({
					value: format.title,
					label: format.title,
				}))}
			/>
		</>
	)
}
