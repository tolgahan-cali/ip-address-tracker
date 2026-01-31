import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import patternBgDesktop from "./assets/pattern-bg-desktop.png";
import { InfoBar } from "./components/InfoBar";
import { Header } from "./components/Header";
import { MapComponent } from "./components/MapComponent";
import { useIpAdress } from "./hooks/useIpAdress";

export default function App() {
  const [ipInput, setIpInput] = useState("");
  const { isLoading, fetchLocation, location } = useIpAdress();

  const handleSearch = () => {
    if (ipInput.trim() !== "") {
      fetchLocation(ipInput);
    }
  };

  return (
    <div className="app-container">
      <header style={{ backgroundImage: `url(${patternBgDesktop})` }}>
        <Header
          ipInput={ipInput}
          setIpInput={setIpInput}
          handleGetLocation={handleSearch}
          isLoading={isLoading}
        />
        <InfoBar location={location} isLoading={isLoading} />
      </header>

      <main id="map">{location && <MapComponent location={location} />}</main>
    </div>
  );
}
