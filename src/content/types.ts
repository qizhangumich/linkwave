import type { ImageMetadata } from 'astro';
import type { Status } from '@/lib/publish';

export interface Media {
  src: ImageMetadata;
  alt: string;
  /** Museum-style factual caption. Always states whether the image is a photograph or a render. */
  caption: string;
  kind: 'photograph' | 'render' | 'drawing';
}

export interface Metric {
  value: string;
  unit?: string;
  label: string;
  note?: string;
  status?: Status;
}

export interface SpecRow {
  label: string;
  /** One value per product configuration, SI units. */
  values: string[];
  /** Optional US customary equivalents, same order. */
  us?: string[];
  note?: string;
  status?: Status;
}

export type SpecGroupName =
  | 'Thermal'
  | 'Hydraulic'
  | 'Mechanical'
  | 'Electrical'
  | 'Controls'
  | 'Environmental'
  | 'Interfaces'
  | 'Reliability'
  | 'Compliance';

export interface SpecGroup {
  group: SpecGroupName;
  rows: SpecRow[];
}

export interface Product {
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  systemRole: string;
  /** Node id in the system architecture diagram. */
  architectureNode: string;
  capacityRange?: string;
  differentiator: string;
  configurations: string[];
  keyMetrics: Metric[];
  features: { title: string; body: string }[];
  specGroups: SpecGroup[];
  specFootnotes?: string[];
  hero: Media;
  /** Portrait or tighter crop for the mobile chapter view. */
  mobileFocus?: string;
  gallery: Media[];
  applications: string[];
  relatedProjects: string[];
  downloads: { title: string; href: string }[];
  publicationStatus: 'published' | 'draft';
}

export interface Project {
  title: string;
  slug: string;
  region: string;
  country: string;
  application: string;
  capacity?: Metric;
  rackCount?: number;
  architecture: string;
  summary: string;
  scope: { item: string; quantity?: string }[];
  heroImage: Media;
  gallery: Media[];
  challenge: string;
  solution: string;
  engineeringHighlights: { text: string; status?: Status }[];
  delivery: string;
  productsUsed: string[];
  publicCustomerName?: string;
  confidentialCustomerDescriptor: string;
  publicationApproved: boolean;
}

/** Internal claim record (spec §30). Every quantitative public claim points here. */
export interface Claim {
  id: string;
  claim: string;
  value: string;
  scope: string;
  source: string;
  approval: 'pending' | 'approved';
  lastVerified: string | null;
  publicWording: string;
}

/** Deployment record (spec §43.2). Verified fleet metrics are derived from this dataset. */
export interface Deployment {
  country: string;
  region: string;
  cityOrRegion?: string;
  productFamily: string;
  quantity?: number;
  capacity?: string;
  commissioningDate?: string;
  operatingStatus?: string;
  publicReference: boolean;
  projectSlug?: string;
}
