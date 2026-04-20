import place1 from '../../assets/place1.png'
import place2 from '../../assets/place2.png'
import place3 from '../../assets/place3.png'
import place4 from '../../assets/place4.png'
import place5 from '../../assets/place5.png'

function ZoomImage({ src, extraWrapperClass = '' }) {
	const handleMouseMove = event => {
		const rect = event.currentTarget.getBoundingClientRect()
		const x = ((event.clientX - rect.left) / rect.width) * 100
		const y = ((event.clientY - rect.top) / rect.height) * 100

		event.currentTarget.style.transformOrigin = `${x}% ${y}%`
	}

	const handleMouseLeave = event => {
		event.currentTarget.style.transformOrigin = '50% 50%'
	}

	return (
		<div className={`overflow-hidden rounded-2xl ${extraWrapperClass}`}>
			<img
				src={src}
				alt=''
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				className='w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-out hover:scale-125'
			/>
		</div>
	)
}

export default function Place() {
	return (
		<>
			<div className='px-5 md:px-0 text-center md:text-start max-w-350 m-auto flex flex-col gap-5'>
				<h1 className='md:text-[52px] text-[36px] font-extrabold leading-tight'>
					Место проведения <span className=' text-[#FFD23E]'>выставки</span>
				</h1>
				<p className='md:text-[27px] text-[16px] leading-relaxed font-light'>
					Villa Fenix — это пространство, созданное для мероприятий
					международного масштаба Элегантная атмосфера, высокий уровень
					организации и статус площадки делают её идеальным местом для деловых
					встреч, переговоров, презентаций и установления долгосрочных
					партнёрств.
				</p>

				<div className='grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-3 auto-rows-[145px] md:auto-rows-[220px]'>
					<ZoomImage src={place1} extraWrapperClass='col-span-2 md:col-span-1 md:row-span-2' />
					<ZoomImage src={place2} />
					<ZoomImage src={place3} />
					<ZoomImage src={place4} />
					<ZoomImage src={place5} />
				</div>
			</div>
		</>
	)
}
