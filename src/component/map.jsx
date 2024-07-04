// map.jsx
import React, {useEffect, useRef} from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

//  marker icon to locate stoppage 
const marker = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', 
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -32],
});

const Map = ({ path, stoppages }) => {
 const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && path.length > 0) {
      const bounds = L.latLngBounds(path.map(p => [p.lat, p.lng]));
      stoppages.forEach(stop => {
        bounds.extend([stop.lat, stop.lng]);
      });
      mapRef.current.fitBounds(bounds);
    }
  }, [path, stoppages]);
  return (
     <MapContainer ref={mapRef} center={[12.9294916, 74.9173533]} zoom={5} style={{ height: "75vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // serve map tiles at different zoom levels and coordinates
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline positions={path.map(p => [p.lat, p.lng])} color="blue" />
      {stoppages.map((stop, index) => (
        <Marker key={index} position={[stop.lat, stop.lng]} icon={marker}>
          <Popup>
            <div>
              <p>Reach Time: {new Date(stop.reachTime).toLocaleString()}</p>      
              <p>End Time: {new Date(stop.endTime).toLocaleString()}</p>
              <p>Duration: {stop.duration} minutes</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;