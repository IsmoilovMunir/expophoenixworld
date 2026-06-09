import L from 'leaflet'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useLanguage } from '../../context/language-context'
import './map.css'

const defaultMarkerIcon = L.icon({
	iconUrl: icon,
	iconRetinaUrl: iconRetina,
	shadowUrl: iconShadow,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
})

export const MapComponent = () => {
	const { isEnglish } = useLanguage()
	const tileSources = [
		{
			url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		},
		{
			url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
		},
		{
			url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		},
	]

	const [sourceIndex, setSourceIndex] = useState(0)
	const activeSource = tileSources[sourceIndex]

	return (
		<div className='px-5 md:px-0 items-center md:items-start max-w-350 m-auto flex flex-col gap-5 md:gap-6'>
			<h1 className='md:text-[52px] text-[36px] font-extrabold'>
				{isEnglish ? 'Contacts' : 'Контакты'}
			</h1>
			<MapContainer
				///@ts-ignore
				center={[55.759179, 37.682078]}
				zoom={13}
				scrollWheelZoom={false}
				className='site-map'
				style={{ height: '340px', width: '100%', borderRadius: '15px' }}
			>
				<TileLayer
					key={sourceIndex}
					url={activeSource.url}
					attribution={activeSource.attribution}
					eventHandlers={{
						tileerror: () => {
							setSourceIndex(prev =>
								prev < tileSources.length - 1 ? prev + 1 : prev,
							)
						},
					}}
				/>

				<Marker position={[55.759179, 37.682078]} icon={defaultMarkerIcon}>
					<Popup>
						{isEnglish ? 'Villa Phoenix' : 'Вилла Фенникс'} <br />
						{isEnglish ? 'Hotel.' : 'Гостиница.'}
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	)
}
