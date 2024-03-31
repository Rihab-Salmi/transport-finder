// MapComponent.jsx
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; 
import busRoutes from "./busRoutes"; 

function MapComponent() {
  useEffect(() => {
    const map = L.map("map").setView([35.5889, -5.3625], 13); 
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);
    const colors = ["red", "blue", "green"];
    busRoutes.forEach((route, index) => {
      const color = colors[index % colors.length]; 
      const polyline = L.polyline(route.coordinates, { color }).addTo(map);
      const endPoint = route.coordinates[route.coordinates.length - 1];
      L.marker(endPoint, {
        icon: L.divIcon({
          html: `<b>${route.number}</b>`,
          className: "bus-number-marker",
        }),
      }).addTo(map);
    });

    return () => {
      map.remove();
    };
  }, []); 

  return <div id="map" style={{ width: "50%", height: "400px" }}></div>;
}

export default MapComponent;
