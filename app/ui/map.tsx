'use client'

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import { FaMapMarkerAlt } from "react-icons/fa";

// fix icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

type MapProps = {
  lat: number;
  lng: number;
  zoom?: number;
};

export default function Map({lat, lng, zoom=15} : MapProps){
    const position: [number, number] = [-6.9175, 107.6191]

    return (
        <div className="w-full h-65 rounded-2xl overflow-hidden shadow-md">
            <MapContainer
                center={[lat,lng]}
                zoom={zoom}
                scrollWheelZoom={false}
                className="w-full h-full"
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[lat,lng]}>
                    <Popup>
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-red-500"/>
                            Lokasi Anda
                        </div>
                    </Popup>
                </Marker>

            </MapContainer>
        </div>
    )
}