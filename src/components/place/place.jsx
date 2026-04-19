import place1 from '../../assets/place1.png'
import place2 from '../../assets/place2.png'
import place3 from '../../assets/place3.png'
import place4 from '../../assets/place4.png'
import place5 from '../../assets/place5.png'

export default function Place() {
	return (
		<>
			<div className='px-5 md:px-0 text-center md:text-start max-w-350 m-auto flex flex-col gap-5'>
				<h1 className='md:text-[52px] text-[39px] font-extrabold'>
					Место проведения <span className=' text-[#FFD23E]'>выставки</span>
				</h1>
				<p className='md:text-[27px] text-[25px] font-bold'>
					Villa Fenix — это пространство, созданное для мероприятий
					международного масштаба Элегантная атмосфера, высокий уровень
					организации и статус площадки делают её идеальным местом для деловых
					встреч, переговоров, презентаций и установления долгосрочных
					партнёрств.
				</p>

				<div className='grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-3 auto-rows-[220px]'>
					<div className=' col-span-2 md:col-span-1 md:row-span-2'>
						<img
							src={place1}
							alt=''
							className='w-full h-full object-cover rounded-2xl'
						/>
					</div>

					<img
						src={place2}
						alt=''
						className='w-full h-full object-cover rounded-2xl'
					/>
					<img
						src={place3}
						alt=''
						className='w-full h-full object-cover rounded-2xl'
					/>
					<img
						src={place4}
						alt=''
						className='w-full h-full object-cover rounded-2xl'
					/>
					<img
						src={place5}
						alt=''
						className='w-full h-full object-cover rounded-2xl'
					/>
				</div>
			</div>
		</>
	)
}
