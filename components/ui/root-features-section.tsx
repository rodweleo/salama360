import React from 'react';
import { Brain, Bell, Shield, LineChart } from 'lucide-react';

const RootFeaturesSection = () => {
    const features = [
        {
            icon: <Brain className="w-12 h-12 text-secondary" />,
            title: "AI Prediction",
            description: "Advanced machine learning algorithms to predict natural disasters with high accuracy."
        },
        {
            icon: <Bell className="w-12 h-12 text-secondary" />,
            title: "Real-time Alerts",
            description: "Instant notifications and updates about potential threats in your area."
        },
        {
            icon: <Shield className="w-12 h-12 text-secondary" />,
            title: "Safety Guidelines",
            description: "Detailed safety protocols and evacuation procedures for different scenarios."
        },
        {
            icon: <LineChart className="w-12 h-12 text-secondary" />,
            title: "Data Analytics",
            description: "Comprehensive analysis of historical data to improve prediction accuracy."
        }
    ];

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-primary mb-12 text-center">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                            <div className="flex justify-center mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RootFeaturesSection;