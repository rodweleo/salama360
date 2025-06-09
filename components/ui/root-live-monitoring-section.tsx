import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Thermometer, Wind, Droplets } from "lucide-react";

const RootLiveMonitoringSection = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-primary mb-12 text-center">Live Disaster Monitoring</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="relative overflow-hidden">
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-xl flex items-center">
                                <AlertTriangle className="mr-2 text-alert animate-pulse" />
                                High Risk Areas
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <p className="text-sm text-gray-600">California Coast</p>
                                <p className="text-sm text-gray-600">Gulf of Mexico</p>
                                <p className="text-sm text-gray-600">Eastern Seaboard</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-xl flex items-center">
                                <Thermometer className="mr-2 text-secondary" />
                                Temperature
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">32°C</div>
                            <p className="text-sm text-gray-600">Above average</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-xl flex items-center">
                                <Wind className="mr-2 text-secondary" />
                                Wind Speed
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">45 mph</div>
                            <p className="text-sm text-gray-600">Strong winds</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-xl flex items-center">
                                <Droplets className="mr-2 text-secondary" />
                                Precipitation
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">80%</div>
                            <p className="text-sm text-gray-600">Heavy rain expected</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default RootLiveMonitoringSection;