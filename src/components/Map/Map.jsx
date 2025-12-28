import "./leafletIconFix";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer center={[55.41477513371313, 13.624002138336403]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[55.41477513371313, 13.624002138336403]}>
        <Popup>Hotell Mossbylund</Popup>
      </Marker>
    </MapContainer>
  );
}
