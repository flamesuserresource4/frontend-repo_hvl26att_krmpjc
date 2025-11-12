import { useState } from 'react'
import { Menu, X, ChevronRight, ArrowRight, BookOpen, Calendar, Trophy, Users, Building2, MapPin, Mail, Phone } from 'lucide-react'

function NavBar() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'About', href: '#' },
    { label: 'Programs', href: '#' },
    { label: 'Admissions', href: '#' },
    { label: 'Placements', href: '#' },
    { label: 'Research', href: '#' },
    { label: 'Contact', href: '#' },
  ]

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center text-white font-bold">DY</div>
            <div className="leading-tight">
              <div className="font-semibold text-slate-900">D Y Patil Technical Campus</div>
              <div className="text-xs text-slate-600">School of Engineering & Management</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-slate-700 hover:text-blue-700 transition-colors">{l.label}</a>
            ))}
            <a href="#" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Apply Now <ArrowRight size={16} />
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100">{l.label}</a>
              ))}
              <a href="#" className="px-3 py-2 rounded-md bg-blue-600 text-white text-center">Apply Now</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white" />
        <div className="absolute -top-32 -right-32 h-96 w-96 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-16 h-96 w-96 bg-indigo-200/40 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200">
            NAAC Accredited • AICTE Approved • Savitribai Phule Pune University Affiliated
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Empowering Future Innovators
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-xl">
            Join a vibrant campus that blends rigorous academics with industry-focused training, cutting-edge labs, and world-class placements.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Start Your Application <ChevronRight size={18} />
            </a>
            <a href="#programs" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md ring-1 ring-slate-300 text-slate-700 hover:bg-slate-50">
              Explore Programs
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { k: 'Recruiters', v: '300+' },
              { k: 'Alumni', v: '15,000+' },
              { k: 'Acre Campus', v: '40+' },
            ].map((s) => (
              <div key={s.k} className="p-4 rounded-lg bg-white ring-1 ring-slate-200 shadow-sm">
                <div className="text-2xl font-bold text-slate-900">{s.v}</div>
                <div className="text-xs uppercase tracking-wide text-slate-500">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-xl bg-white">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop"
              alt="Campus view"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white shadow-lg ring-1 ring-slate-200 rounded-xl p-4 flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center">
              <Trophy size={20} />
            </div>
            <div>
              <div className="font-semibold text-slate-900">Top Placement Records</div>
              <div className="text-sm text-slate-600">Consistent year-on-year growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProgramCard({ icon: Icon, title, desc }) {
  return (
    <div className="group p-6 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-700 grid place-items-center mb-4 group-hover:scale-110 transition-transform">
        <Icon />
      </div>
      <div className="font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-slate-600 text-sm">{desc}</div>
      <button className="mt-4 inline-flex items-center gap-1 text-sm text-blue-700">Learn more <ChevronRight size={16} /></button>
    </div>
  )
}

function Programs() {
  const programs = [
    { icon: BookOpen, title: 'Undergraduate', desc: 'B.E. programs in Computer, Mechanical, Civil, E&TC, and more.' },
    { icon: Users, title: 'Postgraduate', desc: 'M.E./MBA with specializations designed with industry partners.' },
    { icon: Trophy, title: 'Skill Development', desc: 'Value-added certifications and technology bootcamps.' },
    { icon: Calendar, title: 'Research & Innovation', desc: 'Incubation, patents, labs, and funded projects.' },
  ]

  return (
    <section id="programs" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Programs & Departments</h2>
            <p className="mt-1 text-slate-600">Choose from a wide range of industry-aligned programs.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-blue-700 hover:underline">View all departments <ArrowRight size={16} /></a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <ProgramCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Updates() {
  const news = [
    {
      tag: 'Announcement',
      title: 'Admissions Open 2025-26',
      date: 'Nov 10, 2025',
    },
    {
      tag: 'Event',
      title: 'Tech Symposium & Hackathon',
      date: 'Dec 05, 2025',
    },
    {
      tag: 'Achievement',
      title: 'Our Team wins Smart India Hackathon',
      date: 'Oct 28, 2025',
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">News & Events</h2>
            <p className="mt-1 text-slate-600">What’s happening around campus.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-blue-700 hover:underline">See all updates <ArrowRight size={16} /></a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((n) => (
            <article key={n.title} className="p-6 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm">
              <div className="text-xs inline-flex px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200">{n.tag}</div>
              <h3 className="mt-3 font-semibold text-slate-900">{n.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{n.date}</p>
              <button className="mt-4 inline-flex items-center gap-1 text-sm text-blue-700">Read more <ChevronRight size={16} /></button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Placements() {
  const stats = [
    { k: 'Highest Package', v: '₹ 38 LPA' },
    { k: 'Average Package', v: '₹ 6.5 LPA' },
    { k: 'Companies', v: '300+ Recruiters' },
  ]

  const partners = [
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/5f/Accenture.svg',
    'https://upload.wikimedia.org/wikipedia/commons/1/19/Infosys_logo.svg',
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Placements</h2>
            <p className="mt-1 text-slate-600">Strong industry connect and dedicated training ensures excellent outcomes.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-blue-700 hover:underline">Placement cell <ArrowRight size={16} /></a>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.k} className="p-6 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm">
              <div className="text-2xl font-bold text-slate-900">{s.v}</div>
              <div className="text-sm text-slate-600">{s.k}</div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <div className="text-sm font-medium text-slate-700 mb-4">Our Recruiters</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {partners.map((src, i) => (
              <div key={src} className="h-12 bg-white ring-1 ring-slate-200 rounded-lg grid place-items-center p-3">
                <img src={src} alt={`partner-${i}`} className="h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to build your future?</h3>
            <p className="mt-2 text-blue-100 max-w-xl">Applications are open for the upcoming academic year. Take the first step toward a rewarding career.</p>
          </div>
          <div className="flex gap-3">
            <a href="#" className="inline-flex items-center gap-2 bg-white text-blue-700 font-medium px-5 py-3 rounded-md hover:bg-blue-50">
              Apply Now <ArrowRight size={18} />
            </a>
            <a href="#" className="inline-flex items-center gap-2 ring-1 ring-white/70 text-white px-5 py-3 rounded-md hover:bg-white/10">
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="pt-16 pb-10 bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-white grid place-items-center text-blue-700 font-bold">DY</div>
            <div className="font-semibold text-white">D Y Patil Technical Campus</div>
          </div>
          <p className="mt-4 text-sm text-slate-400">Cultivating excellence in education, research, and innovation.</p>
          <div className="mt-4 flex items-start gap-3 text-sm">
            <MapPin size={18} className="mt-0.5" />
            <span>Akurdi, Pune, Maharashtra, India</span>
          </div>
          <div className="mt-2 flex items-center gap-3 text-sm">
            <Phone size={18} /> <span>+91-00000 00000</span>
          </div>
          <div className="mt-2 flex items-center gap-3 text-sm">
            <Mail size={18} /> <span>admissions@example.edu</span>
          </div>
        </div>

        <div>
          <div className="font-semibold text-white">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-white" href="#">About</a></li>
            <li><a className="hover:text-white" href="#">Programs</a></li>
            <li><a className="hover:text-white" href="#">Admissions</a></li>
            <li><a className="hover:text-white" href="#">Placements</a></li>
            <li><a className="hover:text-white" href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-white">Student Corner</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-white" href="#">Exam Cell</a></li>
            <li><a className="hover:text-white" href="#">Clubs & Societies</a></li>
            <li><a className="hover:text-white" href="#">Scholarships</a></li>
            <li><a className="hover:text-white" href="#">Anti-Ragging</a></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-white">Locate Us</div>
          <div className="mt-3 rounded-lg overflow-hidden ring-1 ring-slate-700">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXB8ZW58MHwwfHx8MTc2MjkzMjA5N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Map" className="w-full h-40 object-cover" />
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500 text-center">
        © {new Date().getFullYear()} D Y Patil Technical Campus. All rights reserved.
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <Programs />
      <Placements />
      <Updates />
      <CTA />
      <Footer />
    </div>
  )
}
