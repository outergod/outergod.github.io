<script>
  export let active = false;
  export let company;
  export let role;
  export let year;
  export let tech = [];
</script>

<li class:active class="timeline-item flex flex-col gap-1">
  <div class="sidecard">{year}</div>
  <div class="flex flex-row items-center gap-2">
    <h3>{company}</h3><h4> | {role}</h4>
  </div>
  <ul class="flex flex-row gap-2">
    {#each tech as tech}
      <li class="badge badge-primary">{tech}</li>
    {/each}
  </ul>
  <slot/>
</li>

<style>
  .timeline-item {
    @apply relative;
  }

  .timeline-item:before {
    content: "";
    @apply absolute;
    @apply h-full;
    width: .2rem;
    margin-top: .6rem;
    margin-left: .4rem;
    @apply bg-secondary;
  }

  .timeline-item:after {
    content: "";
    @apply absolute;
    width: .8rem;
    height: .8rem;
    top: 0;
    left: 0;
    margin-top: .6rem;
    margin-left: .1rem;
    @apply bg-secondary;
    @apply rounded-full;
  }

  .timeline-item > :global(*) {
    @apply ml-8;
  }

  .timeline-item:not(:last-child) {
    @apply pb-4;
  }

  .active:not(:last-child):before {
    @apply bg-primary;
  }

  .active:after {
    @apply bg-primary;
  }

  .sidecard {
    @apply absolute;
    top: .225rem;
    left: -3rem;
    transform: translateX(-100%);
  }
</style>
