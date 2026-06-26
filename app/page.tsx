import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Plane, ClipboardCheck, UserCircle, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-20 px-6 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-6">Your Journey to Wellness, Crafted in Turkey</h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Experience world-class medical treatments combined with 5-star hospitality. 
          Your health is our global mission.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-bold">
            Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-600">
            Explore Treatments
          </Button>
        </div>
      </section>

      {/* Quick Access Section */}
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

      {/* Placeholder for Next Sections (Blog, FAQ, etc.) */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8">Latest Health Guides & News</h2>
        <div className="grid md:grid-cols-3 gap-8">
           {/* در اینجا کارت‌های مقالات اضافه خواهد شد */}
           <Card><CardContent className="p-6">Blog post card example...</CardContent></Card>
           <Card><CardContent className="p-6">Blog post card example...</CardContent></Card>
           <Card><CardContent className="p-6">Blog post card example...</CardContent></Card>
        </div>
      </section>
    </main>
  );
}
