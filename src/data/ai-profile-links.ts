export interface PublicProfileLink {
  id: number;
  name: string;
  url: string;
  source: string;
}

// Public profile addresses are checked separately from the supplied directory claims.
export const PUBLIC_PROFILE_LINKS: PublicProfileLink[] = [];