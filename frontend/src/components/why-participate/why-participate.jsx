export default function WhyParticipate() {
	const cards = [
		{
			id: 1,
			title: 'Прямой доступ к лидерам бизнеса',
			description:
				'Вы получаете возможность общаться с предпринимателями, инвесторами, производителями и представителями международных компаний напрямую, без посредников и лишних барьеров.',
		},
		{
			id: 2,
			title: 'Новые рынки и новые перспективы',
			description:
				'Выставка открывает путь к расширению географии бизнеса, поиску зарубежных клиентов, поставщиков и партнёров.',
		},
		{
			id: 3,
			title: 'Конкретные деловые возможности',
			description:
				'Это не просто знакомство и обмен визитками. Это пространство для реальных переговоров, обсуждения сотрудничества и заключения перспективных соглашений.',
		},
		{
			id: 4,
			title: 'Усиление статуса компании',
			description:
				'Присутствие на международной выставке повышает доверие к бренду, укрепляет деловую репутацию и подчёркивает серьёзность ваших намерений.',
		},
		{
			id: 5,
			title: 'Усиление статуса компании',
			description:
				'Присутствие на международной выставке повышает доверие к бренду, укрепляет деловую репутацию и подчёркивает серьёзность ваших намерений.',
		},
		{
			id: 6,
			title: 'Максимум пользы ',
			description:
				'В одном месте собраны компании, решения, контакты и возможности, которые способны ускорить развитие бизнеса в разы.',
		},
	]
	return (
		<>
			<div className='max-w-350 m-auto px-5 md:px-0'>
				<h1 className='md:text-[52px] text-[36px] text-center md:text-start font-bold'>
					Почему стоит{' '}
					<span className='text-[#FFD23E]'>участвовать? </span>{' '}
				</h1>
				<div className='grid grid-cols-1 md:flex md:flex-row md:flex-wrap justify-between'>
					{cards.map(el => (
						<article
							key={el.id}
							className='border md:w-[32%] md:h-55 p-4 mt-5 flex flex-col gap-3 rounded-2xl bg-white/3 backdrop-blur-md border-white/10 overflow-hidden'
						>
							<h2 className='md:text-[22px] text-[20px] font-extrabold leading-tight'>
								{el.title}
							</h2>
							<p className='md:text-[16px] text-[14px] leading-snug flex-1 overflow-visible md:overflow-y-auto'>
								{el.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</>
	)
}
