import { useEffect, useState } from 'react';
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ChevronDown,
  Server,
} from 'lucide-react';

const projects = [
  {
    title: 'KCKN Glass — Auto Glass & Repair',
    description:
      'Full-stack Utah Located auto glass business site with service booking, gallery, financing info, and a custom admin dashboard. Built for a real client with Twilio SMS integration and MongoDB backend.',
    liveUrl: 'https://kcknglass.com/',
    githubUrl:
      'https://github.com/Programmer-stevenson/Los-s-Auto-Glass-',
    iconLabel: 'Utah Auto Glass Business Site',
    screenshot: '/los.jpg',
    tech: ['Next.js', 'Express', 'MongoDB', 'Twilio', 'Tailwind CSS'],
  },

  {
    title: 'Vorus Luxury Cologne',
    description:
      'A fictional luxury cologne brand I designed and built end-to-end — I invented the product and brand identity, then handcrafted the entire web experience from scratch. Every visual, animation, and component is custom, with a complete cart, checkout flow, and sample subscription concept.',
    liveUrl: 'https://vorus.onrender.com',
    githubUrl: 'https://github.com/Programmer-stevenson/Vorus',
    iconLabel: 'Fictional Product & Brand Design',
    screenshot: '/vorus.png',
    tech: ['React', 'TypeScript', 'MERN Stack', 'Framer Motion'],
  },

  {
    title: 'Pétale — Artisan Florist',
    description:
      'One of my first complex React builds — a fictional luxury florist concept where I designed the logo, created all of the imagery, and handcrafted the entire front end from scratch. Features a bouquet shop showcase, featured products, a weddings section, and a same-day delivery concept. Front-end demo only.',
    liveUrl: 'https://petale-luxury-floral.onrender.com/',
    githubUrl: 'https://github.com/Programmer-stevenson',
    iconLabel: 'Fictional Luxury Florist',
    screenshot: '/Petale.jpg',
    tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Responsive Design'],
  },

  {
    title: 'Super Duper Scooper',
    description:
      'Live website demo built for a real Utah dog waste removal and lawn protection company serving West Jordan and the Salt Lake Valley. Features a quote-request form wired to a serverless form service, service-area coverage, a photo-confirmation visit concept, and a clean, conversion-focused design.',
    liveUrl: 'https://super-duper-scoopers.onrender.com/',
    githubUrl: 'https://github.com/Programmer-stevenson',
    iconLabel: 'Real Client · Live Website Demo',
    screenshot: '/superScoop.png',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Form API'],
  },

  {
    title: 'Hazey Tattoos',
    description:
      'Completely custom front-end portfolio site for a Utah tattoo artist. Features a filterable work gallery, services, reviews, and a booking CTA — all in a bespoke dark-and-gold editorial design built entirely from scratch.',
    liveUrl: 'https://www.hazeytattoos.com',
    githubUrl: 'https://github.com/Programmer-stevenson',
    iconLabel: 'Utah Tattoo Artist Portfolio',
    screenshot: '/hazeyport.jpg',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
  },

  {
    title: 'Kevin Inks — Original Tattoos',
    description:
      'Custom portfolio and booking experience built for a real Las Vegas tattoo artist. The site pairs a responsive React frontend with a headless WordPress CMS and custom REST API, allowing the client to manage artwork, available designs, images, and site content without changing the frontend code.',
    liveUrl: 'https://kevin-inks.vercel.app/',
    githubUrl: 'https://github.com/Programmer-stevenson/Kevin-Inks',
    iconLabel: 'Las Vegas Tattoo Artist — Headless CMS',
    screenshot: '/kevin-web.png',
    tech: [
      'React',
      'TypeScript',
      'Headless WordPress',
      'REST API',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },

  {
    title: 'Plexura.net',
    description:
      'Modern full-service digital agency website showcasing advanced animations, responsive design, and modern frontend techniques.',
    liveUrl: 'https://plexura.net',
    githubUrl: 'https://github.com/Programmer-stevenson/Plexura',
    iconLabel: 'Agency Website',
    screenshot: '/plexura.png',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
  },

  {
    title: 'My Portfolio Website',
    description:
      'Interactive MERN Stack personal portfolio featuring a custom Three.js Saturn background, advanced animations, and a modern responsive interface showcasing technical experience, projects, and professional work.',
    liveUrl: 'https://brandons-resume.com/',
    githubUrl: 'https://github.com/Programmer-stevenson/Resume',
    iconLabel: 'Personal Portfolio',
    screenshot: '/resume.jpg',
    tech: ['React', 'TypeScript', 'Three.js', 'Framer Motion'],
  },

  {
    title: 'Tiger Paw Cleaning',
    description:
      'Front-end website built for a real Missouri cleaning business featuring premium animations, Radix UI components, and conversion-focused service pages designed to attract residential and commercial clients. Lead-generation forms are handled via Web3Forms, and all imagery was provided by the client.',
    liveUrl: 'https://tigerpawcleaning.com/',
    githubUrl:
      'https://github.com/Programmer-stevenson/Tiger-Paw-Cleaning',
    iconLabel: 'Cleaning Business Website',
    screenshot: '/tiger-paw.png',
    tech: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Radix UI',
      'Framer Motion',
      'Web3Forms',
    ],
  },
];

type Project = {
  title: string;
  description: string;
  githubUrl: string;
  iconLabel: string;
  screenshot: string;
  tech: string[];
  liveUrl?: string;
  kind?: 'hardware';
};

// Repository links and summaries verified against the public GitHub READMEs.
// Place the five provided screenshots in public/hardware/.
const hardwareProjects: Project[] = [
  {
    kind: 'hardware',
    title: 'Cisco ISR 1100 — IOS XE Firmware Restoration',
    description:
      'Documented maintenance on a physical Cisco C1111-8PWB router using ROMMON and a serial console. Work covered IOS XE 16.09.05 inspection, cryptographic-key handling, startup-configuration and NVRAM removal, bootflash formatting, and USB image backup and restoration operations, with redacted command evidence and verification notes.',
    githubUrl:
      'https://github.com/brandon-in-tech/Cisco-ISR-1100-Secure-Data-Sanitization-IOS-XE-Firmware-Restoration-Infrastructure-Project',
    iconLabel: 'Cisco C1111-8PWB · Enterprise Routing',
    screenshot: '/hardware/cisco111.png',
    tech: ['Cisco ISR 1100', 'IOS XE', 'ROMMON', 'NVRAM', 'USB Recovery'],
  },
  {
    kind: 'hardware',
    title: 'Cisco ASA 5585-X — TFTP OS Restoration',
    description:
      'Recovered and restored a physical Cisco ASA 5585-X firewall through ROMMON and the ASA CLI. Cleared saved configuration, backed up the ASA image over TFTP, reinitialized internal flash, restored the operating system, and checked software boot, hardware inventory, and local boot settings. Separate FirePOWER module recovery was outside this project’s scope.',
    githubUrl:
      'https://github.com/brandon-in-tech/Cisco-ASA-Firewall--TFTP-OS-Restoration-and-Data-Sanitization',
    iconLabel: 'Cisco ASA 5585-X · Firewall Recovery',
    screenshot: '/hardware/ciscoasa.png',
    tech: ['Cisco ASA', 'ROMMON', 'TFTP', 'Flash Recovery', 'CLI Verification'],
  },
  {
    kind: 'hardware',
    title: 'Cisco Catalyst 2960-X — IOS Recovery & Sanitization',
    description:
      'Serviced a physical Cisco Catalyst WS-C2960X-24TS-L switch through the bootloader and serial console. Documented flash formatting, secure-reset and FIPS zeroization operations, USB-based IOS boot and installation, boot-variable configuration, and VLAN, VTP, and hardware inspection. The technical report also records verification limits.',
    githubUrl:
      'https://github.com/brandon-in-tech/Cisco-Catalyst-2960X-Hands-On-Infrastructure-Project',
    iconLabel: 'Cisco Catalyst 2960-X · Enterprise Switching',
    screenshot: '/hardware/ciscocat.png',
    tech: ['Catalyst 2960-X', 'Cisco IOS', 'NIST-Aligned Process', 'USB Recovery', 'Bootloader'],
  },
  {
    kind: 'hardware',
    title: 'Cisco Nexus 5596UP — NX-OS Recovery & Diagnostics',
    description:
      'Performed TFTP-based NX-OS recovery and system initialization on a physical Cisco Nexus N5K-C5596UP data-center switch. Documented kickstart and system-image transfers, bootflash and boot-setting management, hardware-module and power checks, CPU and memory inspection, and Ethernet diagnostics, including observed compatibility issues.',
    githubUrl:
      'https://github.com/brandon-in-tech/Cisco-Nexus-5596UP-Infrastructure-Project',
    iconLabel: 'Cisco Nexus 5596UP · Data Center Switching',
    screenshot: '/hardware/cisco5596.png',
    tech: ['Cisco Nexus', 'NX-OS', 'TFTP', 'Bootflash', 'Hardware Diagnostics'],
  },
  {
    kind: 'hardware',
    title: 'Palo Alto NGFW — Security Policy & Network Implementation',
    description:
      'Restored and configured a physical Palo Alto Networks firewall using the PAN-OS CLI. Implemented Layer 3 interfaces, security zones, virtual routing, address objects, firewall rules, and source NAT, then successfully validated and committed the configuration. Verified as an isolated implementation; live traffic was not tested.',
    githubUrl:
      'https://github.com/brandon-in-tech/Palo-Alto-NGFW-Security-Policy-and-Network-Implementation',
    iconLabel: 'Palo Alto Networks · Next-Generation Firewall',
    screenshot: '/hardware/palo.png',
    tech: ['PAN-OS', 'NGFW', 'Layer 3', 'Security Policies', 'Source NAT'],
  },
];



const styles = `
#projects.bs-projects {
  --project-navy: #123253;
  --project-muted: #47637d;
  --project-line: #cadfee;

  padding: 96px 28px;
  scroll-margin-top: 80px;
  color: var(--project-navy);

  font-family: Inter, 'Segoe UI', Arial, sans-serif;

  background:
    radial-gradient(
      ellipse at 94% 8%,
      #c5e6fc 0%,
      transparent 35%
    ),
    radial-gradient(
      ellipse at 0% 65%,
      #d8efff 0%,
      transparent 40%
    ),
    linear-gradient(
      155deg,
      #fff 0%,
      #eff8ff 48%,
      #e1f1fd 78%,
      #fff 100%
    );
}

.bs-projects,
.bs-projects * {
  box-sizing: border-box;
}

.bs-projects h2,
.bs-projects h3,
.bs-projects p,
.bs-projects figure {
  margin: 0;
}

.bs-projects a {
  text-decoration: none;
  color: inherit;
}

.bs-projects button {
  font: inherit;
  cursor: pointer;
}

.bs-projects svg {
  flex-shrink: 0;
}

.bs-projects .projects-wrap {
  max-width: 1180px;
  margin: auto;
  min-width: 0;
}

.bs-projects .projects-eyebrow {
  display: flex;
  gap: 16px;
  align-items: center;

  font-size: 11px;
  line-height: 1.5;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: #305f88;

  margin-bottom: 21px;
}

.bs-projects .projects-eyebrow::after {
  content: '';
  width: 64px;
  height: 1px;
  background: #8bb6d6;
}

.bs-projects .projects-heading {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 40px;

  padding-bottom: 30px;
  border-bottom: 1px solid #c4ddec;

  margin-bottom: 42px;
}

.bs-projects .projects-heading h2 {
  font-size: clamp(35px, 4vw, 54px);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.045em;

  color: var(--project-navy);
}

.bs-projects .projects-heading h2 span {
  color: #3b729e;
}

.bs-projects .projects-heading p {
  max-width: 360px;
  justify-self: end;

  font-size: 14px;
  line-height: 1.85;

  color: var(--project-muted);
}

.bs-projects .project-stage {
  padding: 0;
}

.bs-projects .project-transition {
  min-width: 0;

  animation:
    projectFadeIn 620ms cubic-bezier(.22, 1, .36, 1) both;

  will-change:
    opacity,
    transform,
    filter;
}

@keyframes projectFadeIn {
  0% {
    opacity: 0;
    transform: translateX(30px) scale(0.992);
    filter: blur(2px);
  }

  40% {
    opacity: 0.7;
  }

  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
    filter: blur(0);
  }
}

.bs-projects .project-card {
  display: flex;
  flex-direction: column;

  min-width: 0;

  background: #ffffffed;
  border: 1px solid #d0e3f1;
  border-radius: 20px;

  overflow: hidden;

  box-shadow: 0 12px 35px #254e7307;
}

.bs-projects .project-featured {
  display: grid;
  grid-template-columns:
    minmax(0, 1.45fr)
    minmax(0, 1fr);

  gap: 42px;
  align-items: center;

  margin: 0;

  border: 0;
  border-radius: 0;

  background: transparent;

  box-shadow: none;

  overflow: visible;
}

.bs-projects .project-media {
  display: flex;
  flex-direction: column;

  background: #e8f3fb;

  border-bottom: 1px solid #d0e3f1;

  min-width: 0;
}

.bs-projects .project-featured .project-media {
  position: relative;

  border: 8px solid #e6edf3;
  border-bottom-width: 16px;

  border-radius: 15px;

  background: #e8f3fb;

  box-shadow: 0 22px 42px #23476220;

  margin-bottom: 40px;

  overflow: visible;
}

.bs-projects .project-featured .project-media::after {
  content: '';

  position: absolute;

  left: 39%;
  right: 39%;
  bottom: -45px;

  height: 28px;

  border-bottom: 7px solid #c3d2df;

  background:
    linear-gradient(
      90deg,
      #e5edf4,
      #bfcddb,
      #e4edf4
    );

  border-radius: 0 0 6px 6px;
}

.bs-projects .project-browser {
  display: flex;
  align-items: center;

  gap: 5px;

  padding: 12px 16px;

  background: #f5faff;

  border-bottom: 1px solid #dcebf5;

  color: #58758e;

  min-width: 0;
}

.bs-projects .project-featured .project-browser {
  margin: 0;

  border-radius: 7px 7px 0 0;

  padding: 10px 12px;
}

.bs-projects .project-browser i {
  width: 5px;
  height: 5px;

  border-radius: 50%;

  background: #aecadd;

  flex-shrink: 0;
}

.bs-projects .project-browser span {
  font-size: 10px;
  letter-spacing: 0.01em;

  margin-left: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bs-projects .project-shot {
  display: block;

  width: 100%;

  aspect-ratio: 16 / 10;

  object-fit: contain;

  background: #e8f3fb;
}

.bs-projects .project-featured .project-shot {
  aspect-ratio: 16 / 10;

  margin: 0;

  border-radius: 0 0 3px 3px;
}

.bs-projects .project-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 12px;

  aspect-ratio: 16 / 10;

  padding: 24px;

  text-align: center;

  color: #456d8d;

  font-size: 13px;
}

.bs-projects .project-world {
  width: 40px;
  height: 40px;

  object-fit: contain;

  flex-shrink: 0;
}

.bs-projects .project-body {
  padding: 26px;

  display: flex;
  flex-direction: column;

  flex: 1;

  min-width: 0;
}

.bs-projects .project-featured .project-body {
  padding: 8px 0;
}

.bs-projects .project-label {
  display: flex;
  align-items: center;

  gap: 7px;

  font-size: 10px;
  font-weight: 650;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  line-height: 1.65;

  color: #426d8f;

  margin-bottom: 13px;
}

.bs-projects .project-featured .project-label {
  color: #245981;

  font-size: 9px;

  letter-spacing: 0.1em;

  gap: 10px;

  margin-bottom: 19px;
}

.bs-projects .project-card h3 {
  font-size: 23px;
  line-height: 1.25;
  letter-spacing: -0.035em;
  font-weight: 600;

  color: var(--project-navy);

  margin-bottom: 14px;

  overflow-wrap: anywhere;
}

.bs-projects .project-featured h3 {
  font-size: clamp(25px, 2.6vw, 34px);

  line-height: 1.15;

  margin-bottom: 18px;
}

.bs-projects .project-description {
  font-size: 13px;
  line-height: 1.85;

  color: var(--project-muted);

  margin-bottom: 20px;
}

.bs-projects .project-tags {
  display: flex;
  flex-wrap: wrap;

  gap: 7px;

  margin-top: auto;
  margin-bottom: 24px;
}

.bs-projects .project-tag {
  font-size: 10px;
  line-height: 1.5;

  padding: 5px 9px;

  border: 1px solid #d4e5f2;

  border-radius: 6px;

  background: #edf6fd;

  color: #365f80;
}

.bs-projects .project-links {
  display: flex;
  flex-wrap: wrap;

  gap: 10px;

  padding-top: 20px;

  border-top: 1px solid #e1edf5;
}

.bs-projects .project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  min-height: 44px;

  border: 1px solid #b8cfdf;

  border-radius: 9px;

  padding: 10px 15px;

  font-size: 12px;
  font-weight: 600;
  line-height: 1.4;

  background: #dce9f1;

  color: #244f72;

  transition:
    background 180ms ease,
    border-color 180ms ease,
    transform 180ms ease;
}

.bs-projects .project-link-primary {
  background: #143b5f;
  border-color: #143b5f;
  color: #fff;
}

.bs-projects .project-link:hover {
  background: #e2f1fc;
  transform: translateY(-1px);
}

.bs-projects .project-link-primary:hover {
  background: #285e88;
  border-color: #285e88;
}

.bs-projects a:focus-visible,
.bs-projects button:focus-visible,
.bs-projects [tabindex]:focus-visible {
  outline: 3px solid #377eae;
  outline-offset: 4px;
}

.bs-projects .stage-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 18px;

  flex-wrap: wrap;

  margin-top: 28px;

  padding: 0 0 26px;
}

.bs-projects .stage-navigation {
  display: flex;
  gap: 8px;
}

.bs-projects .stage-navigation button {
  width: 44px;
  height: 44px;

  display: grid;
  place-items: center;

  background: #dce9f1;

  border: 1px solid #bdd5e7;

  border-radius: 50%;

  color: #234e70;

  transition:
    background 160ms ease,
    transform 160ms ease,
    border-color 160ms ease;
}

.bs-projects .stage-navigation button:hover {
  background: #d9ecfa;

  transform: translateY(-1px);
}

.bs-projects .stage-dots {
  display: flex;
  flex-wrap: wrap;
}

.bs-projects .stage-dots button {
  width: 28px;
  height: 44px;

  border: 0;

  background: transparent;

  display: grid;
  place-items: center;

  padding: 0;
}

.bs-projects .stage-dots span {
  width: 6px;
  height: 6px;

  border-radius: 10px;

  background: #a2bfd4;

  transition:
    width 220ms ease,
    background 220ms ease;
}

.bs-projects
.stage-dots
button[aria-pressed='true']
span {
  width: 18px;
  background: #235578;
}

.bs-projects .collection-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;

  padding: 22px 0;

  border-top: 1px solid #c4ddec;
  border-bottom: 1px solid #c4ddec;

  margin: 0 0 28px;
}

.bs-projects .collection-bar p {
  font-size: 12px;

  color: #53758e;
}

.bs-projects .collection-toggle {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 14px;

  border: 0;

  background: #153b5e;

  color: #fff;

  padding: 13px 19px;

  min-height: 46px;

  border-radius: 9px;

  font-size: 12px;
  font-weight: 600;

  transition:
    background 180ms ease,
    transform 180ms ease;
}

.bs-projects .collection-toggle:hover {
  background: #285e88;
  transform: translateY(-1px);
}

.bs-projects
.collection-toggle[aria-expanded='true']
svg {
  transform: rotate(180deg);
}

.bs-projects .projects-grid {
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 22px;
}

@media (max-width: 1050px) {
  .bs-projects .projects-grid {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 960px) {
  .bs-projects .project-featured {
    gap: 27px;

    grid-template-columns:
      minmax(0, 1.1fr)
      minmax(0, 1fr);
  }

  .bs-projects
  .project-featured
  .project-body {
    padding: 0;
  }
}

@media (max-width: 760px) {
  #projects.bs-projects {
    padding: 64px 22px;
  }

  .bs-projects .projects-heading {
    grid-template-columns: 1fr;

    gap: 15px;

    margin-bottom: 32px;
  }

  .bs-projects .projects-heading p {
    justify-self: start;

    max-width: 500px;
  }

  .bs-projects .project-featured {
    grid-template-columns: 1fr;

    gap: 28px;
  }

  .bs-projects
  .project-featured
  .project-media {
    border-right: 8px solid #e6edf3;
    border-bottom: 16px solid #e6edf3;

    margin-bottom: 24px;
  }

  .bs-projects
  .project-featured
  .project-body {
    padding: 0;
  }

  .bs-projects
  .project-featured
  .project-shot {
    aspect-ratio: 16 / 10;
  }

  .bs-projects
  .project-featured
  h3 {
    font-size: 28px;
  }
}

@media (max-width: 560px) {
  #projects.bs-projects {
    padding: 54px 18px;
  }

  .bs-projects .projects-grid {
    grid-template-columns: 1fr;

    gap: 22px;
  }

  .bs-projects .project-links .project-link {
    flex: 1;
  }

  .bs-projects .collection-bar {
    align-items: stretch;

    flex-direction: column;
  }

  .bs-projects .collection-bar p {
    text-align: center;
  }
}

@media (max-width: 430px) {
  .bs-projects .stage-controls {
    justify-content: center;

    gap: 5px;
  }
}


/* Two project categories within the same original portfolio section. */
.bs-projects .project-category + .project-category {
  margin-top: 76px;
  padding-top: 55px;
  border-top: 1px solid #c4ddec;
}

.bs-projects .category-intro {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  align-items: end;
  gap: 32px;
  margin-bottom: 30px;
}

.bs-projects .category-intro h3 {
  color: var(--project-navy);
  font-size: clamp(25px, 3vw, 36px);
  line-height: 1.18;
  letter-spacing: -0.04em;
  font-weight: 650;
}

.bs-projects .category-intro p {
  max-width: 440px;
  justify-self: end;
  color: var(--project-muted);
  font-size: 13px;
  line-height: 1.85;
}

.bs-projects .category-kicker {
  margin-bottom: 10px;
  color: #305f88;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.bs-projects .hardware-project .project-shot,
.bs-projects .hardware-project .project-media {
  background: #222831;
}

.bs-projects .hardware-project .project-world {
  display: none;
}

.bs-projects .project-hardware-icon {
  display: inline-grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border: 1px solid #b8d5ea;
  background: #e4f3fd;
  color: #245981;
  border-radius: 6px;
}

.bs-projects .stage-counter {
  font-size: 11px;
  font-weight: 600;
  color: #51728d;
  font-variant-numeric: tabular-nums;
}

@media (max-width: 760px) {
  .bs-projects .category-intro {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .bs-projects .category-intro p {
    justify-self: start;
  }

  .bs-projects .project-category + .project-category {
    margin-top: 54px;
    padding-top: 42px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .bs-projects .project-transition {
    animation: none;
  }

  .bs-projects .project-link,
  .bs-projects .stage-navigation button,
  .bs-projects .collection-toggle,
  .bs-projects .stage-dots span {
    transition: none;
  }
}
`;

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const isHardware = project.kind === 'hardware';
  const isRepo = project.githubUrl.replace(/\/$/, '').split('/').length > 4;
  const displayUrl = project.liveUrl ?? project.githubUrl;

  return (
    <article
      className={`project-card${featured ? ' project-featured' : ''}${
        isHardware ? ' hardware-project' : ''
      }`}
    >
      <div className="project-media">
        <div className="project-browser" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>
            {displayUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </span>
        </div>

        {imageFailed ? (
          <div className="project-fallback">
            {isHardware ? (
              <Server size={32} aria-hidden="true" />
            ) : (
              <img className="project-world" src="/world.png" alt="" />
            )}
            <span>{project.title}</span>
            <span>
              Preview unavailable · Explore the {isHardware ? 'GitHub project' : 'live website'} below
            </span>
          </div>
        ) : (
          <img
            key={project.screenshot}
            className="project-shot"
            src={project.screenshot}
            alt={`${project.title} ${isHardware ? 'technical project screenshot' : 'website preview'}`}
            loading={featured ? 'eager' : 'lazy'}
            decoding="async"
            width={960}
            height={600}
            onError={() => setImageFailed(true)}
          />
        )}
      </div>

      <div className="project-body">
        <div className="project-label">
          {isHardware ? (
            <span className="project-hardware-icon">
              <Server size={14} aria-hidden="true" />
            </span>
          ) : (
            <img className="project-world" src="/world.png" alt="" />
          )}
          {project.iconLabel.trim()}
        </div>

        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tags" aria-label="Technologies">
          {project.tech.map((tech) => (
            <span className="project-tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          {!isHardware && project.liveUrl && (
            <a
              className="project-link project-link-primary"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live (opens in a new tab)`}
            >
              View website
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
          <a
            className={`project-link${isHardware ? ' project-link-primary' : ''}`}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${isHardware ? 'View technical documentation for' : isRepo ? 'Source code for' : 'GitHub profile for'} ${project.title} (opens in a new tab)`}
          >
            <Github size={15} aria-hidden="true" />
            {isHardware ? 'View GitHub project' : isRepo ? 'Source code' : 'GitHub'}
            {isHardware && <ExternalLink size={13} aria-hidden="true" />}
          </a>
        </div>
      </div>
    </article>
  );
}

function ProjectSlideshow({
  items,
  label,
}: {
  items: Project[];
  label: string;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(query.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    query.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      query.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  const playing = !paused && !hovered && !focused && visible && !reducedMotion;

  useEffect(() => {
    if (!playing || items.length < 2) return;
    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % items.length);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [active, playing, items.length]);

  const previousProject = () => {
    setActive((current) => (current - 1 + items.length) % items.length);
  };

  const nextProject = () => {
    setActive((current) => (current + 1) % items.length);
  };

  if (!items.length) return null;

  return (
    <div
      className="project-stage"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFocused(false);
        }
      }}
    >
      <div aria-live={playing ? 'off' : 'polite'} aria-atomic="true">
        <div key={items[active].title} className="project-transition">
          <ProjectCard project={items[active]} featured />
        </div>
      </div>

      <div className="stage-controls">
        <div className="stage-navigation">
          <button type="button" onClick={previousProject} aria-label={`Previous ${label} project`}>
            <ChevronLeft size={19} aria-hidden="true" />
          </button>
          {!reducedMotion && (
            <button
              type="button"
              onClick={() => setPaused((current) => !current)}
              aria-label={paused ? `Play ${label} slideshow` : `Pause ${label} slideshow`}
            >
              {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
            </button>
          )}
          <button type="button" onClick={nextProject} aria-label={`Next ${label} project`}>
            <ChevronRight size={19} aria-hidden="true" />
          </button>
        </div>

        <div className="stage-dots" aria-label={`Select a ${label} project`}>
          {items.map((project, index) => (
            <button
              type="button"
              key={project.title}
              aria-label={`Show ${project.title}`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            >
              <span />
            </button>
          ))}
        </div>
        <span className="stage-counter" aria-label={`Slide ${active + 1} of ${items.length}`}>
          {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="bs-projects" aria-labelledby="projects-heading">
      <style>{styles}</style>
      <div className="projects-wrap">
        <p className="projects-eyebrow">Infrastructure & Development Portfolio</p>

        <header className="projects-heading">
          <h2 id="projects-heading">Selected <span>Projects</span></h2>
          <p>Physical enterprise infrastructure work, network security engineering, and production React website development.</p>
        </header>

        <section className="project-category" aria-labelledby="hardware-projects-heading">
          <div className="category-intro">
            <div>
              <p className="category-kicker">Physical infrastructure · Networking · Security</p>
              <h3 id="hardware-projects-heading">Enterprise Hardware Projects</h3>
            </div>
            <p>Hands-on Cisco and Palo Alto equipment servicing, OS recovery, secure configuration removal, system diagnostics, and documented technical verification.</p>
          </div>
          <ProjectSlideshow items={hardwareProjects} label="Hardware infrastructure" />
        </section>

        <section className="project-category" aria-labelledby="software-projects-heading">
          <div className="category-intro">
            <div>
              <p className="category-kicker">Frontend engineering · APIs · Production deployments</p>
              <h3 id="software-projects-heading">Full-Stack Website Projects with React</h3>
            </div>
            <p>React and Next.js websites, custom interfaces, backend integrations, CMS implementations, and real client projects. Individual descriptions identify front-end-only work.</p>
          </div>

          <ProjectSlideshow items={projects} label="React website" />

          <div className="collection-bar">
            <p>More React website and development work</p>
            <button
              type="button"
              className="collection-toggle"
              aria-expanded={showAll}
              aria-controls="full-portfolio"
              onClick={() => setShowAll((current) => !current)}
            >
              {showAll ? 'Close portfolio collection' : 'Explore full portfolio'}
              <ChevronDown size={18} aria-hidden="true" />
            </button>
          </div>

          <div id="full-portfolio" hidden={!showAll}>
            {showAll && (
              <div className="projects-grid">
                {projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Projects;
