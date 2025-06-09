import axios from 'axios';

const getRoute = async (start, end) => {
    const baseUrl = 'https://api.mapbox.com/directions/v5/mapbox/driving';
    const coordinates = `${start.lng},${start.lat};${end.lng},${end.lat}`;
    const params = {
        alternatives: true, // Include alternative routes
        geometries: 'geojson', // GeoJSON format for route geometry
        language: 'en', // Language for instructions
        overview: 'full', // Full route overview
        steps: true, // Include step-by-step directions
        access_token: 'pk.eyJ1Ijoicm9kd2VsZW8iLCJhIjoiY20ycHR0NWw1MHV2ajJqc2J5NWtwaDJhNCJ9.wR5dBffxNY6dcCJ1NvANVQ', // Your access token
    };

    try {
        const response = await axios.get(`${baseUrl}/${coordinates}`, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching route:', error);
        throw error;
    }
};

export default getRoute;
