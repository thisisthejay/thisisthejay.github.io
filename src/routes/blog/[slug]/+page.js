import { error } from '@sveltejs/kit';
import { getAllPosts, getPostBySlug } from '$lib/blog';

export function entries() {
	return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function load({ params }) {
	const result = getPostBySlug(params.slug);
	if (!result) {
		throw error(404, 'Post not found');
	}

	return result;
}
