import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CiHospital1, CiShoppingCart } from 'react-icons/ci';
import { PiGasPumpLight, PiBowlFoodLight } from 'react-icons/pi';

export default function Map() {
    const [currentLocation, setCurrentLocation] = useState({ lat: 21.23333, lng: 81.63333 });
    const [category, setCategory] = useState([]);
    const [results, setResults] = useState([]);
    let map;

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                setCurrentLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
            })
        };
    }, [])

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoicmFqYXNnaDE4IiwiYSI6ImNsbDJsaXBxejAxanMzZHA4N2M3Y25nZnQifQ.tax8bLXV0ELmaMYH1PtevQ';
        map = new mapboxgl.Map({
            container: 'map', // container ID
            // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [currentLocation.lng, currentLocation.lat], // starting position [lng, lat]
            zoom: 11 // starting zoom
        });
    }, [currentLocation]);

    const handleCategory = async (cat) => {
        try {
            const res = await axios.get(`https://api.mapbox.com/search/searchbox/v1/category/${cat}?access_token=pk.eyJ1Ijoic2VhcmNoLW1hY2hpbmUtdXNlci0xIiwiYSI6ImNrNnJ6bDdzdzA5cnAza3F4aTVwcWxqdWEifQ.RFF7CVFKrUsZVrJsFzhRvQ&language=en&limit=10&proximity=81.6142861%2C21.254477`)
            setResults(res.data.features);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const fetchMarkers = async () => {
            map = new mapboxgl.Map({
                container: 'map', // container ID
                // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: [currentLocation.lng, currentLocation.lat], // starting position [lng, lat]
                zoom: 11 // starting zoom
            });
            map.on('load', () => {
                map.addSource('places', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': results
                    }

                })
                map.addLayer({
                    'id': 'places1',
                    'type': 'symbol',
                    'source': 'places',
                    'layout': {
                        'icon-image': ['get', 'music'],
                        'icon-allow-overlap': true
                    }
                });
                results.length !== 0 && results.map(r => {
                    // console.log(r);
                    // var marker = new mapboxgl.Marker()
                    //     .setLngLat(r.geometry.coordinates)
                    //     .setPopup(
                    //         new mapboxgl.Popup({ offset: 25 }) // add popups
                    //             .setHTML(
                    //                 `<h3>${r.properties.title}</h3>
                    //                     <p>${r.properties.full_address}</p>`
                    //             )
                    //     )
                    //     .addTo(map);
                    console.log(r);
                    map.on('click', 'places', (e) => {
                        // Copy coordinates array.
                        const coordinates = r.geometry.coordinates;
                        const description = e.features[0].properties.address;
                        console.log(description)

                        // Ensure that if the map is zoomed out such that multiple
                        // copies of the feature are visible, the popup appears
                        // over the copy being pointed to.
                        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                        }

                        new mapboxgl.Popup()
                            .setLngLat(coordinates)
                            .setHTML(description)
                            .addTo(map);
                    });
                    map.on('mouseenter', 'places', () => {
                        map.getCanvas().style.cursor = 'pointer';
                    });

                    // Change it back to a pointer when it leaves.
                    map.on('mouseleave', 'places', () => {
                        map.getCanvas().style.cursor = '';
                    })
                })
            })
        }
        results && fetchMarkers();
    }, [results])

    return (
        <div id='map' className='h-[400px] w-full rounded'>
            <div className='absolute z-[5] flex gap-3 m-3'>
                <CiHospital1 onClick={() => handleCategory("medical_clinic")} className="hover:bg-slate-100 w-11 h-11 p-1  focus:text-blue-500  text-slate-700 shadow-xl bg-white rounded-lg" />
                <PiGasPumpLight onClick={() => handleCategory("gas_station")} className="hover:bg-slate-100 w-11 h-11 p-1 focus:text-blue-500  text-slate-700 shadow-xl bg-white rounded-lg" />
                <CiShoppingCart onClick={() => handleCategory("shopping")} className="hover:bg-slate-100 w-11 h-11 p-1 focus:text-blue-500  text-slate-700 shadow-xl bg-white rounded-lg" />
                <PiBowlFoodLight onClick={() => handleCategory("restaurant")} className="hover:bg-slate-100 w-11 h-11 p-1 focus:text-blue-500  text-slate-700 shadow-xl bg-white rounded-lg" />
            </div>
        </div>
    )
}
