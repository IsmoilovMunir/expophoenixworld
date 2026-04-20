import bannerImage from '../../assets/fenxlfd.png'

export default function Video() {
	return (
		<>
			<div className='max-w-350 m-auto px-5 md:px-0'>
				<div className='group relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-1 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)]'>
					<img
						src={bannerImage}
						alt='Видео-превью выставки'
						className='h-[54vh] md:h-[80vh] w-full rounded-[20px] object-cover'
					/>
					<div className='pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/25 via-transparent to-white/5' />
				</div>
			</div>
		</>
	)
}
