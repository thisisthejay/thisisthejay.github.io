<script>
  import DraftPresentation from "$lib/components/workshop/DraftPresentation.svelte";

  let { data } = $props();
</script>

<DraftPresentation deck={data.deck} />
