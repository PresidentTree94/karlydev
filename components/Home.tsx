"use client";
import { useState } from "react";
import Link from "next/link";
import Pricing from "./Pricing";
import Contact from './Contact';
import { Home } from "@/types/homeType";
import { Price } from "@/types/priceType";

const contacts = [
  { title: "Email", text: "karlysams1218@gmail.com", icon: "ri-mail-line" },
  { title: "Response time", text: "Within 48 hours (business days)", icon: "ri-time-line" },
  { title: "Availability", text: "Remote-only in the US", icon: "ri-global-line" }
];

export default function HomePage({ heroData, pricingData }: { heroData: Home; pricingData: Price; }) {

  const [confirmProject, setConfirmProject] = useState(false);
  const [selectedModules, setSelectedModules] = useState<Record<string, number | boolean>>({
    additionalpages: 0,
    cmsintegration: false,
    contactform: false,
    blog: false,
    blogpage: 0,
    legalpage: 0,
    animations: false,
    basemaintenance: false,
    cmsblogmanage: false,
    formmanage: false
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "url": "https://karlydev.vercel.app",
            "name": "karly.dev - Freelance Web Developer",
            "description": "Building custom Next.js websites on Vercel with Sanity CMS and Resend add-ons."
          }).replace(/</g, "\\u003c")
        }}
      />
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
              <span className={`w-2 h-2 ${heroData.availability ? "bg-green-400" : "bg-red-400"} rounded-full inline-block animate-pulse`}></span>
              {heroData.availability ? "Available" : "Unavailable"} for new projects
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-stone-900 mt-10 mb-8">{heroData.headingMain} <span className="italic text-amber-500 block">{heroData.headingAccent}</span></h1>
            <p className="text-stone-500 text-lg md:text-xl max-w-2xl">{heroData.subheading}</p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
              <a href="#work" className="bg-stone-900 text-white font-semibold px-8 py-4 rounded-full transition-colors hover:bg-stone-700">View My Work</a>
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
              {heroData.services.map((service: any, index: number) => (
                <div key={index} className={`rounded-2xl p-7 ${service.boxBackground} text-center sm:text-left`}>
                  <div className={`w-10 h-10 ${service.iconBackground} rounded-xl flex justify-center items-center mx-auto sm:mx-0`}>
                    <i className={`${service.icon} ${service.iconColor} text-xl`}></i>
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
            <Pricing
              pricingData={pricingData}
              setConfirmProject={setConfirmProject}
              selectedModules={selectedModules}
              setSelectedModules={setSelectedModules}
            />
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
              {heroData.terms?.map((contract: any, index: number) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center sm:text-left">
                  <div className="w-10 h-10 bg-stone-100 rounded-xl flex justify-center items-center mx-auto sm:mx-0">
                    <i className={`${contract.icon} text-stone-600 text-xl`}></i>
                  </div>
                  <h3 className="font-semibold text-stone-900 mt-4 mb-2">{contract.title}</h3>
                  <p className="text-stone-500">{contract.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-stone-900 rounded-2xl p-8 flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 mt-12">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white font-display">Got questions?</h3>
                <p className="text-sm text-stone-400 mt-2">I cover everything from how Vercel works, to ownership, accounts, timelines, and what happens after launch.</p>
              </div>
              <Link href="/faq" className="bg-amber-400 text-stone-900 text-sm font-bold px-7 py-3.5 rounded-xl transition-colors hover:bg-amber-300">Read the FAQ</Link>
            </div>
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
            <Contact pricingData={pricingData} confirmProject={confirmProject} selectedModules={selectedModules} />
          </div>
        </section>
      </main>
    </>
  );
}