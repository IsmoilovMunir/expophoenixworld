import brics from '../../assets/brics.png'
import kpk from '../../assets/kpk.png'
import ldpr from '../../assets/ldpr.png'
import { useLanguage } from '../../context/language-context'

export default function Partners() {
	const { isEnglish } = useLanguage()
	const partners = [
		{
			id: 1,
			image: brics,
		},
		{
			id: 2,
			image: ldpr,
		},
		{
			id: 3,
			image: kpk,
		},
	]
	return (
		<>
			<section className='w-full relative pt-15'>
				<div className='px-5 md:px-0 text-center md:text-start max-w-350 m-auto flex flex-col gap-5 relative z-10'>
					<h1 className='md:text-[52px] text-[36px] font-extrabold'>
						<span className='text-[#FFD23E]'>
							{isEnglish ? 'Exhibition' : 'Партнеры'}
						</span>{' '}
						{isEnglish ? 'PARTNERS' : 'ВЫСТАВКИ'}
					</h1>

					<div className='rounded-3xl border border-white/12 bg-white/4 backdrop-blur-md p-3 md:p-5 shadow-[0_10px_50px_rgba(17,24,39,0.35)]'>
						<div className='flex flex-row gap-3 md:gap-4 justify-between'>
							{partners.map(el => (
								<article
									key={el.id}
									className='group border rounded-2xl bg-transparent md:bg-white/8 backdrop-blur-xl border-white/20 w-[32%] h-24 md:h-43 p-2 md:p-0 flex justify-center items-center overflow-hidden transition-all duration-300 hover:border-[#FFD23E]/45 md:hover:bg-white/15 hover:shadow-[0_12px_30px_rgba(255,210,62,0.2)]'
								>
									<img
										src={el.image}
										alt=''
										className='max-h-full w-auto transition-transform duration-300 ease-out group-hover:scale-110'
									/>
								</article>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
