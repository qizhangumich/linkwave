import type { Status } from '@/lib/publish';

export const hero = {
  eyebrow: 'Liquid cooling infrastructure',
  title: ['Liquid Cooling', 'for AI at Scale.'],
  copy: 'From rack-level CDUs to multi-megawatt cooling infrastructure, LINKWAVE engineers integrated thermal systems for AI, HPC and next-generation data centers.',
  secondaryCta: { label: 'Explore Solutions', href: '#solutions' },
};

/** Metric rail. Each entry references a record in claims.ts. */
export const proof = [
  { claimId: 'experience', value: '10+', unit: 'years', lines: ['Liquid cooling', 'engineering'] },
  { claimId: 'patents', value: '70+', unit: '', lines: ['Related', 'patents'] },
  { claimId: 'units', value: '8,000+', unit: '', lines: ['Units / sets', 'delivered'], footnote: true },
  { claimId: 'cdu-scale', value: '2.5', unit: 'MW', lines: ['Centralized CDU', 'reference scale'] },
];
export const proofFootnote =
  'Across the full liquid-cooling portfolio, including power-electronics and energy applications as well as data centers.';

export type Scope = 'LINKWAVE scope' | 'Interface' | 'By others';

export interface ArchNode {
  id: string;
  short: string;
  name: string;
  loop: 'IT loop' | 'Secondary loop' | 'Primary loop';
  kind: 'equipment' | 'loop';
  scope: Scope;
  role: string;
  detail: string;
  href?: string;
}

/** System architecture, chip to heat rejection (spec §12.3). Order is the direction heat travels. */
export const architecture: ArchNode[] = [
  {
    id: 'chip',
    short: 'GPU / CPU',
    name: 'GPU / CPU',
    loop: 'IT loop',
    kind: 'equipment',
    scope: 'By others',
    role: 'Heat source',
    detail:
      'Processor heat flux sets every downstream requirement: coolant supply temperature, flow per server and allowable pressure drop.',
  },
  {
    id: 'cold-plate',
    short: 'Cold plate',
    name: 'Cold plate',
    loop: 'IT loop',
    kind: 'equipment',
    scope: 'Interface',
    role: 'Chip-to-liquid heat transfer',
    detail:
      'Coolant passes through a plate mounted on the processor. Its flow and pressure-drop figures are the design inputs for the manifold and CDU.',
  },
  {
    id: 'rack-manifold',
    short: 'Rack manifold',
    name: 'Rack manifold',
    loop: 'IT loop',
    kind: 'equipment',
    scope: 'LINKWAVE scope',
    role: 'In-rack distribution',
    detail:
      'A stainless manifold in each rack divides supply flow between servers and collects the return through 12 mm EPDM hoses.',
    href: '/products/manifolds-distribution/',
  },
  {
    id: 'row-cdu',
    short: 'Rack / in-row CDU',
    name: 'Rack / in-row CDU',
    loop: 'Secondary loop',
    kind: 'equipment',
    scope: 'LINKWAVE scope',
    role: 'Local coolant distribution',
    detail:
      'Where load is distributed or facility water is unavailable, a CDU at the rack or row conditions and circulates coolant close to the IT equipment.',
  },
  {
    id: 'secondary-loop',
    short: 'Secondary loop',
    name: 'Secondary cooling loop',
    loop: 'Secondary loop',
    kind: 'loop',
    scope: 'LINKWAVE scope',
    role: 'Technology cooling system',
    detail:
      'Sanitary-grade stainless aisle piping carries treated water between the racks and the CDU. Typical supply and return: 40 / 55 °C.',
    href: '/products/manifolds-distribution/',
  },
  {
    id: 'centralized-cdu',
    short: 'Centralized CDU',
    name: 'Centralized CDU',
    loop: 'Secondary loop',
    kind: 'equipment',
    scope: 'LINKWAVE scope',
    role: 'Loop isolation and control',
    detail:
      'A plate heat exchanger separates the IT loop from facility water. Dual variable-speed pumps hold flow and pressure. Reference units: 500 kW and 2.5 MW.',
    href: '/products/centralized-cdu/',
  },
  {
    id: 'primary-loop',
    short: 'Primary loop',
    name: 'Primary cooling loop',
    loop: 'Primary loop',
    kind: 'loop',
    scope: 'LINKWAVE scope',
    role: 'Facility water system',
    detail:
      'Facility water carries heat from the CDUs to the heat-rejection plant. Water quality is managed by make-up, dosing and filtration on this side.',
  },
  {
    id: 'pump-station',
    short: 'Pump station',
    name: 'Primary-side pump station',
    loop: 'Primary loop',
    kind: 'equipment',
    scope: 'LINKWAVE scope',
    role: 'Primary circulation',
    detail:
      'Skid-built pumps with variable-frequency drives, storage, make-up and dosing. 125 kW to 2.5 MW, 10–250 m³/h.',
    href: '/products/primary-pump-stations/',
  },
  {
    id: 'heat-rejection',
    short: 'Heat rejection',
    name: 'Dry cooler / cooling tower / chilled water',
    loop: 'Primary loop',
    kind: 'equipment',
    scope: 'Interface',
    role: 'Heat rejection',
    detail:
      'Three reference arrangements: isolated CDU with chilled water; isolated CDU with cooling tower and pump station; direct-connected CDU with dry cooler and online purification.',
  },
];

/** Scale continuum (spec §12.5). `w`/`h` are schematic proportions for the silhouettes, not dimensions. */
export const scale: {
  level: string;
  system: string;
  capacity: string | null;
  w: number;
  h: number;
}[] = [
  { level: 'Rack', system: 'Rack CDU', capacity: null, w: 6, h: 20 },
  { level: 'Row', system: 'In-row CDU', capacity: null, w: 10, h: 20 },
  { level: 'Room', system: 'Centralized CDU', capacity: '500 kW – 2.5 MW', w: 20, h: 20 },
  {
    level: 'Facility',
    system: 'Primary-side infrastructure',
    capacity: '125 kW – 2.5 MW per station',
    w: 44,
    h: 22,
  },
  { level: 'Modular', system: 'Prefabricated / containerized cooling', capacity: null, w: 70, h: 26 },
];

export const modular = {
  eyebrow: 'Modular cooling',
  title: 'Cooling infrastructure, factory-integrated.',
  copy: 'Prefabricated liquid-cooling infrastructure designed to reduce on-site integration complexity and support rapid deployment of high-density computing capacity.',
  steps: ['Engineer', 'Factory integrate', 'FAT', 'Transport', 'Site connect', 'Commission'],
  alt: 'Enclosed pump station on a skid base with one bay open, showing pumps and pipework.',
  caption: 'Engineering render. Enclosed primary-side pump station on a skid base, one service bay open.',
};

export const reliability = {
  eyebrow: 'Field proven',
  title: 'Built to keep cooling.',
  copy: 'Reliability is designed into the hydraulics: what can fail is duplicated, and what needs service can be reached without stopping flow.',
  points: [
    { term: 'Pump redundancy', detail: 'Redundant pumps can be replaced while the unit is online.' },
    { term: 'Filter bypass', detail: 'Filters are serviced without interrupting coolant flow.' },
    { term: 'Clean joints', detail: 'No thread tape or sealant anywhere in the wetted loop.' },
    { term: 'Common parts', detail: 'Parts are shared across the series and held in stock.' },
  ],
  /** Fleet metrics (spec §43.1). All unverified: rendered in development only. */
  fleet: [
    'Countries with equipment in operation',
    'Systems installed / operating',
    'Cooling capacity deployed (MW)',
    'Fleet operating hours',
    'Verified availability (%)',
  ].map((label) => ({ label, status: 'tbd' as Status })),
};

export const engineering = {
  eyebrow: 'Engineering',
  title: 'Engineering beyond the equipment.',
  copy: 'LINKWAVE engages before procurement. Bring a thermal load and a set of constraints, and the first output is a cooling architecture.',
  steps: [
    {
      name: 'Define',
      items: ['IT load and rack density', 'Facility water conditions', 'Redundancy and interfaces'],
    },
    { name: 'Model', items: ['Design calculations', 'Layout plan', 'Process flow diagram'] },
    {
      name: 'Engineer',
      items: ['3D modelling', 'Electrical schematics', 'Controls and HMI design'],
    },
    {
      name: 'Build',
      items: ['Sheet metal and piping', 'Control cabinet production', 'Assembly and wiring'],
    },
    {
      name: 'Test',
      items: ['Performance testing', 'Functional testing', 'Factory acceptance test'],
    },
    { name: 'Deploy', items: ['Packaging and logistics', 'Commissioning', 'Operator training'] },
    {
      name: 'Support',
      items: ['Remote diagnosis', 'Spare parts from stock', 'Warranty to project terms'],
    },
  ],
  artifactAlt:
    'Process diagram of a primary-side hydraulic module showing cooling towers, pumps, storage tank, dosing and softening units, with a symbol legend.',
  artifactCaption:
    'Process diagram (excerpt). Primary-side hydraulic module with tower back-up, storage and dosing.',
};

export const globalDeployment = {
  eyebrow: 'Global deployment',
  title: 'Delivered across five regions.',
  note: 'Regions show where equipment has been delivered. They do not indicate LINKWAVE offices or service centers.',
};

export const finalCta = {
  title: 'Planning your next liquid-cooled facility?',
  copy: 'Bring us your thermal load, rack density, facility constraints or RFP. Our engineering team can help define the cooling architecture.',
};
