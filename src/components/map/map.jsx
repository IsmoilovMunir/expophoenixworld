import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export const MapComponent = () => {
	return (
		<div className='px-5 md:px-0 items-center md:items-start max-w-350 m-auto flex flex-col gap-6'>
			<h1 className='text-[52px] font-extrabold'>Контакты</h1>
			<MapContainer
				///@ts-ignore
				center={[55.759179, 37.682078]}
				zoom={13}
				scrollWheelZoom={false}
				style={{ height: '400px', width: '100%', borderRadius: '15px' }}
			>
				<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

				<Marker position={[55.759179, 37.682078]}>
					<Popup>
						Вилла Фенникс <br /> Гостиница.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	)
}
