import { z } from 'zod';

export const researchInput = z.object({
  field: z.string().trim().min(3).max(160),
  scope: z.string().trim().max(1600).default(''),
});
export const profileInput = z.object({ display_name: z.string().trim().min(1).max(120), biography: z.string().trim().max(1000) });
export function publicSourceUrl(value: string): string | undefined {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.username || url.password) return;
    const host = url.hostname.toLowerCase();
    if (!host.includes('.') || host === 'localhost' || host.endsWith('.local') || /^[\d.]+$/.test(host) || host.includes(':')) return;
    return url.href;
  } catch { return; }
}
export function editorAllowed(roles: string[]) { return roles.includes('editor'); }
export type ResearchSource = { url: string; title: string };
export function groundedUrl(url: string, sources: ResearchSource[]) {
  const safe = publicSourceUrl(url);
  return safe && sources.some(s => publicSourceUrl(s.url) === safe) ? safe : undefined;
}
export function parseSources(value: unknown): ResearchSource[] {
  return z.array(z.object({ url: z.string(), title: z.string() })).safeParse(value).data?.filter(s => publicSourceUrl(s.url)) ?? [];
}
export function privateHead(title: string, description: string) {
  return { meta: [{ title: `${title} | Åke Elden` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Åke Elden` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }, { name: 'robots', content: 'noindex, nofollow' }] };
}