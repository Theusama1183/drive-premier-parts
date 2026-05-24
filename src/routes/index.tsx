import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoWhite from "@/assets/logo-white.png";
import heroRadiator from "@/assets/hero-radiator.jpg";
import hubMap from "@/assets/hub-map.jpg";
import catRadiators from "@/assets/cat-radiators.jpg";
import catCondensers from "@/assets/cat-condensers.jpg";
import catFans from "@/assets/cat-fans.jpg";
import catAcKits from "@/assets/cat-ackits.jpg";
import catHeaters from "@/assets/cat-heaters.jpg";
import catTanks from "@/assets/cat-tanks.jpg";
import catIndustrial from "@/assets/cat-industrial.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const categories = [
  { name: "Radiators", count: "14,200+ Units", img: catRadiators },
  { name: "Condensers", count: "8,540+ Units", img: catCondensers },
  { name: "Cooling Fans", count: "5,180+ Units", img: catFans },
  { name: "A/C Kits", count: "Complete systems", img: catAcKits },
  { name: "Heaters", count: "3,100+ Units", img: catHeaters },
  { name: "Fuel Tanks", count: "2,460+ Units", img: catTanks },
  { name: "Industrial Cooling", count: "Custom builds", img: catIndustrial },
];

const advantages = [
  {
    title: "Superior Quality",
    body: "Shop-quality parts the nation's best mechanics trust. Every unit meets or exceeds OEM specifications.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
  },
  {
    title: "Guaranteed Low Price",
    body: "Wholesale buying power across 200+ hubs. Find it cheaper and we'll beat the price by 10%.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
  },
  {
    title: "Same-Day Service",
    body: "Counter pickup in hours. Local garage delivery the same day across most metros — next-day nationwide.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
  },
  {
    title: "First-Time Fit",
    body: "Vehicle data and fitment algorithms eliminate guesswork — the right part, installed once.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    ),
  },
];

const partners = [
  "Pacific Best Inc",
  "Behr / Hella",
  "Cryomax",
  "Koyo",
  "CSF Cooling",
  "CRS Cooling",
  "Lynol Cooling",
  "RadCool",
  "Delphi Automotive",
  "APDI",
  "Nissens",
];

const makes = [
  "Acura","Alfa Romeo","AM General","American Motors","Asuna","Audi","BMW","Buick","Cadillac","Chevrolet","Chrysler","Daewoo","Daihatsu","Datsun","Dodge","Eagle","Excalibur","Fiat","Ford","Freightliner","Geo","GMC","Honda","Hummer","Hyundai","Infiniti","International","Isuzu","Jaguar","Jeep","Kia","Land Rover","Lexus","Lincoln","Mazda","Mercedes","Mercury","Merkur","MG","Mini","Mitsubishi","Nissan","Oldsmobile","Peugeot","Plymouth","Pontiac","Porsche","Renault","Rolls Royce","Saab","Saturn","Scion","Smart Car","SRT","Sterling","Subaru","Suzuki","Toyota","Volkswagen","Volvo","Yugo",
];

const industries = [
  { name: "Automotive", code: "01" },
  { name: "Heavy-Duty Truck", code: "02" },
  { name: "Industrial", code: "03" },
  { name: "Agriculture", code: "04" },
  { name: "Fleet", code: "05" },
  { name: "Construction", code: "06" },
];

const testimonials = [
  {
    quote: "1-800 Radiator is the only place we get cooling assemblies, radiators, AC condensers, & fan assemblies. AMAZING customer service, spot on shipping, and NEVER the wrong part. 100% recommend them for your cooling needs.",
    author: "Bryan M.", role: "Verified Customer", rating: 5,
  },
  {
    quote: "1-800 Radiator came two hours after I ordered it and the price was better than everyone else who had the part 3 days away.",
    author: "Anthony M.", role: "Verified Customer", rating: 5,
  },
  {
    quote: "1-800 Radiator is a good choice. I use them all the time, always a direct fit. Some aftermarket parts from the store only \"almost\" fit.",
    author: "George H.", role: "Verified Customer", rating: 5,
  },
  {
    quote: "Radiator.com stands by its lifetime warranty. Business Week online magazine recently had a write up on a Texas franchise that is doing excellent and expanding.",
    author: "Denis P.", role: "Verified Customer", rating: 5,
  },
  {
    quote: "YAY for 1-800 Radiator! I called yesterday at 5:45 PM and they promised a brand spankin' new radiator on my doorstep by noon today. They knocked at my door at 11:53 AM with a smile. It was $20 cheaper than AutoZone or PepBoys.",
    author: "Nicole D.", role: "Verified Customer", rating: 5,
  },
  {
    quote: "Good prices; fast, free delivery. The people who answer the phone are knowledgeable and courteous.",
    author: "David V.", role: "Verified Customer", rating: 5,
  },
  {
    quote: "Extremely reliable service with good customer service — highly recommend.",
    author: "Willem L.", role: "Verified Customer", rating: 5,
  },
  {
    quote: "Wow.. called on a Saturday. Had delivery in less than an hour. Forget the parts stores. Buy from here. Even has a candy surprise.",
    author: "K K.", role: "Verified Customer", rating: 5,
  },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setActiveTestimonial((i) => (i + 1) % testimonials.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans antialiased">
      {/* NAV */}
      <nav
        className={`sticky top-0 z-50 w-full border-b transition-all ${
          scrolled
            ? "bg-zinc-950/90 backdrop-blur-md border-zinc-800/60"
            : "bg-zinc-950 border-zinc-900/0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="/" aria-label="Radiator.com home" className="flex items-center">
              <img src={logoWhite} alt="Radiator.com" className="h-9 w-auto" />
            </a>
            <div className="hidden md:flex gap-8">
              <a href="/shop" className="text-sm font-medium text-zinc-300 hover:text-brand transition-colors">SHOP</a>
              <a href="/location-search" className="text-sm font-medium text-zinc-300 hover:text-brand transition-colors">FIND A STORE</a>
              <a href="http://blog.radiator.com" className="text-sm font-medium text-zinc-300 hover:text-brand transition-colors">BLOG</a>
              <a href="/ContactUs" className="text-sm font-medium text-zinc-300 hover:text-brand transition-colors">CONTACT</a>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <a href="tel:18004064738" className="hidden sm:block text-sm font-semibold text-zinc-100 hover:text-brand transition-colors">
              1-800-406-4738
            </a>
            <button className="px-4 py-2 bg-brand text-white text-sm font-semibold rounded-sm ring-1 ring-brand hover:bg-white hover:text-zinc-950 hover:ring-white transition-colors">
              CART (0)
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="relative pt-16 pb-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
            <div className="lg:col-span-7 animate-fade-up">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-brand mb-6">
                <span className="size-1.5 rounded-full bg-brand animate-pulse" /> Engine Cooling Specialists Since 1982
              </span>
              <h1 className="text-4xl lg:text-6xl font-semibold text-zinc-100 leading-[1.05] tracking-tight text-balance max-w-[20ch] mb-6">
                Nationwide Radiator & A/C Parts Delivered Fast
              </h1>
              <p className="text-zinc-400 text-base md:text-lg text-pretty max-w-[52ch] mb-10">
                Engineered for first-time fit. We stock over 200,000 SKUs across 200+ local distribution hubs so your vehicle is back on the road today — not next week.
              </p>
              <div className="flex flex-wrap gap-3">
                {["200+ Locations", "Lifetime Warranty", "Same-Day Pickup", "Fast Nationwide Delivery"].map((t) => (
                  <div key={t} className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full">
                    <span className="size-1.5 bg-brand rounded-full" />
                    <span className="text-xs font-medium text-zinc-300">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "120ms" }}>
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden ring-1 ring-white/5 bg-zinc-900">
                <img
                  src={heroRadiator}
                  alt="Precision-machined aluminum radiator"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">
                  <span>SKU · CU-2891</span>
                  <span className="text-brand">In Stock</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-4 shadow-xl">
                <div>
                  <div className="text-2xl font-semibold text-zinc-100">200K+</div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500">SKUs Stocked</div>
                </div>
                <div className="w-px h-8 bg-zinc-800" />
                <div>
                  <div className="text-2xl font-semibold text-zinc-100">1.2M</div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500">Parts Shipped / Yr</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YMM FINDER */}
        <section id="shop" className="-mt-14 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-zinc-900 border border-zinc-800 p-1.5 rounded-lg shadow-2xl shadow-black/40">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-1">
                {["Year", "Make", "Model", "Engine", "Category"].map((label) => (
                  <select
                    key={label}
                    aria-label={label}
                    className="h-12 bg-zinc-950 border-none text-sm text-zinc-300 px-4 focus:ring-1 focus:ring-brand outline-none cursor-pointer appearance-none"
                  >
                    <option>{label}</option>
                  </select>
                ))}
                <button className="h-12 bg-brand text-white text-sm font-semibold rounded-sm hover:brightness-110 transition-all">
                  FIND PARTS →
                </button>
              </div>
            </div>
            <p className="mt-3 text-xs text-zinc-500 px-2">Search 200,000+ parts by Year · Make · Model · Engine.</p>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="border-y border-zinc-900 mt-24 py-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { k: "4.9 / 5", v: "Customer Rating (12K reviews)" },
              { k: "Lifetime", v: "Nationwide Warranty" },
              { k: "200+", v: "Regional Distribution Hubs" },
              { k: "Free", v: "Next-Day Delivery Over $50" },
            ].map((s) => (
              <div key={s.v} className="flex items-baseline gap-3">
                <div className="text-xl md:text-2xl font-semibold text-zinc-100">{s.k}</div>
                <div className="text-[11px] uppercase tracking-widest text-zinc-500">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORY GRID — LIGHT */}
        <section className="py-32 bg-white text-zinc-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
              <div>
                <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Inventory</span>
                <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight">Parts by Category</h2>
              </div>
              <a href="/shop" className="text-sm font-medium text-zinc-600 hover:text-brand transition-colors border-b border-zinc-300 pb-1">View full catalog →</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((c) => (
                <a
                  key={c.name}
                  href="#"
                  className="group block"
                >
                  <div className="w-full aspect-square bg-zinc-100 ring-1 ring-zinc-200 rounded-xl mb-4 overflow-hidden relative">
                    <img src={c.img} alt={c.name} loading="lazy" width={640} height={640} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest text-zinc-100">Shop</span>
                      <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-900 group-hover:text-brand transition-colors">{c.name}</h3>
                  <p className="text-xs text-zinc-500 mt-1">{c.count}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ADVANTAGE */}
        <section className="py-24 bg-zinc-900 border-y border-zinc-800/60">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col mb-16">
              <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase mb-3">The Radiator.com Advantage</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight max-w-[24ch]">Built for shops that can't afford a second trip.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {advantages.map((a, i) => (
                <div key={a.title} className="border-t border-zinc-800 pt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="size-9 bg-brand/10 rounded flex items-center justify-center">
                      <svg className="size-4 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">{a.icon}</svg>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">0{i + 1}</span>
                  </div>
                  <h4 className="text-zinc-100 font-medium mb-3">{a.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATOR — LIGHT */}
        <section id="locator" className="py-32 bg-white text-zinc-900">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Local Network</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-6 text-balance tracking-tight">Find a dealer near you.</h2>
              <p className="text-zinc-600 text-base max-w-[48ch] mb-8">
                Enter your zip code to find the nearest distribution center. Most locations offer counter pickup and local garage delivery within a 30-mile radius.
              </p>
              <div className="flex gap-2 max-w-md">
                <input
                  type="text"
                  placeholder="Enter ZIP code"
                  className="flex-1 h-12 bg-white border border-zinc-300 rounded px-4 text-zinc-900 outline-none focus:ring-1 focus:ring-brand focus:border-brand transition"
                />
                <button className="px-8 h-12 bg-brand text-white text-sm font-semibold rounded hover:brightness-110 transition-all">
                  LOCATE
                </button>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-xs text-zinc-600">
                <span><span className="text-zinc-900 font-semibold">2,800+</span> ASE-certified counter pros</span>
                <span><span className="text-zinc-900 font-semibold">98%</span> orders ship same day</span>
              </div>
            </div>
            <div className="relative w-full aspect-video bg-zinc-100 ring-1 ring-zinc-200 rounded-xl overflow-hidden">
              <img src={hubMap} alt="US distribution hub network" loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-zinc-200 rounded px-3 py-2 shadow">
                <div className="text-[10px] uppercase tracking-widest text-zinc-500">Live Network</div>
                <div className="text-sm text-zinc-900 font-semibold">214 hubs online</div>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-24 bg-zinc-900 border-y border-zinc-800/60">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col mb-16">
              <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase mb-3">Industries Served</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight">From compact sedans to combine harvesters.</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-zinc-800">
              {industries.map((i) => (
                <div key={i.name} className="bg-zinc-900 p-6 hover:bg-zinc-950 transition-colors cursor-pointer group">
                  <div className="text-[10px] font-mono text-zinc-600 mb-8">{i.code}</div>
                  <div className="text-zinc-100 font-medium group-hover:text-brand transition-colors">{i.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS — LIGHT */}
        <section className="py-32 bg-zinc-50 text-zinc-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase mb-3 block">What Our Customers Are Saying</span>
            <div className="relative min-h-[260px]">
              {testimonials.map((t, i) => (
                <div
                  key={t.author}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    i === activeTestimonial ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex justify-center gap-1 mb-8 mt-6">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <svg key={idx} className="size-4 text-brand fill-brand" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 0 0 .95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 0 0-.364 1.118l1.287 3.957c.3.92-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 0 0-1.176 0l-3.366 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 0 0-.364-1.118L2.06 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 0 0 .95-.69l1.287-3.957Z" /></svg>
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-zinc-900 leading-relaxed text-balance">"{t.quote}"</p>
                  <div className="mt-8">
                    <div className="text-zinc-900 font-semibold text-sm">{t.author}</div>
                    <div className="text-zinc-500 text-xs mt-1">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-1.5 rounded-full transition-all ${i === activeTestimonial ? "w-8 bg-brand" : "w-1.5 bg-zinc-300 hover:bg-zinc-400"}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS MARQUEE — LIGHT */}
        <div className="py-12 bg-white border-y border-zinc-200 overflow-hidden">
          <div className="text-center text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-8">Our Partners</div>
          <div className="flex whitespace-nowrap animate-marquee">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="text-zinc-400 hover:text-brand transition-colors font-semibold tracking-widest text-xl px-12">
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* MAKES — LIGHT */}
        <section className="py-24 bg-zinc-50 text-zinc-900 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Shop By Make</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight">We Have Radiators For These Cars</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-3">
              {makes.map((m) => (
                <a
                  key={m}
                  href={`/radiator/${m.toLowerCase().replace(/\s+/g, "_")}`}
                  className="text-sm text-zinc-700 hover:text-brand transition-colors py-1.5 border-b border-zinc-200 hover:border-brand"
                >
                  {m}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="py-32">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 md:p-16 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 size-64 bg-brand/10 rounded-full blur-3xl" />
              <div className="relative">
                <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Stay In The Loop</span>
                <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight mb-3 max-w-[24ch]">Get the right part, the first time.</h2>
                <p className="text-zinc-400 mb-8 max-w-[48ch]">Promotions, new SKUs, and fitment alerts for the makes you service. No spam — just signal.</p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-lg" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    aria-label="Email address"
                    className="flex-1 h-12 bg-zinc-950 border border-zinc-800 rounded px-4 text-zinc-100 outline-none focus:ring-1 focus:ring-brand focus:border-brand transition"
                  />
                  <button className="h-12 px-8 bg-brand text-white text-sm font-semibold rounded hover:brightness-110 transition-all">
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-zinc-900 pt-24 pb-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-20">
            <div className="col-span-2">
              <div className="text-zinc-100 font-semibold tracking-tighter text-xl mb-6 flex items-center gap-2">
                <span className="size-2 bg-brand rounded-full" />
                RADIATOR<span className="text-brand">.COM</span>
              </div>
              <p className="text-zinc-500 text-sm max-w-[34ch] mb-6">
                The leading nationwide source for radiators, A/C parts, and engine cooling — trusted by 150,000 auto shops since 1982.
              </p>
              <div className="flex gap-3">
                {["TW", "FB", "IG", "YT"].map((s) => (
                  <a key={s} href="#" className="size-9 bg-zinc-800 hover:bg-brand hover:text-zinc-950 text-zinc-400 rounded flex items-center justify-center text-[10px] font-bold tracking-wider transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </div>
            {[
              { h: "Products", l: ["Radiators", "Condensers", "Cooling Fans", "A/C Kits", "Heaters", "Fuel Tanks"] },
              { h: "Support", l: ["Track Order", "Warranty Policy", "Returns", "Shipping", "Contact"] },
              { h: "Company", l: ["Locations", "About Us", "Dealer Portal", "Careers", "Blog"] },
              { h: "Resources", l: ["Fitment Guide", "Install Videos", "Wholesale", "Industries", "Newsroom"] },
            ].map((col) => (
              <div key={col.h}>
                <h5 className="text-zinc-100 text-xs font-bold uppercase tracking-widest mb-6">{col.h}</h5>
                <ul className="flex flex-col gap-3">
                  {col.l.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-zinc-500 hover:text-brand transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-zinc-800/60 flex flex-col md:flex-row justify-between gap-6">
            <p className="text-xs text-zinc-600">© {new Date().getFullYear()} Radiator.com — All rights reserved.</p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {["Privacy Policy", "Terms of Service", "Do Not Sell My Info", "California Privacy", "Web Accessibility", "Sitemap"].map((l) => (
                <a key={l} href="#" className="text-xs text-zinc-600 hover:text-brand transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
