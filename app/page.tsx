import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 font-sans antialiased">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/50 backdrop-blur-lg border-b border-slate-200/60 shadow-md">
        <div className="container mx-auto flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="text-3xl font-extrabold bg-gradient-to-r from-blue-700 to-teal-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            IranHTP
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-700">
            <NavItem href="/#hospitals" label="Hospitals" />
            <NavItem href="/#treatments" label="Treatments" />
            <NavItem href="/#concierge" label="Concierge" />
            <NavItem href="/#about" label="About Iran" />
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button className="hidden md:inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-300/40 hover:from-blue-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 text-sm">
              Get a Free Quote
            </button>
            {/* Mobile Menu Button (will be implemented for Mega Menu) */}
            <button className="md:hidden text-3xl text-slate-700 hover:text-blue-600 transition">
              {/* Replace with a proper menu icon later */}
              ☰
            </button>
          </div>
        </div>
        {/* Mobile/Mega Menu will be implemented here */}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden text-white py-20">
        <div className="absolute inset-0 z-0">
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 z-10" />
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1684699793677-a72a806d118a?auto=format&fit=crop&q=80&w=2000&blend=0%7E000000&blend-mode=normal" // New premium image
            alt="Medical Tourism Iran - World Class Healthcare"
            layout="fill"
            objectFit="cover"
            quality={80}
            className="scale-105"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-xl">
            <span className="text-teal-300">Your Gateway</span> to {" "}
            <span className="text-white">World-Class Health & Wellness</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-12 leading-relaxed drop-shadow-md max-w-3xl mx-auto">
            Discover exceptional medical care, cutting-edge treatments, and unparalleled hospitality in Iran. IranHTP makes your health journey seamless and exceptional.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-teal-400 to-teal-300 text-slate-900 shadow-lg shadow-teal-300/40 hover:scale-105 hover:from-teal-500 hover:to-teal-400 transition-all duration-300">
              Explore Treatments
              <span>→</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
              Concierge Services
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 border-b border-slate-200/60">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-slate-800 mb-10">Trusted by Leading Institutions</h2>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-70 hover:opacity-100 transition-opacity duration-500">
            {/* Replace with actual logos - Placeholder text here */}
            <span className="text-xl font-semibold text-gray-600 italic">MOH Certified</span>
            <span className="text-xl font-semibold text-gray-600 italic">ISO 9001</span>
            <span className="text-xl font-semibold text-gray-600 italic">HTA Accredited</span>
            <span className="text-xl font-semibold text-gray-600 italic">JCI Partner</span>
            <span className="text-xl font-semibold text-gray-600 italic">24/7 Global Support</span>
          </div>
        </div>
      </section>

      {/* Hospitals Section (Improved) */}
      <section id="hospitals" className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 leading-tight">Discover Iran's Elite Medical Centers</h2>
            <p className="text-xl text-slate-500 mt-3 max-w-lg">Experience unparalleled healthcare quality and advanced treatments at our partner hospitals and clinics.</p>
          </div>
          <a href="/hospitals" className="flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-700 group transition-colors duration-300">
            View All Centers
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: "Razavi Hospital Complex", city: "Mashhad", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=85&w=800", specialty: "World-Class Cardiology & Oncology", description: "State-of-the-art facilities and expert Schedulers." },
            { name: "Gandhi Hotel-Hospital", city: "Tehran", image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=85&w=800", specialty: "Luxury General Surgery & Comprehensive Care", description: "Combining advanced medical services with hotel-level comfort." },
            { name: "Namazi Hospital", city: "Shiraz", image: "https://images.unsplash.com/photo-1632833239127-9160f3011950?auto=format&fit=crop&q=85&w=800", specialty: "Renowned Transplant Center & Research", description: "Leading pioneers in organ transplantation." }
          ].map((hosp, i) => (
            <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-blue-300/50">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={hosp.image}
                  alt={hosp.name}
                  layout="fill"
                  objectFit="cover"
                  quality={85}
                  className="group-hover:scale-110 transition-transform duration-[700ms]"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-slate-800 leading-tight">{hosp.name}</h3>
                  <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1.5 rounded-md font-semibold whitespace-nowrap">{hosp.city}</span>
                </div>
                <p className="text-md text-slate-600 mb-5 leading-relaxed">{hosp.specialty}</p>
                <p className="text-sm text-slate-500 mb-6">{hosp.description}</p>
                <button className="w-full py-3.5 rounded-xl border-2 border-slate-200 font-bold text-slate-800 group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-900 group-hover:text-white group-hover:border-slate-800 transition-all duration-400 shadow-sm hover:shadow-md">
                  View Details & Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder for Treatments Section */}
      <section id="treatments" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Comprehensive Treatment Options</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">From advanced surgical procedures to wellness programs, find the care you need.</p>
          <button className="px-10 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-teal-400 to-teal-300 text-slate-900 shadow-lg shadow-teal-300/40 hover:scale-105 transition-all duration-300">
            View All Treatments
          </button>
        </div>
      </section>

      {/* Placeholder for Concierge Section */}
      <section id="concierge" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Personalized Concierge Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">We handle all the details of your travel, accommodation, and local arrangements for a stress-free experience.</p>
          <button className="px-10 py-4 rounded-full text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-300/40 hover:scale-105 transition-all duration-300">
            Discover Our Services
          </button>
        </div>
      </section>

      {/* About Iran Section (Placeholder) */}
      <section id="about" className="py-24 bg-gradient-to-br from-white to-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Experience Iran's Rich Culture & Hospitality</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">Combine your medical journey with an unforgettable cultural exploration.</p>
          <button className="px-10 py-4 rounded-full text-lg font-bold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
            Learn More About Iran
          </button>
        </div>
      </section>

      {/* Footer (Basic Placeholder) */}
      <footer className="bg-slate-800 text-slate-300 py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              IranHTP
            </div>
            <div className="flex gap-6 text-lg">
              <a href="/#" className="hover:text-white transition">Privacy Policy</a>
              <a href="/#" className="hover:text-white transition">Terms of Service</a>
              <a href="/#" className="hover:text-white transition">Contact Us</a>
            </div>
          </div>
          <p className="text-sm text-slate-500">© 2026 IranHTP. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

// Helper Component for Navigation Items
function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="text-slate-600 font-medium hover:text-blue-600 transition relative group"
    >
      {label}
      <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-500 rounded-full group-hover:w-full transition-all duration-300"></span>
    </a>
  );
}
