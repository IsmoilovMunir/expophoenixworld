import { CheckCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'

export default function Formats() {
	const formats = [
		{
			id: 1,
			title: 'ФЕНИКС PREMIUM',
			price: 15000,
			color: 'rgba(74,76,77)',
			services: [
				'Перелёт, трансфер и визовая поддержка',
				'Проживание 3 дня в «Вилла Феникса»',
				'4-разовое питание от шеф-повара',
				'Безлимитный доступ к SPA, бассейну и бане',
				'Премиальный отдых и активные развлечения',
				'Доступ к государственным и деловым кругам',
				'Возможность заключения партнёрских соглашений',
				'Участие в выставке и деловой программе',
				'Персональное сопровождение 24/7',
			],
		},
		{
			id: 2,
			title: 'ФЕНИКС LUXURY',
			price: 20000,
			color: 'rgba(24,97,170)',
			services: [
				'Перелёт, трансфер и визовая поддержка',
				'Проживание 3 дня в «Вилла Феникса»',
				'4-разовое питание от шеф-повара',
				'Безлимитный доступ к SPA, бассейну и бане',
				'Премиальный отдых и активные развлечения',
				'Доступ к государственным и деловым кругам',
				'Возможность заключения партнёрских соглашений',
				'Участие в выставке и деловой программе',
				'Персональное сопровождение 24/7',
			],
		},
		{
			id: 3,
			title: 'ФЕНИКС VIP',
			price: 25000,
			color: 'rgba(2,123,81)',
			services: [
				'Перелёт, трансфер и визовая поддержка',
				'Проживание 3 дня в «Вилла Феникса»',
				'4-разовое питание от шеф-повара',
				'Безлимитный доступ к SPA, бассейну и бане',
				'Премиальный отдых и активные развлечения',
				'Доступ к государственным и деловым кругам',
				'Возможность заключения партнёрских соглашений',
				'Участие в выставке и деловой программе',
				'Персональное сопровождение 24/7',
			],
		},
	]

	return (
		<>
			<div className='px-5 md:px-0 max-w-350 m-auto flex gap-5 flex-col'>
				<h1 className='md:text-[52px] text-[42px] text-center	md:text-start font-extrabold'>
					Форматы <span className='text-[#FFD23E]'>участия</span>
				</h1>
				<div className='flex md:flex-row flex-col justify-between items-center gap-6 md:gap-0'>
					{formats.map(el => (
						<article
							key={el.id}
							className=' md:w-[32%] px-5 py-7 rounded-2xl flex flex-col gap-4'
							style={{
								background: `linear-gradient(360deg, ${el.color}, rgba(31,35,38))`,
								backdropFilter: 'blur(12px)',
							}}
						>
							<h1 className='md:text-[32px] text-[31px] font-extrabold'>
								{el.title}
							</h1>
							{el.services.map(elem => (
								<p key={elem} className='text-[18px] font-bold'>
									<CheckCircleOutlined /> {elem}
								</p>
							))}
							<p className='text-[34px] text-[#FFD23E] font-extrabold'>
								{el.price} $
							</p>
							<Button
								type=''
								style={{
									backgroundColor: 'transparent',
									color: 'white',
									padding: '25px 30px',
									fontSize: '17px',
								}}
							>
								Подать заявку
							</Button>
						</article>
					))}
				</div>
			</div>
		</>
	)
}
