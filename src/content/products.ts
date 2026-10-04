import type { Product, SpecRow } from './types';

import cdu500 from '@/assets/images/cdu-500kw-cabinet.jpg';
import cdu2500 from '@/assets/images/cdu-2500kw-frame.jpg';
import cdu2500Detail from '@/assets/images/cdu-2500kw-frame-detail.jpg';
import pumpRender from '@/assets/images/pump-station-render.jpg';
import pumpPid from '@/assets/images/pump-station-pid.jpg';
import sgPiping from '@/assets/images/sg-pump-station-piping.jpg';
import manifolds from '@/assets/images/manifolds.jpg';
import aislePiping from '@/assets/images/aisle-piping.jpg';
import stainlessPipe from '@/assets/images/stainless-pipe.jpg';
import rack from '@/assets/images/liquid-cooled-rack.jpg';

/** Vendor-qualification fields from spec §42 that have no verified source yet. */
const tbd = (label: string, n = 1): SpecRow => ({
  label,
  values: Array<string>(n).fill('[TBD]'),
  status: 'tbd',
});

const ENV_ROWS = (n: number): SpecRow[] => [
  {
    label: 'Ambient temperature',
    values: Array<string>(n).fill('−25 to 40 °C'),
    us: Array<string>(n).fill('−13 to 104 °F'),
  },
  { label: 'Relative humidity', values: Array<string>(n).fill('5–95 %') },
  {
    label: 'Altitude',
    values: Array<string>(n).fill('≤ 3,000 m'),
    us: Array<string>(n).fill('≤ 9,840 ft'),
  },
];

export const products: Product[] = [
  {
    name: 'Centralized CDU',
    slug: 'centralized-cdu',
    category: 'CDU systems',
    shortDescription:
      'Liquid-to-liquid coolant distribution units that isolate the technology cooling loop from facility water and serve a row, a room or a full compute block from one unit.',
    systemRole:
      'Separates the secondary (IT) loop from the primary (facility) loop through a plate heat exchanger, and controls secondary flow, pressure and supply temperature.',
    architectureNode: 'centralized-cdu',
    capacityRange: '500 kW – 2.5 MW',
    differentiator: 'Dual-pump, isolated design in cabinet and frame-mounted formats.',
    configurations: ['500 kW · cabinet', '2.5 MW · frame-mounted'],
    keyMetrics: [
      { value: '2.5', unit: 'MW', label: 'Maximum heat dissipation' },
      { value: '50–250', unit: 'm³/h', label: 'Flow range, 2.5 MW unit' },
      { value: '3', unit: 'bar', label: 'Pressure' },
      { value: '40 / 55', unit: '°C', label: 'Typical inlet / outlet' },
    ],
    features: [
      {
        title: 'Isolated loops',
        body: 'A plate heat exchanger separates facility water from the technology cooling loop, so secondary water quality is controlled independently of the primary side.',
      },
      {
        title: 'Dual pumps',
        body: 'Two circulation pumps per unit. The redundant pump arrangement allows a pump to be replaced while the unit stays online.',
      },
      {
        title: 'Variable-frequency control',
        body: 'Pump speed follows the real-time load rather than running at fixed duty.',
      },
      {
        title: 'Filter bypass',
        body: 'The filter can be serviced through a bypass without interrupting coolant flow.',
      },
      {
        title: 'Sanitary-grade piping',
        body: 'Stainless-steel process piping, electropolished, assembled without thread tape or sealant.',
      },
    ],
    specGroups: [
      {
        group: 'Thermal',
        rows: [
          { label: 'Maximum heat dissipation', values: ['500 kW', '2.5 MW'] },
          {
            label: 'Inlet / outlet water temperature',
            values: ['40 / 55 °C', '40 / 55 °C'],
            us: ['104 / 131 °F', '104 / 131 °F'],
            note: 'Typical value',
          },
          tbd('Approach temperature', 2),
          tbd('Operating envelope', 2),
        ],
      },
      {
        group: 'Hydraulic',
        rows: [
          {
            label: 'Flow rate',
            values: ['5–90 m³/h', '50–250 m³/h'],
            us: ['22–396 US gpm', '220–1,100 US gpm'],
          },
          { label: 'Pressure', values: ['3 bar', '3 bar'], us: ['43.5 psi', '43.5 psi'] },
          {
            label: 'Medium',
            values: ['Pure / deionized water ¹', 'Pure / deionized water ¹'],
          },
          { label: 'Pump configuration', values: ['Dual pump', 'Dual pump'] },
          tbd('Pressure drop', 2),
          tbd('Connection sizes', 2),
        ],
      },
      {
        group: 'Mechanical',
        rows: [
          { label: 'Format', values: ['Enclosed cabinet', 'Open frame'] },
          {
            label: 'Dimensions (W × D × H)',
            values: ['2,000 × 1,000 × 2,000 mm', '1,600 × 1,800 × 1,860 mm'],
            us: ['78.7 × 39.4 × 78.7 in', '63.0 × 70.9 × 73.2 in'],
          },
          { label: 'Weight', values: ['350 kg', '850 kg'], us: ['772 lb', '1,874 lb'] },
          tbd('Operating weight', 2),
          tbd('Service clearance', 2),
          tbd('Noise', 2),
        ],
      },
      {
        group: 'Electrical',
        rows: [
          {
            label: 'Supply',
            values: ['3-phase, 380–480 V, 50/60 Hz', '3-phase, 380–480 V, 50/60 Hz'],
          },
          tbd('Electrical consumption', 2),
        ],
      },
      {
        group: 'Controls',
        rows: [
          {
            label: 'Communication',
            values: ['Ethernet / Modbus (optional)', 'Ethernet / Modbus (optional)'],
          },
          tbd('PLC platform', 2),
          tbd('BACnet', 2),
          tbd('BMS / DCIM integration', 2),
        ],
      },
      { group: 'Environmental', rows: ENV_ROWS(2) },
      {
        group: 'Compliance',
        rows: [tbd('UL / ETL status', 2), tbd('CE status', 2), tbd('PED applicability', 2)],
      },
    ],
    specFootnotes: [
      '¹ Where freeze protection is required, an ethylene-glycol or propylene-glycol solution is used, selected for the site’s ambient temperature.',
    ],
    hero: {
      src: cdu2500,
      alt: 'Frame-mounted 2.5 MW centralized CDU showing two pumps, a plate heat exchanger, an expansion vessel and stainless-steel piping.',
      caption: 'Engineering render. 2.5 MW dual-pump isolated CDU, frame-mounted.',
      kind: 'render',
    },
    mobileFocus: '50% 50%',
    gallery: [
      {
        src: cdu500,
        alt: 'Cabinet-type 500 kW centralized CDU with the door open, showing vertical pump, piping and expansion vessel.',
        caption: 'Engineering render. 500 kW dual-pump isolated CDU, cabinet type, door open.',
        kind: 'render',
      },
      {
        src: cdu2500Detail,
        alt: 'Close view of the plate heat exchanger and pipework of the 2.5 MW CDU.',
        caption: 'Engineering render. Plate heat exchanger and primary-side connections, 2.5 MW unit.',
        kind: 'render',
      },
    ],
    applications: ['AI data centers', 'Hyperscale', 'HPC', 'Colocation'],
    relatedProjects: ['us-2-5mw-liquid-cooling', 'china-500kw-data-center'],
    downloads: [],
    publicationStatus: 'published',
  },
  {
    name: 'Primary-side pump stations',
    slug: 'primary-pump-stations',
    category: 'Primary cooling',
    shortDescription:
      'Skid-built pump stations that circulate facility water between the CDUs and the heat-rejection plant, with make-up, storage and water treatment integrated.',
    systemRole:
      'Moves heat from the centralized CDUs to dry coolers, cooling towers or a chilled-water plant, and holds primary-loop temperature under changing load.',
    architectureNode: 'pump-station',
    capacityRange: '125 kW – 2.5 MW',
    differentiator: 'Variable-frequency pumping with closed-loop load feedback.',
    configurations: ['Pump station'],
    keyMetrics: [
      { value: '125–2,500', unit: 'kW', label: 'Heat dissipation range' },
      { value: '10–250', unit: 'm³/h', label: 'Flow range' },
      { value: '1–5', unit: 'bar', label: 'Pressure range' },
      { value: '30–55', unit: '°C', label: 'Operating temperature' },
    ],
    features: [
      {
        title: 'Variable-frequency pumping',
        body: 'Pump speed and heat-rejection fan speed follow the real-time load and ambient temperature.',
      },
      {
        title: 'Pump redundancy',
        body: 'Parallel or 1+1 circulation pumps, configured to the project’s redundancy requirement.',
      },
      {
        title: 'Integrated water management',
        body: 'Storage tank, automatic make-up and dosing can be built into the skid.',
      },
      {
        title: 'Closed-loop control',
        body: 'Load feedback and pressure balancing hold supply conditions steady across multiple circuits.',
      },
    ],
    specGroups: [
      {
        group: 'Thermal',
        rows: [
          { label: 'Maximum heat dissipation', values: ['125 kW – 2,500 kW'] },
          { label: 'Operating temperature', values: ['30–55 °C'], us: ['86–131 °F'] },
          tbd('Heat-rejection compatibility'),
        ],
      },
      {
        group: 'Hydraulic',
        rows: [
          { label: 'Flow rate', values: ['10–250 m³/h'], us: ['44–1,100 US gpm'] },
          { label: 'Pressure', values: ['1–5 bar'], us: ['14.5–72.5 psi'] },
          { label: 'Medium', values: ['Deionized water ¹'] },
          tbd('Water-quality requirements'),
          tbd('Connection sizes'),
        ],
      },
      {
        group: 'Mechanical',
        rows: [
          { label: 'Dimensions', values: ['Sized to capacity'] },
          { label: 'Weight', values: ['200–1,500 kg'], us: ['441–3,307 lb'] },
          tbd('Outdoor / IP rating'),
          tbd('Seismic options'),
        ],
      },
      {
        group: 'Electrical',
        rows: [{ label: 'Supply', values: ['3-phase, 380–480 V, 50/60 Hz'] }],
      },
      {
        group: 'Controls',
        rows: [
          { label: 'Control mode', values: ['Variable frequency'] },
          { label: 'Communication', values: ['Ethernet / Modbus (optional)'] },
          tbd('Remote monitoring'),
        ],
      },
      { group: 'Environmental', rows: ENV_ROWS(1) },
      { group: 'Compliance', rows: [tbd('UL / ETL status'), tbd('CE status')] },
    ],
    specFootnotes: [
      '¹ Where freeze protection is required, an ethylene-glycol or propylene-glycol solution is used, selected for the site’s ambient temperature.',
    ],
    hero: {
      src: pumpRender,
      alt: 'Enclosed primary-side pump station on a skid base with one bay open, showing pumps, valves and pipework.',
      caption: 'Engineering render. Enclosed primary-side pump station with one service bay open.',
      kind: 'render',
    },
    mobileFocus: '22% 50%',
    gallery: [
      {
        src: sgPiping,
        alt: 'Open side of a pump station showing six flanged connections above insulated stainless pipework.',
        caption: 'Photograph. Inlet and outlet headers of a pump station built for a project in Singapore.',
        kind: 'photograph',
      },
      {
        src: pumpPid,
        alt: 'Process diagram of a primary-side hydraulic module with cooling towers, pumps, storage, dosing and softening.',
        caption: 'Process diagram (excerpt). Primary-side hydraulic module with tower back-up, storage and dosing.',
        kind: 'drawing',
      },
    ],
    applications: ['AI data centers', 'Hyperscale', 'Modular AI infrastructure'],
    relatedProjects: ['us-primary-pump-station', 'singapore-primary-pump-station'],
    downloads: [],
    publicationStatus: 'published',
  },
  {
    name: 'Manifolds and distribution',
    slug: 'manifolds-distribution',
    category: 'Distribution',
    shortDescription:
      'Aisle piping networks, rack manifolds and flexible hoses that carry coolant from the CDU to each server position.',
    systemRole:
      'Distributes secondary-loop coolant from the CDU along the aisle and into each rack, and returns it.',
    architectureNode: 'rack-manifold',
    differentiator: 'Sanitary-grade stainless steel, assembled without thread tape or sealant.',
    configurations: ['Distribution'],
    keyMetrics: [
      { value: 'SS304 / SS316L', label: 'Pipe material, sanitary grade' },
      { value: 'DN50', label: 'Round manifold' },
      { value: '12', unit: 'mm', label: 'Flexible hose, EPDM' },
    ],
    features: [
      {
        title: 'Sanitary-grade stainless steel',
        body: 'SS304 or SS316L pipe, electropolished, to keep the wetted surface clean over the life of the loop.',
      },
      {
        title: 'No tape, no sealant',
        body: 'Joints are made without thread tape or thread sealant, removing a common source of loop contamination.',
      },
      {
        title: 'Quick-install connections',
        body: 'Prefabricated sections and quick connectors reduce fitting work in the aisle.',
      },
    ],
    specGroups: [
      {
        group: 'Mechanical',
        rows: [
          { label: 'Pipe material', values: ['SS304 / SS316L, sanitary grade'] },
          { label: 'Manifold', values: ['DN50 round pipe or ST50 square pipe'] },
          { label: 'Flexible hose material', values: ['EPDM'] },
          { label: 'Flexible hose size', values: ['12 mm'], us: ['0.47 in'] },
        ],
      },
      {
        group: 'Hydraulic',
        rows: [tbd('Pressure rating'), tbd('Supported coolants'), tbd('Coupling standard')],
      },
    ],
    hero: {
      src: manifolds,
      alt: 'Two polished stainless-steel rack manifolds with rows of threaded ports.',
      caption: 'Photograph. Stainless-steel rack manifolds before installation.',
      kind: 'photograph',
    },
    mobileFocus: '50% 50%',
    gallery: [
      {
        src: aislePiping,
        alt: 'Stainless supply and return pipes running between two rows of racks.',
        caption: 'Photograph. Aisle piping network between rack rows.',
        kind: 'photograph',
      },
      {
        src: stainlessPipe,
        alt: 'Stacked stainless-steel pipe sections with welded branch ports.',
        caption: 'Photograph. Fabricated stainless pipe sections with branch ports.',
        kind: 'photograph',
      },
    ],
    applications: ['AI data centers', 'HPC', 'Colocation'],
    relatedProjects: ['us-2-5mw-liquid-cooling', 'china-500kw-data-center'],
    downloads: [],
    publicationStatus: 'published',
  },
  {
    name: 'Liquid-cooled racks',
    slug: 'liquid-cooled-racks',
    category: 'Racks',
    shortDescription:
      'Racks delivered with manifolds, hoses and power distribution fitted, ready to connect to the aisle piping network.',
    systemRole:
      'Houses the IT equipment and terminates the secondary loop at the server through an integrated rack manifold.',
    architectureNode: 'rack-manifold',
    differentiator: 'Manifold, hoses and switchgear integrated at the factory.',
    configurations: ['Rack'],
    keyMetrics: [
      { value: '600 × 1,200 × 2,000', unit: 'mm', label: 'W × D × H' },
      { value: 'DN50', label: 'Integrated manifold' },
    ],
    features: [
      {
        title: 'Integrated manifold',
        body: 'DN50 round or ST50 square stainless manifold with 12 mm EPDM hoses to each server position.',
      },
      {
        title: 'Top-mounted switchgear',
        body: 'Power switching is located at the top of the rack, clear of the coolant connections.',
      },
    ],
    specGroups: [
      {
        group: 'Mechanical',
        rows: [
          {
            label: 'Dimensions (W × D × H)',
            values: ['600 × 1,200 × 2,000 mm'],
            us: ['23.6 × 47.2 × 78.7 in'],
          },
          {
            label: 'Weight, without servers',
            values: ['40 kg'],
            status: 'needs-approval',
            note: 'Source value; confirm before publication',
          },
          {
            label: 'Unit count',
            values: ['20'],
            status: 'needs-approval',
            note: 'Source value; meaning to be confirmed',
          },
        ],
      },
      {
        group: 'Hydraulic',
        rows: [
          { label: 'Pipe material', values: ['SS304 / SS316L, sanitary grade'] },
          { label: 'Manifold', values: ['DN50 round pipe or ST50 square pipe'] },
          { label: 'Flexible hose', values: ['EPDM, 12 mm'] },
        ],
      },
      {
        group: 'Electrical',
        rows: [
          { label: 'Supply', values: ['3-phase, 380–480 V, 50/60 Hz'] },
          { label: 'Switch', values: ['Top-mounted'] },
        ],
      },
      { group: 'Environmental', rows: ENV_ROWS(1) },
    ],
    hero: {
      src: rack,
      alt: 'Black liquid-cooled rack with the front door open and two coolant connections on the top panel.',
      caption: 'Engineering render. Liquid-cooled rack with top coolant connections.',
      kind: 'render',
    },
    mobileFocus: '50% 15%',
    gallery: [],
    applications: ['AI data centers', 'HPC'],
    relatedProjects: ['us-2-5mw-liquid-cooling'],
    downloads: [],
    publicationStatus: 'published',
  },
];

export const product = (slug: string): Product => {
  const found = products.find((p) => p.slug === slug);
  if (!found) throw new Error(`Unknown product: ${slug}`);
  return found;
};
