import type { RequestHandler } from '@sveltejs/kit';
import { supabase } from '$lib/database/supabase';


export const POST: RequestHandler = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return new Response(JSON.stringify({ error: 'No file uploaded' }), { status: 400 });
  }

  const filename = `${Date.now()}-${file.name}`;
  const { data, error } = await supabase.storage
    .from('recipes')
    .upload(filename, file);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  // If bucket is public
  const publicUrl = supabase.storage.from('recipes').getPublicUrl(filename).data.publicUrl;

  return new Response(JSON.stringify({ url: publicUrl, filename }));
};
