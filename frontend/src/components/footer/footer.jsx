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
					<li className='md:text-[28px] text-[22px] font-bold text-[#FFD23E]'>
						{isEnglish ? 'Villa Phoenix' : 'ВИЛЛА ФЕНИКС'}
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
			<div className='px-5 md:px-0 max-w-350 m-auto pt-8 pb-6 border-t border-white/10 text-[13px] md:text-[14px] text-[#B8BEC9] flex flex-row flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2'>
				<p className='whitespace-nowrap'>
					{isEnglish
						? '© Phoenix 2026. Sole proprietor Yulia Anatolyevna Gileva'
						: '© Феникс 2026. ИП Гилева Юлия Анатольевна'}
				</p>
				<p className='whitespace-nowrap'>
					{isEnglish
						? 'OGRNIP - 324774600844731, Moscow'
						: 'ОГРНИП - 324774600844731, Москва'}
				</p>
				<div className='flex flex-row flex-wrap items-center gap-x-5 gap-y-2 justify-center md:justify-start'>
					<a href='#' className='hover:text-[#FFD23E] transition-colors'>
						{isEnglish ? 'Privacy Policy' : 'Политика конфиденциальности'}
					</a>
					<a href='#' className='hover:text-[#FFD23E] transition-colors'>
						{isEnglish ? 'Loyalty Program Offer' : 'Оферта программы лояльности'}
					</a>
					<a
						href='https://axiondev.ru'
						target='_blank'
						rel='noreferrer'
						className='transition-colors'
						style={{ color: '#FFD23E' }}
					>
						Produced by Axion Dev
					</a>
				</div>
			</div>
		</>
	)
}
