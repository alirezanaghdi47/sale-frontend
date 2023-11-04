'use client';

// libraries
import {useEffect, useRef} from "react";
import L from "leaflet";

// assets
import marker from "../../../public/assets/images/marker.svg";

// styles
import "leaflet/dist/leaflet.css";

const Map = () => {

    const map = useRef();

    useEffect(() => {

        const layers = {
            "osm": L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }),
        };

        // config leaflet
        map.current = L.map('map', {
            zoomControl: false,
            drawControl: false,
        }).setView(new L.LatLng(35.696, 51.362), 17);

        // set initial layer
        map.current.addLayer(layers.osm);

        // add zoom button
        L.control.zoom({
            position: "topright"
        }).addTo(map.current);

        // customize icon
        const customMarker = L.icon({
            shadowUrl: null,
            iconSize: new L.Point(36, 36),
            iconUrl: marker.src
        });

        // attach marker
        L.marker([35.696, 51.362], {
            icon: customMarker
        }).addTo(map.current);

        return () => map.current.remove();

    }, []);

    return (
        <div id="map" className='z-10 w-full h-[240px]'/>
    )
}

export default Map;