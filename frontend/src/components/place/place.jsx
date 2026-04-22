import { Button, Modal } from 'antd'
import { useRef, useState } from 'react'
import place3 from '../../assets/place3.png'
import place5 from '../../assets/place5.png'
import { useLanguage } from '../../context/language-context'

const placePrimaryImage =
	'https://s3.twcstorage.ru/b3f4d15d-d82b-4143-96cd-c52d1fa07c5e/generated_image_c660d0fa098811f18645de9f2b50d028_5.jpeg'
const placeSecondaryImage =
	'https://s3.twcstorage.ru/b3f4d15d-d82b-4143-96cd-c52d1fa07c5e/generated_image_c660d0fa098811f18645de9f2b50d028_3.jpeg'
const placeQuaternaryImage =
	'https://s3.twcstorage.ru/b3f4d15d-d82b-4143-96cd-c52d1fa07c5e/generated_image_69f2d899098611f18d45565314a16c06_5.jpeg'

function ZoomImage({ src, extraWrapperClass = '', onOpen }) {
	const [isZoomedMobile, setIsZoomedMobile] = useState(false)

	const handleMouseMove = event => {
		const rect = event.currentTarget.getBoundingClientRect()
		const x = ((event.clientX - rect.left) / rect.width) * 100
		const y = ((event.clientY - rect.top) / rect.height) * 100

		event.currentTarget.style.transformOrigin = `${x}% ${y}%`
	}

	const handleMouseLeave = event => {
		event.currentTarget.style.transformOrigin = '50% 50%'
	}

	const toggleMobileZoom = () => {
		if (onOpen) {
			onOpen()
			return
		}
		if (window.innerWidth >= 768) {
			return
		}
		setIsZoomedMobile(prev => !prev)
	}

	return (
		<div className={`overflow-hidden rounded-2xl ${extraWrapperClass}`}>
			<img
				src={src}
				alt=''
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				onClick={toggleMobileZoom}
				className={`w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-out hover:scale-125 ${
					isZoomedMobile ? 'scale-125' : ''
				} ${onOpen ? 'cursor-pointer' : ''}`}
			/>
		</div>
	)
}

export default function Place() {
	const { isEnglish } = useLanguage()
	const scrollToFormats = () => {
		document.getElementById('formats')?.scrollIntoView({ behavior: 'smooth' })
	}
	const [isGalleryOpen, setIsGalleryOpen] = useState(false)
	const [galleryMode, setGalleryMode] = useState('feature')
	const [activeFeatureIndex, setActiveFeatureIndex] = useState(0)
	const [activePhotoIndex, setActivePhotoIndex] = useState(0)
	const touchStartXRef = useRef(0)
	const mouseStartXRef = useRef(0)
	const isMouseDraggingRef = useRef(false)
	const wheelLockRef = useRef(false)

	const featureCards = isEnglish
		? [
				{
					title: 'High comfort standards',
					description:
						'Thoughtful design and attention to detail create the right environment for productive work and quality rest.',
					image: placeSecondaryImage,
				},
				{
					title: 'Curated participation',
					description:
						'Clear participant selection criteria help build a strong professional community of leaders shaping BRICS+ economies.',
					image: place3,
				},
				{
					title: 'Personalized service',
					description:
						'We adapt to each guest: from transfer organization to accommodation preferences and on-site support.',
					image: placeQuaternaryImage,
				},
				{
					title: 'World-class infrastructure',
					description:
						'Modern exhibition halls, multimedia-ready meeting rooms, and panoramic conference spaces for impactful presentations.',
					image: place5,
				},
				{
					title: 'Work-life balance',
					description:
						'After negotiations, guests can use lounge zones, spa facilities, and walking alleys to restore energy.',
					image: placePrimaryImage,
				},
				{
					title: 'Convenient logistics',
					description:
						'Dedicated entry, guarded parking, and transfer options ensure comfort and safe mobility.',
					image: placeSecondaryImage,
				},
			]
		: [
				{
					title: 'Высокий уровень комфорта',
					description:
						'Продуманный дизайн и внимание к деталям обеспечивают благоприятную среду для продуктивной работы и отдыха.',
					image: placeSecondaryImage,
				},
				{
					title: 'Избирательность участия',
					description:
						'Чёткие критерии отбора участников помогают сформировать профессиональное сообщество единомышленников — тех, кто определяет развитие экономик BRICS+.',
					image: place3,
				},
				{
					title: 'Сервис с индивидуальным подходом',
					description:
						'Мы учитываем потребности каждого гостя: от организации трансфера до нюансов размещения и сопровождения на мероприятии.',
					image: placeQuaternaryImage,
				},
				{
					title: 'Инфраструктура мирового уровня',
					description:
						'Современные выставочные залы с мультимедийным оснащением, оборудованные переговорные комнаты и конференц-залы с панорамным видом.',
					image: place5,
				},
				{
					title: 'Баланс работы и восстановления',
					description:
						'После переговоров участники могут воспользоваться зонами отдыха, спа-комплексом и прогулочными аллеями, чтобы сохранить энергию.',
					image: placePrimaryImage,
				},
				{
					title: 'Удобная логистика',
					description:
						'Отдельный въезд для гостей выставки, охраняемая парковка и возможность организации трансфера обеспечивают комфорт и безопасность передвижения.',
					image: placeSecondaryImage,
				},
			]

	const galleryPhotos = [
		placePrimaryImage,
		placeSecondaryImage,
		place3,
		placeQuaternaryImage,
		place5,
	]

	const openFeatureGallery = clickedIndex => {
		setGalleryMode('feature')
		setActiveFeatureIndex(clickedIndex)
		setIsGalleryOpen(true)
	}
	const openPhotoGallery = clickedIndex => {
		setGalleryMode('photo')
		setActivePhotoIndex(clickedIndex)
		setIsGalleryOpen(true)
	}

	const closeGallery = () => setIsGalleryOpen(false)
	const showPrev = () => {
		if (galleryMode === 'photo') {
			setActivePhotoIndex(prev => (prev === 0 ? galleryPhotos.length - 1 : prev - 1))
			return
		}
		setActiveFeatureIndex(prev =>
			prev === 0 ? featureCards.length - 1 : prev - 1,
		)
	}
	const showNext = () => {
		if (galleryMode === 'photo') {
			setActivePhotoIndex(prev =>
				prev === galleryPhotos.length - 1 ? 0 : prev + 1,
			)
			return
		}
		setActiveFeatureIndex(prev =>
			prev === featureCards.length - 1 ? 0 : prev + 1,
		)
	}
	const activeFeatureCard = featureCards[activeFeatureIndex]
	const activeImageSrc =
		galleryMode === 'photo'
			? galleryPhotos[activePhotoIndex]
			: activeFeatureCard.image
	const SWIPE_THRESHOLD = 40

	const handleTouchStart = event => {
		touchStartXRef.current = event.changedTouches[0]?.clientX ?? 0
	}

	const handleTouchEnd = event => {
		const touchEndX = event.changedTouches[0]?.clientX ?? 0
		const deltaX = touchEndX - touchStartXRef.current
		if (Math.abs(deltaX) < SWIPE_THRESHOLD) {
			return
		}
		if (deltaX < 0) {
			showNext()
		} else {
			showPrev()
		}
	}

	const handleMouseDown = event => {
		isMouseDraggingRef.current = true
		mouseStartXRef.current = event.clientX
	}

	const handleMouseUp = event => {
		if (!isMouseDraggingRef.current) {
			return
		}
		isMouseDraggingRef.current = false
		const deltaX = event.clientX - mouseStartXRef.current
		if (Math.abs(deltaX) < SWIPE_THRESHOLD) {
			return
		}
		if (deltaX < 0) {
			showNext()
		} else {
			showPrev()
		}
	}

	const handleMouseLeave = () => {
		isMouseDraggingRef.current = false
	}

	const handleWheel = event => {
		event.preventDefault()
		if (wheelLockRef.current) {
			return
		}
		const horizontal = event.deltaX
		const vertical = event.deltaY
		const dominantDelta =
			Math.abs(horizontal) > Math.abs(vertical) ? horizontal : vertical
		if (Math.abs(dominantDelta) < 8) {
			return
		}
		wheelLockRef.current = true
		setTimeout(() => {
			wheelLockRef.current = false
		}, 380)
		if (dominantDelta > 0) {
			showNext()
		} else {
			showPrev()
		}
	}

	return (
		<>
			<div className='px-5 md:px-0 text-center md:text-start max-w-350 m-auto flex flex-col gap-5'>
				<h1 className='md:text-[52px] text-[36px] font-extrabold leading-tight'>
					{isEnglish ? 'Exhibition venue: ' : 'Место проведения выставки: '}
					{isEnglish ? 'Park Hotel ' : 'парк-отель '}
					<span className=' text-[#FFD23E]'>
						{isEnglish ? '"Villa Phoenix"' : '«Вилла Феникс»'}
					</span>
				</h1>
				<p className='md:text-[27px] text-[16px] leading-relaxed font-light text-left md:text-start'>
					{isEnglish
						? 'Villa Phoenix Park Hotel is a prestigious venue for international-scale events. Its elegant atmosphere and impeccable level of organization create ideal conditions for business meetings, negotiations, presentations, and long-term partnerships.'
						: 'Парк-отель «Вилла Феникс» — престижная площадка для мероприятий международного масштаба. Элегантная атмосфера и безупречный уровень организации создают идеальные условия для деловых встреч, переговоров, презентаций и установления долгосрочных партнёрств.'}
				</p>
				<div className='grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-3 auto-rows-[145px] md:auto-rows-[220px]'>
					<ZoomImage
						src={placePrimaryImage}
						extraWrapperClass='col-span-2 md:col-span-1 md:row-span-2'
						onOpen={() => openPhotoGallery(0)}
					/>
					<ZoomImage src={placeSecondaryImage} onOpen={() => openPhotoGallery(1)} />
					<ZoomImage src={place3} onOpen={() => openPhotoGallery(2)} />
					<ZoomImage src={placeQuaternaryImage} onOpen={() => openPhotoGallery(3)} />
					<ZoomImage src={place5} onOpen={() => openPhotoGallery(4)} />
				</div>
				<h2 className='md:text-[52px] text-[36px] font-extrabold leading-tight uppercase'>
					{isEnglish ? (
						<>
							Why is "Villa Phoenix" perfect for the{' '}
							<span className='text-[#FFD23E]'>"Phoenix + BRICS"</span> exhibition?
						</>
					) : (
						<>
							Почему «Вилла Феникс» подходит для выставки{' '}
							<span className='text-[#FFD23E]'>«Феникс + БРИКС»</span>?
						</>
					)}
				</h2>
				<div className='grid md:grid-cols-2 grid-cols-1 gap-3 md:gap-4'>
					{featureCards.map((card, index) => (
						<article
							key={card.title}
							onClick={() => openFeatureGallery(index)}
							className='rounded-2xl border border-white/12 bg-gradient-to-r from-white/8 to-white/3 backdrop-blur-md p-3.5 md:p-5 text-left'
						>
							<div className='flex items-start justify-between gap-3'>
								<span className='shrink-0 w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#FFD23E] text-black font-extrabold flex items-center justify-center text-[12px] md:text-[15px]'>
									{index + 1}
								</span>
								<div className='flex-1'>
									<h3 className='text-[17px] md:text-[23px] font-bold text-[#FFD23E] leading-snug'>
										{card.title}
									</h3>
									<p className='mt-1.5 text-[14px] md:text-[17px] leading-relaxed font-light text-white/95'>
										{card.description}
									</p>
								</div>
								<div className='w-16 h-16 md:w-24 md:h-24 shrink-0 overflow-hidden rounded-xl border border-white/15'>
									<img src={card.image} alt='' className='w-full h-full object-cover' />
								</div>
							</div>
						</article>
					))}
				</div>
				<div className='mt-2 md:mt-4 flex justify-center md:justify-start'>
					<Button
						htmlType='button'
						onClick={scrollToFormats}
						style={{
							color: 'black',
							backgroundColor: '#FFD23E',
							fontWeight: 'bold',
							padding: '22px 28px',
							fontSize: '16px',
							fontFamily: 'Graphik LCG',
							border: 'none',
							height: 'auto',
						}}
						className='md:!text-[18px] md:!py-4 md:!px-10 w-full max-w-md md:w-auto md:max-w-none'
					>
						{isEnglish ? 'Go to plans' : 'Перейти к тарифам'}
					</Button>
				</div>
				<Modal
					open={isGalleryOpen}
					onCancel={closeGallery}
					footer={null}
					centered
					rootClassName='place-gallery-modal'
					width='100vw'
					maskStyle={{ background: 'rgba(10, 15, 26, 0.62)' }}
					style={{ top: 0, paddingBottom: 0, maxWidth: '100vw' }}
					styles={{
						content: {
							height: '100vh',
							padding: '18px',
							background: 'transparent',
							boxShadow: 'none',
						},
						header: { background: 'transparent' },
						body: { background: 'transparent', padding: 0 },
					}}
					title={null}
				>
					<div className='flex items-center justify-center gap-2 md:gap-3 h-[92vh]'>
						<div
							className='w-full max-w-[1400px] md:h-[86vh] rounded-2xl overflow-hidden border border-white/15 bg-transparent relative'
							onWheel={handleWheel}
						>
							<img
								src={activeImageSrc}
								alt=''
								className='w-full h-full object-contain'
								onTouchStart={handleTouchStart}
								onTouchEnd={handleTouchEnd}
								onMouseDown={handleMouseDown}
								onMouseUp={handleMouseUp}
								onMouseLeave={handleMouseLeave}
							/>
							{galleryMode === 'feature' && activeFeatureCard && (
								<article className='relative md:absolute left-0 right-0 md:left-4 md:right-4 mt-2 md:mt-0 md:bottom-4 rounded-2xl border border-white/12 bg-[#0A0F1A]/75 backdrop-blur-md p-3 md:p-5 text-left max-h-[52vh] md:max-h-none overflow-y-auto'>
									<div className='flex items-start justify-between gap-3'>
										<span className='shrink-0 w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#FFD23E] text-black font-extrabold flex items-center justify-center text-[12px] md:text-[15px]'>
											{activeFeatureIndex + 1}
										</span>
										<div className='flex-1'>
											<h3 className='text-[16px] md:text-[23px] font-bold text-[#FFD23E] leading-snug'>
												{activeFeatureCard.title}
											</h3>
											<p className='mt-1 md:mt-2 text-[13px] md:text-[17px] leading-relaxed font-light text-white/95'>
												{activeFeatureCard.description}
											</p>
										</div>
									</div>
								</article>
							)}
						</div>
					</div>
					<div className='mt-4 flex justify-center gap-2'>
						{(galleryMode === 'photo' ? galleryPhotos : featureCards).map((card, index) => (
							<button
								key={`${index}-${galleryMode}`}
								type='button'
								onClick={() => {
									if (galleryMode === 'photo') {
										setActivePhotoIndex(index)
										return
									}
									setActiveFeatureIndex(index)
								}}
								className={`w-2.5 h-2.5 rounded-full ${
									index === (galleryMode === 'photo' ? activePhotoIndex : activeFeatureIndex)
										? 'bg-[#FFD23E]'
										: 'bg-white/30'
								}`}
								aria-label={
									isEnglish
										? `Open image ${index + 1}`
										: `Открыть изображение ${index + 1}`
								}
							/>
						))}
					</div>
				</Modal>
			</div>
		</>
	)
}
