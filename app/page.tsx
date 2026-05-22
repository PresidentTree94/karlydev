import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';

const services = [
  {
    title: "Design & Build",
    description: "Every site is custom-built from scratch. No templates, no cookie-cutter layouts — just a fast, unique website that's perfect for you or your business.",
    bg: "bg-amber-50",
    box: "bg-amber-100",
    icon: "ri-layout-4-line",
    color: "text-amber-700"
  },
  {
    title: "SEO & Accessibility",
    description: "Your site is built to rank on Google and work well for every visitor — including people using screen readers or mobile devices.",
    bg: "bg-stone-50",
    box: "bg-stone-100",
    icon: "ri-search-eye-line",
    color: "text-stone-700"
  },
  {
    title: "CMS Integration",
    description: "Want to update your own text and images? I add an easy content editor so you can make changes anytime without calling a developer.",
    bg: "bg-rose-50",
    box: "bg-rose-100",
    icon: "ri-edit-box-line",
    color: "text-rose-700"
  },
  {
    title: "Contact Forms",
    description: "A professional contact form that actually works — with spam protection and reliable delivery so you never miss a lead.",
    bg: "bg-teal-50",
    box: "bg-teal-100",
    icon: "ri-mail-send-line",
    color: "text-teal-700"
  },
  {
    title: "Blog Systems",
    description: "A full blog setup to publish articles, share updates, and boost your search presence — all managed through the content editor.",
    bg: "bg-violet-50",
    box: "bg-violet-100",
    icon: "ri-article-line",
    color: "text-violet-700"
  },
  { 
    title: "Scroll Animations",
    description: "Subtle, purposeful scroll animations that make your site feel modern and engaging without being distracting.",
    bg: "bg-orange-50",
    box: "bg-orange-100",
    icon: "ri-magic-line",
    color: "text-orange-700"
  }
];

const contracts = [
  {
    title: "Payment Terms",
    description: "All projects use 50/50 payment terms — 50% paid upfront before work begins, and the remaining 50% due upon delivery. Payments are processed through Stripe.",
    icon: "ri-money-dollar-circle-line"
  },
  {
    title: "Third-Party Accounts",
    description: "You create your own Vercel and related accounts. I am added as a collaborator to deploy your site and configure the content editor. You retain full ownership and admin access to both platforms at all times.",
    icon: "ri-cloud-line"
  },
  {
    title: "Revisions & Scope",
    description: "Each project includes two rounds of revisions within the agreed scope. Additional changes or new features outside the original brief are quoted separately.",
    icon: "ri-time-line"
  },
  {
    title: "Maintenance",
    description: "Optional monthly maintenance subscriptions cover hosting management, code updates, uptime monitoring, security updates, performance checks, and analytics reporting.",
    icon: "ri-shield-check-line"
  },
  {
    title: "Communication",
    description: "All communication is handled by email. I aim to respond within 48 hours on business days. A project brief is shared before work begins to align on requirements.",
    icon: "ri-customer-service-2-line"
  },
  {
    title: "Cancellation",
    description: "Either party may cancel before delivery. Work completed up to that point is billed proportionally. The upfront deposit is non-refundable once development begins. A written notice by email is all that's required.",
    icon: "ri-close-circle-line"
  }
];

const contacts = [
  { title: "Email", text: "karlysams1218@gmail.com", icon: "ri-mail-line" },
  { title: "Response time", text: "Within 48 hours (business days)", icon: "ri-time-line" },
  { title: "Availability", text: "Remote-only in the US", icon: "ri-global-line" }
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex justify-center items-center">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-amber-100/60"></div>
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-stone-200/50"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-amber-50/40"></div>
        </div>
        <div className="relative max-w-6xl text-center p-6 flex flex-col items-center my-16">
          <div className="flex items-center gap-2 uppercase text-stone-600 bg-white border border-stone-200 px-4 py-2 rounded-full tracking-widest text-xs font-semibold">
            <span className="w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse"></span>
            Available for new projects
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-stone-900 mt-10 mb-8">Websites built right, <span className="italic text-amber-500 block">priced fairly.</span></h1>
          <p className="text-stone-500 text-lg md:text-xl max-w-2xl">Freelance junior web developer crafting clean, fast, accessible sites for small businesses and creatives. Start with a base, add only what you need.</p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
            <a href="#" className="bg-stone-900 text-white font-semibold px-8 py-4 rounded-full transition-colors hover:bg-stone-700">View My Work</a>
            <a href="#pricing" className="bg-white border border-stone-300 text-stone-700 font-semibold px-8 py-4 rounded-full transition-colors hover:border-stone-500 hover:text-stone-900">Build Your Quote</a>
            <a href="#contact" className="text-stone-500 font-medium underline underline-offset-4 transition-colors hover:text-stone-800">Let's talk <i className="ri-arrow-right-line"></i></a>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services">
        <div>
          <div className="max-w-xl mb-16">
            <p className="subtitle">What I do</p>
            <h2>Build to a brief, not a template.</h2>
            <p className="text-stone-500 mt-4">I work with a base package + optional modules so you only pay for what your project actually needs. Everything ships responsive, accessible, and optimized.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div key={index} className={`rounded-2xl p-7 ${service.bg} text-center sm:text-left`}>
                <div className={`w-10 h-10 ${service.box} rounded-xl flex justify-center items-center mx-auto sm:mx-0`}>
                  <i className={`${service.icon} ${service.color} text-xl`}></i>
                </div>
                <h3 className="font-semibold text-stone-900 mt-4 mb-1.5">{service.title}</h3>
                <p className="text-sm text-stone-500">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 p-6 bg-stone-50 border border-stone-200 rounded-2xl mt-12 text-sm text-center sm:text-left">
            <div className="w-10 h-10 bg-stone-200 rounded-xl flex justify-center items-center">
              <i className="ri-price-tag-3-line text-xl text-stone-600"></i>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-stone-800 mb-0.5">No bundles, no bloat.</p>
              <p className="text-stone-500">Build your own quote — pick exactly what your project needs.</p>
            </div>
            <a href="#pricing" className="font-semibold text-stone-800 transition-colors hover:text-amber-600">See pricing <i className="ri-arrow-down-line"></i></a>
          </div>
        </div>
      </section>
      {/* Work Section */}
      <section id="work">
        <div>
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-12">
            <div>
              <p className="subtitle">Selected work</p>
              <h2>Recent projects.</h2>
            </div>
            <p className="text-stone-500 text-sm max-w-xs">Fresh projects will be showcased here as soon as they're ready.</p>
          </div>
          <div className="bg-white px-6 py-24 rounded-2xl border border-stone-200 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-stone-100 rounded-2xl flex justify-center items-center mb-6">
              <i className="ri-tools-line text-2xl text-stone-400"></i>
            </div>
            <h3 className="font-display text-xl font-semibold text-stone-800">Projects are being crafted right now</h3>
            <p className="text-stone-500 text-sm max-w-md mt-2 mb-6">Check back soon — exciting work is on the way. In the meantime, feel free to reach out if you'd like to be part of the showcase.</p>
            <a href="#contact" className="text-sm font-medium text-amber-600 transition-colors hover:text-amber-700">Start a project <i className="ri-arrow-right-line"></i></a>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing">
        <div>
          <div className="max-w-xl mb-14">
            <p className="subtitle">Transparent pricing</p>
            <h2>Build your quote.</h2>
            <p className="text-stone-500 mt-4">Start with the base package, then add only the modules your project needs. No surprises, no hidden fees.</p>
          </div>
          <Pricing />
        </div>
      </section>
      {/* Contract Section */}
      <section id="terms">
        <div>
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 mb-16">
            <div>
              <p className="subtitle">How I work</p>
              <h2>Clear terms. No surprises.</h2>
            </div>
            <p className="lg:text-right text-stone-500 text-sm max-w-sm">I keep things simple and transparent. Here's what to expect when we work together.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-sm">
            {contracts.map((contract, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center sm:text-left">
                <div className="w-10 h-10 bg-stone-100 rounded-xl flex justify-center items-center mx-auto sm:mx-0">
                  <i className={`${contract.icon} text-stone-600 text-xl`}></i>
                </div>
                <h3 className="font-semibold text-stone-900 mt-4 mb-2">{contract.title}</h3>
                <p className="text-stone-500">{contract.description}</p>
              </div>
            ))}
          </div>
          {/*<div className="bg-stone-900 rounded-2xl p-8 flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 mt-12">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white font-display">Want the full contract?</h3>
              <p className="text-sm text-stone-400 mt-2">A detailed contract is sent before any project begins. It covers IP, revisions, timelines, and cancellation policies.</p>
            </div>
            <a href="#contact" className="bg-amber-400 text-stone-900 text-sm font-bold px-7 py-3.5 rounded-xl transition-colors hover:bg-amber-300">Request Contract Draft</a>
          </div>*/}
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-16">
          <div>
            <p className="subtitle">Get in touch</p>
            <h2>Let's build something good.</h2>
            <p className="text-stone-500 mt-6 mb-10">Have a project in mind? Fill out the form and I'll get back to you within 24 hours with next steps and a project brief.</p>
            <div className="space-y-5">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-amber-50 rounded-xl">
                    <i className={`${contact.icon} text-amber-600 text-lg`}></i>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide">{contact.title}</p>
                    <p className="text-sm font-medium text-stone-800">{contact.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Contact />
        </div>
      </section>
    </main>
  );
}
