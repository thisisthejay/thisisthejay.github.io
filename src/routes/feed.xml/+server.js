import { getAllPosts } from '$lib/blog';
import { absoluteUrl, SITE_NAME } from '$lib/site';

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
	const items = posts.map((post) => {
		const url = absoluteUrl(`/blog/${post.slug}/`);
		const published = new Date(post.date).toUTCString();
		return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${published}</pubDate>
      <dc:creator>Jay Smith</dc:creator>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`;
	}).join('\n');

	return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${escapeXml(absoluteUrl('/blog/'))}</link>
    <description>Field notes on legal engineering, legal operations, applied AI and building better systems.</description>
    <language>en-gb</language>
		<lastBuildDate>${new Date(posts[0]?.date ?? 0).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`, {
		headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
	});
}
