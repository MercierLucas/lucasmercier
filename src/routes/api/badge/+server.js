export async function GET() {
  const response = await fetch(
    'https://api.visitorbadge.io/api/visitors?path=https://www.lucasmercier.me%2F&labelColor=%23ffffff&countColor=%232d6a4f" /',
    {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SvelteKit)',
        'Accept': 'image/svg+xml,image/*,*/*',
        'Accept-Language': 'en-US,en;q=0.9',
      }
    }
  );

  console.log('status:', response.status);
  console.log('content-type:', response.headers.get('Content-Type'));

  const buffer = await response.arrayBuffer();

  return new Response(buffer, {
    headers: {
      'Content-Type': response.headers.get('Content-Type') || 'image/svg+xml',
      'Cache-Control': 'no-cache',
    }
  });
}