export interface Project {
  id: string;
  title: string;
  location: string;
  type: string;
  area: string;
  description: string;
  role: string[];
  image: string;
  details?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "flour-child",
    title: "Flour Child",
    location: "Richmond, Melbourne",
    type: "Hospitality",
    area: "355 sqm",
    description: "A vibrant Italian-inspired restaurant and bar designed to create a lively and social dining environment. The interior integrates contemporary materials, dynamic seating layouts, and an energetic atmosphere that reflects the brand’s playful identity.",
    role: [
      "Assisted in material and finishes selection",
      "Prepared construction documentation",
      "Coordinated with suppliers and consultants"
    ],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    details: [
      "LED-lit wine shelving backdrop",
      "Banquette seating with feature lighting",
      "Island bar in green stone",
      "CNC metal bulkhead"
    ]
  },
  {
    id: "melbourne-winery",
    title: "Melbourne Winery",
    location: "Flinders Lane, Melbourne",
    type: "Hospitality",
    area: "635 sqm",
    description: "A contemporary urban winery redefining the cellar door experience. The space combines tasting areas, wine labs, cheese and oyster bars, and flexible dining zones, blending heritage character with modern design for an immersive experience.",
    role: [
      "Assisted in material and finishes selection",
      "Prepared construction documentation",
      "Coordinated with suppliers and consultants"
    ],
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
    details: [
      "Curved LED-lit wine pigeonhole display",
      "Stacked wine barrels on metal racking",
      "Timber grid feature ceiling in Black Japan finish",
      "Checkered flooring with leather high seating"
    ]
  },
  {
    id: "fat-jaks",
    title: "Fat Jaks",
    location: "Blackburn, VIC",
    type: "Hospitality – QSR",
    area: "91 sqm",
    description: "A vibrant quick-service dining venue with a bold, playful brand identity. The interior combines robust materials, contemporary finishes, and dynamic seating to create an engaging, casual atmosphere supporting high-traffic durability.",
    role: [
      "Layout planning and concept design",
      "Preparation of documentation",
      "Coordination with client and suppliers",
      "Building permit support"
    ],
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
    details: [
      "Octagonal ceiling and planter feature wall",
      "Vibrant blue banquettes with mixed timber",
      "Vertical timber cladding with warm white LED signage",
      "Blue slatted counter with concrete rear wall"
    ]
  },
  {
    id: "harris-blake",
    title: "Harris Blake & Parsons",
    location: "Croydon, VIC",
    type: "Retail – Optometry",
    area: "58 sqm",
    description: "A community optometry practice. The design creates a welcoming and functional environment, integrating the lab, retail eyewear display, and patient waiting areas, balancing professional healthcare requirements with approachable finishes.",
    role: [
      "Layout planning and concept design",
      "Preparation of documentation",
      "Coordination with client and suppliers",
      "Building permit support"
    ],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    details: [
      "Retail eyewear displays with integrated lighting",
      "Functional lab and sterile coordination spaces",
      "Approachable timber accents and clear circulation",
      "Welcoming entry with suspended greenery"
    ]
  }
];

export const EXPERIENCE = [
  {
    period: "Oct 2022 - Present",
    role: "Interior Designer & Project Coordinator",
    company: "Two Design",
    location: "Melbourne, VIC",
    highlights: [
      "Led design development for hospitality and high-end residential projects",
      "Supported authority approvals including Building Permits and RDM processes",
      "Translated client briefs into resolved spatial layouts and material strategies",
      "Coordinated with consultants and contractors to maintain design intent"
    ]
  },
  {
    period: "2014 - 2021",
    role: "Owner & Lead Interior Designer",
    company: "Nsquare Interior Design",
    location: "Pune, India",
    highlights: [
      "Founded and led a boutique studio delivering residential and commercial projects",
      "Directed projects end-to-end, from concept design to final execution",
      "Developed custom mood boards and material palettes tailored to client vision",
      "Managed multiple simultaneous projects with strict budget and timeline oversight"
    ]
  }
];
