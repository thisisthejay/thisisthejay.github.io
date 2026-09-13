---
title: "Legal Ontologies: A Map for Agents"
excerpt: Agents know a great deal about the world in general. A useful legal agent also needs a current map of the business it serves.
date: 2026-09-12
tags:
  - legal engineering
  - AI
  - knowledge management
  - ontologies
published: true
---

<script>
  import ArticleCallout from "$lib/components/article/ArticleCallout.svelte";
  import ArticlePullQuote from "$lib/components/article/ArticlePullQuote.svelte";
  import ArticleVisual from "$lib/components/article/ArticleVisual.svelte";
  import OntologyMap from "$lib/components/article/OntologyMap.svelte";
</script>

Large language models know an extraordinary amount - more than any person or team can. They have absorbed enough language to discuss legislation, contracts and legal principles with a fluency that can _feel_ like understanding.  But knowledge is not understanding.

Ask an LLM a question about your business and you will immediately feel this tension.

What counts as a customer here? Which employing entity is involved? What position did we approve for this jurisdiction? Does “high risk” mean legally unusual, commercially unacceptable, operationally impossible—or some particular mixture of the three?

The world suddenly becomes _local_ and not generalised.  All the training in the world (rented back to you for a subscription fee) will not make an LLM _understand_ your business.

<ArticlePullQuote quote="Pre-training gives an agent a world whereas an ontology may help us show it which parts of that world belong together here." context="A working idea for legal knowledge" />

All of my frustrations, late nights watching YouTube videos, going back to the world before ChatGPT and Claude (it really does feel like a schism in the timeline) led me to see the value in developing ontologies. An ontology is a structured account of the things that exist in a domain and, crucially, the relationships between them.  The [W3C describes its Web Ontology Language](https://www.w3.org/OWL/) as a way to represent rich knowledge about things, groups of things and their relations so that software can work with it.

For a legal team (or any business function driving agentic workflows), those things might include customers, workers, entities, products, jurisdictions, contracts, policies, obligations, risks and approved positions. The relationships carry much of the meaning: a worker is employed by an entity; an entity offers a product in a jurisdiction; a contract creates an obligation; an internal position applies only while a particular version of a policy is effective.

It is deeper than just entries or schemas in a database.  A lot of this information is scattered across different business systems, or worse, hidden in a document on a teams private google drive / (or worse still) Sharepoint.

<ArticleVisual>
  <OntologyMap />
</ArticleVisual>

## The business as it is today

This interests me because legal judgement is grounded in context that changes.

Models have broad prior knowledge. Retrieval (RAG or other methods) can give them relevant documents. An ontology could add a governed map of how the organisation understands itself now: the language it uses, the boundaries it has chosen and the commercial relationships that shape an answer grounded in _understadning_.

If you go deep enough and include the API or MCP layers within a business, that map may also help several systems speak more clearly to one another. Intake, contracts, internal knowledge and reporting often use near-identical terms with subtly different meanings. Agreeing what those terms represent—and giving them stable identifiers—could make the whole legal system easier to connect.  Humans are great at absorbing the nouns and verbs of a business quickly, through osmosis and often without thought.  Agents, however (and at least to me), battle against their pre-training and mannerisms; holding on to reveries of billions of parameters.

<ArticleCallout label="Real teal - this is an area I am _exploring_ and don't have hard answers" title="Start with one decision, not the whole enterprise.">

I have not built a full legal ontology yet. I would begin with a bounded problem, model only the concepts needed to answer it, and test whether the additional structure improves retrieval, reasoning or interoperability enough to justify its upkeep.

</ArticleCallout>

There is governance work hiding inside this. Somebody has to own the model, resolve disagreements and keep it aligned with the business. Commercial boundaries are rarely universal truths; they are choices, made under a particular risk appetite and set of operational constraints.

That feels like precisely why the work matters and the water of future moats for enteprise companies.

An agent can arrive knowing a great deal about law. To become genuinely useful inside a legal team, it also needs to understand what this business does, what its words mean and where its boundaries sit today.


Explore where this all fits in the interactive [Legal Ops Roadmap](/roadmap/).
