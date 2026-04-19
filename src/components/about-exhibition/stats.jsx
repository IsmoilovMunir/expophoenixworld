export default function Stats() {
	const stats = [
		{
			id: 1,
			title: 'компаний',
			numb: '500+',
		},
		{
			id: 2,
			title: 'супер участников',
			numb: '5000+',
		},
		{
			id: 4,
			title: 'пространства',
			numb: '10 000 кв.м',
		},
		{
			id: 5,
			title: 'на участника',
			numb: '10 кв.м',
		},
	]
	return (
		<>
			<div className='px-5 md:px-0 max-w-350 m-auto mt-15 gap-16 flex md:flex-row flex-wrap justify-between '>
				{stats.map(el => (
					<div key={el.id} className='font-bold'>
						<span className='md:text-[54px] text-[30px] text-[#FFD23E] flex'>
							{el.numb}
						</span>
						<p className='md:text-[24px] text-[20px]'>{el.title}</p>
					</div>
				))}
			</div>
		</>
	)
}
