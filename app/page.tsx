import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Plane, ClipboardCheck, UserCircle, ArrowRight, HeartPulse, ShieldCheck, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-blue-900 py-24 px-6 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Your Journey to Wellness, <span className="text-blue-400">Crafted in Turkey</span></h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto text-slate-300">
          World-class medical expertise, seamless travel coordination, and five-star hospitality—all in one place.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8">Free Consultation</Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 px-8">Explore Treatments</Button>
        </div>
      </section>

      {/* Quick Access */}
      <section className="max-w-6xl mx-auto -mt-16 px-6 grid md:grid-cols-4 gap-6">
        {[
          { title: "Find a Doctor", icon: Stethoscope },
          { title: "Health Visa", icon: Plane },
          { title: "My Bookings", icon: ClipboardCheck },
          { title: "My Account", icon: UserCircle },
        ].map((item, i) => (
          <Card key={i} className="hover:border-blue-500 transition-colors shadow-lg cursor-pointer">
            <CardHeader className="flex flex-row items-center gap-3">
              <item.icon className="w-8 h-8 text-blue-600" />
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Specialties</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Aesthetic Surgery", desc: "Advanced procedures for body and face transformation." },
            { title: "Hair Transplantation", desc: "Leading techniques for natural-looking results." },
            { title: "Dental Care", desc: "Comprehensive dental services and smile design." },
          ].map((service, i) => (
            <Card key={i} className="p-6">
              <HeartPulse className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.desc}</p>
              <Button variant="link" className="p-0 text-blue-600">Learn more <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto bg-white rounded-xl shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How does the consultation process work?</AccordionTrigger>
            <AccordionContent>We provide a free initial consultation via video call to discuss your health goals.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What does the travel package include?</AccordionTrigger>
            <AccordionContent>Our packages include surgery, hotel, airport transfers, and a personal medical coordinator.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
