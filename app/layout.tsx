import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import RootNav from "@/components/ui/root-nav"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Salama360",
  description: "Salama360 is an AI-driven disaster preparedness platform designed to predict natural disasters like floods, droughts, and landslides in Kenya. By leveraging historical data, real-time weather reports, and geospatial data, JihadharAI provides early warning alerts via SMS and mobile applications, ensuring that communities, including those in remote areas, have timely information to prepare. The platform also features real-time evacuation route planning and disaster response coordination, tracking resources and mobilizing volunteers for effective crisis management. With a commitment to inclusivity and data privacy, JihadharAI is accessible in low-data settings and prioritizes the protection and dignity of vulnerable populations. This innovative solution is scalable across regions, reliable even in low-connectivity areas, and fosters community resilience by engaging local volunteers across sectors like first aid, shelter provision, and transportation. JihadharAI empowers communities, mitigates the human impact of disasters, and strengthens Kenya's disaster response framework through AI and community-driven support.",
  keywords:[
    "Disaster Preparedness", 
    "AI", 
    "Disaster Prediction", 
    "Community Engagement", 
    "Volunteer Mobilization", 
    "Kenya", 
    "Early Warning System", 
    "Emergency Response", 
    "Data Privacy", 
    "Humanitarian Technology", 
    "Resilience", 
    "Geospatial Data", 
    "SMS Alerts", 
    "Evacuation Planning"
  ],
  openGraph: {
    title: "Salama360 - Kenya's AI-Powered Disaster Prediction & Alert System",
    description: "An AI-driven platform providing early warnings, evacuation planning, and emergency response coordination to reduce disaster impacts in Kenya.",
    url: "https://salama-360.vercel.app",
    type: "website",
    images: [
      {
        url: "", 
        width: 800,
        height: 600,
        alt: "Salama360 - AI-Powered Disaster Prediction & Alert System",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootNav />
        {children}
        <footer className="bg-background py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Salama360. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
