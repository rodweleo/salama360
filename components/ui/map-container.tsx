"use client";

import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { SearchBox } from "@mapbox/search-js-react";
import 'mapbox-gl/dist/mapbox-gl.css';
import toast from 'react-hot-toast';
import mapDirections from '@/utils/mapbox/directions';
import { useQuery } from '@tanstack/react-query';
import getRoute from '@/functions/getRoute';


export const accessToken: string = "pk.eyJ1Ijoicm9kd2VsZW8iLCJhIjoiY20ycHR0NWw1MHV2ajJqc2J5NWtwaDJhNCJ9.wR5dBffxNY6dcCJ1NvANVQ"

type CoordinatesProps = {
    latitude: number;
    longitude: number;
};

// Define custom icons based on the type
const iconMap: Record<string, string> = {
    vehicle: "/icons/icons8-vehicle-50.png",   // Path to vehicle icon
    person: "/icons/person.png",     // Path to person icon
    house: "/icons/house.png",       // Path to house icon
    default: "/icons/icons8-location-94.png",   // Path to default icon
};


const MapContainer = ({ data, onLoad, onFeatureClick }: {
    data?: [];
    onLoad?: () => void;
    onFeatureClick?: () => void;
}) => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const [userCurrentPosition, setUserCurrentPosition] = useState<CoordinatesProps | null>(null);
    const mapInstanceRef = useRef<mapboxgl.Map | null>(null);
    const [inputValue, setInputValue] = useState("");
    const [markers, setMarkers] = useState<mapboxgl.Marker[]>([]);
    const [clickedPoints, setClickedPoints] = useState([]);

    const { data: routeData, error } = useQuery({
        queryKey: ["routeData"],
        queryFn: getRoute
    })

    if (error) {
        toast.error(error.message)
    }

    mapboxgl.accessToken = "pk.eyJ1Ijoicm9kd2VsZW8iLCJhIjoiY20ycHR0NWw1MHV2ajJqc2J5NWtwaDJhNCJ9.wR5dBffxNY6dcCJ1NvANVQ"

    const floodZone = {
        type: 'Feature',
        geometry: {
            type: 'Polygon',
            coordinates: [
                [
                    [
                        36.821387978021846,
                        -1.279166060259513
                    ],
                    [
                        36.81856629413787,
                        -1.279595106718162
                    ],
                    [
                        36.82043311161189,
                        -1.2815043625869293
                    ],
                    [
                        36.824810476724764,
                        -1.2791553340976094
                    ],
                    [
                        36.824510069314414,
                        -1.2770530054055769
                    ],
                    [
                        36.82217118305368,
                        -1.276924291348621
                    ],
                    [
                        36.819961042825156,
                        -1.2774927783862182
                    ],
                    [
                        36.81921002430096,
                        -1.2787799183860926
                    ],
                    [
                        36.82108757061147,
                        -1.278479585776651
                    ],
                    [
                        36.821387978021846,
                        -1.279166060259513
                    ]
                ]
            ]
        },
        properties: {
            alertType: 'flood'
        }
    };

    // Function to update markers on the map
    const updateMarkers = (mapInstance: mapboxgl.Map, data: any[]) => {
        // Remove existing markers
        markers.forEach((marker) => marker.remove());
        setMarkers([]);


        // Add new markers
        const newMarkers: mapboxgl.Marker[] = [];
        data.forEach((locationData) => {
            // Create a custom icon element
            const customIcon = document.createElement('div');
            customIcon.className = 'custom-marker';
            customIcon.style.width = '32px';
            customIcon.style.height = '32px';
            customIcon.style.backgroundImage = `url(${iconMap[locationData.type] || iconMap.default})`;
            customIcon.style.backgroundSize = 'cover';
            // el.style.borderRadius = '50%';

            const marker = new mapboxgl.Marker(customIcon)
                .setLngLat([locationData.longitude, locationData.latitude])
                .addTo(mapInstance);

            newMarkers.push(marker);
        });

        // Update the markers state
        setMarkers(newMarkers);
    };

    const addRouteToMap = (routeData: any) => {
        if (routeData) {

            mapInstanceRef.current!.addSource("route", {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    properties: {},
                    geometry: routeData.routes[0].geometry,
                },
            })

            // Add a layer to display the route
            mapInstanceRef.current!.addLayer({
                id: 'route',
                type: 'line',
                source: 'route',
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round',
                },
                paint: {
                    'line-color': '#0074D9',
                    'line-width': 4,
                },
            });

            // Adjust the map bounds to fit the route
            const coordinates = routeData.routes[0].geometry.coordinates;
            const bounds = coordinates.reduce((bounds, coord) => bounds.extend(coord), new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));
            mapInstanceRef.current!.fitBounds(bounds, { padding: 20 });

        }
    }

    const handleMapClick = (event) => {
        const { lng, lat } = event.lngLat;

        setClickedPoints((prevPoints) => {
            const newPoints = [...prevPoints, { lng, lat }];

            // If two points are selected, fetch and display the route
            if (newPoints.length === 2) {
                addRouteToMap(newPoints[0], newPoints[1]);
                return []; // Reset points after calculating the route
            }

            return newPoints;
        });
    };

    useEffect(() => {
        // if (!mapContainer.current) return;

        mapInstanceRef.current = new mapboxgl.Map({
            container: mapContainer.current as HTMLElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: userCurrentPosition ? [userCurrentPosition.longitude, userCurrentPosition.latitude] : [36.8219, -1.2921],
            zoom: 12
        });


        //adding the direction functionality
        mapInstanceRef.current.addControl(mapDirections, "top-left")

        mapInstanceRef.current.addControl(new mapboxgl.NavigationControl());
        mapInstanceRef.current.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        }));



        mapInstanceRef.current.on('load', () => {
            // Add the flood zone as a source
            mapInstanceRef.current!.addSource('floodZoneSource', {
                type: 'geojson',
                data: floodZone
            });


            mapInstanceRef.current!.addControl(new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true,
                showUserHeading: true
            }));

            // Add a layer to style the flood zone
            mapInstanceRef.current!.addLayer({
                id: 'floodZoneLayer',
                type: 'fill',
                source: 'floodZoneSource',
                layout: {},
                paint: {
                    'fill-color': '#FF0000',   // Red color for flood area
                    'fill-opacity': 0.5        // Adjust transparency
                }
            });


            // Optional: Add a border to the flood zone
            mapInstanceRef.current!.addLayer({
                id: 'floodZoneBorder',
                type: 'line',
                source: 'floodZoneSource',
                paint: {
                    'line-color': '#FF0000',
                    'line-width': 2
                }
            });

            addRouteToMap(routeData)
        });

        // mapInstanceRef.current.on("click", handleMapClick)

        const positionOptions: PositionOptions = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
        }
        // Set user’s current location
        navigator.geolocation.watchPosition((position: GeolocationPosition) => {
            const coordinates = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            setUserCurrentPosition(coordinates);
        }, (error) => {
            toast.error(`Sorry, no position available: ERROR(${error.code}): ${error.message}`)
        }, positionOptions);


        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
            }
        };
    }, [routeData]);

    return (
        <div className="relative h-full w-full">
            <div className="w-full">
                <div className="absolute top-0 z-40 m-5 w-[200px]">
                    <SearchBox
                        accessToken={accessToken}
                        map={mapInstanceRef.current!}
                        mapboxgl={mapboxgl}
                        value={inputValue}
                        onChange={(d) => {
                            setInputValue(d);
                        }}
                        marker
                        options={{
                            language: 'en',
                            country: 'KE'
                        }}
                    />
                </div>
            </div>

            <div ref={mapContainer} className='h-full w-full' />
        </div>
    );
};

MapContainer.propTypes = {
    data: PropTypes.array,
    onFeatureClick: PropTypes.func,
    onLoad: PropTypes.func
};

export { MapContainer };
