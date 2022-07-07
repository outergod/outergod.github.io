<script>
    import Head from './head.svelte';
    import Experience from './experience.svelte';

    let name = 'Alexander Dorn';
    let role = 'Software Artisan';
</script>

<svelte:head>
    <title>{name} | {role}</title>
</svelte:head>

<main class="md:container md:mx-auto">
    <Head {name} {role} />
    <div class="divider"/>
    <Experience/>
</main>

<style>
main {
    max-width: 75ch;
}
</style>

<!--
     <div class="hero min-h-screen bg-base-200">
     <div class="hero-content text-center">
     <div class="max-w-md">
     <h1 class="text-5xl font-bold">Hello there</h1>
     <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     <button class="btn btn-primary">Get Started</button>
     </div>
     </div>
     </div> -->
