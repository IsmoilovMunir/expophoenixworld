import logo from '../../assets/logo.png'

export default function Footer() {
	return (
		<>
			<div className='px-5 md:px-0 md:flex-row flex-col max-w-350 m-auto flex justify-between gap-8 md:gap-5 pb-8 md:pb-0'>
				<ul className='flex flex-col gap-3 md:gap-5 text-center md:text-start'>
					<li className='text-[#5D6068] text-[18px]'>МЕСТО ПРОВЕДЕНИЯ:</li>
					<li className='md:text-[28px] text-[22px] font-bold'>Вилла Фениск</li>
				</ul>
				<ul className='flex flex-col gap-3 md:gap-5 items-center md:items-start'>
					<li className='text-[#5D6068] text-[18px]'>ОРГАНИЗАТОР:</li>
					<li>
						<img src={logo} alt='' className='w-32 md:w-auto' />
					</li>
				</ul>
				<ul className='flex flex-col gap-3 md:gap-5 text-center md:text-start'>
					<li className='text-[#5D6068] text-[18px]'>Контакты</li>
					<li className='md:text-[21px] text-[16px] leading-relaxed'>
						info@villa-phoenix.ru <br />
						+8 (495) 129-57-77 <br />
						231312, Россия, Москва, Берегове, вулиця Богдана Хмельницького, 83
					</li>
				</ul>
			</div>
		</>
	)
}
