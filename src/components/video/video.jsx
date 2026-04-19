export default function Video() {
	return (
		<>
			<div className='max-w-350 m-auto px-5 md:px-0'>
				<video
					autoPlay
					muted
					loop
					style={{
						width: '100%',
						height: '80vh',
						objectFit: 'cover',
						borderRadius: '20px',
					}}
				>
					<source
						src='/public/banner-video.mp4'
						type='video/mp4'
						className='w-full'
					/>
				</video>
			</div>
		</>
	)
}
