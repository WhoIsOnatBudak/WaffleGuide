'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { waffleShops } from '../data/waffles';
import L from 'leaflet';

// Fix for default markers not showing up in Next.js + Leaflet
// We are using custom icons so this might not be strictly necessary for us, but good for fallbacks
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'leaflet/dist/images/marker-icon-2x.png',
//   iconUrl: 'leaflet/dist/images/marker-icon.png',
//   shadowUrl: 'leaflet/dist/images/marker-shadow.png',
// });

// Function to get color based on rating
const getRatingColor = (rating: number | null) => {
    if (rating === null) return '#3b82f6'; // Blue
    if (rating >= 8) return '#22c55e'; // Green
    if (rating >= 7) return '#eab308'; // Yellow
    return '#f97316'; // Orange
};

const createCustomIcon = (rating: number | null) => {
    const color = getRatingColor(rating);
    // const label = rating !== null ? rating.toString() : '👑';

    // Waffle SVG with dynamic color
    const waffleSvg = `
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="white" stroke="${color}" stroke-width="2"/>
        <path d="M7 7H17C18.1046 7 19 7.89543 19 9V15C19 16.1046 18.1046 17 17 17H7C5.89543 17 5 16.1046 5 15V9C5 7.89543 5.89543 7 7 7Z" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-width="1.5"/>
        <path d="M9.5 7V17M14.5 7V17M5 9.5H19M5 14.5H19" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    `;

    return L.divIcon({
        className: 'custom-waffle-icon',
        html: `
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="filter: drop-shadow(0px 2px 2px rgba(0,0,0,0.3));">
                   ${waffleSvg}
                </div>
                <div style="
                    background-color: white; 
                    padding: 0px 4px; 
                    border-radius: 4px; 
                    border: 1px solid ${color};
                    font-size: 10px; 
                    font-weight: bold;
                    margin-top: -8px;
                    z-index: 10;
                    color: ${color};
                ">
                    ${rating !== null ? rating : '👑'}
                </div>
            </div>
        `,
        iconSize: [40, 50],
        iconAnchor: [20, 45],
        popupAnchor: [0, -45],
    });
};

export default function MapComponent({ selectedShopId }: { selectedShopId: number | null }) {
    // Center of the map (approx Istanbul historical peninsula to cover all points)
    const center: [number, number] = [41.0102, 28.9754];

    // Store refs to markers
    const markerRefs = React.useRef<{ [key: number]: L.Marker | null }>({});

    // Component to handle map movement
    const MapController = () => {
        const map = useMap();

        useEffect(() => {
            if (selectedShopId) {
                const shop = waffleShops.find(s => s.id === selectedShopId);
                if (shop) {
                    map.flyTo(shop.coords, 16, {
                        animate: true,
                        duration: 1.5
                    });

                    // Open popup
                    const marker = markerRefs.current[selectedShopId];
                    if (marker) {
                        marker.openPopup();
                    }
                }
            }
        }, [selectedShopId, map]);

        return null;
    };

    return (
        <MapContainer center={center} zoom={14} scrollWheelZoom={true} className="h-full w-full z-0">
            <MapController />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {waffleShops.map((shop) => (
                <Marker
                    key={shop.id}
                    position={shop.coords}
                    icon={createCustomIcon(shop.rating)}
                    ref={(ref) => {
                        if (ref) {
                            markerRefs.current[shop.id] = ref;
                        }
                    }}
                >
                    <Popup>
                        <div className="p-1">
                            <h3 className="font-bold text-base mb-1">{shop.name}</h3>
                            <p className="text-sm italic mb-2">"{shop.comment}"</p>
                            <span style={{
                                backgroundColor: getRatingColor(shop.rating),
                                color: 'white',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                fontSize: '12px',
                                fontWeight: 'bold'
                            }}>
                                Rating: {shop.rating !== null ? shop.rating : 'Special'}
                            </span>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
