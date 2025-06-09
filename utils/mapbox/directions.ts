"use server"

import MapboxDirections from "@mapbox/mapbox-gl-directions"


const mapDirections = new MapboxDirections({
    accessToken: process.env.NEXT_MAPBOX_ACCESS_TOKEN!,
    unit: 'metric',
    profile: 'mapbox/cycling'
});

export default mapDirections