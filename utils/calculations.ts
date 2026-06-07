import { Price } from "@/types/priceType";

export function calculateBuildTotal(buildModules: any[], selectedModules: Record<string, number | boolean>, pricingData: Price) {
  return buildModules.reduce((total: number, module: any) => {
    total += module.price * (selectedModules[module.id] as number);
    return total;
  }, pricingData.baseprice);
}

export function calculateMonthlyTotal(maintenanceModules: any[], selectedModules: Record<string, number | boolean>) {
  return maintenanceModules.reduce((total: number, module: any) => {
    total += module.price * (selectedModules[module.id] as number);
    return total;
  }, 0);
}