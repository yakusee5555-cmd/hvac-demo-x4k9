export const business = {
  name: "L Furnace Mechanicals",
  shortName: "L Furnace",
  owner: "Lamont Ledford",
  phone: "(317) 506-3433",
  phoneHref: "tel:+13175063433",
  email: "info@lfurnacemechanicals.com",
  address: "Indianapolis, IN 46268",
  tagline: "Heating & cooling done right.",
  since: 2010,
  rating: "4.9",
};

export const media = {
  heroPoster: "/images/hero-poster.jpg",
  about: "/images/about.jpg",
  whyChooseUs: "/images/why-choose-us.jpg",
  ctaBand: "/images/cta-band.jpg",
  acRepair: "/images/service-ac-repair.jpg",
  acReplacement: "/images/service-ac-replacement.jpg",
  acInstallation: "/images/service-ac-installation.jpg",
  heating: "/images/service-heating.jpg",
  furnaceRepair: "/images/service-furnace-repair.jpg",
  furnaceInstallation: "/images/service-furnace-installation.jpg",
};

export const services = [
  { title: "AC Repair", description: "Fast, accurate diagnostics and lasting repairs that get your cooling back the same day.", image: media.acRepair },
  { title: "AC Replacement", description: "Right-sized, high-efficiency systems that cut energy bills and end the breakdown cycle.", image: media.acReplacement },
  { title: "AC Installation", description: "Clean, code-perfect installs with proper sizing, ductwork checks, and full startup testing.", image: media.acInstallation },
  { title: "Heating Services", description: "Tune-ups, safety checks, and repairs that keep your whole heating system running reliably.", image: media.heating },
  { title: "Furnace Repair", description: "No-heat calls answered fast. We fix ignition, blower, and airflow issues on all major brands.", image: media.furnaceRepair },
  { title: "Furnace Installation", description: "High-efficiency furnace replacements installed in a day, backed by our workmanship warranty.", image: media.furnaceInstallation },
];

export const serviceAreas = [
  "Indianapolis",
  "Greenwood",
  "Westfield",
  "Brownsburg",
  "Noblesville",
  "Fishers",
  "Carmel",
  "Zionsville",
  "Avon",
  "Plainfield",
];

export const hours = [
  { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
  { days: "Saturday", time: "9:00 AM – 2:00 PM" },
  { days: "Sunday", time: "Closed" },
  { days: "Emergency service", time: "24/7" },
];

export const nav = [
  { to: "#home", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#services", label: "Services" },
  { to: "#reviews", label: "Reviews" },
  { to: "#faq", label: "FAQ" },
  { to: "#contact", label: "Contact" },
] as const;
