import { useEffect, useState } from "react";

export function useIpAdress() {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  async function fetchLocation(ipAddress = "") {
    setIsLoading(true);
    try {
      const req = await fetch(`http://ip-api.com/json/${ipAddress}`);
      const data = await req.json();

      if (data.status === "fail") {
        alert("Geçersiz IP adresi!");
        return;
      }

      setLocation(data);
    } catch (err) {
      console.error("Veri çekilirken hata oluştu:", err.message);
      alert("Bir hata oluştu, lütfen internetini kontrol et.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchLocation();
  }, []);

  return { isLoading, location, fetchLocation };
}
