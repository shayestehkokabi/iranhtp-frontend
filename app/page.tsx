"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, ArrowRight, ShieldCheck, Stethoscope, Plane, HeartPulse, ClipboardCheck } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-60"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-0" />

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>دارای گواهینامه‌های بین‌المللی سلامت</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter">
            تجربه درمان در سطح جهانی<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              با کیفیت بین‌المللی در ایران
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            ما پلی هستیم بین تخصص‌های برتر پزشکی ایران و نیازهای درمانی شما. 
            از مشاوره تا درمان و اقامت، همراه شما هستیم.
          </p>

          <div className="max-w-xl mx-auto bg-white p-2 rounded-2xl shadow-2xl flex items-center gap-2">
            <div className="flex-1 flex items-center px-4">
              <Search className="w-5 h-5 text-slate-400 mr-2" />
              <Input 
                placeholder="جستجوی درمان، پزشک یا بیمارستان..." 
                className="border-none focus:ring-0 text-slate-800 placeholder:text-slate-400"
              />
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700 h-12 px-6 rounded-xl font-bold">
              جستجو
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Quick Access Grid */}
      <section className="container mx-auto px-6 py-16 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "ویزای درمانی", icon: <Plane className="w-8 h-8 text-blue-600" />, desc: "دریافت سریع و آسان ویزا" },
            { title: "رزرو نوبت", icon: <ClipboardCheck className="w-8 h-8 text-emerald-600" />, desc: "اتصال مستقیم به پزشکان" },
            { title: "خدمات درمانی", icon: <Stethoscope className="w-8 h-8 text-purple-600" />, desc: "تخصص‌های فوق‌تخصصی" },
          ].map((item, index) => (
            <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">{item.icon}</div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{item.desc}</p>
                <Button variant="link" className="mt-4 px-0 text-emerald-600 font-semibold flex items-center gap-2">
                  بیشتر بدانید <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">چرا ما را انتخاب کنید؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <h3 className="text-2xl font-bold mb-4">هزینه‌های بهینه، کیفیت عالی</h3>
            <p className="text-slate-600 leading-relaxed">
              ما با حذف واسطه‌ها و ارتباط مستقیم با مراکز درمانی، بهترین هزینه‌ها را برای شما تضمین می‌کنیم. 
              تیم پشتیبانی ما در تمامی مراحل درمان در کنار شماست.
            </p>
          </div>
          <div className="bg-emerald-100 h-64 rounded-3xl flex items-center justify-center">
            <HeartPulse className="w-24 h-24 text-emerald-600" />
          </div>
        </div>
      </section>
    </main>
  );
}
