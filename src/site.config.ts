/**
 * Site-wide configuration. Change values here — everything else reads from this file.
 */
export const siteConfig = {
  /** The single brand accent colour. All accent tints (incl. dark mode) are derived from it. */
  accent: '#0B2545',

  /** Highlight colour used on the dark hero panel (title highlight, primary hero button, decorations). */
  highlight: '#F2C14E',

  title: 'Md. Hafijur Rahman',
  description:
    'Technology & Digital Transformation Specialist working on Digital Public Infrastructure, GovTech, enterprise architecture and responsible AI in government.',
  locale: 'en_GB',

  /** Path to the downloadable CV in /public. */
  cvPath: '/cv.pdf',

  /** Primary navigation (anchors on the home page). */
  nav: [
    { label: 'About', href: '/#about' },
    { label: 'Work', href: '/#work' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Speaking', href: '/#speaking' },
    { label: 'Insights', href: '/insights/' },
    { label: 'Contact', href: '/#contact' },
  ],

  /** Optional integrations — set in .env / Cloudflare Pages environment variables. */
  formspreeId: import.meta.env.PUBLIC_FORMSPREE_ID as string | undefined,
  cfBeaconToken: import.meta.env.PUBLIC_CF_BEACON_TOKEN as string | undefined,
};
