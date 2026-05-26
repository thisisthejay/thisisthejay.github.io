import { getLatestPosts } from '$lib/blog';

export function load() {
	return {
		latestPosts: getLatestPosts(5)
	};
}
