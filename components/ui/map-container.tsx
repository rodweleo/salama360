import PropTypes from 'prop-types'
import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

// import Marker from '../Marker'
// import Card from '../Card'

import 'mapbox-gl/dist/mapbox-gl.css'
// import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

export const accessToken = (mapboxgl.accessToken =
   "pk.eyJ1Ijoicm9kd2VsZW8iLCJhIjoiY20ycHR0NWw1MHV2ajJqc2J5NWtwaDJhNCJ9.wR5dBffxNY6dcCJ1NvANVQ")

const MapContainer = ({ data, onLoad, onFeatureClick }:{
    data?: any[], onLoad?:() => void, onFeatureClick?: () => void
}) => {
    const mapContainer = useRef(null)
    const [mapLoaded, setMapLoaded] = useState(false)

    let mapRef = useRef(null)

    useEffect(() => {
        const map = (mapRef.current = new mapboxgl.Map({
            container: mapContainer.current,
            center: [36.8219, 1.2921],
            zoom: 12
        }))

        map.addControl(new mapboxgl.NavigationControl())

        map.on('load', () => {
            // onLoad(map)
            setMapLoaded(true)
        })
    }, [])

    return (
        <>
            <div ref={mapContainer} className='h-full w-full' />
            {/* {mapLoaded &&
                data &&
                data.map((d, i) => (
                    <Marker key={i} feature={d} map={mapRef.current}>
                        <Card feature={d} width={300} shortImage onClick={onFeatureClick} />
                    </Marker>
                ))} */}
        </>
    )
}

Map.propTypes = {
    data: PropTypes.object,
    onFeatureClick: PropTypes.func,
    onLoad: PropTypes.func
}

export  {MapContainer}