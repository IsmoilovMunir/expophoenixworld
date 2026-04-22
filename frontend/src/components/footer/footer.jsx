import logo from '../../assets/logo.png'
import { useLanguage } from '../../context/language-context'

export default function Footer() {
	const { isEnglish } = useLanguage()
	const contacts = {
		email: 'info@expophoenix.com',
		phoneRaw: '+74951295777',
		phoneDisplay: '+7(495)-129-57-77',
		address: isEnglish
			? '231312, Russia, Moscow, Beregove, Bohdana Khmelnytskoho Street, 83'
			: '231312, Россия, Москва, Берегове, вулиця Богдана Хмельницького, 83',
		yandexMapsUrl:
			'https://yandex.ru/maps/?text=Москва%2C%20вулиця%20Богдана%20Хмельницького%2C%2083',
	}

	const linkClass = 'w-fit text-[14px] md:text-[15px]'
	const phoneLinkClass = `${linkClass} transition-colors hover:text-[#FFD23E]`
	return (
		<>
			<div className='px-5 md:px-0 md:flex-row flex-col max-w-350 m-auto flex justify-between gap-8 md:gap-5 pb-8 md:pb-0'>
				<ul className='flex flex-col gap-3 md:gap-5 text-center md:text-start'>
					<li className='text-[#5D6068] text-[18px]'>
						{isEnglish ? 'VENUE:' : 'МЕСТО ПРОВЕДЕНИЯ:'}
					</li>
					<li className='md:text-[28px] text-[22px] font-bold'>
						{isEnglish ? 'Villa Phoenix' : 'Вилла Фениск'}
					</li>
				</ul>
				<ul className='flex flex-col gap-3 md:gap-5 items-center md:items-start'>
					<li className='text-[#5D6068] text-[18px]'>
						{isEnglish ? 'ORGANIZER:' : 'ОРГАНИЗАТОР:'}
					</li>
					<li>
						<img src={logo} alt='' className='w-32 md:w-auto' />
					</li>
				</ul>
				<ul className='flex flex-col gap-3 md:gap-5 text-center md:text-start'>
					<li className='text-[#5D6068] text-[18px]'>
						{isEnglish ? 'Contacts' : 'Контакты'}
					</li>
					<li className='md:text-[21px] text-[16px] leading-relaxed flex flex-col gap-2 items-center md:items-start'>
						<a href={`mailto:${contacts.email}`} className={linkClass}>
							{contacts.email}
						</a>
						<a href={`tel:${contacts.phoneRaw}`} className={phoneLinkClass}>
							{contacts.phoneDisplay}
						</a>
						<a
							href={contacts.yandexMapsUrl}
							target='_blank'
							rel='noreferrer'
							className={linkClass}
						>
							{contacts.address}
						</a>
					</li>
				</ul>
			</div>
		</>
	)
}
