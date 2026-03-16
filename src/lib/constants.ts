export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "artic-research",
    title: "Artic Research",
    description: "Help you see what your audience really thinks, feels, and needs",
    defaultImage: "/assets/ui/wrapper/bg/IMG(6).png",
    hoverImage: "/assets/ui/wrapper/bg/IMG(6).png",
  },
  {
    id: "artic-data",
    title: "Artic Data",
    description: "Turn complex numbers into clear visuals and insights you can use right away",
    defaultImage: "/assets/ui/wrapper/bg/IMG(5).png",
    hoverImage: "/assets/ui/wrapper/bg/IMG(5).png",
  },
  {
    id: "artic-consulting",
    title: "Artic Consulting",
    description: "Shape smart strategies that actually get results for you",
    defaultImage: "/assets/ui/wrapper/bg/IMG(4).png",
    hoverImage: "/assets/ui/wrapper/bg/IMG(4).png",
  },
  {
    id: "artic-publishing",
    title: "Artic Publishing",
    description: "Turn your research into engaging and trustable reports or publications",
    defaultImage: "/assets/ui/wrapper/bg/IMG(3).png",
    hoverImage: "/assets/ui/wrapper/bg/IMG(3).png",
  },
  {
    id: "artic-academy",
    title: "Artic Academy",
    description: "Help your team learn, think, and lead with data, practical and inspiring",
    defaultImage: "/assets/ui/wrapper/bg/IMG(2).png",
    hoverImage: "/assets/ui/wrapper/bg/IMG(2).png",
  },
  {
    id: "artic-policy-lab",
    title: "Artic Policy Lab",
    description: "Experiment with new ideas & help you build policies that make a real difference",
    defaultImage: "/assets/ui/wrapper/bg/IMG(1).png",
    hoverImage: "/assets/ui/wrapper/bg/IMG(1).png",
  },
  {
    id: "artic-insight-hub",
    title: "Artic Insight Hub",
    description: "Open access to data, stories, and visuals that help everyone",
    defaultImage: "/assets/ui/wrapper/bg/IMG.png",
    hoverImage: "/assets/ui/wrapper/bg/IMG.png",
  },
] as const;

export const SITE_CONFIG = {
  name: "Artic Analytica",
  description: "We help governments, businesses, and organizations make smarter decisions through research, data, and strategy that actually make sense.",
  url: "https://articanalytica.com",
} as const;
