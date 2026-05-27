import React from "react";
import { PortableText } from "next-sanity";

type Legal = {
  title: string;
  updatedAt: string;
  items: {
    title: string;
    text: any;
  }[];
}

export default function Page({ subtitle, legalData }: { subtitle: string, legalData: Legal; }) {
  return (
    <main className="bg-background">
      <div className="max-w-3xl mx-auto px-6 pt-28">
        <p className="subtitle">{subtitle}</p>
        <h2>{legalData.title}</h2>
        <p className="text-sm text-stone-400 mt-4 mb-10">Last updated: {new Date(legalData.updatedAt).toDateString()}</p>
        <article className="text-stone-600 space-y-8">
          {legalData.items?.map((section: any, index: number) => (
            <div key={index} className="legal">
              <h3 className="text-lg font-semibold text-stone-900 mb-3">
                {subtitle === "Legal" ? (index + 1) + ". " : ""}{section.title}
              </h3>
              <PortableText value={section.text} />
            </div>
          ))}
        </article>
      </div>
    </main>
  );
}