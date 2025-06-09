import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const RootHeroSection = () => {
    return (
        <div className="relative min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-primary to-secondary overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Predict. Prepare. Protect.
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                        AI-powered disaster prediction and alert system for a safer tomorrow.
                    </p>
                    <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                        Get Started <ArrowRight className="ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default RootHeroSection;