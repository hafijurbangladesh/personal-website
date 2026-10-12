/**
 * ALL personal data for the website lives here.
 * Edit this file to update the site — no component changes needed.
 *
 * Images referenced by filename (e.g. speaking photos) must be placed in src/assets/images/.
 */

export const identity = {
  name: 'Md. Hafijur Rahman',
  shortName: 'Hafijur Rahman',
  initials: 'HR',
  headline:
    'Technology & Digital Transformation Specialist | Digital Public Infrastructure (DPI) | GovTech | Enterprise Architecture | AI & Digital Government',
  /** Short job title used in SEO / JSON-LD. */
  jobTitle: 'Technology & Digital Transformation Specialist',
  tagline:
    'Translating policy and institutional priorities into scalable, interoperable, citizen-centric digital government.',
  location: 'Dhaka, Bangladesh',
  email: 'hafijur.bangladesh@gmail.com',
  phone: '+8801717508447',
  phoneDisplay: '+880 1717 508447',
  linkedin: 'https://www.linkedin.com/in/hafijur-bangladesh',
};

/** Current roles — shown in the hero under the headline. */
export const currentRoles = [
  { title: 'Consultant – International Partnership & e-Governance', org: 'SoftBD Ltd' },
  { title: 'Associate Professor, CSE', org: 'Daffodil International University' },
];

/** About — three short paragraphs, first person. */
export const about = [
  'For nearly two decades I have designed, architected and implemented large-scale digital government solutions in Bangladesh — Digital Public Infrastructure (DPI), GovTech platforms and citizen-centric public services. I have contributed to national platforms including myGov, D-Nothi, Doptor, the Grievance Redress System (GRS) and digital services for Local Government Institutions. Most recently, I served as Technology Specialist with UNDP Bangladesh’s Digital and AI Hub, working on DPI, enterprise and solution architecture, interoperability, responsible AI and digital governance.',
  'I am particularly interested in DPI and Digital Public Goods (DPG): reusable, interoperable and inclusive building blocks that enable whole-of-government ecosystems. Alongside this, my focus on responsible AI in government continues to grow — AI-enabled public services, institutional AI capability, AI governance and practical prototypes that show what is possible.',
  'Today I serve as Consultant for International Partnership & e-Governance at SoftBD Ltd and as Associate Professor of Computer Science and Engineering at Daffodil International University, bridging industry, government and academia. I welcome national and international collaboration on DPI, GovTech, AI-enabled government, enterprise architecture and interoperability.',
];

/** Impact numbers — stats strip under the hero. */
export const stats = [
  { value: '~20', label: 'years in digital government' },
  { value: '150,000+', label: 'D-Nothi users across 19,000+ offices' },
  { value: '45,000+', label: 'government websites on the National Portal Framework' },
  { value: '16,000+', label: 'offices served by the National E-Service System' },
  { value: '4,500+', label: 'Union Digital Centres monitored through UAMS' },
];

/** Expertise — six cards. `icon` is a key from src/components/Icon.astro. */
export const expertise = [
  {
    title: 'Digital Public Infrastructure & Digital Public Goods',
    description: 'Reusable, interoperable and inclusive building blocks for whole-of-government ecosystems.',
    icon: 'layers',
  },
  {
    title: 'Enterprise & Solution Architecture (TOGAF)',
    description: 'Architecture for national platforms, shared components and long-lived public systems.',
    icon: 'blueprint',
  },
  {
    title: 'Interoperability & API-driven Integration',
    description: 'Connecting registries and services through shared components and well-defined APIs.',
    icon: 'link',
  },
  {
    title: 'AI & Responsible AI in Government',
    description: 'AI-enabled public services, institutional AI capability, AI governance and prototypes.',
    icon: 'spark',
  },
  {
    title: 'GovTech & Digital Service Design',
    description: 'Citizen-centric digital public services designed for scale and inclusion.',
    icon: 'service',
  },
  {
    title: 'Technology Strategy, ToRs & Vendor Assurance',
    description: 'Technical strategy, terms of reference, architecture review and quality assurance.',
    icon: 'compass',
  },
];

export interface Role {
  title: string;
  org: string;
  start: string;
  end: string;
  highlights?: string[];
}

/** Experience timeline — newest first. */
export const experience: Role[] = [
  {
    title: 'Consultant – International Partnership & e-Governance',
    org: 'SoftBD Ltd',
    start: 'Aug 2026',
    end: 'Present',
    highlights: ['Advise on e-governance solutions and international partnerships.'],
  },
  {
    title: 'Associate Professor, CSE',
    org: 'Daffodil International University',
    start: 'Jan 2026',
    end: 'Present',
    highlights: [
      'Teach and mentor undergraduates in Software Engineering.',
      'Integrate real-world DPI, GovTech and architecture case studies.',
      'Contribute to curriculum development and industry–academia collaboration.',
    ],
  },
  {
    title: 'Technology Specialist, Digital and AI Hub',
    org: 'UNDP Bangladesh',
    start: 'Apr 2026',
    end: 'Aug 2026',
    highlights: [
      'Designed the technical setup, sandbox and prototype architecture for the AI Policy Lab in the Cabinet Division, including the AI Project Analyser and the AI-based Policy Performance Analyzer.',
      'Contributed to the Digital Service Delivery Standards.',
      'Provided architecture review, responsible-AI advisory and quality assurance.',
    ],
  },
  {
    title: 'Technology Analyst',
    org: 'UNDP Bangladesh',
    start: 'Feb 2023',
    end: 'Mar 2026',
    highlights: [
      'Technical Lead for Digital Public Financial Management for LGIs: redesigned five PFM services on a DPI-aligned architecture and piloted them in nine LGIs.',
      'Architected the NGO Affairs Bureau IT infrastructure and online system redesign.',
      'Contributed to the IDx Stack (Bangla Stack) and national DPI guidelines.',
      'Worked on AI prototypes including AI Document Reader and mySearch.',
    ],
  },
  {
    title: 'Adjunct Faculty, CSE',
    org: 'Dhaka International University',
    start: 'Sep 2025',
    end: 'Mar 2026',
  },
  {
    title: 'Solutions Architect',
    org: 'a2i',
    start: 'Jul 2018',
    end: 'Jan 2023',
    highlights: [
      'Architected myGov, integrating NID, BRN, NBR, Passport, ekPay and more through shared components: Citizen & Government SSO, digital locker, Service/Form/Dashboard Builders and Unified Service Tracker.',
      'Architecture Lead for Doptor, UBID and NISE.',
      'Technology leadership for judiciary platforms (Case Management, e-Filing, e-Cause List, JudiPay) and LISF.',
      'Led ekSheba, GRS and the Integrated Service Delivery Platform.',
      'Helped advance ekShop, NISE, GRS and Doptor toward Digital Public Goods recognition.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    org: 'a2i',
    start: 'Aug 2015',
    end: 'Jun 2018',
    highlights: [
      'Led architecture, database design and core framework of E-Nothi (later D-Nothi).',
      'Led design and development of Bangladesh’s first national SDG Tracker (sdg.gov.bd).',
      'Lead Developer of the National Portal Framework.',
      'Contributed to OISF.',
    ],
  },
  {
    title: 'Software Engineer',
    org: 'a2i',
    start: 'Sep 2013',
    end: 'Jul 2015',
    highlights: ['NESS, Digital Land Record System, ProMoS and TMS for the Prime Minister’s Office.'],
  },
  {
    title: 'Technology Assistant',
    org: 'a2i',
    start: 'Jun 2010',
    end: 'Aug 2013',
    highlights: ['UAMS, District E-Service System, portals for all 64 districts.'],
  },
  {
    title: 'Senior Web Developer',
    org: 'SoftBD Ltd',
    start: 'Apr 2009',
    end: 'Jun 2010',
  },
  {
    title: 'Software Developer',
    org: 'ValuePLUS Computer Systems Ltd',
    start: 'Aug 2008',
    end: 'Mar 2009',
    highlights: ['ERP systems BPE, BPC, IUMS, VIS.'],
  },
];

export interface Engagement {
  event: string;
  session?: string;
  role: string;
  year: number;
  /** Filename in src/assets/images/ (optional). */
  photo?: string;
  photoAlt?: string;
  /** Set to false to keep an entry in the file without showing it on the site. */
  published?: boolean;
}

/** Speaking & Engagements — newest first. Add new entries at the top. */
export const speaking: Engagement[] = [
  {
    event: 'Smart Bangladesh Summit 2023 — High-Level Conference “DPI & AI for #ZeroDigitalDivide”',
    session: 'Digitizing Public Services: Harnessing AI for Personalized Solutions',
    role: 'Panelist',
    year: 2023,
    photo: 'smart-bangladesh-summit.jpg',
    photoAlt:
      'Panel session at the Smart Bangladesh Summit 2023 on digitizing public services with AI, with Md. Hafijur Rahman among the panelists.',
  },
  {
    // TODO: add the event where the profile photo was taken, then set published: true.
    event: 'TODO: event where profile photo was taken',
    role: 'Speaker',
    year: 0, // TODO
    published: false,
  },
];

export const education = [
  {
    degree: 'Executive MBA in MIS',
    institution: 'University of Dhaka',
    period: '2017–2021',
  },
  {
    degree: 'B.Sc. in Computer Science and Engineering',
    institution: 'Shahjalal University of Science and Technology',
    period: '2003–2007',
  },
];

export const certifications = [
  { name: 'TOGAF® 9 Certified' },
  { name: 'GovStack Architect Program' },
  { name: 'PRINCE2 Practitioner', year: '2018' },
  { name: 'PRINCE2 Foundation', year: '2017' },
  { name: 'ITIL® Foundation in IT Service Management', year: '2022' },
];

export const memberships = [
  { role: 'Fellow Member', org: 'CTO Forum Bangladesh' },
  { role: 'Life Time Member', org: 'Bangladesh Computer Society' },
];

/** Teaching section. */
export const teaching = {
  intro:
    'Alongside practice, I teach — bringing real-world experience from national digital government platforms into the classroom.',
  positions: [
    {
      title: 'Associate Professor, CSE',
      institution: 'Daffodil International University',
      period: 'Jan 2026 – Present',
    },
    {
      title: 'Adjunct Faculty, CSE',
      institution: 'Dhaka International University',
      period: 'Sep 2025 – Mar 2026',
    },
  ],
  focus: [
    'Teaching and mentoring undergraduates in Software Engineering',
    'Real-world DPI, GovTech and architecture case studies in the curriculum',
    'Curriculum development and industry–academia collaboration',
  ],
  // TODO: add specific courses taught, if you want them listed.
};
