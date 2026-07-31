export type Swatch = {
  name: string;
  hex: string;
};

export type Project = {
  id: string;
  title: string;
  client: string;
  kind: string;
  hook: string;
  story: string;
  cover: string;
  gallery: { src: string; alt: string }[];
  palette: Swatch[];
  deliverables: string[];
};

export const projects: Project[] = [
  {
    id: 'beatsfest',
    title: 'Beatsfest',
    client: 'Student branding project',
    kind: 'Brand identity',
    hook: 'A bold, friendly identity built for a music-streaming audience.',
    story:
      'Beatsfest explores a complete visual identity for an online music platform. The headphone-and-hand symbol combines listening, energy, and community in one memorable mark, then carries across stationery, social graphics, and promotional mockups.',
    cover: '/portfolio/img_9.png',
    gallery: [
      { src: '/portfolio/img_4.png', alt: 'Beatsfest logo featuring headphones and a hand symbol' },
      { src: '/portfolio/img_9.png', alt: 'Beatsfest identity applied to a record sleeve' },
      { src: '/portfolio/img_20.jpg', alt: 'Beatsfest business card design' },
      { src: '/portfolio/img_16.jpg', alt: 'Beatsfest stationery system' },
    ],
    palette: [
      { name: 'Signal Orange', hex: '#F15A24' },
      { name: 'Midnight Navy', hex: '#17213A' },
      { name: 'Warm Cream', hex: '#F4E9D5' },
    ],
    deliverables: ['Logo system', 'Brand direction', 'Stationery', 'Promotional mockups'],
  },
  {
    id: 'focus-05',
    title: 'Focus 05',
    client: 'Student campaign project',
    kind: 'Advertising',
    hook: 'A colorful campaign system designed to stop commuters in their tracks.',
    story:
      'This campaign pairs an energetic collage style with a restrained typographic system. The visual direction was extended from an initial moodboard into print advertising and a transit placement, showing how one concept can stay recognizable across very different formats.',
    cover: '/portfolio/focus5ad2.jpg',
    gallery: [
      { src: '/portfolio/Asset 1-1.png', alt: 'Focus 05 visual direction and moodboard' },
      { src: '/portfolio/focus5ad.jpg', alt: 'Focus 05 brand moodboard' },
      { src: '/portfolio/focus5ad2.jpg', alt: 'Focus 05 print advertisement' },
      { src: '/portfolio/img_17.jpg', alt: 'Focus 05 advertisement displayed inside a train' },
    ],
    palette: [
      { name: 'Coral', hex: '#E86C55' },
      { name: 'Pool Blue', hex: '#9CCBD0' },
      { name: 'Charcoal', hex: '#333438' },
      { name: 'Lime', hex: '#B6C85A' },
    ],
    deliverables: ['Moodboard', 'Campaign concept', 'Print advertisement', 'Transit mockup'],
  },
  {
    id: 'ladybug',
    title: 'Ladybug Garden Club',
    client: 'Student identity project',
    kind: 'Brand design',
    hook: 'A welcoming garden identity rooted in nature, pattern, and community.',
    story:
      'Ladybug Garden Club began with an earthy lifestyle moodboard and grew into a playful mark and coordinated promotional pieces. Botanical photography, soft neutrals, and a hand-drawn ladybug create a look that feels approachable without losing structure.',
    cover: '/portfolio/ladybugmoodboard.jpg',
    gallery: [
      { src: '/portfolio/ladybugmoodboard.jpg', alt: 'Ladybug Garden Club moodboard' },
      { src: '/portfolio/img_12.png', alt: 'Ladybug Garden Club lifestyle board' },
      { src: '/portfolio/img_13.png', alt: 'Ladybug Garden Club promotional layout' },
      { src: '/portfolio/img_15.png', alt: 'Illustrated ladybug logo mark' },
    ],
    palette: [
      { name: 'Garden Sage', hex: '#9BA185' },
      { name: 'Ladybug Rose', hex: '#B76379' },
      { name: 'Potting Soil', hex: '#5B5145' },
      { name: 'Petal Cream', hex: '#E8DFD0' },
    ],
    deliverables: ['Moodboard', 'Illustrated mark', 'Color system', 'Promotional layouts'],
  },
  {
    id: 'post-malone',
    title: 'Post Malone: Country',
    client: 'Student music packaging project',
    kind: 'Editorial & packaging',
    hook: 'Country grit translated into an expressive record package.',
    story:
      'This concept reimagines a Post Malone release through a country-western lens. Hand-drawn lettering, smoky photography, and distressed textures connect the cover, vinyl label, and sleeve while preserving a clear hierarchy at every scale.',
    cover: '/portfolio/app-1.jpg',
    gallery: [
      { src: '/portfolio/app-1.jpg', alt: 'Post Malone country-inspired album cover' },
      { src: '/portfolio/postyrecord.webp', alt: 'Country album artwork applied to vinyl' },
      { src: '/portfolio/img_5.jpg', alt: 'Post Malone record sleeve and vinyl mockup' },
      { src: '/portfolio/img_11.jpg', alt: 'Country-style Post Malone record artwork' },
    ],
    palette: [
      { name: 'Stage Black', hex: '#151719' },
      { name: 'Smoke Grey', hex: '#718085' },
      { name: 'Neon Rose', hex: '#C85E82' },
      { name: 'Denim Blue', hex: '#516C78' },
    ],
    deliverables: ['Cover artwork', 'Custom lettering', 'Vinyl label', 'Packaging mockups'],
  },
  {
    id: 'horizon',
    title: 'Horizon Railway',
    client: 'Student interface project',
    kind: 'UX & visual design',
    hook: 'A dense railway ticket redesigned for clarity on paper and mobile.',
    story:
      'Horizon Railway focuses on information hierarchy: route, time, coach, and seat details are easy to find at a glance. The system adapts the same content for a printed ticket and a narrow phone screen without losing brand consistency.',
    cover: '/portfolio/img_14.png',
    gallery: [
      { src: '/portfolio/img_14.png', alt: 'Horizon Railway ticket design variations' },
      { src: '/portfolio/TRAINTICKET1.png', alt: 'Horizon Railway printed ticket' },
      { src: '/portfolio/trainticket3mobile.png', alt: 'Mobile Horizon Railway ticket interface' },
    ],
    palette: [
      { name: 'Rail Navy', hex: '#18334D' },
      { name: 'Platform Mint', hex: '#A9DDD3' },
      { name: 'Ticket White', hex: '#F7F4EE' },
      { name: 'Track Grey', hex: '#5E6972' },
    ],
    deliverables: ['Information hierarchy', 'Print ticket', 'Mobile ticket', 'Responsive system'],
  },
  {
    id: 'personal-brand',
    title: 'Deanna Pursley',
    client: 'Personal project',
    kind: 'Identity & web',
    hook: 'A personal identity that balances personality with practical design.',
    story:
      'This evolving personal brand explores several ways to make a designer visible and memorable—from a pen-tool monogram and illustrated portrait to business cards and responsive website concepts. It is an ongoing study in expressing personality through a flexible system.',
    cover: '/portfolio/girlwebsitefinal.png',
    gallery: [
      { src: '/portfolio/girlwebsitefinal.png', alt: 'Illustrated Deanna Pursley website header' },
      { src: '/portfolio/PENTOOLLOGO.png', alt: 'Deanna Pursley pen-tool logo' },
      { src: '/portfolio/businesscardq.jpg', alt: 'Retro Deanna Pursley business card design' },
      { src: '/portfolio/selfie.jpg', alt: 'Portrait artwork of Deanna Pursley' },
    ],
    palette: [
      { name: 'Retro Red', hex: '#A73E32' },
      { name: 'Soft Teal', hex: '#9FC8BE' },
      { name: 'Goldenrod', hex: '#D8A641' },
      { name: 'Paper', hex: '#EEE4CF' },
    ],
    deliverables: ['Logo explorations', 'Personal stationery', 'Illustration', 'Website direction'],
  },
];
 