import React, { useEffect, useRef } from "react";

const MapComponent = ({ selectedCity, locations, centerCoordinates }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    const loadMap = async () => {
      if (typeof window === "undefined" || !mapRef.current) return;

      try {
        // Dynamically import Leaflet CSS
        await import("leaflet/dist/leaflet.css");

        // Dynamically import Leaflet library
        const L = (await import("leaflet")).default;

        // Fix for default marker icons
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        });

        // Custom marker icon (red pin)
        const customIcon = new L.Icon({
          iconUrl:
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 36' fill='%23D32F2F'%3E%3Cpath d='M12 0C7.03 0 3 4.03 3 9c0 6.75 9 18 9 18s9-11.25 9-18c0-4.97-4.03-9-9-9zm0 12.75c-2.07 0-3.75-1.68-3.75-3.75S9.93 5.25 12 5.25s3.75 1.68 3.75 3.75-1.68 3.75-3.75 3.75z'/%3E%3C/svg%3E",
          iconSize: [32, 45],
          iconAnchor: [16, 45],
          popupAnchor: [0, -45],
        });

        // Clean up previous map instance
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
        }

        // Create map
        const map = L.map(mapRef.current).setView(centerCoordinates, 13);

        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Add markers
        locations.forEach((location) => {
          const marker = L.marker(location.coordinates, {
            icon: customIcon,
          }).addTo(map);

          marker.bindPopup(`
            <div style="padding: 8px; font-family: Onest, sans-serif;">
              <div style="font-weight: 600; font-size: 16px; color: #000000; margin-bottom: 4px;">
                ${location.name}
              </div>
              <div style="font-weight: 400; font-size: 14px; color: #666666;">
                ${location.address}
              </div>
            </div>
          `);
        });

        mapInstanceRef.current = map;
      } catch (error) {
        console.error("Error loading map:", error);
      }
    };

    loadMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [selectedCity, locations, centerCoordinates]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "12px",
      }}
    />
  );
};

export default MapComponent;
