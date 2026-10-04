import type { Deployment, Project } from './types';

import usIntegration from '@/assets/images/us-2500kw-integration.jpg';
import usSwitchgear from '@/assets/images/us-2500kw-switchgear.jpg';
import usPump from '@/assets/images/us-pump-station.jpg';
import sgPump from '@/assets/images/sg-pump-station.jpg';
import sgPiping from '@/assets/images/sg-pump-station-piping.jpg';
import cnDatacenter from '@/assets/images/cn-500kw-datacenter.jpg';

/**
 * Project references drawn from the supplied source deck.
 * `publicationApproved` must be confirmed per project (customer naming, photo rights) before launch.
 * No customer is named; each uses a factual generic descriptor.
 */
export const projects: Project[] = [
  {
    title: '2.5 MW liquid-cooled computing integration',
    slug: 'us-2-5mw-liquid-cooling',
    region: 'North America',
    country: 'United States',
    application: 'High-density computing',
    capacity: { value: '2.5', unit: 'MW', label: 'Cooling scale' },
    rackCount: 20,
    architecture: 'Centralized CDU with dry-cooler heat rejection',
    summary:
      'Twenty liquid-cooled racks, one centralized CDU, the piping network, switchgear and a dry cooler, integrated on a common base frame and delivered as one indoor system.',
    scope: [
      { item: 'Liquid-cooled racks', quantity: '20' },
      { item: 'Centralized CDU', quantity: '1' },
      { item: 'Piping network', quantity: '1' },
      { item: 'Dry cooler', quantity: '1' },
      { item: 'Switchgear cabinet', quantity: '1' },
      { item: 'Base frame', quantity: '1' },
    ],
    heroImage: {
      src: usIntegration,
      alt: 'A row of open liquid-cooled racks on a black base frame, with a white frame-mounted CDU at the near end showing pumps, expansion vessels and stainless piping.',
      caption:
        'Photograph, background removed. Racks and centralized CDU on a common base frame, during factory integration before shipment to the United States.',
      kind: 'photograph',
    },
    gallery: [
      {
        src: usSwitchgear,
        alt: 'White switchgear cabinet with a touch panel at the end of the rack row, mounted on the same base frame.',
        caption: 'Photograph, background removed. Switchgear cabinet and control panel at the opposite end of the rack row.',
        kind: 'photograph',
      },
    ],
    challenge:
      'A 2.5 MW compute block needs racks, coolant distribution, heat rejection and power switching to arrive as one coordinated system rather than as separate packages integrated on site.',
    solution:
      'LINKWAVE engineered the block around a single centralized CDU. Racks, manifolds and the piping network were assembled on a shared base frame, so hydraulic connections between rack and CDU were made and checked at the factory.',
    engineeringHighlights: [
      { text: 'One centralized CDU serves all twenty racks.' },
      { text: 'Racks, CDU and switchgear share one structural base frame.' },
      { text: 'Rack-to-CDU piping completed before shipment.' },
      { text: 'Heat rejected to a dry cooler supplied within the same scope.' },
    ],
    delivery:
      'Detailed design, fabrication, assembly, testing and factory acceptance were completed before packaging and shipment.',
    productsUsed: ['centralized-cdu', 'manifolds-distribution', 'liquid-cooled-racks'],
    confidentialCustomerDescriptor: 'High-density computing operator, United States',
    publicationApproved: false,
  },
  {
    title: 'Primary-side pump station integration',
    slug: 'us-primary-pump-station',
    region: 'North America',
    country: 'United States',
    application: 'Data-center primary cooling',
    architecture: 'Closed-loop primary circuit with dry-cooler heat rejection',
    summary:
      'An enclosed primary-side pump station with redundant circulation pumps, automatic make-up and dosing, built for a data-center cooling loop in the United States.',
    scope: [
      { item: 'Circulation pumps', quantity: '1+1 redundant' },
      { item: 'Variable-frequency speed regulation' },
      { item: 'Automatic water make-up and dosing' },
      { item: 'Closed-loop circulation' },
      { item: 'Anti-corrosion design' },
    ],
    heroImage: {
      src: usPump,
      alt: 'White enclosed pump station with a door-mounted operator panel, on a transport frame, with a V-shaped dry-cooler coil visible behind it.',
      caption: 'Photograph, background removed. Enclosed pump station with dry cooler, at the factory before shipment.',
      kind: 'photograph',
    },
    gallery: [],
    challenge:
      'The primary loop had to keep circulating through a pump fault, and maintain its own water quality without a separate treatment plant.',
    solution:
      'A 1+1 pump arrangement with variable-frequency drives, a closed circuit, and make-up and dosing built into the enclosure.',
    engineeringHighlights: [
      { text: '1+1 circulation-pump redundancy.' },
      { text: 'Variable-frequency speed regulation.' },
      { text: 'Automatic make-up and chemical dosing inside the enclosure.' },
      { text: 'Corrosion-resistant construction for a closed primary circuit.' },
      {
        text: 'UL certification for this unit.',
        status: 'needs-approval',
      },
    ],
    delivery:
      'Built, wired and tested as a single enclosure, then shipped on a transport frame for connection on site.',
    productsUsed: ['primary-pump-stations'],
    confidentialCustomerDescriptor: 'Data-center operator, United States',
    publicationApproved: false,
  },
  {
    title: 'Primary-side pump station, three circuits',
    slug: 'singapore-primary-pump-station',
    region: 'Southeast Asia',
    country: 'Singapore',
    application: 'Data-center primary cooling',
    capacity: {
      value: '300',
      unit: 'm³/h',
      label: 'Design flow',
      status: 'needs-approval',
      note: 'Source reads “300 m³”; confirm unit',
    },
    architecture: 'Three parallel pumps, three inlets and three outlets',
    summary:
      'An enclosed pump station with three parallel circulation pumps feeding three circuits, with a storage tank and pressure balancing, built for a project in Singapore.',
    scope: [
      { item: 'Parallel circulation pumps', quantity: '3' },
      { item: 'Inlets and outlets', quantity: '3 + 3' },
      { item: 'Water storage tank', quantity: '1 m³' },
      { item: 'Pressure-balance valve' },
      { item: 'Variable-frequency temperature regulation' },
      { item: 'Load feedback and closed-loop control' },
    ],
    heroImage: {
      src: sgPiping,
      alt: 'Open side of a grey pump-station enclosure showing six flanged connections above insulated stainless-steel pipework and valves.',
      caption: 'Photograph. Three inlet and three outlet connections above the pump headers.',
      kind: 'photograph',
    },
    gallery: [
      {
        src: sgPump,
        alt: 'Grey pump-station enclosure on timber bearers with two doors open, showing a stainless storage tank and large flanged pipe ends.',
        caption: 'Photograph, background removed. Enclosure with the 1 m³ stainless storage tank visible, at the factory.',
        kind: 'photograph',
      },
    ],
    challenge:
      'Three circuits draw from one station. Flow has to stay balanced between them while supply temperature follows the load.',
    solution:
      'Three pumps run in parallel on variable-frequency drives. A pressure-balance valve equalizes the circuits, and load feedback closes the temperature-control loop.',
    engineeringHighlights: [
      { text: 'Three parallel circulation pumps.' },
      { text: 'Three inlets and three outlets from a common header.' },
      { text: '1 m³ stainless water-storage tank inside the enclosure.' },
      { text: 'Pressure-balance valve across circuits.' },
      { text: 'Closed-loop temperature control with load feedback.' },
    ],
    delivery: 'Assembled and tested as one enclosure before shipment.',
    productsUsed: ['primary-pump-stations'],
    confidentialCustomerDescriptor: 'Data-center project, Singapore',
    publicationApproved: false,
  },
  {
    title: '500 kW liquid-cooled data-center integration',
    slug: 'china-500kw-data-center',
    region: 'China',
    country: 'China',
    application: 'Data center',
    capacity: { value: '500', unit: 'kW', label: 'Cooling scale' },
    rackCount: 23,
    architecture: 'Two CDUs with in-row air conditioning for residual heat',
    summary:
      'A 23-cabinet data hall in Nanjing with two CDUs, the piping network, in-row air conditioning, power monitoring and environmental monitoring delivered as one integration scope.',
    scope: [
      { item: 'Server cabinets', quantity: '23' },
      { item: 'In-row air conditioners', quantity: '7' },
      { item: 'CDU', quantity: '2' },
      { item: 'Piping network', quantity: '1' },
      { item: 'Electrical power monitoring system', quantity: '1' },
      { item: 'Monitoring system', quantity: '1' },
    ],
    heroImage: {
      src: cnDatacenter,
      alt: 'Enclosed aisle of black server cabinets on a raised floor, with a wall-mounted monitoring display at the aisle end.',
      caption: 'Photograph. Completed installation, Nanjing.',
      kind: 'photograph',
    },
    gallery: [],
    challenge:
      'Liquid cooling removes most of the server heat, but the hall still needs air cooling for the remainder and one monitoring view across both.',
    solution:
      'Two CDUs serve the liquid loop, seven in-row units handle residual air-side heat, and power and environmental monitoring were included in the same scope.',
    engineeringHighlights: [
      { text: 'Two CDUs on a shared piping network.' },
      { text: 'Liquid and air cooling delivered in one scope.' },
      { text: 'Power monitoring and environmental monitoring integrated.' },
    ],
    delivery: 'Installed and commissioned on site in Nanjing.',
    productsUsed: ['centralized-cdu', 'manifolds-distribution'],
    confidentialCustomerDescriptor: 'Data-center operator, Nanjing',
    publicationApproved: false,
  },
];

export const project = (slug: string): Project => {
  const found = projects.find((p) => p.slug === slug);
  if (!found) throw new Error(`Unknown project: ${slug}`);
  return found;
};

/**
 * Deployment dataset (spec §43.2). Fleet figures such as “operating in N countries”
 * are to be derived from this list once it is complete, never typed by hand.
 */
export const deployments: Deployment[] = [
  {
    country: 'United States',
    region: 'North America',
    productFamily: 'Centralized CDU, racks, distribution',
    capacity: '2.5 MW',
    publicReference: true,
    projectSlug: 'us-2-5mw-liquid-cooling',
  },
  {
    country: 'United States',
    region: 'North America',
    productFamily: 'Primary-side pump station',
    publicReference: true,
    projectSlug: 'us-primary-pump-station',
  },
  {
    country: 'Singapore',
    region: 'Southeast Asia',
    productFamily: 'Primary-side pump station',
    publicReference: true,
    projectSlug: 'singapore-primary-pump-station',
  },
  {
    country: 'China',
    region: 'China',
    cityOrRegion: 'Nanjing',
    productFamily: 'CDU, distribution, integration',
    capacity: '500 kW',
    publicReference: true,
    projectSlug: 'china-500kw-data-center',
  },
];

/** Regions with delivered equipment per the source deck. Not offices or service centers. */
export const deliveryRegions = ['North America', 'Southeast Asia', 'Middle East', 'India', 'China'];
