---
title: Launching a Markdown Blog on SvelteKit
excerpt: A lightweight approach for publishing posts with frontmatter and Git commits.
date: 2026-01-12
tags:
  - sveltekit
  - markdown
  - github-pages
published: true
---

I wanted a writing workflow that feels low-friction: write markdown, commit, push.

With **SvelteKit + mdsvex**, each post can live as a simple file while still giving us component-level control, syntax highlighting options, and frontmatter.

### Why this works well for static hosting

- Everything is generated at build time.
- Dynamic routes for posts are pre-rendered.
- GitHub Pages gets plain static assets.

That means no runtime server and no extra moving parts.
