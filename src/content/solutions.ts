import type { ImageMetadata } from 'astro';
import cnDatacenter from '@/assets/images/cn-500kw-datacenter.jpg';
import sgPiping from '@/assets/images/sg-pump-station-piping.jpg';
import aislePiping from '@/assets/images/aisle-piping.jpg';
import cdu500 from '@/assets/images/cdu-500kw-cabinet.jpg';
import pumpRender from '@/assets/images/pump-station-render.jpg';

export interface Solution {
  id: string;
  name: string;
  /** Page headline. */
  proposition: string;
  /** One-sentence challenge and response used on the homepage. */
  challenge: string;
  response: string;
  /** Longer treatment for the solution page. */
  challenges: { title: string; body: string }[];
  approach: { title: string; body: string }[];
  /** Node highlighted in the architecture diagram. */
  architectureNode: string;
  designInputs: string[];
  products: string[];
  project?: string;
  image: ImageMetadata;
  alt: string;
  caption: string;
  /** Matching option in the RFQ form. */
  projectType: string;
  metaDescription: string;
}

/** Heat-rejection arrangements shown in the source material (deck p.25). */
export const arrangements = [
  {
    name: 'Isolated CDU + chilled water',
    body: 'The CDU exchanges heat with an existing chilled-water system. Suited to facilities that already run a chiller plant.',
  },
  {
    name: 'Isolated CDU + cooling tower + pump station',
    body: 'A primary-side pump station, including a dosing unit, circulates facility water between the CDU and a cooling tower.',
  },
  {
    name: 'Direct-connected CDU + dry cooler',
    body: 'The CDU connects directly to a dry cooler, with online purification maintaining water quality in the single loop.',
  },
];

export const solutions: Solution[] = [
  {
    id: 'ai-data-centers',
    name: 'AI Data Centers',
    proposition: 'Direct-to-chip cooling for GPU halls, from manifold to heat rejection.',
    challenge:
      'GPU racks reject more heat than air can remove, and the load swings with every training run.',
    response:
      'Direct-to-chip loops served by centralized CDUs, with variable-speed pumping that follows the load.',
    challenges: [
      {
        title: 'Heat density beyond air',
        body: 'Accelerator racks concentrate heat at the chip. Removing it with air alone requires airflow and fan power that a hall cannot practically provide.',
      },
      {
        title: 'Load that moves',
        body: 'Training and inference workloads change rack heat output quickly. Coolant flow and supply temperature have to follow without overshoot.',
      },
      {
        title: 'Two cooling systems in one hall',
        body: 'Cold plates remove most of the heat, but not all of it. The remainder still needs air cooling, coordinated with the liquid loop.',
      },
    ],
    approach: [
      {
        title: 'Centralized CDU on an isolated loop',
        body: 'A plate heat exchanger separates the technology loop from facility water. Reference units are rated at 500 kW and 2.5 MW, with a typical 40 / 55 °C inlet and outlet.',
      },
      {
        title: 'Variable-frequency pumping',
        body: 'Dual pumps on variable-frequency drives adjust flow to the real-time load. Heat-rejection fan speed follows load and ambient temperature.',
      },
      {
        title: 'Liquid and air in one scope',
        body: 'Where residual heat needs air cooling, in-row units, power monitoring and environmental monitoring can be delivered with the liquid system, as in the Nanjing reference.',
      },
    ],
    architectureNode: 'centralized-cdu',
    designInputs: [
      'IT load per rack and per hall',
      'Cold-plate flow and pressure-drop requirement',
      'Coolant supply temperature limit',
      'Residual air-side heat fraction',
    ],
    products: ['centralized-cdu', 'manifolds-distribution', 'liquid-cooled-racks'],
    project: 'china-500kw-data-center',
    image: cnDatacenter,
    alt: 'Enclosed aisle of liquid-cooled server cabinets on a raised floor.',
    caption: 'Photograph. 500 kW liquid-cooled data hall, Nanjing.',
    projectType: 'AI Data Center',
    metaDescription:
      'Direct-to-chip liquid cooling for AI data centers: centralized CDUs, rack manifolds and distribution engineered around GPU rack density.',
  },
  {
    id: 'hyperscale',
    name: 'Hyperscale',
    proposition: 'Multi-megawatt cooling built as repeatable blocks.',
    challenge:
      'Cooling has to repeat across halls and sites at multi-megawatt scale without redesign each time.',
    response:
      '2.5 MW centralized CDUs and primary-side pump stations built as repeatable blocks with common parts.',
    challenges: [
      {
        title: 'Scale in megawatts',
        body: 'Capacity is planned in multi-megawatt increments. Cooling plant has to match that increment rather than being assembled from many small units.',
      },
      {
        title: 'Repeatability',
        body: 'The same block is deployed many times. Each variation between blocks adds engineering, spares and commissioning effort.',
      },
      {
        title: 'Primary-side integration',
        body: 'At this scale the facility-water loop, its pumping and its water treatment are part of the cooling design, not a boundary condition.',
      },
    ],
    approach: [
      {
        title: '2.5 MW centralized CDU',
        body: 'A frame-mounted, dual-pump isolated CDU rated at 2.5 MW, with a 50–250 m³/h flow range, serves a full compute block from one unit.',
      },
      {
        title: 'Primary-side pump stations',
        body: 'Skid-built stations from 125 kW to 2.5 MW, with parallel or 1+1 pumps, storage, make-up and dosing, connect the CDUs to heat rejection.',
      },
      {
        title: 'Common parts and function-based modules',
        body: 'Equipment is designed in functional modules with shared parts across the series, so a repeated block uses the same components and the same spares.',
      },
    ],
    architectureNode: 'pump-station',
    designInputs: [
      'Block size in MW and number of blocks',
      'Facility-water supply and return temperatures',
      'Heat-rejection method',
      'Redundancy requirement for pumps and CDUs',
    ],
    products: ['centralized-cdu', 'primary-pump-stations', 'manifolds-distribution'],
    project: 'us-2-5mw-liquid-cooling',
    image: sgPiping,
    alt: 'Flanged headers and insulated stainless pipework inside a pump-station enclosure.',
    caption: 'Photograph. Primary-side pump station headers, Singapore project.',
    projectType: 'Hyperscale',
    metaDescription:
      'MW-scale liquid cooling for hyperscale data centers: 2.5 MW centralized CDUs and primary-side pump stations built as repeatable blocks.',
  },
  {
    id: 'hpc',
    name: 'HPC',
    proposition: 'Cooling loops for clusters that run at full load.',
    challenge:
      'Dense clusters run at sustained full load, so the loop has no idle hours for maintenance.',
    response:
      'Redundant pumps replaceable online, filter bypass, and sanitary-grade stainless distribution.',
    challenges: [
      {
        title: 'Sustained full load',
        body: 'HPC systems are scheduled to stay busy. The cooling loop sees design load continuously, with no quiet period for service.',
      },
      {
        title: 'Service without stopping',
        body: 'Pumps and filters need attention during the life of the system. That work has to happen while coolant keeps flowing.',
      },
      {
        title: 'Loop cleanliness',
        body: 'Cold-plate channels are narrow. Particles or sealant residue in the loop degrade heat transfer and are difficult to remove once introduced.',
      },
    ],
    approach: [
      {
        title: 'Redundant pumps, replaceable online',
        body: 'The pump arrangement lets one pump be isolated and replaced while the unit continues to operate.',
      },
      {
        title: 'Filter bypass',
        body: 'Filters are serviced through a bypass, so maintenance does not interrupt flow to the racks.',
      },
      {
        title: 'Sanitary-grade distribution',
        body: 'SS304 or SS316L piping, electropolished and assembled without thread tape or sealant, keeps the wetted surface clean from the first fill.',
      },
    ],
    architectureNode: 'secondary-loop',
    designInputs: [
      'Node and rack heat load at full utilisation',
      'Required flow per rack',
      'Allowable maintenance windows',
      'Water-quality specification from the server vendor',
    ],
    products: ['centralized-cdu', 'manifolds-distribution', 'liquid-cooled-racks'],
    image: aislePiping,
    alt: 'Stainless supply and return piping running between two rows of racks.',
    caption: 'Photograph. Aisle piping network between rack rows.',
    projectType: 'HPC',
    metaDescription:
      'Liquid cooling for HPC clusters: redundant pumping, online serviceability and sanitary-grade stainless distribution for sustained full-load operation.',
  },
  {
    id: 'colocation',
    name: 'Colocation',
    proposition: 'Liquid cooling added to a multi-tenant facility, one loop at a time.',
    challenge:
      'Tenants bring different densities, and liquid cooling often has to be added to a live facility.',
    response:
      'Isolated CDUs keep each technology loop separate from facility water, starting from a 500 kW cabinet unit.',
    challenges: [
      {
        title: 'Different tenants, different densities',
        body: 'One suite may need direct-to-chip cooling while the next remains air-cooled. Capacity has to be added per deployment.',
      },
      {
        title: 'A live facility',
        body: 'Liquid cooling is often retrofitted alongside operating halls, connecting to the facility water that is already there.',
      },
      {
        title: 'Separation of responsibility',
        body: 'The operator owns facility water; the tenant’s equipment sits on the technology loop. The boundary between them has to be clear.',
      },
    ],
    approach: [
      {
        title: 'Isolated CDU as the boundary',
        body: 'The plate heat exchanger separates facility water from the technology loop, so water quality and pressure on each side are managed independently.',
      },
      {
        title: 'Cabinet-format 500 kW unit',
        body: 'An enclosed cabinet CDU, 2,000 × 1,000 × 2,000 mm, rated at 500 kW with a 5–90 m³/h flow range.',
      },
      {
        title: 'Connection to existing plant',
        body: 'Where a chilled-water system is already installed, the isolated CDU exchanges heat with it directly.',
      },
    ],
    architectureNode: 'centralized-cdu',
    designInputs: [
      'Tenant load and rack count',
      'Available facility-water temperature and flow',
      'Space and floor loading at the CDU location',
      'Metering and monitoring interface',
    ],
    products: ['centralized-cdu', 'manifolds-distribution'],
    image: cdu500,
    alt: 'Cabinet-type 500 kW CDU with door open showing pump and piping.',
    caption: 'Engineering render. 500 kW isolated CDU, cabinet type.',
    projectType: 'Colocation',
    metaDescription:
      'Liquid cooling for colocation facilities: isolated CDUs that separate tenant technology loops from facility water, from 500 kW per unit.',
  },
  {
    id: 'modular-ai-infrastructure',
    name: 'Modular AI Infrastructure',
    proposition: 'Cooling plant that arrives integrated and tested.',
    challenge:
      'Compute capacity is needed before a conventional mechanical plant can be built on site.',
    response:
      'Cooling plant integrated and tested at the factory, then shipped as enclosures or base-frame assemblies.',
    challenges: [
      {
        title: 'Schedule set by compute',
        body: 'Hardware delivery dates drive the programme. Site-built mechanical plant is frequently the longer path.',
      },
      {
        title: 'Site integration risk',
        body: 'Each pipe joint and cable termination made on site is work that cannot be tested until late in the project.',
      },
      {
        title: 'Constrained or temporary sites',
        body: 'Some deployments have no plant room, or need capacity that can be placed outdoors or relocated.',
      },
    ],
    approach: [
      {
        title: 'Factory-integrated assemblies',
        body: 'Pump stations are built as complete enclosures. Racks, CDU and switchgear can be assembled on a common base frame, as in the 2.5 MW United States reference.',
      },
      {
        title: 'Tested before shipment',
        body: 'Performance testing, functional testing and the factory acceptance test are completed on the assembled system.',
      },
      {
        title: 'Defined site interfaces',
        body: 'On site, the work is reduced to placing the assembly and making the hydraulic, power and communication connections.',
      },
    ],
    architectureNode: 'pump-station',
    designInputs: [
      'Capacity per module and number of modules',
      'Transport and lifting constraints',
      'Indoor or outdoor placement',
      'Site connection points for water, power and communications',
    ],
    products: ['primary-pump-stations', 'centralized-cdu', 'liquid-cooled-racks'],
    project: 'us-2-5mw-liquid-cooling',
    image: pumpRender,
    alt: 'Enclosed skid-mounted pump station with one bay open.',
    caption: 'Engineering render. Enclosed primary-side pump station.',
    projectType: 'Other',
    metaDescription:
      'Modular liquid-cooling infrastructure for AI: factory-integrated, factory-tested cooling assemblies delivered for site connection.',
  },
];

export const solution = (id: string): Solution => {
  const found = solutions.find((s) => s.id === id);
  if (!found) throw new Error(`Unknown solution: ${id}`);
  return found;
};
