import img1 from '../../assets/img-1.png'
import './about-exhibition.css'

export default function AboutExhibition() {
	return (
		<>
			<div className='px-5 md:px-0 text-center md:text-start max-w-350 m-auto flex justify-between md:flex-row flex-col items-center md:pt-10 gap-6 md:gap-0'>
				<aside className='flex flex-col md:w-[37%]'>
					<h1 className='md:text-[52px] text-[36px] font-bold'>
						О <span className='text-[#FFD23E]'>выставке </span>{' '}
					</h1>
					<p className='md:text-[22px] text-[14px] leading-relaxed font-light mt-5 md:mt-7'>
						Международная выставка BRICS+ на площадке Villa Fenix это больше,
						чем деловое мероприятие. Это точка притяжения сильных компаний,
						амбициозных предпринимателей, стратегических партнёров и инвесторов,
						заинтересованных в развитии международного сотрудничества.
						<br />
						<br />
						Выставка создаёт уникальную среду для презентации бизнеса,
						установления прямых контактов, обсуждения перспективных направлений
						сотрудничества и выхода на новые рынки. За один визит участники
						получают доступ к возможностям, на которые в обычных условиях могут
						уйти месяцы переговоров и поиска нужных партнёров.
					</p>
				</aside>
				<img src={img1} alt='' className='w-full md:w-auto rounded-2xl' />
			</div>
		</>
	)
}
