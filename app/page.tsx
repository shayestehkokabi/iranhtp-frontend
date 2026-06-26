export default function Home() {
  const services = [
    {
      title: "Medical Coordination",
      desc: "From doctor matching to appointment scheduling, we manage the full journey.",
      icon: "🩺",
    },
    {
      title: "Airport & Hotel Pickup",
      desc: "Private transfers, premium stays, and smooth arrival support for patients and families.",
      icon: "✈️",
    },
    {
      title: "Treatment Planning",
      desc: "Personalized treatment pathways with transparent guidance and fast communication.",
      icon: "📋",
    },
  ];

  const hospitals = [
    {
      name: "Razavi Hospital Complex",
      city: "Mashhad",
      specialty: "Cardiology, Oncology, Advanced Surgery",
    },
    {
      name: "Gandhi Hotel-Hospital",
      city: "Tehran",
      specialty: "Luxury Care, General Surgery, VIP Services",
    },
    {
      name: "Namazi Hospital",
      city: "Shiraz",
      specialty: "Transplant Center, Research, Specialized Care",
    },
  ];

  const steps = [
    {
      title: "Tell us your need",
      desc: "Share your condition, preferred city, and treatment goals.",
    },
    {
      title: "Get matched",
      desc: "We connect you with the right specialist and hospital.",
    },
    {
      title: "Travel with confidence",
      desc: "We handle logistics, coordination, and on-ground support.",
    },
  ];

  const stats = [
    { value: "24/7", label: "Support" },
    { value: "40+", label: "Partner Clinics" },
    { value: "8k+", label: "Patients Assisted" },
    { value: "98%", label: "Satisfaction Rate" },
  ];
  const newsItems = [
    {
      title: "New international patient desk launched",
      date: "June 2026",
      desc: "A dedicated support team now helps patients with faster communication and coordination.",
    },
    {
      title: "Top hospitals joined our network",
      date: "May 2026",
      desc: "We expanded our partner hospitals to improve access to trusted specialists and treatment plans.",
    },
    {
      title: "24/7 travel support now available",
      date: "April 2026",
      desc: "Patients can now receive round-the-clock help for transfers, booking, and arrival guidance.",
    },
  ];

  const events = [
    {
      title: "International Patient Webinar",
      date: "15 July 2026",
      place: "Online",
      desc: "A live session explaining how medical tourism in Iran works, with Q&A and expert guidance.",
    },
    {
      title: "Hospital Open Day",
      date: "28 July 2026",
      place: "Tehran",
      desc: "A visit program for patients and families to explore facilities, services, and care options.",
    },
    {
      title: "Health Tourism Meetup",
      date: "10 August 2026",
      place: "Mashhad",
      desc: "A networking event for clinics, coordinators, and international patient representatives.",
    },
  ];

  const faqs = [
    {
      question: "How do I start my treatment request?",
      answer:
        "You can send your condition, preferred city, and any reports through the contact form. Our team will review and guide you through the next steps.",
    },
    {
      question: "Do you help with travel and hotel arrangements?",
      answer:
        "Yes. We assist with airport pickup, hotel booking, local transfers, and patient-friendly travel coordination.",
    },
    {
      question: "Can you recommend the right hospital?",
      answer:
        "Absolutely. We match each patient with a suitable hospital or specialist based on medical needs and destination preferences.",
    },
    {
      question: "Is the consultation free?",
      answer:
        "Initial review and guidance can be free depending on the service request. Final treatment costs depend on the selected hospital and procedure.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Top Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="/" className="text-2xl font-black tracking-tight">
            <a href="#news" className="text-sm text-white/75 transition hover:text-white">
              News
            </a>
            <a href="#events" className="text-sm text-white/75 transition hover:text-white">
              Events
            </a>
            <a href="#faq" className="text-sm text-white/75 transition hover:text-white">
              FAQ
            </a>

            <span className="text-cyan-400">Iran</span>HTP
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-white/75 transition hover:text-white">
              Services
            </a>
            <a href="#hospitals" className="text-sm text-white/75 transition hover:text-white">
              Hospitals
            </a>
            <a href="#process" className="text-sm text-white/75 transition hover:text-white">
              Process
            </a>
            <a href="#contact" className="text-sm text-white/75 transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Get Free Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-160px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute right-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-80px] h-[300px] w-[300px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 py-20 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Premium Medical Tourism in Iran
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              World-class care,
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent">
                seamless travel.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              We help international patients find the right hospital, specialist,
              and travel support in Iran — fast, clear, and stress-free.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Start Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-lg shadow-black/10"
                >
                  <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-blue-400/10 to-fuchsia-400/20 blur-2xl" />
            <div className="rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="rounded-[1.6rem] border border-white/10 bg-slate-900 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-white/45">Patient Support</p>
                    <h2 className="text-xl font-bold">Fast matching workflow</h2>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-300">
                    Online
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    ["Treatment Request", "Completed"],
                    ["Hospital Selection", "Completed"],
                    ["Travel Plan", "In progress"],
                    ["Appointment Booking", "Pending"],
                  ].map(([label, status]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-4"
                    >
                      <span className="text-sm text-white/80">{label}</span>
                      <span className="text-sm font-medium text-cyan-300">{status}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 p-5 text-slate-950">
                  <p className="text-sm font-semibold">Why patients choose us</p>
                  <p className="mt-2 text-sm leading-6">
                    Transparent communication, verified hospitals, and full travel
                    coordination under one roof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Services
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Everything needed for a smooth medical trip
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitals */}
      <section id="hospitals" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Hospitals
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Partner hospitals built for trust and quality
              </h2>
            </div>
            <a href="#contact" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">
              Need a recommendation? →
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {hospitals.map((hospital) => (
              <div
                key={hospital.name}
                className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-xl shadow-black/20"
              >
                <div className="h-40 bg-gradient-to-br from-cyan-500 via-blue-500 to-fuchsia-500" />
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold">{hospital.name}</h3>
                      <p className="mt-1 text-sm text-white/55">{hospital.specialty}</p>
                    </div>
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                      {hospital.city}
                    </span>
                  </div>

                  <button className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 py-3 font-semibold text-white transition hover:bg-white/10">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Process
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">
            How it works in 3 simple steps
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-3xl bg-slate-950/70 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-lg font-black text-slate-950">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* News */}
      <section id="news" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              News
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Latest updates from IranHTP
            </h2>
            <p className="mt-4 text-white/65">
              Stay informed about new services, hospital partners, and patient support improvements.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="text-sm text-cyan-300">{item.date}</div>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{item.desc}</p>
                <a href="#contact" className="mt-5 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Events
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Upcoming events and patient sessions
              </h2>
              <p className="mt-4 text-white/65">
                Join webinars, hospital open days, and medical tourism meetups to learn more.
              </p>
            </div>
            <a href="#contact" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">
              Ask about an event →
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.title}
                className="rounded-3xl border border-white/10 bg-slate-900 p-7 shadow-xl shadow-black/20"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                    {event.place}
                  </span>
                  <span className="text-sm text-white/55">{event.date}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold">{event.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            FAQ
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 max-w-3xl text-white/65">
            Quick answers to the most common questions from international patients and families.
          </p>

          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-white/10 bg-slate-950/70 p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold">
                  {faq.question}
                </summary>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-white/65">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 p-[1px]">
          <div className="rounded-[2rem] bg-slate-950 px-8 py-12 md:px-12">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Contact
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-tight">
                  Ready to start your treatment journey?
                </h2>
                <p className="mt-4 max-w-xl text-white/65">
                  Send us your request and we’ll guide you to the best hospital,
                  specialist, and travel plan.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-white/35"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-white/35"
                  />
                </div>
                <textarea
                  placeholder="Tell us about your medical need..."
                  className="mt-4 min-h-[120px] w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-white/35"
                />
                <button className="mt-4 w-full rounded-2xl bg-cyan-400 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Send Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-white/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© 2026 IranHTP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
