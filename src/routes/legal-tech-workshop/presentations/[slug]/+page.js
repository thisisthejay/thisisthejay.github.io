import { error } from '@sveltejs/kit';
import {
  getPresentationWithNavigation,
  presentationList
} from '$lib/workshop/presentations.js';

export function entries() {
  return presentationList.map((deck) => ({ slug: deck.slug }));
}

export function load({ params }) {
  const deck = getPresentationWithNavigation(params.slug);
  if (!deck) {
    throw error(404, 'Presentation deck not found');
  }

  return { deck };
}
