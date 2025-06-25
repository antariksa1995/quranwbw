export async function onRequest() {
	return new Response('✅ Cloudflare Function is working!', {
		status: 200,
		headers: { 'content-type': 'text/plain' }
	});
}
