import { useEffect, useRef, useState } from 'react'

const STEP_INTERVAL_MS = 250

function formatNumber(value) {
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export default function Stats() {
	const stats = [
		{
			id: 1,
			title: 'компаний',
			target: 500,
			step: 100,
			suffix: '+',
		},
		{
			id: 2,
			title: 'супер участников',
			target: 5000,
			step: 1000,
			suffix: '+',
		},
		{
			id: 4,
			title: 'пространства',
			target: 10000,
			step: 1000,
			suffix: ' кв.м',
			useGrouping: true,
		},
		{
			id: 5,
			title: 'на участника',
			target: 10,
			step: 1,
			suffix: ' кв.м',
		},
	]

	const [animatedValues, setAnimatedValues] = useState(() =>
		stats.map(() => 0),
	)
	const [cardProgress, setCardProgress] = useState(() => stats.map(() => 0))
	const [hasStarted, setHasStarted] = useState(false)
	const sectionRef = useRef(null)

	useEffect(() => {
		const sectionElement = sectionRef.current
		if (!sectionElement) {
			return
		}

		const observer = new IntersectionObserver(
			entries => {
				const [entry] = entries
				if (entry?.isIntersecting) {
					setHasStarted(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.35 },
		)

		observer.observe(sectionElement)

		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		if (!hasStarted) {
			return
		}

		let frameId = 0
		const startTime = performance.now()

		const tick = currentTime => {
			const nextAnimatedValues = stats.map((stat, index) => {
				const localElapsed = currentTime - startTime
				const stepsCount = Math.ceil(stat.target / stat.step)
				const localDuration = stepsCount * STEP_INTERVAL_MS
				const linearProgress = Math.min(
					Math.max(localElapsed / localDuration, 0),
					1,
				)
				const easedProgress = 1 - (1 - linearProgress) ** 3

				const currentStep = Math.min(
					stepsCount,
					Math.floor(easedProgress * stepsCount),
				)

				return currentStep * stat.step
			})

			const nextCardProgress = stats.map(stat => {
				const localElapsed = currentTime - startTime
				const stepsCount = Math.ceil(stat.target / stat.step)
				const localDuration = stepsCount * STEP_INTERVAL_MS
				return Math.min(Math.max(localElapsed / localDuration, 0), 1)
			})

			setAnimatedValues(nextAnimatedValues)
			setCardProgress(nextCardProgress)

			const isFinished = nextCardProgress.every(progress => progress >= 1)
			if (!isFinished) {
				frameId = requestAnimationFrame(tick)
			}
		}

		frameId = requestAnimationFrame(tick)

		return () => cancelAnimationFrame(frameId)
	}, [hasStarted])

	return (
		<>
			<div
				ref={sectionRef}
				className='px-5 md:px-0 max-w-350 m-auto mt-10 md:mt-15 flex flex-nowrap md:flex-wrap gap-6 md:gap-16 overflow-x-auto md:overflow-visible'
			>
				{stats.map((el, index) => {
					const rawValue = animatedValues[index] ?? 0
					const displayValue = el.useGrouping ? formatNumber(rawValue) : rawValue
					const progress = cardProgress[index] ?? 0
					const lift = (1 - progress) * 10
					const glow = 0.15 + (1 - progress) * 0.35

					return (
					<div
						key={el.id}
						className='transition-all duration-300 shrink-0 min-w-[140px] md:min-w-0 rounded-2xl border border-white/15 bg-white/8 backdrop-blur-md px-3 py-2 md:rounded-none md:border-0 md:bg-transparent md:backdrop-blur-0 md:px-0 md:py-0'
						style={{ opacity: 0.75 + progress * 0.25 }}
					>
						<span
							className='md:text-[54px] text-[28px] text-[#FFD23E] flex font-bold tracking-wide'
							style={{
								transform: `translateY(${lift}px) scale(${1 + (1 - progress) * 0.04})`,
								textShadow: `0 0 24px rgba(255, 210, 62, ${glow})`,
							}}
						>
								{displayValue}
								{el.suffix}
						</span>
						<p className='md:text-[24px] text-[16px] font-medium'>{el.title}</p>
					</div>
					)
				})}
			</div>
		</>
	)
}
