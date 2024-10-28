import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
    const faqs = [
        {
            question: "What is Salama360?",
            answer: "Salama360 is an AI-powered disaster prediction and alert system designed to help communities prepare for, respond to, and recover from natural disasters. It uses advanced artificial intelligence to predict potential disasters, provide early warnings, and offer real-time guidance during emergencies."
        },
        {
            question: "How accurate are Salama360's predictions?",
            answer: "Salama360's AI models have achieved an average prediction accuracy of 95% across various types of natural disasters. Our system is constantly learning and improving from new data, ensuring that our predictions become even more accurate over time."
        },
        {
            question: "What types of disasters can Salama360 predict?",
            answer: "Salama360 can predict a wide range of natural disasters, including hurricanes, floods, earthquakes, tsunamis, wildfires, landslides, and severe storms. Our AI models are trained on extensive historical data and real-time environmental factors to provide accurate predictions for these events."
        },
        {
            question: "How does the early warning system work?",
            answer: "Our early warning system uses a combination of AI predictions, real-time data from various sensors and satellites, and input from local authorities. When a potential disaster is detected, the system sends out alerts through multiple channels, including mobile app notifications, SMS, email, and integration with local emergency broadcast systems."
        },
        {
            question: "Is Salama360 available worldwide?",
            answer: "Currently, Salama360 is available in over 30 countries and we're continuously expanding our coverage. Our goal is to provide global coverage, but we ensure that our system is properly calibrated for each region's specific environmental conditions and disaster risks before launching in a new area."
        },
        {
            question: "How can I access Salama360 for my community?",
            answer: "To implement Salama360 in your community, you can contact our sales team through the 'Contact Us' page. We offer solutions for individual users, local governments, emergency management agencies, and large organizations. We'll work with you to tailor the system to your specific needs and integrate it with your existing emergency management infrastructure."
        },
        {
            question: "What kind of support does Salama360 offer during a disaster?",
            answer: "During a disaster, Salama360 provides real-time updates, evacuation routes, resource allocation assistance, and communication tools. Our system helps coordinate emergency responders, tracks available resources, and provides individuals with crucial information to stay safe."
        },
        {
            question: "How does Salama360 handle user privacy and data security?",
            answer: "We take user privacy and data security very seriously. All personal data is encrypted and stored securely. We comply with GDPR and other relevant data protection regulations. Our system only collects necessary information to provide accurate alerts and assistance, and users have full control over their data sharing preferences."
        },
        {
            question: "Can Salama360 integrate with existing emergency management systems?",
            answer: "Yes, Salama360 is designed to be highly interoperable. We can integrate with existing emergency management systems, GIS platforms, communication networks, and other relevant infrastructure. Our team works closely with local authorities and organizations to ensure seamless integration and operation."
        },
        {
            question: "How often is the Salama360 system updated?",
            answer: "We continuously update our AI models and system features. Major updates are typically released quarterly, with minor improvements and bug fixes rolled out more frequently. All updates are designed to minimize disruption to ongoing operations and are thoroughly tested before deployment."
        },
        {
            question: "What training and support does Salama360 provide?",
            answer: "We offer comprehensive training programs for both end-users and system administrators. This includes online courses, webinars, and on-site training sessions. Our support team is available 24/7 to assist with any issues or questions. We also provide regular drills and simulations to ensure everyone is prepared to use the system effectively during an actual emergency."
        },
        {
            question: "How can individuals contribute to Salama360's effectiveness?",
            answer: "Individuals can contribute by keeping their contact information up-to-date, participating in community drills, reporting local conditions during emergencies, and helping to spread awareness about the system. We also have a volunteer program for those interested in more active involvement in disaster preparedness and response efforts."
        }
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <section className="py-20">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Frequently Asked Questions</h1>
                        <p className="text-xl mb-8">Find answers to common questions about Salama360</p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="container mx-auto">
                        <div className="max-w-2xl mx-auto mb-12">
                            <div className="relative">
                                <Input
                                    type="search"
                                    placeholder="Search FAQs..."
                                    className="pl-10"
                                />
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                            </div>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                <section className="py-16 bg-muted">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Didn't find what you're looking for?</h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Our support team is always here to help. Reach out to us for any additional questions or concerns.
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/contact">Contact Support</Link>
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    )
}