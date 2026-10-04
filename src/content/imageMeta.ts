import type { ImageMetadata } from 'astro';
import cdu2500kwFrame from '@/assets/images/cdu-2500kw-frame.jpg';
import cdu500kwCabinet from '@/assets/images/cdu-500kw-cabinet.jpg';
import liquidCooledRack from '@/assets/images/liquid-cooled-rack.jpg';
import manifolds from '@/assets/images/manifolds.jpg';
import pumpStationRender from '@/assets/images/pump-station-render.jpg';
import sgPumpStation from '@/assets/images/sg-pump-station.jpg';
import us2500kwIntegration from '@/assets/images/us-2500kw-integration.jpg';
import us2500kwSwitchgear from '@/assets/images/us-2500kw-switchgear.jpg';
import usPumpStation from '@/assets/images/us-pump-station.jpg';

/**
 * Studio images: equipment cut out of its surroundings and set on the flat backdrop colour
 * (--surface-tertiary). `anchor` pins the side where the original frame cropped the object,
 * so that cut always meets the edge of the image frame.
 */
export const studio = new Map<ImageMetadata, { anchor: string }>([
  [cdu2500kwFrame, { anchor: '100% 50%' }],
  [cdu500kwCabinet, { anchor: '50% 50%' }],
  [liquidCooledRack, { anchor: '50% 50%' }],
  [manifolds, { anchor: '100% 100%' }],
  [pumpStationRender, { anchor: '50% 50%' }],
  [sgPumpStation, { anchor: '50% 50%' }],
  [us2500kwIntegration, { anchor: '100% 50%' }],
  [us2500kwSwitchgear, { anchor: '50% 50%' }],
  [usPumpStation, { anchor: '100% 50%' }],
]);
