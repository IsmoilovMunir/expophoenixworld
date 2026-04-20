import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import HomePage from './pages/home/home-page'

export default function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					element: <HomePage />,
					index: true,
				},
			],
		},
	])
	return <RouterProvider router={router} />
}
