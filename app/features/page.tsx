import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Map, Shield, BarChart, Users, Phone, BookOpen } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Salama360 Features</h1>
            <p className="text-xl mb-8">Comprehensive tools for disaster prediction, preparation, and response</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="mr-2" /> Early Warning System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>AI-powered disaster prediction</li>
                    <li>Real-time alerts and  notifications</li>
                    <li>Customizable alert thresholds</li>
                    <li>Multi-channel alert delivery (SMS, email, app notifications)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Map className="mr-2" /> Interactive Evacuation Routes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>Dynamic route generation based on real-time conditions</li>
                    <li>Integration with traffic and weather data</li>
                    <li>Accessibility considerations for all users</li>
                    <li>Offline access to evacuation maps</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2" /> Resource Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>Real-time inventory tracking of emergency supplies</li>
                    <li>Automated resource allocation based on AI predictions</li>
                    <li>Volunteer and staff management tools</li>
                    <li>Integration with local government and NGO resources</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="mr-2" /> Data Analytics Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>Comprehensive disaster risk assessments</li>
                    <li>Historical data analysis and trend identification</li>
                    <li>Customizable reporting tools</li>
                    <li>Integration with external data sources</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2" /> Community Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>Community forums and discussion boards</li>
                    <li>Volunteer coordination and management</li>
                    <li>Public awareness campaigns and educational resources</li>
                    <li>Integration with social media platforms</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="mr-2" /> Emergency Communication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>In-app messaging system</li>
                    <li>Emergency contact management</li>
                    <li>Integration with emergency services</li>
                    <li>Offline communication capabilities</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2" /> Training and Preparedness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>Interactive disaster preparedness courses</li>
                    <li>Customizable emergency plans for individuals and families</li>
                    <li>Regular drills and simulations</li>
                    <li>Resource library with expert-curated content</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Experience the Power of Salama360</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our comprehensive suite of features is designed to empower communities, emergency responders, and
              individuals with the tools they need to predict, prepare for, and respond to natural disasters effectively.
            </p>
            <Button size="lg" asChild>
              <Link href="/signup">Start Your Free Trial</Link>
            </Button>
          </div>
        </section>
      </main>

    </div>
  )
}