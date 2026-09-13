# Rich article components

MDsveX posts can import and use these Svelte components alongside ordinary Markdown.

```svelte
<script>
  import ArticleCallout from "$lib/components/article/ArticleCallout.svelte";
  import ArticlePullQuote from "$lib/components/article/ArticlePullQuote.svelte";
  import ArticleVisual from "$lib/components/article/ArticleVisual.svelte";
  import DefinitionGrid from "$lib/components/article/DefinitionGrid.svelte";
  import LegalSystemDiagram from "$lib/components/LegalSystemDiagram.svelte";
</script>
```

## Callout

```svelte
<ArticleCallout label="The practical lesson" title="A good system begins with better questions." tone="dark">

This content is still **Markdown**, including links and emphasis.

</ArticleCallout>
```

The `tone` prop can be `light` (the default) or `dark`.

## Pull quote

```svelte
<ArticlePullQuote
  quote="Good systems start with better questions."
  context="A note from the field"
/>
```

## Definition grid

```svelte
<DefinitionGrid
  items={[
    { term: "Policy", description: "Intent, duties and risk." },
    { term: "Process", description: "Steps, roles and decisions." },
    { term: "System", description: "Tools, data and controls." }
  ]}
/>
```

## Full-width visual

`ArticleVisual` lets diagrams escape the narrow reading column while remaining responsive.

```svelte
<ArticleVisual>
  <LegalSystemDiagram />
</ArticleVisual>
```

The same pattern can wrap future animated SVGs, interactive comparisons, charts, process maps or small calculators.

## Writing voice

Use Jay's existing essays as the reference point for new notes:

- [What can LegalOps Learn from Implementation Science](https://www.colinslevy.com/post/what-can-legalops-learn-from-implementation-science)
- [Why lawyers (should) make great developers](https://medium.datadriveninvestor.com/why-lawyers-should-make-great-developers-155f73304d0)

The writing should feel exploratory, candid and grounded in experience. Use the first person when expressing an opinion. Prefer concrete examples, honest caveats and questions that let the reader follow the thinking. A little humour or personality is welcome where it occurs naturally.

Avoid the repeated corrective construction “X is not this. It is that,” along with close variants such as “This does not mean...” and “It is not only...”. These clipped contrasts feel synthetic when used as a default rhythm. Avoid stacking slogan-like one-line paragraphs or presenting an opinion as a universal truth.

Improve clarity and structure while preserving a human cadence. Callouts and pull quotes should emerge from the argument rather than turning every section into an aphorism.
