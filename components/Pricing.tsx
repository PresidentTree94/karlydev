"use client";
import React, { useState } from "react";
import Modules from "./Modules";

type Price = {
  baseprice: number;
  build: string[];
  modules: {
    id: string;
    title: string;
    icon: string;
    isBuild: boolean;
    description: string;
    price: number;
    multiple: boolean;
    dependsOn: string[];
    disabledBy: string;
  }[]
}

export default function Pricing({ pricingData }: { pricingData: Price; }) {

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

  const buildModules = pricingData.modules?.filter(item => item.isBuild === true);
  const maintenanceModules = pricingData.modules?.filter(item => item.isBuild === false);

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
            <span className="text-xl font-bold text-stone-900">${pricingData.baseprice.toLocaleString()}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-4 sm:ml-7">
            {pricingData.build.map((item, index) => (
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
          pricingModules={pricingData.modules}
          selectedModules={selectedModules}
          setSelectedModules={setSelectedModules}
        />
        <Modules
          title="Monthly Maintenance"
          modules={maintenanceModules}
          pricingModules={pricingData.modules}
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