// @ts-nocheck

'use client';

// libraries
import {useEffect, useRef} from "react";
import L from "leaflet";

// assets
import markerIcon from "../../../../public/assets/images/marker.svg";

// styles
import "leaflet/dist/leaflet.css";
import "@/styles/customize/leaflet.scss";

// types
import {MapType} from "@/types/components";

const Map = ({location , setLocation}: MapType) => {

    const mapRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined"){
            let marker = null;

            const layers = {
                "osm": L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }),
            };

            // config leaflet
            mapRef.current = L.map('map', {
                zoomControl: false,
                drawControl: false,
            }).setView(new L.LatLng(35.696, 51.362), 17);

            // set initial layer
            mapRef.current.addLayer(layers.osm);

            // add zoom button
            L.control.zoom({
                position: "topright",
            }).addTo(mapRef.current);

            // customize icon
            const customMarker = L.icon({
                shadowUrl: null,
                iconSize: [40, 40],
                iconUrl: markerIcon.src
            });

            // attach marker
            marker = new L.marker(location, {icon: customMarker}).addTo(mapRef.current);

            // add new marker & remove old one
            mapRef.current.on("click", (e) => {
                if (marker) {
                    mapRef.current.removeLayer(marker);
                    setLocation({latitude: 0, longitude: 0});
                }
                marker = new L.marker(e.latlng, {icon: customMarker}).addTo(mapRef.current);
                setLocation({latitude: e.latlng?.lat, longitude: e.latlng?.lng});
            });

            return () => mapRef.current.remove();
        }
    }, []);

    return (
        <div id="map" className='z-10 w-full h-full rounded-lg'/>
    )
};

export default Map;