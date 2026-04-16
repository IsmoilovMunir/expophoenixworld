import AboutExhibition from '../../components/about-exhibition/about-exhibiton'
import Stats from '../../components/about-exhibition/stats'
import HeroSection from '../../components/hero-section/hero-section'
import './home.css'
export default function HomePage() {
	return (
		<>
			<section className='hero-section'>
				<div className='hero-div'>
					<HeroSection />
				</div>
			</section>
			<section id='about'>
				<AboutExhibition />
				<Stats />
			</section>
		</>
	)
}
