import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-teal-500 bg-clip-text text-transparent">
          IranHTP
        </div>
        <div className="hidden md:flex gap-8 text-slate-600 font-medium">
          <a href="#" className="hover:text-blue-600 transition">Hospitals</a>
          <a href="#" className="hover:text-blue-600 transition">Treatments</a>
          <a href="#" className="hover:text-blue-600 transition">Concierge</a>
          <a href="#" className="hover:text-blue-600 transition">About Iran</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
          Get a Free Quote
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-slate-900/20 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical Tourism Iran"
            className="w-full h-full object-cover scale-105"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
            The Neural Heart of <span className="text-teal-300">Health Tourism</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 leading-relaxed drop-shadow-md">
            IranHTP connects you to world-class medical experts and high-end concierge services. 
            Your journey to health starts with a single, intelligent touch.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-teal-400 hover:bg-teal-500 text-slate-900 px-10 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105">
              Explore Treatments
            </button>
            <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all">
              Concierge Services
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-6 flex flex-wrap justify-around items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="text-xl font-serif">MOH Certified</span>
          <span className="text-xl font-serif">ISO 9001</span>
          <span className="text-xl font-serif">HTA Accredited</span>
          <span className="text-xl font-serif">24/7 Support</span>
        </div>
      </section>
            {/* Hospitals Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Elite Medical Centers</h2>
            <p className="text-slate-500 mt-2">Accredited hospitals with international patient departments (IPD)</p>
          </div>
          <button className="text-blue-600 font-semibold hover:underline">View All Centers →</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Razavi Hospital", city: "Mashhad", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800", specialty: "Cardiology & Oncology" },
            { name: "Gandhi Hotel-Hospital", city: "Tehran", image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800", specialty: "General Surgery & Luxury Care" },
            { name: "Namazi Hospital", city: "Shiraz", image: "https://images.unsplash.com/photo-1632833239127-9160f3011950?q=80&w=800", specialty: "Transplant Center" }
          ].map((hosp, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <div className="h-48 overflow-hidden">
                <img src={hosp.image} alt={hosp.name} className="w-full h-full object-cover group-hover:scale-110 transition-duration-500" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-800">{hosp.name}</h3>
                  <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md font-bold">{hosp.city}</span>
                </div>
                <p className="text-slate-500 text-sm mb-4">{hosp.specialty}</p>
                <button className="w-full py-3 rounded-xl border border-slate-200 font-semibold group-hover:bg-slate-900 group-hover:text-white transition">
                  Details & Booking
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

