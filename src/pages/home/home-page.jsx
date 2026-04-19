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
	return (
		<>
			<section className='hero-section '>
				<div className='hero-div pt-5 md:pt-0'>
					<HeroSection />
				</div>
			</section>

			<section id='about'>
				<AboutExhibition />
				<Stats />
			</section>

			<section className='pt-15'>
				<Video />
			</section>

			<section className='w-full relative pt-15' id='why'>
				<img src={yellow} alt='' className='absolute left-0 -top-20 -z-10' />
				<img src={blue} alt='' className='absolute right-0 -top-50 -z-10' />
				<WhyParticipate />
			</section>

			<section className='pt-15'>
				<Countries />
			</section>

			<section className='w-full relative pt-15'>
				<img
					src={blue}
					alt=''
					className='absolute left-0 -top-20 -z-10 rotate-180'
				/>
				<img
					src={yellow}
					alt=''
					className='absolute right-0 -top-50 -z-10 rotate-180'
				/>
				<WhatItDo />
			</section>

			<section className='pt-15' id='partners'>
				<Partners />
			</section>

			<section className='pt-15'>
				<Place />
			</section>

			<section id='formats' className='pt-15'>
				<Formats />
			</section>

			<section className='w-full relative pt-15' id='faq'>
				<img
					src={blue}
					alt=''
					className='absolute left-0 -top-20 -z-10 rotate-180'
				/>
				<img
					src={yellow}
					alt=''
					className='absolute right-0 -top-50 -z-10 rotate-180'
				/>
				<Faq />
			</section>

			<section className='pt-10'>
				<MapComponent />
			</section>
		</>
	)
}
