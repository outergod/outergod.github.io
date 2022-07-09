<script>
  export let name;
  export let description;
</script>

<li>
  <div class="flex flex-row items-center gap-2">
    <h3>{name}</h3><h4> | {description}</h4>
  </div>
  <slot/>
</li>
