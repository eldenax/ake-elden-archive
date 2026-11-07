import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable';
import { privateHead } from '@/lib/editor-research';
import '@lovable.dev/cloud-auth-js/styles.css';

export const Route = createFileRoute('/auth')({ head: () => privateHead('Editor sign-in', 'Private editorial access to AI expertise research and saved source-backed suggestions.'), component: Auth });
function Auth() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'signin' | 'signup' | 'reset'>('signin');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => { supabase.auth.getUser().then(({ data }) => { if (data.user) navigate({ to: '/editor-ai' }); }); }, [navigate]);
  async function submit(event: React.FormEvent) {
    event.preventDefault(); setBusy(true); setMessage('');
    try {
      if (mode === 'reset') {
        const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
        if (error) throw error;
        setMessage('Check your email for a password-reset link.');
      } else if (mode === 'signup') {
        const { data, error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/auth` } });
        if (error) throw error;
        if (data.session) await navigate({ to: '/editor-ai' });
        else setMessage('Check your email to confirm your account. Registration alone does not grant editor access.');
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        await navigate({ to: '/editor-ai' });
      }
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Sign-in failed.'); }
    finally { setBusy(false); }
  }
  async function social(provider: 'google' | 'lovable') {
    setBusy(true); setMessage('');
    try {
      const result = await lovable.auth.signInWithOAuth(provider, { redirect_uri: `${window.location.origin}/auth` });
      if (result.error) throw result.error;
      if (!result.redirected) await navigate({ to: '/editor-ai' });
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Sign-in failed.'); }
    finally { setBusy(false); }
  }
  return <article className="mx-auto max-w-md px-6 py-14">
    <p className="text-xs uppercase tracking-widest text-muted-foreground">Editorial workspace</p>
    <h1 className="mt-4 font-display text-3xl">{mode === 'reset' ? 'Reset your password' : mode === 'signup' ? 'Create an account' : 'Editor sign-in'}</h1>
    <p className="mt-4 text-sm text-muted-foreground">The public directory remains open to everyone. Research access is reserved for authorised editors.</p>
    <form onSubmit={submit} className="mt-8 space-y-4">
      <div><label htmlFor="editor-email" className="mb-2 block text-sm">Email</label><Input id="editor-email" type="email" required value={email} autoComplete="email" onChange={e => setEmail(e.target.value)} /></div>
      {mode !== 'reset' && <div><label htmlFor="editor-password" className="mb-2 block text-sm">Password</label><Input id="editor-password" type="password" required minLength={8} value={password} autoComplete={mode === 'signup' ? 'new-password' : 'current-password'} onChange={e => setPassword(e.target.value)} /></div>}
      <Button type="submit" disabled={busy} className="w-full">{busy ? 'Please wait…' : mode === 'reset' ? 'Send reset link' : mode === 'signup' ? 'Create account' : 'Sign in'}</Button>
    </form>
    {message && <p role="status" className="mt-4 text-sm leading-relaxed">{message}</p>}
    {mode !== 'reset' && <div className="mt-6 space-y-3 border-t border-border pt-6">
      <Button variant="outline" className="google-auth-button w-full" onClick={() => social('google')} disabled={busy}>
        <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/></svg>Continue with Google
      </Button>
      <Button className="lovable-auth-button w-full" variant="outline" onClick={() => social('lovable')} disabled={busy}>Continue with Lovable</Button>
    </div>}
    <div className="mt-5 flex flex-wrap gap-2">
      <Button variant="link" className="h-auto p-0" onClick={() => { setMode(mode === 'signup' ? 'signin' : 'signup'); setMessage(''); }}>{mode === 'signup' ? 'Already have an account?' : 'Create account'}</Button>
      <Button variant="link" className="h-auto p-0" onClick={() => { setMode(mode === 'reset' ? 'signin' : 'reset'); setMessage(''); }}>{mode === 'reset' ? 'Back to sign-in' : 'Forgot password?'}</Button>
    </div>
    <Link to="/ki-oversikt" className="mt-8 inline-block text-sm underline underline-offset-4">Back to AI Expertise in Norway</Link>
  </article>;
}