import Head from "next/head";
import { PortableText } from "next-sanity";

type Legal = {
  title: string;
  slug: string;
  updatedAt: string;
  items: {
    title: string;
    text: any;
  }[];
}

export default function Page({ subtitle, legalData }: { subtitle: string, legalData: Legal; }) {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "url": `https://karlydev.vercel.app/${legalData.slug}`,
              "name": legalData.title,
              "description": `${legalData.title} for karly.dev's freelance junior web development services.`
            }).replace(/</g, "\\u003c")
          }}
        />
      </Head>
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
    </>
  );
}