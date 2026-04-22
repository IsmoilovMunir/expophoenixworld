import {
	PauseCircleOutlined,
	PlayCircleOutlined,
	SoundOutlined,
} from '@ant-design/icons'
import bannerImage from '../../assets/fenxlfd.png'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../context/language-context'

const exhibitionVideoUrl =
	'https://s3.twcstorage.ru/b3f4d15d-d82b-4143-96cd-c52d1fa07c5e/0422.mp4'

export default function Video() {
	const { isEnglish } = useLanguage()
	const videoRef = useRef(null)
	const wrapperRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [shouldLoad, setShouldLoad] = useState(false)
	const [isMuted, setIsMuted] = useState(true)

	useEffect(() => {
		const wrapperEl = wrapperRef.current
		const videoEl = videoRef.current
		if (!wrapperEl) {
			return
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
					setShouldLoad(true)
					return
				}

				if (videoEl && !videoEl.paused) {
					videoEl.pause()
					setIsPlaying(false)
				}
			},
			{ threshold: [0.15, 0.2] },
		)

		observer.observe(wrapperEl)
		return () => observer.disconnect()
	}, [])

	const togglePlayPause = () => {
		const videoEl = videoRef.current
		if (!videoEl && !shouldLoad) {
			setShouldLoad(true)
			setTimeout(() => {
				videoRef.current?.play().catch(() => {})
			}, 0)
			return
		}
		if (!videoEl) return

		if (videoEl.paused) {
			videoEl.play().catch(() => {})
			return
		}

		videoEl.pause()
	}

	const toggleMute = event => {
		event.stopPropagation()
		const videoEl = videoRef.current
		if (!videoEl) return
		videoEl.muted = !videoEl.muted
		setIsMuted(videoEl.muted)
	}

	return (
		<>
			<div className='max-w-350 m-auto px-5 md:px-0'>
				<div
					ref={wrapperRef}
					onClick={togglePlayPause}
					className='group relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-1 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] cursor-pointer'
				>
					<video
						ref={videoRef}
						src={shouldLoad ? exhibitionVideoUrl : undefined}
						className='h-[54vh] md:h-[80vh] w-full rounded-[20px] object-cover'
						poster={bannerImage}
						loop
						playsInline
						preload='none'
						muted={isMuted}
						onPlay={() => setIsPlaying(true)}
						onPause={() => setIsPlaying(false)}
						aria-label={isEnglish ? 'Exhibition video preview' : 'Видео-превью выставки'}
					/>
					<div className='pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/25 via-transparent to-white/5' />
					<button
						type='button'
						onClick={toggleMute}
						className='absolute top-4 right-4 z-10 rounded-full border border-white/40 bg-black/45 text-white p-2 md:p-3 leading-none hover:border-[#FFD23E]/80 hover:text-[#FFD23E] transition-colors'
						aria-label={isMuted ? 'Unmute video' : 'Mute video'}
					>
						<span className='relative inline-flex items-center justify-center'>
							<SoundOutlined className='text-[20px] md:text-[22px]' />
							{isMuted && (
								<span className='absolute w-[20px] md:w-[22px] h-[2px] bg-current rotate-[-45deg]' />
							)}
						</span>
					</button>
					<div className='pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
						<span className='rounded-full border border-white/40 bg-black/45 text-white p-2 md:p-3 leading-none shadow-[0_6px_24px_rgba(0,0,0,0.35)]'>
							{isPlaying ? (
								<PauseCircleOutlined className='text-[32px] md:text-[40px]' />
							) : (
								<PlayCircleOutlined className='text-[32px] md:text-[40px]' />
							)}
						</span>
					</div>
				</div>
			</div>
		</>
	)
}
