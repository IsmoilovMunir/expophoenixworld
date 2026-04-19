import { PlusOutlined } from '@ant-design/icons'
import { Collapse } from 'antd'
import './faq.css'

export default function Faq() {
	const items = [
		{
			key: '1',
			label: 'Как принять участие в выставке?',
			children: <p>description</p>,
		},
		{
			key: '2',
			label: 'Кто может участвовать?',
			children: <p>description</p>,
		},
		{
			key: '3',
			label: 'Можно ли представить свою продукцию или услуги?',
			children: <p>description</p>,
		},
		{
			key: '4',
			label: 'Есть ли ограничение по количеству мест?',
			children: <p>description</p>,
		},
		{
			key: '5',
			label: 'Какие возможности даёт участие?',
			children: <p>description</p>,
		},
	]

	const onChange = key => {
		console.log(key)
	}
	return (
		<>
			<div className='px-5 md:px-0 max-w-350 m-auto'>
				<h1 className='text-[52px] text-center md:text-start font-extrabold'>FAQ</h1>
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
