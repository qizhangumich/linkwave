/**
 * Publication gate (spec §30, §45).
 * Fields that are [TBD] or await approval render in `astro dev` with a visible marker
 * and are omitted entirely from production builds.
 */
export const showUnapproved = import.meta.env.DEV;

export type Status = 'verified' | 'needs-approval' | 'tbd';

export const isPublic = (status: Status | undefined): boolean =>
  status === undefined || status === 'verified' || showUnapproved;

export const isFlagged = (status: Status | undefined): boolean =>
  status !== undefined && status !== 'verified';
