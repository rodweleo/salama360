
"use client"

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { usePathname } from 'next/navigation';

const RootFooterSection = () => {

    const pathName = usePathname();
    const isInAccountPage = pathName.startsWith("/app/account")

    return (
        <footer className={`bg-primary text-primary-foreground mt-16 ${isInAccountPage ? "hidden" : "block"}`}>
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">salama360</h3>
                        <p className="text-sm opacity-80">
                            AI-powered disaster prediction and alert system for a safer tomorrow.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com" className="hover:opacity-80" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="https://linkedin.com" className="hover:opacity-80" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com" className="hover:opacity-80" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/dashboard" className="hover:opacity-80">Dashboard</Link>
                            </li>
                            <li>
                                <Link href="/alerts" className="hover:opacity-80">Alerts</Link>
                            </li>
                            <li>
                                <Link href="/map" className="hover:opacity-80">Risk Map</Link>
                            </li>
                            <li>
                                <Link href="/safety" className="hover:opacity-80">Safety Guide</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Contact Us</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <Mail size={16} />
                                <span>hello@salama360.com</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone size={16} />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MapPin size={16} />
                                <span>Nairobi, Kenya</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Stay Updated</h4>
                        <p className="text-sm opacity-80">Subscribe to our newsletter for updates and safety tips.</p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-white/40"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/90 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm opacity-80">
                    <p>&copy; {new Date().getFullYear()} salama360. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default RootFooterSection;