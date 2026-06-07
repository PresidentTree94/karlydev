export type Home = {
  availability: boolean;
  headingMain: string;
  headingAccent: string;
  subheading: string;
  services: {
    title: string;
    description: string;
    icon: string;
    boxBackground: string;
    iconBackground: string;
    iconColor: string;
  }[];
  terms: {
    title: string;
    description: string;
    icon: string;
  }[];
}