import brics from '../../assets/brics.png'
import kpk from '../../assets/kpk.png'
import ldpr from '../../assets/ldpr.png'

export default function Partners() {
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
			<div className='px-5 md:px-0 text-center md:text-start max-w-350 m-auto flex flex-col gap-5'>
				<h1 className='text-[52px] font-extrabold'>
					<span className='text-[#FFD23E]'>Партнеры</span> ВЫСТАВКИ
				</h1>
				<div className='flex gap-3 md:gap-0 justify-between'>
					{partners.map(el => (
						<article
							key={el.id}
							className='border rounded-2xl bg-white/3 backdrop-blur-md border-white/10 md:w-[32%] md:h-43 p-2 md:p-0 flex justify-center items-center'
						>
							<img src={el.image} alt='' />
						</article>
					))}
				</div>
			</div>
		</>
	)
}
