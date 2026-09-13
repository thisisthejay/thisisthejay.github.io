import { SITE_URL } from '$lib/site';

export const prerender = true;

export function GET() {
	const body = `User-agent: *
Allow: /
Disallow: /presentation/

User-agent: OAI-SearchBot
Allow: /
Disallow: /presentation/

Sitemap: ${SITE_URL}/sitemap.xml
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
}
