import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { privateHead } from '@/lib/editor-research';

export const Route = createFileRoute('/reset-password')({ head: () => privateHead('Reset editor password', 'Secure password recovery for the Åke Elden editorial workspace.'), component: Reset });
function Reset() {
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('Checking your recovery link…');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    const recovery = new URLSearchParams(window.location.hash.slice(1)).get('type') === 'recovery';
    supabase.auth.getUser().then(({ data }) => { setReady(Boolean(data.user)); setMessage(data.user ? '' : recovery ? 'This recovery link has expired. Request another link.' : 'Open the password-reset link from your email.'); });
  }, []);
  async function submit(event: React.FormEvent) {
    event.preventDefault(); setBusy(true);
    const { error } = await supabase.auth.updateUser({ password });
    setMessage(error ? error.message : 'Your password has been updated.');
    if (!error) setReady(false);
    setBusy(false);
  }
  return <article className="mx-auto max-w-md px-6 py-14"><h1 className="font-display text-3xl">Set a new password</h1>
    {ready && <form onSubmit={submit} className="mt-8 space-y-4"><label htmlFor="new-password" className="block text-sm">New password</label><Input id="new-password" type="password" autoComplete="new-password" minLength={8} required value={password} onChange={e => setPassword(e.target.value)} /><Button type="submit" disabled={busy}>Save password</Button></form>}
    <p role="status" className="mt-4 text-sm">{message}</p><Link to="/auth" className="mt-6 inline-block text-sm underline">Back to editor sign-in</Link></article>;
}