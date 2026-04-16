import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'

export default function Layout() {
	return (
		<>
			<header className='bg-[#0B0F1A]  border-b border-[#393939]'>
				<Navbar />
			</header>
			<main>
				<Outlet />
			</main>
		</>
	)
}
