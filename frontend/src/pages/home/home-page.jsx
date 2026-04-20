import { useEffect, useRef } from 'react'
import AboutExhibition from '../../components/about-exhibition/about-exhibiton'
import Stats from '../../components/about-exhibition/stats'
import HeroSection from '../../components/hero-section/hero-section'
import Video from '../../components/video/video'
import WhyParticipate from '../../components/why-participate/why-participate'
import './home.css'

import blue from '../../assets/blue.png'
import yellow from '../../assets/yellow.png'
import Countries from '../../components/countries/countries'
import Faq from '../../components/faq/faq'
import Formats from '../../components/formats/formats'
import { MapComponent } from '../../components/map/map'
import Partners from '../../components/partners/partners'
import Place from '../../components/place/place'
import WhatItDo from '../../components/what-it-do/what-it-do'

export default function HomePage() {
	const whySectionRef = useRef(null)
	const yellowParallaxRef = useRef(null)
	const blueParallaxRef = useRef(null)

	useEffect(() => {
		const section = whySectionRef.current
		const yellowEl = yellowParallaxRef.current
		const blueEl = blueParallaxRef.current

		if (!section || !yellowEl || !blueEl) {
			return
		}

		let rafId = 0
		const updateParallax = () => {
			const rect = section.getBoundingClientRect()
			const viewportHeight = window.innerHeight
			const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height)
			const clamped = Math.max(0, Math.min(1, progress))

			const yellowOffset = (clamped - 0.5) * 70
			const blueOffset = (0.5 - clamped) * 90

			yellowEl.style.transform = `translate3d(0, ${yellowOffset}px, 0)`
			blueEl.style.transform = `translate3d(0, ${blueOffset}px, 0)`
		}

		const onScroll = () => {
			cancelAnimationFrame(rafId)
			rafId = requestAnimationFrame(updateParallax)
		}

		updateParallax()
		window.addEventListener('scroll', onScroll, { passive: true })
		window.addEventListener('resize', onScroll)

		return () => {
			cancelAnimationFrame(rafId)
			window.removeEventListener('scroll', onScroll)
			window.removeEventListener('resize', onScroll)
		}
	}, [])

	return (
		<>
			<section className='hero-section '>
				<div className='hero-div pt-5 md:pt-0'>
					<HeroSection />
				</div>
			</section>

			<section id='about' className='pt-6 md:pt-0'>
				<AboutExhibition />
				<Stats />
			</section>

			<section className='pt-6 md:pt-8'>
				<Video />
			</section>

			<section ref={whySectionRef} className='w-full relative pt-6 md:pt-8' id='why'>
				<img
					ref={yellowParallaxRef}
					src={yellow}
					alt=''
					className='absolute left-0 -top-20 -z-10 hidden md:block will-change-transform'
				/>
				<img
					ref={blueParallaxRef}
					src={blue}
					alt=''
					className='absolute right-0 -top-50 -z-10 hidden md:block will-change-transform'
				/>
				<WhyParticipate />
			</section>

			<section className='pt-6 md:pt-8'>
				<Countries />
			</section>

			<section className='w-full relative pt-6 md:pt-8'>
				<img
					src={blue}
					alt=''
					className='absolute left-0 -top-20 -z-10 rotate-180 hidden md:block'
				/>
				<img
					src={yellow}
					alt=''
					className='absolute right-0 -top-50 -z-10 rotate-180 hidden md:block'
				/>
				<WhatItDo />
			</section>

			<section className='pt-6 md:pt-8' id='partners'>
				<Partners />
			</section>

			<section className='pt-6 md:pt-8'>
				<Place />
			</section>

			<section id='formats' className='pt-6 md:pt-8'>
				<Formats />
			</section>

			<section className='w-full relative pt-6 md:pt-8' id='faq'>
				<img
					src={blue}
					alt=''
					className='absolute left-0 -top-20 -z-10 rotate-180 hidden md:block'
				/>
				<img
					src={yellow}
					alt=''
					className='absolute right-0 -top-50 -z-10 rotate-180 hidden md:block'
				/>
				<Faq />
			</section>

			<section className='pt-6 md:pt-8'>
				<MapComponent />
			</section>
		</>
	)
}
