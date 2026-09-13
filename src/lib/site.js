export const SITE_URL = 'https://thisisthejay.github.io';
export const SITE_NAME = 'Jay Smith — Legal Engineering';
export const SOCIAL_IMAGE = '/images/social-card.png';
export const PERSON_ID = `${SITE_URL}/#jay-smith`;

export const AUTHOR_SCHEMA = {
	'@type': 'Person',
	'@id': PERSON_ID,
	name: 'Jay Smith',
	url: `${SITE_URL}/#about`,
	image: `${SITE_URL}/images/jay.png`,
	jobTitle: ['Legal Operations Senior Managing Counsel', 'Legal Engineer'],
	worksFor: {
		'@type': 'Organization',
		name: 'Remote',
		url: 'https://remote.com/'
	},
	knowsAbout: [
		'Legal engineering',
		'Legal operations',
		'Legal technology',
		'Requirements engineering',
		'Process design',
		'Implementation science',
		'Applied artificial intelligence'
	],
	sameAs: [
		'https://www.linkedin.com/in/jermainepaulsmith/',
		'https://github.com/thisisthejay'
	]
};

/** @param {string} [path] */
export function absoluteUrl(path = '/') {
	return new URL(path, `${SITE_URL}/`).toString();
}
