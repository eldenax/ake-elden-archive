import { describe, expect, test } from 'bun:test';
import { editorAllowed, groundedUrl, researchInput, publicSourceUrl } from '../src/lib/editor-research';

describe('editor research rules', () => {
  test('only editors may run field research', () => { expect(editorAllowed(['editor'])).toBe(true); expect(editorAllowed(['user'])).toBe(false); expect(editorAllowed([])).toBe(false); });
  test('only public HTTPS sources can be offered', () => { expect(publicSourceUrl('https://www.uio.no/english/people/')).toBe('https://www.uio.no/english/people/'); expect(publicSourceUrl('javascript:alert(1)')).toBeUndefined(); expect(publicSourceUrl('http://example.com')).toBeUndefined(); expect(publicSourceUrl('https://127.0.0.1/private')).toBeUndefined(); });
  test('model-generated links must occur in actual returned sources', () => { const sources = [{ url: 'https://www.nla.no/profile', title: 'Staff' }]; expect(groundedUrl('https://www.nla.no/profile', sources)).toBe('https://www.nla.no/profile'); expect(groundedUrl('https://www.nla.no/invented', sources)).toBeUndefined(); });
  test('new AI field input is validated', () => { expect(researchInput.parse({ field: ' AI and theology/religion ' }).field).toBe('AI and theology/religion'); expect(researchInput.safeParse({ field: ' ' }).success).toBe(false); });
  test('citation tracking does not break real source links', () => { expect(groundedUrl('https://www.uio.no/profile?utm_source=openai', [{ url: 'https://www.uio.no/profile', title: 'Profile' }])).toBe('https://www.uio.no/profile?utm_source=openai'); expect(groundedUrl('https://www.uio.no/profile?person=other', [{ url: 'https://www.uio.no/profile', title: 'Profile' }])).toBeUndefined(); });
});