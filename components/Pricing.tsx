import React, { useState } from "react";
import Modules from "./Modules";

const buildBase = ["Project setup & configuration", "Responsive design", "CSS effects & polish", "Basic SEO", "Accessibility compliance", "Header & footer", "Homepage", "404 page", "Vercel deployment", "Analytics setup"];

type Module = {
  id: string;
  title: string;
  icon: string;
  isBuild: boolean;
  description: string;
  price: number;
  multiple: boolean;
  dependsOn?: string[];
  isDisabled?: boolean;
}

export default function Pricing() {

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

  const pricingModules: Module[] = [
    // BUILD MODULES
    {
      id: "additionalpages",
      title: "Additional Page",
      icon: "ri-file-add-line",
      isBuild: true,
      description: "Add custom pages such as services, about us, or any other standard content page.",
      price: 200,
      multiple: true
    },
    {
      id: "cmsintegration",
      title: "Basic CMS Integration",
      icon: "ri-edit-box-line",
      isBuild: true,
      description: "Update your own text and images anytime without needing a developer.",
      price: 500,
      multiple: false
    },
    {
      id: "contactform",
      title: "Basic Contact Form",
      icon: "ri-mail-send-line",
      isBuild: true,
      description: "A professional contact form so visitors can reach you directly. Includes spam protection and email delivery.",
      price: 150,
      multiple: false
    },
    {
      id: "blog",
      title: "Basic Blog",
      icon: "ri-article-line",
      isBuild: true,
      description: "A blog system with a listing page, filtering, article pages, and social sharing. Requires CMS.",
      price: 800,
      multiple: false,
      dependsOn: ["cmsintegration"]
    },
    {
      id: "blogpage",
      title: "Additional Blog Page",
      icon: "ri-file-list-line",
      isBuild: true,
      description: "Extra blog-related pages such as author profiles, topic tags, or category listings.",
      price: 150,
      multiple: true,
      dependsOn: ["cmsintegration", "blog"]
    },
    {
      id: "legalpage",
      title: "Legal Page",
      icon: "ri-shield-check-line",
      isBuild: true,
      description: "A clean, professional page built for your legal documentation.",
      price: 75,
      multiple: true
    },
    {
      id: "animations",
      title: "Basic Animations",
      icon: "ri-magic-line",
      isBuild: true,
      description: "Smooth scroll animations and transitions that make your site feel modern and engaging.",
      price: 75,
      multiple: false
    },

    // MAINTENANCE MODULES
    {
      id: "basemaintenance",
      title: "Base Maintenance",
      icon: "ri-tools-line",
      isBuild: false,
      description: "Peace of mind that your site stays online, secure, and up-to-date. Includes monitoring, security patches, performance checks, and small fixes.",
      price: 125,
      multiple: false
    },
    {
      id: "cmsblogmanage",
      title: "CMS/Blog Management",
      icon: "ri-database-2-line",
      isBuild: false,
      description: "Code monitoring for CMS Integration and other CMS-powered add-ons.",
      price: 50,
      multiple: false,
      dependsOn: ["basemaintenance"],
      isDisabled: selectedModules["cmsintegration"] === false
    },
    {
      id: "formmanage",
      title: "Form Management",
      icon: "ri-inbox-line",
      isBuild: false,
      description: "Code monitoring for the Basic Contact Form add-on.",
      price: 25,
      multiple: false,
      dependsOn: ["basemaintenance"],
      isDisabled: selectedModules["contactform"] === false
    }
  ];

  const buildModules = pricingModules.filter(item => item.isBuild === true);
  const maintenanceModules = pricingModules.filter(item => item.isBuild === false);

  function calculateBuildTotal() {
    let total = 1000;

    buildModules.forEach(module => {
      total += module.price * (selectedModules[module.id] as number);
    });

    return total;
  }

  function calculateMonthlyTotal() {
    let total = 0;

    maintenanceModules.forEach(module => {
      total += module.price * (selectedModules[module.id] as number);
    });

    return total;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="rounded-2xl border-2 border-amber-400 bg-amber-50 p-6">
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div>
              <div className="flex items-center flex-wrap gap-2">
                <div className="w-5 h-5 bg-amber-500 rounded-full flex justify-center items-center">
                  <i className="ri-check-line text-xs text-white"></i>
                </div>
                <span className="text-sm font-bold text-stone-900 uppercase tracking-wide">Base package</span>
                <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full font-semibold">Always included</span>
              </div>
              <p className="text-xs text-stone-500 mt-1.5 sm:ml-7">Everything you need to launch a solid website.</p>
            </div>
            <span className="text-xl font-bold text-stone-900">$1,000</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-4 sm:ml-7">
            {buildBase.map((item, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <i className="ri-checkbox-circle-line text-sm text-amber-600"></i>
                <span className="text-xs text-stone-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <Modules
          title="Add-on Modules"
          modules={buildModules}
          pricingModules={pricingModules}
          selectedModules={selectedModules}
          setSelectedModules={setSelectedModules}
        />
        <Modules
          title="Monthly Maintenance"
          modules={maintenanceModules}
          pricingModules={pricingModules}
          selectedModules={selectedModules}
          setSelectedModules={setSelectedModules}
        />
      </div>
      <div className="col-span-1">
        <div className="sticky top-24 bg-stone-900 text-white rounded-2xl p-7 space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-stone-300">Your estimate</h3>
          <div className="grid grid-cols-[1fr_auto] gap-3 text-sm">
            <span className="text-stone-400">Base package</span>
            <span className="text-white font-semibold text-right">$1,000</span>
            {buildModules.map((module) => (
              Boolean(selectedModules[module.id]) &&
                <React.Fragment key={module.id}>
                  <span className="text-stone-400">
                    {module.title}
                    {(selectedModules[module.id] as number) > 1 && " x" + selectedModules[module.id]}
                  </span>
                  <span className="text-white font-semibold text-right">
                    ${(module.price * (selectedModules[module.id] as number)).toLocaleString()}
                  </span>
                </React.Fragment>
            ))}
          </div>
          <div className="border-t border-stone-700 pt-4">
            <div className="flex justify-between items-center font-bold">
              <span className="text-white">Build Total</span>
              <span className="text-xl text-amber-400">${calculateBuildTotal().toLocaleString()}</span>
            </div>
            <div className="text-sm text-stone-400 space-y-1 mt-2">
              <div className="flex justify-between">
                <span>Due upfront (50%)</span>
                <span>${Math.ceil(calculateBuildTotal() / 2).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Due on delivery (50%)</span>
                <span>${Math.floor(calculateBuildTotal() / 2).toLocaleString()}</span>
              </div>
            </div>
          </div>
          {calculateMonthlyTotal() > 0 && <div className="border-t border-stone-700 pt-4">
            <div className="grid grid-cols-[1fr_auto] gap-3 text-sm">
              {maintenanceModules.map((module) => (
                Boolean(selectedModules[module.id]) &&
                  <React.Fragment key={module.id}>
                    <span className="text-stone-400">
                      {module.title}
                      {(selectedModules[module.id] as number) > 1 && " x" + selectedModules[module.id]}
                    </span>
                    <span className="text-white font-semibold text-right">
                      ${(module.price * (selectedModules[module.id] as number))}
                    </span>
                  </React.Fragment>
              ))}
            </div>
            <div className="flex justify-between items-center font-bold mt-3">
              <span className="text-white">Monthly Total</span>
              <span className="text-lg text-amber-400">${calculateMonthlyTotal()}/mo</span>
            </div>
          </div>}
          <a href="#contact" className="bg-amber-400 text-stone-900 text-sm font-bold text-center py-3.5 rounded-xl block mb-3 transition-colors hover:bg-amber-300">Start Your Project</a>
          <p className="text-xs text-stone-500 text-center">Fixed pricing. No surprises, no negotiations — what you see is what you pay.</p>
        </div>
      </div>
    </div>
  );
}