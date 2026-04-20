import { PlusOutlined } from '@ant-design/icons'
import { Collapse } from 'antd'
import { useLanguage } from '../../context/language-context'
import './faq.css'

export default function Faq() {
	const { isEnglish } = useLanguage()
	const items = [
		{
			key: '1',
			label: isEnglish
				? 'How can I participate in the exhibition?'
				: 'Как принять участие в выставке?',
			children: <p>description</p>,
		},
		{
			key: '2',
			label: isEnglish ? 'Who can participate?' : 'Кто может участвовать?',
			children: <p>description</p>,
		},
		{
			key: '3',
			label: isEnglish
				? 'Can I present my products or services?'
				: 'Можно ли представить свою продукцию или услуги?',
			children: <p>description</p>,
		},
		{
			key: '4',
			label: isEnglish
				? 'Is there a limit on the number of seats?'
				: 'Есть ли ограничение по количеству мест?',
			children: <p>description</p>,
		},
		{
			key: '5',
			label: isEnglish
				? 'What opportunities does participation provide?'
				: 'Какие возможности даёт участие?',
			children: <p>description</p>,
		},
	]

	const onChange = key => {
		console.log(key)
	}
	return (
		<>
			<div className='px-5 md:px-0 max-w-350 m-auto'>
				<h1 className='md:text-[52px] text-[36px] text-center md:text-start font-extrabold'>FAQ</h1>
				<div>
					<Collapse
						items={items}
						// defaultActiveKey={['1']}
						onChange={onChange}
						accordion
						bordered={false}
						className='custom-collapse'
						expandIcon={({ isActive }) => (
							<PlusOutlined
								style={{
									fontSize: '18px',
									color: '#facc15',
									transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)',
									transition: '0.3s',
								}}
							/>
						)}
					/>
				</div>
			</div>
		</>
	)
}
