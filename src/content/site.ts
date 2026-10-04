/** Global copy and navigation. Kept out of components so it can be localized later. */
export const site = {
  name: 'LINKWAVE',
  url: 'https://www.linkwave.sg',
  positioning: 'Liquid Cooling Infrastructure for AI at Scale.',
  description:
    'From rack-level CDUs to multi-megawatt cooling infrastructure, LINKWAVE engineers and delivers integrated liquid cooling systems for AI, HPC and next-generation data centers.',
  /**
   * Project references await final customer and photography approval (spec §30).
   * While true, they are shown so the design can be reviewed. Set to false to
   * publish only projects with `publicationApproved: true`.
   */
  previewUnapprovedProjects: true,
} as const;

export const cta = {
  primary: { label: 'Talk to an Engineer', href: '/contact/' },
  rfp: { label: 'Send an RFP', href: '/contact/#rfq' },
  package: { label: 'Request Engineering Package', href: '/contact/#rfq' },
  info: { label: 'Request Technical Information', href: '/contact/#rfq' },
  similar: { label: 'Discuss a Similar Project', href: '/contact/' },
} as const;

/** Header navigation. Solutions opens the homepage chapter, which links to each solution page. */
export const nav = [
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Products', href: '/products/' },
  { label: 'Modular Cooling', href: '/modular-cooling/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Engineering', href: '/engineering/' },
  { label: 'Resources', href: '/resources/' },
] as const;

export const footer = {
  columns: [
    {
      title: 'Solutions',
      links: [
        { label: 'AI Data Centers', href: '/solutions/ai-data-centers/' },
        { label: 'Hyperscale', href: '/solutions/hyperscale/' },
        { label: 'HPC', href: '/solutions/hpc/' },
        { label: 'Colocation', href: '/solutions/colocation/' },
        { label: 'Modular Infrastructure', href: '/solutions/modular-ai-infrastructure/' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'Centralized CDU', href: '/products/centralized-cdu/' },
        { label: 'Primary Cooling', href: '/products/primary-pump-stations/' },
        { label: 'Distribution', href: '/products/manifolds-distribution/' },
        { label: 'Liquid-Cooled Racks', href: '/products/liquid-cooled-racks/' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Engineering', href: '/engineering/' },
        { label: 'Projects', href: '/projects/' },
        { label: 'Modular Cooling', href: '/modular-cooling/' },
        { label: 'Resources', href: '/resources/' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Talk to an Engineer', href: '/contact/' },
        { label: 'Send an RFP', href: '/contact/#rfq' },
      ],
    },
  ],
} as const;
