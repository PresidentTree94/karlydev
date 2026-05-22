"use client";
import { useState, useEffect } from "react";

const navs = [
  { text: "Services", link: "#services" },
  { text: "Work", link: "#work" },
  { text: "Pricing", link: "#pricing" },
  { text: "Contract", link: "#contract" },
  { text: "Contact", link: "#contact" }
];

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`flex items-center h-16 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"} transition-all duration-300 fixed top-0 inset-x-0 z-1`}>
      <div className="flex justify-between items-center w-full">
        <a href="#" className="font-display font-bold text-lg text-stone-800">karly<span className="text-amber-500">.dev</span></a>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-stone-700">
          {navs.map((n, index) => (
            <a key={index} href={n.link}>{n.text}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}