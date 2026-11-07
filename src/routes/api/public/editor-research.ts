import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/api/public/editor-research')({
  server: { handlers: { POST: async ({ request }) => {
    const { handleEditorResearch } = await import('@/lib/ai/editor-research.server');
    return handleEditorResearch(request);
  } } },
});