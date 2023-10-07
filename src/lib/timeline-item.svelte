<script>
  export let active = false;
  export let company;
  export let role;
  export let date;
  export let tech = [];
  $: badge = active ? 'badge-primary' : 'badge-secondary';
</script>

<li class:active class="timeline-item flex flex-col gap-1 break-inside-avoid">
  <div class="md:block hidden sidecard">{date}</div>
  <div class="print:block hidden print-sidecard">{date}</div>
  <div class="flex flex-col items-start md:flex-row md:gap-2 md:items-center print:flex-row print:gap-2 print:items-center">
    <div class="md:hidden print:hidden block">{date}</div>
    <h3>{company}</h3><h4><span class="md:inline print:inline hidden"> | </span>{role}</h4>
  </div>
  <ul class="flex flex-row flex-wrap gap-2">
    {#each tech as tech}
      <li class="badge {badge} whitespace-nowrap">{tech}</li>
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
    margin-top: .35rem;
    margin-left: .4rem;
    @apply bg-secondary;
  }

  @media (min-width: 640px) {
    .timeline-item:before {
      margin-top: .6rem;
    }
  }

  .timeline-item:after {
    content: "";
    @apply absolute;
    width: .8rem;
    height: .8rem;
    top: 0;
    left: 0;
    margin-top: .35rem;
    margin-left: .1rem;
    @apply bg-secondary;
    @apply rounded-full;
  }

  @media (min-width: 640px) {
    .timeline-item:after {
      margin-top: .6rem;
    }
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

  .print-sidecard {
    margin-top: .225rem;
  }
</style>
