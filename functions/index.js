/**
 * Cloudflare Pages Function to force clients to bypass cached `index.html`.
 *
 * Problem:
 * Some users are stuck on old, cached versions of the site (especially `index.html`)
 * that reference outdated JS bundles or API endpoints.
 *
 * Solution:
 * This function intercepts requests to `/` and redirects to `/?v=20250625` (or any fixed version),
 * forcing the browser to fetch a fresh version of `index.html` by treating it as a new URL.
 * This helps break stale cache without touching the frontend code.
 */

export async function onRequest(context) {
	console.log('test function');

	const { request } = context;
	const url = new URL(request.url);

	// Match only the root path
	if (url.pathname === '/' && !url.searchParams.has('v')) {
		// Use a fixed version string (change manually for new deployments)
		const version = '20250625';

		url.searchParams.set('v', version);
		return Response.redirect(url.toString(), 302);
	}

	// Proceed with the request as usual
	return context.next();
}
