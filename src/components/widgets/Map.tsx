// libraries
import {useEffect} from "react";
import mapboxgl from "mapbox-gl";

// assets
import marker from "../../../public/assets/images/marker.svg";

// styles
import "mapbox-gl/dist/mapbox-gl.css";
import "@/styles/addon/mapbox-gl.scss";

const Map = () => {

    useEffect(() => {

        if (typeof window === "undefined") return;

        // otherwise, create a map instance
        const mapbox = new mapboxgl.Map({
            container: "map",
            accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [12.554729, 55.70651],
            zoom: 15,
        });

        // add zoom control
        mapbox.addControl(new mapboxgl.NavigationControl({
            showCompass: false
        }));

        // add custom marker
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = `url(${marker.src})`;
        el.style.width = `40px`;
        el.style.height = `40px`;
        el.style.backgroundSize = '100%';

        new mapboxgl.Marker(el).setLngLat([12.554729, 55.70651]).addTo(mapbox);

        return () => mapbox.remove();

    }, []);

    return (
        <div className="relative w-full h-[240px] bg-light rounded-lg overflow-hidden">
            <div id="map" style={{width: "100%", height: 240}}/>
        </div>
    )
}

export default Map;