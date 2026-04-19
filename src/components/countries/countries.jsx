import afganistan from '../../assets/afganistan.png'
import chine from '../../assets/chine.png'
import india from '../../assets/india.png'
import iran from '../../assets/iran.png'
import oae from '../../assets/oae.png'
import pakistan from '../../assets/pakistan.png'
import russia from '../../assets/russia.png'

export default function Countries() {
	const countries = [
		{
			id: 1,
			title: 'Россия',
			flag: russia,
		},
		{
			id: 2,
			title: 'Китай',
			flag: chine,
		},
		{
			id: 1,
			title: 'Иран',
			flag: iran,
		},
		{
			id: 1,
			title: 'Пакистан',
			flag: pakistan,
		},
		{
			id: 1,
			title: 'ОАЭ',
			flag: oae,
		},
		{
			id: 1,
			title: 'Индия',
			flag: india,
		},
		{
			id: 1,
			title: 'Афганистан',
			flag: afganistan,
		},
	]

	return (
		<>
			<div className='px-5 md:px-0 text-center max-w-350 m-auto flex flex-col gap-6'>
				<div className='flex md:flex-row flex-col items-center justify-between'>
					<h1 className='md:text-[52px] text-[34px] font-extrabold'>
						<span className='text-[#FFD23E]'>Страны</span>-участники
					</h1>
					<p className='md:text-[24px] text-[21px] font-bold'>
						Делегации и представители бизнеса из следующих <br className='hidden md:block' /> стран уже
						подтвердили участие в выставке
					</p>
				</div>
				<div className='flex gap-3 md:gap-0 items-center md:flex-row flex-wrap justify-between'>
					{countries.map(el => (
						<article key={el.id} className='flex flex-col items-center'>
							<img src={el.flag} alt='' className='md:w-45' />
							<h1 className='md:text-[28px] text-[24px] font-bold'>{el.title}</h1>
						</article>
					))}
				</div>
			</div>
		</>
	)
}
