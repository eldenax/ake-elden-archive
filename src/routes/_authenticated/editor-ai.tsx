import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { useServerFn } from '@tanstack/react-start';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Search, Square, Download, LogOut, Save, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { editorWorkspace, saveEditorProfile, resumeEditorAI } from '@/lib/editor.functions';
import { groundedUrl, parseSources, privateHead, type ResearchSource } from '@/lib/editor-research';

const workspaceQuery = queryOptions({ queryKey: ['editor-workspace'], queryFn: () => editorWorkspace(), retry: false });
export const Route = createFileRoute('/_authenticated/editor-ai')({
  head: () => privateHead('AI field research', 'Private source-backed research suggestions for the AI Expertise in Norway editorial directory.'),
  loader: ({ context }) => context.queryClient.ensureQueryData(workspaceQuery),
  component: EditorAI,
});
function EditorAI() {
  const { data: workspace } = useSuspenseQuery(workspaceQuery);
  const { queryClient } = Route.useRouteContext();
  const navigate = useNavigate();
  const saveProfile = useServerFn(saveEditorProfile);
  const resume = useServerFn(resumeEditorAI);
  const [field, setField] = useState('');
  const [scope, setScope] = useState('');
  const [name, setName] = useState(workspace.profile?.display_name ?? '');
  const [biography, setBiography] = useState(workspace.profile?.biography ?? '');
  const [profileMessage, setProfileMessage] = useState('');
  const [answer, setAnswer] = useState('');
  const [sources, setSources] = useState<ResearchSource[]>([]);
  const [reasoning, setReasoning] = useState('');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [activeId, setActiveId] = useState('');
  const controller = useRef<AbortController | null>(null);
  useEffect(() => () => { controller.current?.abort(); }, []);
  async function signOut() {
    controller.current?.abort();
    await queryClient.cancelQueries(); queryClient.clear();
    await supabase.auth.signOut(); await navigate({ to: '/auth', replace: true });
  }
  async function research(event: React.FormEvent) {
    event.preventDefault(); setBusy(true); setError(''); setAnswer(''); setSources([]); setReasoning(''); setActiveId(''); setStatus('Finding documented public sources…');
    const abort = new AbortController(); controller.current = abort;
    try {
      const { data } = await supabase.auth.getSession();
      if (!data.session) throw new Error('Your session has expired. Sign in again.');
      const response = await fetch('/api/public/editor-research', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${data.session.access_token}` }, body: JSON.stringify({ field, scope }), signal: abort.signal });
      if (!response.ok) { const failure = await response.json(); throw new Error(failure.message ?? `Research failed (${response.status}).`); }
      if (!response.body) throw new Error('The research response was empty.');
      const reader = response.body.getReader(); const decoder = new TextDecoder(); let pending = '';
      function handle(line: string) {
        if (!line.trim()) return;
        const item = JSON.parse(line);
        if (item.type === 'text') setAnswer(current => current + item.text);
        else if (item.type === 'start') setActiveId(item.id);
        else if (item.type === 'reasoning') { setReasoning(current => current + item.text); setStatus('Reviewing the evidence…'); }
        else if (item.type === 'sources') setSources(parseSources(item.sources));
        else if (item.type === 'status') setStatus(item.message);
        else if (item.type === 'error') setError(item.message);
        else if (item.type === 'done') { setSources(parseSources(item.sources)); setStatus('Research ended. Suggestions remain unpublished.'); }
      }
      while (true) {
        const chunk = await reader.read(); if (chunk.done) break;
        pending += decoder.decode(chunk.value, { stream: true });
        const lines = pending.split('\n'); pending = lines.pop() ?? ''; lines.forEach(handle);
      }
      pending += decoder.decode(); if (pending.trim()) handle(pending);
    } catch (failure) {
      if (abort.signal.aborted) setStatus('Stopped. Partial research is retained; no one has been added to the directory.');
      else { setError(failure instanceof Error ? failure.message : 'Research failed.'); setStatus(''); }
    } finally { controller.current = null; setBusy(false); await queryClient.invalidateQueries({ queryKey: ['editor-workspace'] }); }
  }
  function download() {
    const text = `# ${field || 'AI field research'}\n\nPreliminary AI-assisted suggestions. Not validated, endorsed or published.\n\n${answer}\n\n## Public sources\n${sources.map(s => `- ${s.title}: ${s.url}`).join('\n')}`;
    const url = URL.createObjectURL(new Blob([text], { type: 'text/markdown;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = 'ai-field-research.md'; link.click(); URL.revokeObjectURL(url);
  }
  return <article className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
    <header className="flex flex-wrap items-start justify-between gap-5"><div><p className="text-xs uppercase tracking-widest text-muted-foreground">Private editorial workspace</p><h1 className="mt-4 font-display text-3xl sm:text-4xl">AI field research</h1></div><Button variant="outline" onClick={signOut}><LogOut />Sign out</Button></header>
    {!workspace.allowed ? <section className="mt-8 border-t border-border pt-6"><h2 className="font-display text-xl">Editor access required</h2><p className="mt-3 text-muted-foreground">Your account is signed in, but has not been authorised as an editor. No AI request can be made.</p><Link to="/contact" className="mt-5 inline-block underline">Contact the editor</Link></section> : <>
      <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">Preliminary, source-backed suggestions for AI Expertise in Norway. No ranking, certification or automatic publication. Current affiliation, AI contribution and consent still require editorial review.</p>
      <p className="mt-3 text-sm text-muted-foreground">Each search uses workspace AI credits. Results are private and saved to your account.</p>
      <details className="mt-6 border-y border-border py-4"><summary className="cursor-pointer text-sm font-medium">Editor profile{name ? ` · ${name}` : ''}</summary><form className="mt-4 max-w-xl space-y-4" onSubmit={async e => { e.preventDefault(); try { await saveProfile({ data: { display_name: name, biography } }); setProfileMessage('Profile saved.'); await queryClient.invalidateQueries({ queryKey: ['editor-workspace'] }); } catch (failure) { setProfileMessage(failure instanceof Error ? failure.message : 'Unable to save.'); } }}><label className="block text-sm" htmlFor="profile-name">Name</label><Input id="profile-name" value={name} required maxLength={120} onChange={e => setName(e.target.value)} /><label className="block text-sm" htmlFor="profile-bio">Professional profile</label><Textarea id="profile-bio" value={biography} maxLength={1000} onChange={e => setBiography(e.target.value)} /><Button type="submit" variant="outline"><Save />Save profile</Button><p role="status" className="text-sm">{profileMessage}</p></form></details>
      {workspace.access?.blocked && <section className="mt-6 border-l-2 border-destructive pl-4"><p role="alert">{workspace.access.message}</p>{workspace.access.status_code === 402 && <Button className="mt-3" variant="outline" onClick={async () => { try { await resume(); await queryClient.invalidateQueries({ queryKey: ['editor-workspace'] }); } catch (failure) { setError(failure instanceof Error ? failure.message : 'Unable to resume.'); } }}>Resume after adding credits</Button>}</section>}
      <form onSubmit={research} className="mt-8 max-w-3xl space-y-4"><div><label htmlFor="research-field" className="mb-2 block text-sm font-medium">New AI field</label><Input id="research-field" value={field} minLength={3} maxLength={160} required disabled={busy} onChange={e => setField(e.target.value)} placeholder="e.g. AI and maritime law" /></div><div><label htmlFor="research-scope" className="mb-2 block text-sm font-medium">Scope or evidence requirements (optional)</label><Textarea id="research-scope" value={scope} maxLength={1600} disabled={busy} onChange={e => setScope(e.target.value)} placeholder="Norwegian researchers and practitioners with documented AI work…" /></div><div className="flex flex-wrap gap-3"><Button type="submit" disabled={busy || Boolean(workspace.access?.blocked)}><Search />{busy ? 'Researching…' : 'Find documented people'}</Button>{busy && <Button type="button" variant="outline" onClick={() => controller.current?.abort()}><Square />Stop</Button>}</div></form>
      {status && <p role="status" className="mt-5 text-sm text-muted-foreground">{status}</p>}{error && <p role="alert" className="mt-5 text-sm text-destructive">{error}</p>}
      {reasoning && <details className="mt-5 max-w-3xl border-t border-border pt-4"><summary className="cursor-pointer text-sm text-muted-foreground">Research notes from the model</summary><p className="mt-3 whitespace-pre-wrap text-sm text-muted-foreground">{reasoning}</p></details>}
      {(answer || sources.length > 0) && <section aria-label="Research results" className="mt-8 border-t border-border pt-6"><div className="flex flex-wrap items-center justify-between gap-3"><h2 className="font-display text-2xl">Unpublished research</h2><Button variant="outline" onClick={download}><Download />Download</Button></div><div className="research-markdown mt-6 max-w-3xl break-words"><ReactMarkdown skipHtml components={{ a: ({ href, children }) => { const safe = href ? groundedUrl(href, sources) : undefined; return safe ? <a href={safe} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{children}</a> : <span>{children} <span className="text-xs text-muted-foreground">(not source-checked)</span></span>; } }}>{answer}</ReactMarkdown></div><h3 className="mt-8 text-sm font-semibold">Public sources returned by web search</h3><ul className="mt-3 space-y-3 text-sm">{sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex max-w-full items-start gap-2 underline underline-offset-4"><ExternalLink className="mt-0.5 h-4 w-4 shrink-0" /><span className="break-words">{source.title}</span></a></li>)}</ul><p className="mt-5 text-sm text-muted-foreground">A returned source is evidence to review, not proof of qualifications, accuracy, current affiliation or consent.</p></section>}
      <section className="mt-10 border-t border-border pt-6"><h2 className="font-display text-2xl">Saved research</h2>{workspace.reports.length === 0 ? <p className="mt-4 text-sm text-muted-foreground">No saved research yet.</p> : <ul className="mt-4 divide-y divide-border">{workspace.reports.map(report => <li key={report.id} className="flex flex-wrap items-center justify-between gap-3 py-4"><div><p className="font-medium">{report.field}</p><p className="mt-1 text-xs text-muted-foreground">{new Date(report.created_at).toLocaleDateString('en-GB')} · {report.status === 'running' && !busy ? 'Interrupted — start a fresh search if needed' : report.status} · Unpublished</p></div><Button variant="outline" disabled={busy} aria-pressed={activeId === report.id} onClick={() => { setActiveId(report.id); setField(report.field); setScope(report.scope); setAnswer(report.report); setSources(parseSources(report.sources)); setReasoning(''); setError(report.error_message ?? ''); setStatus('Saved research · Unpublished'); }}>Open</Button></li>)}</ul>}</section>
    </>}
    <Link to="/ki-oversikt" className="mt-10 inline-block text-sm underline underline-offset-4">Back to AI Expertise in Norway</Link>
  </article>;
}