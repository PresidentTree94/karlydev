"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-background relative flex justify-center items-center">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-amber-100/60"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-stone-200/50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-amber-50/40"></div>
      </div>
      <div className="relative text-center p-6 my-16">
        <span className="text-[14rem] font-display text-stone-200/80 font-black leading-none">404</span>
        <div className="-mt-8">
          <h1 className="text-4xl text-stone-900">Page not found</h1>
          <p className="text-stone-500 max-w-md text-lg mt-4 mb-12">The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
          <p className="text-sm text-stone-400 font-mono">{usePathname()}</p>
          <Link href="/" className="inline-block bg-stone-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-stone-700 transition-colors mt-8">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}