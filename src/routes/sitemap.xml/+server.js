import { getAllPosts } from '$lib/blog';
import { absoluteUrl } from '$lib/site';

export const prerender = true;

/** @param {string} value */
function escapeXml(value) {
	/** @type {Record<string, string>} */
	const entities = {
		'<': '&lt;',
		'>': '&gt;',
		'&': '&amp;',
		"'": '&apos;',
		'"': '&quot;'
	};
	return value.replace(/[<>&'"]/g, (character) => entities[character] ?? character);
}

export function GET() {
	const posts = getAllPosts();
	const newestPostDate = posts[0]?.date;
	const urls = [
		{ path: '/', lastmod: '2026-09-12' },
		{ path: '/blog/', lastmod: newestPostDate },
		{ path: '/roadmap/', lastmod: '2026-09-12' },
		{ path: '/projects/' },
		...posts.map((post) => ({ path: `/blog/${post.slug}/`, lastmod: post.date }))
	];

	const entries = urls.map(({ path, lastmod }) => `  <url>
    <loc>${escapeXml(absoluteUrl(path))}</loc>${lastmod ? `
    <lastmod>${escapeXml(lastmod)}</lastmod>` : ''}
  </url>`).join('\n');

	return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' }
	});
}
