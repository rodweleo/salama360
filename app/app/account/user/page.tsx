"use client"

import * as React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, ThermometerSun, Cloudy, Wind, Thermometer, CircleGauge } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import axios from "axios";
import { createClient } from "@/utils/supabase/client";
import toast from "react-hot-toast";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import EmergencyRequestForm from "@/components/ui/emergency-request-form";

type CoordinatesProps = {
    latitude: number;
    longitude: number;
};

type WeatherData = {
    main: {
        temp: number;
        pressure: number;
        feels_like: number;
    };
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
    };
};

export default function UserDashboard() {
    const activeAlert = {
        type: "flood",
        level: "high",
        message: "Flood warning in your area. Please be prepared to evacuate.",
    };
    const [currentPosition, setCurrentPosition] =
        React.useState<CoordinatesProps | null>(null);
    const [currentWeatherData, setCurrentWeatherData] =
        React.useState<WeatherData | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);

    const disasters = {
        flood: { color: "bg-blue-500", probability: 85 },
        drought: { color: "bg-yellow-500", probability: 60 },
        landslide: { color: "bg-brown-500", probability: 40 },
    };

    React.useEffect(() => {
        // Geolocation API call
        const fetchCurrentPosition = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setCurrentPosition({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        });
                    },
                    (err) => {
                        console.error("Error fetching geolocation:", err.message);
                        setError("Unable to fetch your location. Please enable location services.");
                        setLoading(false)
                    }
                );
            }
        };

        fetchCurrentPosition();
    }, []);

    // Fetch weather data based on geolocation
    React.useEffect(() => {
        const getLocationWeatherData = async () => {
            if (!currentPosition) return;
            setLoading(true);
            try {
                const supabase = createClient();

                const { latitude, longitude } = currentPosition;
                // Check if the data is already cached in Supabase
                const { data, error } = await supabase
                    .from("slm_weather_updates")
                    .select("*")
                    .eq("latitude", latitude)
                    .eq("longitude", longitude)
                    .order("timestamp", { ascending: false })
                    .limit(1)
                    .single();

                if (error) {
                    console.log(error)
                }

                const isDataValid =
                    data && new Date(data.timestamp).getTime() > Date.now() - 60 * 60 * 1000; // Check if data is less than 1 hour old

                if (isDataValid) {
                    setCurrentWeatherData(data.weatherData);
                    console.log("Using cached weather data");
                } else {
                    console.log("Fetching new weather data");
                    const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
                        params: {
                            lat: latitude,
                            lon: longitude,
                            appid: process.env.NEXT_OPEN_WEATHER_API_KEY ?? "6ffc75f8ee820e70f78b012be8ea5015",
                        },
                    });

                    const weatherData = response.data;
                    setCurrentWeatherData(weatherData);

                    // Store the fetched data in Supabase
                    const { error } = await supabase.from("slm_weather_updates").insert([
                        {
                            latitude,
                            longitude,
                            weatherData,
                            timestamp: new Date(),
                        },
                    ]);

                    if (error) {
                        toast.error("Something went wrong. Retrying...")
                    }

                }
            } catch (error) {
                console.error("Error fetching weather data:", error);
                toast.error("Something went wrong. Retrying...")
            } finally {
                setLoading(false)
            }
        };

        getLocationWeatherData();
    }, [currentPosition]);

    // console.log(currentWeatherData)

    return (
        <div className="w-full h-full">
            {activeAlert && (
                <Alert variant="destructive" className="mb-6">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Active Alert: {activeAlert.type.toUpperCase()}</AlertTitle>
                    <AlertDescription>{activeAlert.message}</AlertDescription>
                </Alert>
            )}

            {error && <div className="text-red-500 mb-6">{error}</div>}

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Current Weather Conditions */}
                <Card className="md:col-span-2 w-fit h-fit">
                    <CardHeader>
                        <CardTitle>Current Weather Conditions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <p>Loading weather data...</p>
                        ) : currentWeatherData ? (
                            <ul className="flex items-center gap-10 *:grid *:place-items-center *:gap-2.5">
                                <li><ThermometerSun /> <span>{currentWeatherData.main.temp}°C</span></li>
                                <li><CircleGauge /> <span>{currentWeatherData.main.pressure} hPa</span></li>
                                <li><Thermometer /> <span>{currentWeatherData.main.feels_like}°C</span></li>
                                <li><Cloudy /> <span>{currentWeatherData.clouds.all}%</span></li>
                                <li><Wind /> <span>{currentWeatherData.wind.speed} m/s</span></li>
                            </ul>
                        ) : (
                            <p>No weather data available</p>
                        )}
                    </CardContent>
                </Card>

                {/* Risk Assessment */}
                <Card>
                    <CardHeader>
                        <CardTitle>Current Risk Assessment</CardTitle>
                        <CardDescription>Based on your location</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            {Object.entries(disasters).map(([type, data]) => (
                                <li key={type} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="capitalize">{type} Risk</span>
                                        <Badge
                                            variant={data.probability > 70 ? "destructive" : "default"}
                                        >
                                            {data.probability}%
                                        </Badge>
                                    </div>
                                    <Progress value={data.probability} className={data.color} />
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Emergency Assistance</CardTitle>
                        <CardDescription>
                            If you&apos;re in an emergency situation and need immediate help, click the button below to request assistance.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Dialog>
                            <DialogTrigger>
                                <p className="px-4 py-2 bg-blue-500 rounded-md text-white">Request Emergency Help</p>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Emergency Help Request</DialogTitle>
                                    <DialogDescription>
                                        Please provide details about your emergency situation.
                                    </DialogDescription>
                                </DialogHeader>
                                <EmergencyRequestForm/>
                            </DialogContent>
                        </Dialog>
                    </CardContent>
                </Card>
                {/* Emergency Contacts */}
                <Card>
                    <CardHeader>
                        <CardTitle>Emergency Contacts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            <li>Local Police: 911</li>
                            <li>Fire Department: 911</li>
                            <li>Medical Emergency: 911</li>
                            <li>Disaster Response Team: 555-0123</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Safety Tips */}

                <Card>
                    <CardHeader>
                        <CardTitle>Safety Tips</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Create an emergency kit</li>
                            <li>Know your evacuation routes</li>
                            <li>Stay informed through official channels</li>
                            <li>Follow instructions from authorities</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Recent Updates */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Updates</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            <li>Weather alert issued for heavy rainfall</li>
                            <li>Evacuation drill scheduled for next week</li>
                            <li>New emergency shelter opened downtown</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>


        </div>
    )
}