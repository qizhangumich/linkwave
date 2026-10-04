import type { Status } from '@/lib/publish';

/** Copy for the modular cooling, engineering and resources pages. */

export const modularPage = {
  eyebrow: 'Modular cooling',
  title: 'Prefabricated thermal infrastructure.',
  lead: 'Cooling plant engineered, integrated and tested as a complete assembly at the factory, then delivered for connection on site.',
  metaDescription:
    'Prefabricated and containerized liquid-cooling infrastructure: factory-integrated pump stations and compute blocks, tested before shipment and delivered for site connection.',
  heroAlt: 'Enclosed pump station on a skid base with one bay open, showing pumps and pipework.',
  heroCaption: 'Engineering render. Enclosed primary-side pump station on a skid base, one service bay open.',

  problem: {
    title: 'Site-built plant is the slow path.',
    items: [
      {
        title: 'Schedule',
        body: 'Compute hardware arrives on a fixed date. Mechanical plant assembled on site from separate packages is often what the programme waits for.',
      },
      {
        title: 'Integration',
        body: 'Every joint and termination made on site is work that can only be tested late, with several contractors sharing the interfaces.',
      },
      {
        title: 'Consistency',
        body: 'Repeated blocks built in the field vary. Blocks built in one workshop from common parts do not.',
      },
    ],
  },

  forms: {
    title: 'Two reference forms.',
    items: [
      {
        name: 'Enclosed pump station',
        body: 'Circulation pumps, headers, storage tank, make-up, dosing and controls inside one weather-protected enclosure on a skid base. Delivered for projects in Singapore and the United States.',
        href: '/products/primary-pump-stations/',
        link: 'Primary-side pump stations',
        image: 'sgPump' as const,
        alt: 'Grey pump-station enclosure with two doors open, showing a stainless storage tank and flanged pipe ends.',
        caption: 'Photograph, background removed. Enclosed pump station with internal storage tank, built for a Singapore project.',
      },
      {
        name: 'Base-frame compute block',
        body: 'Liquid-cooled racks, a centralized CDU, the piping network and switchgear assembled on a common structural frame. Delivered as a 2.5 MW, 20-rack block for a United States project.',
        href: '/projects/us-2-5mw-liquid-cooling/',
        link: '2.5 MW project reference',
        image: 'usIntegration' as const,
        alt: 'A row of liquid-cooled racks and a frame-mounted CDU on a common black base frame.',
        caption: 'Photograph, background removed. Racks and centralized CDU on a common base frame, during factory integration.',
      },
    ],
  },

  scope: {
    title: 'What is integrated at the factory.',
    items: [
      { title: 'Pumps', body: 'Circulation pumps in parallel or 1+1 arrangement, on variable-frequency drives.' },
      {
        title: 'Heat exchanger',
        body: 'A plate heat exchanger where the design isolates the technology loop from facility water.',
      },
      { title: 'Filtration', body: 'Filters with a bypass, so they can be serviced without stopping flow.' },
      {
        title: 'Water management',
        body: 'Storage tank, automatic make-up and dosing, according to the project’s water-quality requirement.',
      },
      {
        title: 'Controls',
        body: 'Control cabinet, operator panel, instrumentation and wiring, completed and checked before shipment.',
      },
      {
        title: 'Distribution and connections',
        body: 'Internal headers and flanged inlet and outlet connections, positioned for the site pipework.',
      },
    ],
  },

  interfaces: [
    { label: 'Hydraulic', value: 'Flanged inlets and outlets; number and size per project' },
    { label: 'Electrical', value: '3-phase, 380–480 V, 50/60 Hz' },
    { label: 'Communication', value: 'Ethernet / Modbus (optional)' },
    { label: 'Medium', value: 'Deionized water; glycol solution where freeze protection is required' },
  ],

  configuration: [
    { value: '125–2,500', unit: 'kW', label: 'Pump-station heat dissipation' },
    { value: '10–250', unit: 'm³/h', label: 'Pump-station flow range' },
    { value: '1–5', unit: 'bar', label: 'Pressure range' },
    { value: '2.5', unit: 'MW', label: 'Largest integrated block delivered' },
  ],

  redundancy: [
    {
      title: '1+1 circulation pumps',
      body: 'One duty pump and one standby. Used on the United States pump-station reference.',
    },
    {
      title: 'Parallel pumps',
      body: 'Three pumps in parallel feeding three circuits. Used on the Singapore reference.',
    },
    {
      title: 'Closed-loop control',
      body: 'Variable-frequency temperature regulation with load feedback, and a pressure-balance valve between circuits.',
    },
  ],

  steps: [
    {
      name: 'Engineer',
      body: 'Requirements are broken down, the bill of materials is generated, and structural and electrical design are completed.',
    },
    {
      name: 'Factory integrate',
      body: 'Sheet metal, piping and the control cabinet are produced in-house, then assembled and wired.',
    },
    {
      name: 'FAT',
      body: 'Performance testing and functional testing, followed by the factory acceptance test.',
    },
    {
      name: 'Transport',
      body: 'Packaging is designed for the assembly and the logistics route is selected with the project.',
    },
    {
      name: 'Site connect',
      body: 'The assembly is placed, then water, power and communications are connected at defined points.',
    },
    {
      name: 'Commission',
      body: 'Commissioning and operator training are carried out at first operation.',
    },
  ],
};

export const engineeringPage = {
  eyebrow: 'Engineering',
  title: 'Engineering beyond the equipment.',
  lead: 'LINKWAVE engages before procurement. The work starts from a thermal load and a set of constraints, and ends with a commissioned system.',
  metaDescription:
    'Liquid-cooling engineering from requirements to commissioning: thermal and hydraulic design, CFD, controls, factory acceptance testing and support.',

  requirements: {
    title: 'Requirements definition',
    body: 'A cooling architecture is only as good as its inputs. These are the figures we ask for first.',
    inputs: [
      'IT load',
      'Rack density',
      'Fluid conditions',
      'Facility water temperatures',
      'Pressure requirements',
      'Redundancy',
      'Environment',
      'Interfaces',
    ],
  },

  thermal: {
    title: 'Thermal and hydraulic engineering',
    body: 'Each proposal is backed by a design calculation document, a layout plan and a process flow diagram. Where the budget is fixed, the configuration is optimized within it.',
    alt: 'Process diagram of a primary-side hydraulic module showing cooling towers, pumps, storage tank, dosing and softening units, with a symbol legend.',
    caption:
      'Process diagram (excerpt). Primary-side hydraulic module with tower back-up, storage and dosing.',
  },

  cfd: {
    title: 'CFD and simulation',
    body: 'Cold-plate and flow-path designs are developed in CAD and verified by CFD before hardware is built. The team has applied this workflow to liquid cold plates since its power-electronics work.',
    alt: 'Two CFD temperature plots of a liquid cold plate: a cross-section through the coolant channels and an isometric view showing heat sources.',
    caption:
      'CFD result. Temperature field in a liquid cold plate for power-electronics modules; cross-section above, isometric view below.',
  },

  architecture: {
    title: 'System architecture',
    body: 'Primary loop, secondary loop and IT loop are designed together, so the conditions at each boundary are set once and agreed.',
  },

  controls: {
    title: 'Controls',
    body: 'Control cabinets and the operator interface are designed and built in-house, together with the electrical schematics for each system.',
    items: [
      { title: 'Operator interface', body: 'HMI designed per project, with process mimic, set-points, events and alarms.' },
      {
        title: 'Variable-frequency control',
        body: 'Pump speed follows load. Heat-rejection fan speed follows load and ambient temperature.',
      },
      {
        title: 'Monitoring and alarms',
        body: 'Flow, pressure, temperature and water-quality instrumentation, with alarms on abnormal conditions such as leakage or a blocked filter.',
      },
      {
        title: 'Communication',
        body: 'Ethernet / Modbus communication is available as an option for integration with site monitoring.',
      },
    ],
  },

  reliability: {
    title: 'Reliability',
    body: 'Reliability is addressed in the hydraulic design and in how the equipment is built.',
    items: [
      { title: 'Pump redundancy', body: 'Redundant pumps that can be replaced while the unit is online.' },
      { title: 'Bypass', body: 'Filter bypass, so filtration is serviced without interrupting flow.' },
      {
        title: 'Serviceability',
        body: 'Valve positions chosen for access, and an open-type control cabinet.',
      },
      {
        title: 'Component selection',
        body: 'Redundant design for core components, with parts from established suppliers.',
      },
      {
        title: 'Clean assembly',
        body: 'Sanitary-grade stainless piping, electropolished, with no thread tape or sealant.',
      },
      {
        title: 'Water quality',
        body: 'Online water-quality monitoring, make-up, dosing and purification where the design calls for them.',
      },
    ],
  },

  delivery: {
    title: 'Build and factory acceptance',
    body: 'Delivery runs through seven controlled stages. Each closes before the next begins.',
    stages: [
      { code: 'T0', name: 'Order confirmation', items: ['Requirement decomposition', 'Bill of materials', 'Delivery plan'] },
      { code: 'T1', name: 'Detailed design', items: ['Structural design', 'Electrical design', 'Delivery documentation'] },
      { code: 'T2', name: 'Procurement', items: ['Designed parts', 'Catalogue parts', 'Schedule control'] },
      { code: 'T3', name: 'In-house fabrication', items: ['Sheet metal', 'Piping', 'Control box'] },
      { code: 'T4', name: 'Assembly and wiring', items: ['Component assembly', 'Final assembly', 'Wiring'] },
      { code: 'T5', name: 'Testing and acceptance', items: ['Performance testing', 'Functional testing', 'Factory acceptance test'] },
      { code: 'T6', name: 'Packaging and shipping', items: ['Packaging design', 'Logistics selection'] },
    ],
  },

  support: {
    title: 'Commissioning and support',
    body: 'Support is described here as scope, not geography. Local service arrangements are agreed per project.',
    items: [
      {
        title: 'Commissioning and training',
        body: 'Commissioning and operator training at first operation of the unit.',
      },
      {
        title: 'Remote diagnosis',
        body: 'Remote fault diagnosis and maintenance guidance from the engineering team.',
      },
      {
        title: 'Spare parts',
        body: 'Parts are common across the series and kept in stock for long-term supply.',
      },
    ] as { title: string; body: string; status?: Status }[],
    /** Commercial terms from the source deck. Held for approval (spec §30: warranty language). */
    pending: [
      { title: 'Warranty', body: 'One year by default; up to five years by project agreement.', status: 'needs-approval' as Status },
      { title: 'Remote support hours', body: 'Source states 24/7 availability; confirm before publishing.', status: 'needs-approval' as Status },
    ],
  },
};

export const resourcesPage = {
  eyebrow: 'Resources',
  title: 'Technical documentation.',
  lead: 'Engineering documents are prepared for each project and issued on request. Tell us which system you are evaluating and what you need.',
  metaDescription:
    'LINKWAVE technical documentation: datasheets, drawings, P&IDs, electrical schematics, FAT documentation and manuals, issued on request per project.',
  groups: [
    {
      name: 'Evaluation',
      note: 'For early technical review',
      documents: ['Design calculation document', 'Layout plan', 'Process flow diagram', '3D model'],
    },
    {
      name: 'Design integration',
      note: 'For engineering consultants and integrators',
      documents: ['P&ID', 'Electrical schematics', 'HMI design'],
    },
    {
      name: 'Delivery and operation',
      note: 'Issued with the equipment',
      documents: ['Factory acceptance test documentation', 'Delivery documentation'],
    },
  ],
  /** Spec §42.8 items with no confirmed source yet. Development only. */
  pending: [
    'Product datasheets',
    'Dimensional drawings',
    'Water-quality requirements',
    'Installation and O&M manuals',
    'BIM objects',
    'CAD / STEP files',
    'Controls point lists',
    'Compliance declarations',
  ],
};
