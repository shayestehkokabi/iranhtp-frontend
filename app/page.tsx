import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Plane, ClipboardCheck, UserCircle, ArrowRight, HeartPulse, ShieldCheck, Newspaper, Award } from "lucide-react";
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
        ].map((item, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-blue-500">
            <CardHeader className="flex flex-row items-center gap-4">
              <item.icon className="w-8 h-8 text-blue-600" />
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </section>

      {/* Trust & Accreditations */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-12 opacity-70">
           <div className="flex items-center gap-2"><Award /> ISO Certified</div>
           <div className="flex items-center gap-2"><ShieldCheck /> Global Health Standards</div>
           <div className="flex items-center gap-2"><HeartPulse /> 15+ Years Experience</div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Specialties</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[{ title: "Aesthetic Surgery", icon: HeartPulse }, { title: "Hair Transplantation", icon: Stethoscope }, { title: "Dental Care", icon: ShieldCheck }].map((s, i) => (
            <Card key={i} className="p-6">
              <s.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <Button variant="link" className="p-0 text-blue-600">Learn more <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3"><Newspaper /> Latest Health Guides</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="h-40 bg-slate-200" />
              <CardContent className="p-4">
                <h4 className="font-bold mb-2">Top 10 Tips for Post-Surgery Recovery</h4>
                <p className="text-sm text-slate-500">Read our expert advice for a faster and smoother healing process.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto mb-20 bg-white rounded-xl shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How does the consultation process work?</AccordionTrigger>
            <AccordionContent>We provide a free initial consultation via video call.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What does the travel package include?</AccordionTrigger>
            <AccordionContent>Surgery, hotel, airport transfers, and a personal coordinator.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
