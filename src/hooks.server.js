// src/hooks.server.js
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const url = event.url;

	if (url.pathname === '/' && !url.searchParams.has('v')) {
		const version = '20250625';
		url.searchParams.set('v', version);

		return new Response(null, {
			status: 302,
			headers: {
				location: url.toString()
			}
		});
	}

	return resolve(event);
}
