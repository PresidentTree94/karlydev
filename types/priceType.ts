export type Price = {
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