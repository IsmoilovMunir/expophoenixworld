import { useEffect, useRef, useState } from 'react'
import './countries.css'
import afganistan from '../../assets/afganistan.png'
import chine from '../../assets/chine.png'
import india from '../../assets/india.png'
import iran from '../../assets/iran.png'
import oae from '../../assets/oae.png'
import russia from '../../assets/russia.png'
import turk from '../../assets/turk.png'
import { useLanguage } from '../../context/language-context'

export default function Countries() {
	const { isEnglish } = useLanguage()
	const earthRef = useRef(null)
	const earthInstanceRef = useRef(null)
	const highlightLayersRef = useRef([])
	const geoJsonFeaturesRef = useRef([])
	const animationFrameRef = useRef(0)
	const isAutoRotateRef = useRef(true)
	const COUNTRY_FOCUS_ZOOM = 2.1
	const [isWebGlReady, setIsWebGlReady] = useState(false)
	const [isWebGlScriptReady, setIsWebGlScriptReady] = useState(false)
	const [isGeoJsonReady, setIsGeoJsonReady] = useState(false)
	const [activeCountryId, setActiveCountryId] = useState(1)

	const countries = [
		{
			id: 1,
			title: isEnglish ? 'Russia' : 'Россия',
			flag: russia,
			center: [61.524, 105.3188],
			geoName: 'Russia',
		},
		{
			id: 2,
			title: isEnglish ? 'China' : 'Китай',
			flag: chine,
			center: [35.8617, 104.1954],
			geoName: 'China',
		},
		{
			id: 3,
			title: isEnglish ? 'Iran' : 'Иран',
			flag: iran,
			center: [32.4279, 53.688],
			geoName: 'Iran',
		},
		{
			id: 4,
			title: isEnglish ? 'Turkey' : 'Турция',
			flag: turk,
			center: [38.9637, 35.2433],
			geoName: 'Turkey',
		},
		{
			id: 5,
			title: isEnglish ? 'UAE' : 'ОАЭ',
			flag: oae,
			center: [23.4241, 53.8478],
			geoName: 'United Arab Emirates',
		},
		{
			id: 6,
			title: isEnglish ? 'India' : 'Индия',
			flag: india,
			center: [20.5937, 78.9629],
			geoName: 'India',
		},
		{
			id: 7,
			title: isEnglish ? 'Afghanistan' : 'Афганистан',
			flag: afganistan,
			center: [33.9391, 67.71],
			geoName: 'Afghanistan',
		},
	]

	const clearHighlightLayers = () => {
		const earth = earthInstanceRef.current
		if (!earth || highlightLayersRef.current.length === 0) {
			return
		}
		highlightLayersRef.current.forEach(layer => {
			layer?.removeFrom?.(earth)
			earth.removeLayer?.(layer)
			earth.removeOverlay?.(layer)
		})
		highlightLayersRef.current = []
	}

	const createPolygonLayer = (WE, earth, latLngs) =>
		WE.polygon(latLngs, {
			color: '#FFD23E',
			opacity: 1,
			fillColor: '#FFD23E',
			fillOpacity: 0.35,
			weight: 2,
		}).addTo(earth)

	const simplifyRing = coordinates => {
		if (!Array.isArray(coordinates) || coordinates.length === 0) {
			return []
		}

		// Reduce heavy geometry to keep globe interactions responsive.
		const step =
			coordinates.length > 2200
				? 14
				: coordinates.length > 1200
					? 10
					: coordinates.length > 600
						? 7
						: coordinates.length > 300
							? 4
							: 2

		const reduced = coordinates.filter((_, index) => index % step === 0)
		const first = coordinates[0]
		const last = reduced[reduced.length - 1]

		if (!last || last[0] !== first[0] || last[1] !== first[1]) {
			reduced.push(first)
		}

		return reduced
	}

	const highlightCountry = country => {
		const earth = earthInstanceRef.current
		const WE = window.WE
		if (!earth || !WE || !country) {
			return
		}
		if (!geoJsonFeaturesRef.current.length) {
			return
		}

		earth.setView(country.center, COUNTRY_FOCUS_ZOOM)
		clearHighlightLayers()

		const feature = geoJsonFeaturesRef.current.find(
			item => item?.properties?.name === country.geoName,
		)
		if (!feature?.geometry) {
			return
		}

		const layers = []
		const geometry = feature.geometry

		if (geometry.type === 'Polygon') {
			const simplified = simplifyRing(geometry.coordinates[0])
			const latLngs = simplified.map(([lng, lat]) => [lat, lng])
			layers.push(createPolygonLayer(WE, earth, latLngs))
		}

		if (geometry.type === 'MultiPolygon') {
			const topPolygons = [...geometry.coordinates]
				.sort((a, b) => (b[0]?.length ?? 0) - (a[0]?.length ?? 0))
				.slice(0, 2)

			topPolygons.forEach(polygon => {
				const simplified = simplifyRing(polygon[0])
				const latLngs = simplified.map(([lng, lat]) => [lat, lng])
				layers.push(createPolygonLayer(WE, earth, latLngs))
			})
		}

		highlightLayersRef.current = layers
	}

	useEffect(() => {
		if (window.WE) {
			setIsWebGlScriptReady(true)
			return
		}

		const script = document.createElement('script')
		script.src = 'https://www.webglearth.com/v2/api.js'
		script.async = true
		script.onload = () => setIsWebGlScriptReady(true)
		script.onerror = () => setIsWebGlScriptReady(false)
		document.body.appendChild(script)
	}, [])

	useEffect(() => {
		if (!isWebGlScriptReady) {
			return
		}

		isAutoRotateRef.current = true

		const container = earthRef.current
		const WE = window.WE
		if (!container || !WE) {
			return
		}

		try {
			container.innerHTML = ''
			const earth = WE.map(container, {
				atmosphere: true,
				sky: true,
			})
			earth.setView([46.8011, 8.2266], 1.9)

			WE.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a>',
			}).addTo(earth)

			earthInstanceRef.current = earth
			setIsWebGlReady(true)

			fetch('/countries-highlight.geojson')
				.then(response => response.json())
				.then(data => {
					geoJsonFeaturesRef.current = data?.features ?? []
					setIsGeoJsonReady(true)
					highlightCountry(countries[0])
				})
				.catch(() => {
					geoJsonFeaturesRef.current = []
					setIsGeoJsonReady(false)
				})

			let before = null
			const animate = now => {
				const c = earth.getPosition()
				const elapsed = before ? now - before : 0
				before = now
				if (isAutoRotateRef.current) {
					earth.setCenter([c[0], c[1] + 0.06 * (elapsed / 30)])
				}
				animationFrameRef.current = requestAnimationFrame(animate)
			}
			animationFrameRef.current = requestAnimationFrame(animate)
		} catch {
			setIsWebGlReady(false)
		}

		return () => {
			cancelAnimationFrame(animationFrameRef.current)
			clearHighlightLayers()
		}
	}, [isWebGlScriptReady])

	return (
		<>
			<div className='px-5 md:px-0 text-center max-w-350 m-auto flex flex-col gap-6'>
				<div className='flex md:flex-row flex-col items-center justify-between gap-3 md:gap-0'>
					<h1 className='md:text-[52px] text-[36px] font-extrabold'>
						<span className='text-[#FFD23E]'>
							{isEnglish ? 'Participating' : 'Страны'}
						</span>
						{isEnglish ? ' countries' : '-участники'}
					</h1>
					<p className='md:text-[24px] text-[16px] leading-snug font-light text-center md:text-right md:mt-2'>
						{isEnglish
							? 'The "Phoenix + BRICS" exhibition will bring together delegations and business community representatives from key BRICS+ countries, including:'
							: 'Выставка «Феникс + БРИКС» соберёт делегации и представителей бизнес-сообщества из ключевых стран объединения BRICS+, включая:'}
					</p>
				</div>

				<div className='globe-stage mx-auto w-fit mt-8 md:mt-10'>
					<div className='globe-wrap'>
						<div
							className={`webgl-earth-holder ${isWebGlReady ? 'webgl-earth--visible' : ''}`}
						>
							<div ref={earthRef} className='webgl-earth' />
						</div>
						{!isWebGlReady && (
							<div className='globe globe-fallback' aria-hidden='true'>
								<div className='globe-ring globe-ring--one' />
								<div className='globe-ring globe-ring--two' />
								<div className='globe-continents'>
									<span className='continent continent-a' />
									<span className='continent continent-b' />
									<span className='continent continent-c' />
									<span className='continent continent-d' />
								</div>
							</div>
						)}

					</div>
				</div>

				<div className='flex flex-wrap justify-center gap-2 md:gap-3 mx-auto w-fit mt-4 md:mt-6'>
					{countries.map(el => (
						<div key={el.id} className='flex flex-col items-center gap-1'>
							<img src={el.flag} alt='' className='h-7 w-7 rounded-full object-cover' />
							<button
								type='button'
								onClick={() => {
									if (!isGeoJsonReady) return
									isAutoRotateRef.current = false
									setActiveCountryId(el.id)
									highlightCountry(el)
								}}
								disabled={!isGeoJsonReady}
								className={`rounded-full border px-3 py-1 text-[12px] md:text-[14px] font-medium uppercase tracking-wide leading-tight transition-colors ${
									activeCountryId === el.id
										? 'border-[#FFD23E] bg-[#FFD23E]/20 text-[#FFD23E]'
										: 'border-white/20 bg-white/8 text-white/95'
								} ${!isGeoJsonReady ? 'opacity-60 cursor-wait' : ''}`}
							>
								{el.title}
							</button>
						</div>
					))}
				</div>
				<div className='mx-auto mt-3 md:mt-4 w-fit rounded-2xl border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md'>
					<p className='text-center text-[15px] md:text-[18px] font-bold uppercase tracking-wide bg-gradient-to-r from-[#FFE28A] via-[#FFD23E] to-[#E8B923] bg-clip-text text-transparent [text-shadow:0_0_22px_rgba(255,210,62,0.28)]'>
						{isEnglish
							? 'All listed parties have already confirmed their participation in the event.'
							: 'Все указанные стороны уже подтвердили своё участие в мероприятии.'}
					</p>
				</div>
			</div>
		</>
	)
}
