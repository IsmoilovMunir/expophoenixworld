export default function Stats() {
	const stats = [
		{
			id: 1,
			title: 'компаний',
			numb: '500+',
		},
		{
			id: 2,
			title: 'участников',
			numb: '500+',
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
			<div className='max-w-350 m-auto mt-15 flex justify-between'>
				{stats.map(el => (
					<div key={el.id} className='font-bold'>
						<span className='text-[54px] text-[#FFD23E]'>{el.numb}</span>
						<p className='text-[24px]'>{el.title}</p>
					</div>
				))}
			</div>
		</>
	)
}
