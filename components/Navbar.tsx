"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navs = [
  { text: "Services", link: "/#services" },
  { text: "Work", link: "/#work" },
  { text: "Pricing", link: "/#pricing" },
  { text: "Terms", link: "/#terms" },
  { text: "Contact", link: "/#contact" }
];

export default function Navbar() {

  const pathname = usePathname();
  const [open, setOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (pathname !== "/" || open) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className={`${scrolled || open ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"} ${scrolled ? "transition-all duration-300" : ""} fixed top-0 inset-x-0 z-1`}>
      <div className="flex flex-col md:flex-row justify-between md:items-center w-full !p-0">
        <div className="flex justify-between items-center w-full h-16 px-6">
          <Link href="/" className="font-display font-bold text-lg text-stone-800">karly<span className="text-amber-500">.dev</span></Link>
          <i className={`${open ? "ri-close-line" : "ri-menu-3-line"} text-stone-800 text-xl inline-block md:hidden`} onClick={() => setOpen(!open)}></i>
        </div>
        <nav className={`${open ? "flex" : "hidden md:flex"} flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 text-sm font-medium text-stone-700 px-6 py-6 md:py-0 border-t md:border-t-0 border-stone-100`}>
          {navs.map((n, index) => (
            <a key={index} href={n.link} className="transition-colors hover:text-amber-600" onClick={() => setOpen(false)}>{n.text}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}