import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

export function MapComponent({ location }) {
  function ChangeView({ center }) {
    const map = useMap();
    if (center) {
      map.setView(center, 13);
    }
    return null;
  }
  return (
    <MapContainer
      center={[location.lat, location.lon]} // Artık direkt senin verini alıyor
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[location.lat, location.lon]}>
        <Popup>{location.isp}</Popup>
      </Marker>

      {/* Arama yaptığında kameranın kayması için bu yine kalsın */}
      <ChangeView center={[location.lat, location.lon]} />
    </MapContainer>
  );
}
