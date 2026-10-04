import type { Claim } from './types';

const SRC = 'Supplied product and solution deck';

/**
 * Claim register. `approval: 'pending'` means the figure is supported by the supplied
 * source material but has not yet received final publication sign-off (spec §31).
 */
export const claims: Claim[] = [
  {
    id: 'experience',
    claim: 'Core team liquid-cooling design experience',
    value: '10+ years',
    scope: 'Core engineering team, liquid-cooling design',
    source: `${SRC}, p.2`,
    approval: 'pending',
    lastVerified: null,
    publicWording: 'Liquid-cooling engineering experience in the core team',
  },
  {
    id: 'patents',
    claim: 'Liquid-cooling-related patents held',
    value: '70+',
    scope: 'Patents related to liquid-cooling technologies',
    source: `${SRC}, p.2`,
    approval: 'pending',
    lastVerified: null,
    publicWording: 'Liquid-cooling-related patents',
  },
  {
    id: 'units',
    claim: 'Units/sets delivered',
    value: '8,000+',
    scope: 'Whole liquid-cooling portfolio, including power-electronics and energy applications; not data-center only',
    source: `${SRC}, p.2`,
    approval: 'pending',
    lastVerified: null,
    publicWording: 'Units and sets delivered across the liquid-cooling portfolio',
  },
  {
    id: 'cdu-scale',
    claim: 'Largest centralized CDU reference',
    value: '2.5 MW',
    scope: 'Dual-pump isolated centralized CDU, frame-mounted; maximum heat dissipation',
    source: `${SRC}, p.20 and p.33`,
    approval: 'pending',
    lastVerified: null,
    publicWording: 'Centralized CDU reference scale',
  },
  {
    id: 'regions',
    claim: 'Regions with delivered products',
    value: 'North America, Southeast Asia, Middle East, India, China',
    scope: 'Product deliveries. Does not indicate offices or service centers.',
    source: `${SRC}, p.2`,
    approval: 'pending',
    lastVerified: null,
    publicWording: 'Equipment delivered to North America, Southeast Asia, the Middle East, India and China',
  },
];

export const claim = (id: string): Claim => {
  const found = claims.find((c) => c.id === id);
  if (!found) throw new Error(`Unknown claim: ${id}`);
  return found;
};
