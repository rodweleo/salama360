import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Map, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Predict. Prepare. Protect.</h1>
            <p className="text-xl mb-8">AI-powered disaster prediction and alert system for a safer tomorrow.</p>
            <Button size="lg" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
            <p className="text-xl text-center max-w-3xl mx-auto">
              To leverage cutting-edge AI technology in predicting and mitigating the impact of natural disasters,
              empowering communities to respond swiftly and effectively, and ultimately saving lives.
            </p>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="mr-2" /> Early Warning System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Receive timely alerts and notifications about potential disasters in your area.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Map className="mr-2" /> Interactive Evacuation Routes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Access real-time, AI-optimized evacuation routes to reach safety quickly.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2" /> Resource Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Efficiently allocate and track emergency resources for optimal disaster response.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">1M+</p>
                <p className="text-xl">Lives Protected</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">500+</p>
                <p className="text-xl">Communities Served</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">95%</p>
                <p className="text-xl">Prediction Accuracy</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <p className="italic mb-4">
                    "DisasterGuard's early warning system gave us crucial time to prepare and evacuate safely. It's a game-changer for our community."
                  </p>
                  <p className="font-semibold">- Sarah Johnson, Community Leader</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="italic mb-4">
                    "As an emergency responder, the resource management feature has dramatically improved our efficiency in disaster situations."
                  </p>
                  <p className="font-semibold">- Mark Thompson, Fire Chief</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to safeguard your community?</h2>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup">Join DisasterGuard Today</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}