/** @typedef {{title?: string, excerpt?: string, date?: string, tags?: string[], published?: boolean}} BlogMetadata */
/** @typedef {{metadata?: BlogMetadata, default: import('svelte').Component}} BlogModule */

const postModules = import.meta.glob('/src/lib/content/blog/*.md', { eager: true });

/** @param {string} dateString */
function formatDate(dateString) {
	const date = new Date(dateString);
	if (Number.isNaN(date.getTime())) return dateString;

	return new Intl.DateTimeFormat('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(date);
}

/** @param {[string, BlogModule]} entry */
function mapPost([path, module]) {
	const slug = path.split('/').pop()?.replace('.md', '') ?? '';
	const metadata = module.metadata ?? {};

	return {
		slug,
		title: metadata.title ?? 'Untitled post',
		excerpt: metadata.excerpt ?? '',
		date: metadata.date ?? '',
		formattedDate: formatDate(metadata.date ?? ''),
		tags: metadata.tags ?? [],
		published: metadata.published !== false,
		component: module.default
	};
}

export function getAllPosts() {
	return Object.entries(postModules)
		.map((entry) => mapPost(/** @type {[string, BlogModule]} */ (entry)))
		.filter((post) => post.slug && post.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getLatestPosts(limit = 5) {
	return getAllPosts().slice(0, limit);
}

/** @param {string} slug */
export function getPostBySlug(slug) {
	const posts = getAllPosts();
	const index = posts.findIndex((post) => post.slug === slug);
	if (index === -1) return null;

	return {
		post: posts[index],
		nextPost: posts[index + 1] ?? null
	};
}
