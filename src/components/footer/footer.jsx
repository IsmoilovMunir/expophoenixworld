import logo from '../../assets/logo.png'

export default function Footer() {
	return (
		<>
			<div className='px-5 md:px-0 md:flex-row flex-col max-w-350 m-auto flex justify-between'>
				<ul className='flex flex-col gap-5'>
					<li className='text-[#5D6068] text-[18px]'>МЕСТО ПРОВЕДЕНИЯ:</li>
					<li className='text-[28px] font-bold'>Вилла Фениск</li>
				</ul>
				<ul className='flex flex-col gap-5'>
					<li className='text-[#5D6068] text-[18px]'>ОРГАНИЗАТОР:</li>
					<li>
						<img src={logo} alt='' />
					</li>
				</ul>
				<ul className='flex flex-col gap-5'>
					<li className='text-[#5D6068] text-[18px]'>Контакты</li>
					<li className='text-[21px]'>
						info@villa-phoenix.ru <br />
						+8 (495) 129-57-77 <br />
						231312, Россия, Москва, Берегове, вулиця Богдана Хмельницького, 83
					</li>
				</ul>
			</div>
		</>
	)
}
