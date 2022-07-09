<script>
  import Head from '$lib/head.svelte';
  import Career from '$lib/career.svelte';
  import Certification from '$lib/certification.svelte';

  let name = 'Alexander Dorn';
  let role = 'Software Artisan';
</script>

<svelte:head>
  <title>{name} | {role}</title>
</svelte:head>

<main class="mx-auto max-w-prose">
  <Head {name} {role} />
  <div class="divider "/>
  <Career/>
  <div class="divider "/>
  <Certification/>
</main>

<style>
</style>
