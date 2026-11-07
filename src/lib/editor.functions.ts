import { createServerFn } from '@tanstack/react-start';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';
import { profileInput } from './editor-research';

export const editorWorkspace = createServerFn({ method: 'GET' }).middleware([requireSupabaseAuth]).handler(async ({ context }) => {
  const { data: role, error } = await context.supabase.rpc('has_role', { _user_id: context.userId, _role: 'editor' });
  if (error) throw new Error('Unable to check editor access.');
  if (!role) return { allowed: false as const, profile: null, reports: [], access: null };
  const [profile, reports, access] = await Promise.all([
    context.supabase.from('profiles').select('display_name, biography').eq('user_id', context.userId).maybeSingle(),
    context.supabase.from('ai_research_reports').select('*').eq('user_id', context.userId).order('created_at', { ascending: false }).limit(20),
    context.supabase.from('ai_gateway_access').select('blocked, message, status_code').eq('id', 'editor-research').maybeSingle(),
  ]);
  if (profile.error || reports.error || access.error) throw new Error('Unable to load your saved research.');
  return { allowed: true as const, profile: profile.data, reports: reports.data ?? [], access: access.data };
});
export const saveEditorProfile = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth]).inputValidator(input => profileInput.parse(input)).handler(async ({ context, data }) => {
  const { data: allowed } = await context.supabase.rpc('has_role', { _user_id: context.userId, _role: 'editor' });
  if (!allowed) throw new Error('Editor access required.');
  const { error } = await context.supabase.from('profiles').upsert({ user_id: context.userId, ...data });
  if (error) throw new Error('Your profile could not be saved.');
  return { saved: true };
});
export const resumeEditorAI = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth]).handler(async ({ context }) => {
  const { data: allowed } = await context.supabase.rpc('has_role', { _user_id: context.userId, _role: 'editor' });
  if (!allowed) throw new Error('Editor access required.');
  const { data: state } = await context.supabase.from('ai_gateway_access').select('*').eq('id', 'editor-research').single();
  if (state?.status_code !== 402) throw new Error('Access must be restored before research can resume.');
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
  const { error } = await supabaseAdmin.from('ai_gateway_access').update({ blocked: false, message: null, status_code: null }).eq('id', 'editor-research');
  if (error) throw new Error('Unable to resume research.');
  return { resumed: true };
});