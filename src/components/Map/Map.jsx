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
        <Popup>
          Hotell Mossbylund (
          <a
            href="https://www.google.com/maps/dir//Hotell+Mossbylund,+274+53+Skivarp/@55.415522,13.6239339,17z/data=!4m20!1m10!3m9!1s0x4654804b5785c1b7:0x689cf3410fd4b0af!2sHotell+Mossbylund!5m2!4m1!1i2!8m2!3d55.4147279!4d13.6238793!16s%2Fg%2F11dyj9h9y!4m8!1m0!1m5!1m1!1s0x4654804b5785c1b7:0x689cf3410fd4b0af!2m2!1d13.6238793!2d55.4147279!3e3?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vägbeskrivning
          </a>
          )
        </Popup>
      </Marker>
    </MapContainer>
  );
}
