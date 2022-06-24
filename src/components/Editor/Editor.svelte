<script type="text/javascript">
  import Filter from '../Filter';

  let cssFilterStr = '';

  export let img = '';
</script>

<div class="flex flex-col editor gap-6">
  <div class="overflow-hidden flex-1 flex items-center justify-center">
    <img src={img} alt="ready for editing" class="h-auto max-h-[100%] mx-auto" style:--filter="{cssFilterStr}" />
  </div>
  <Filter onFilterChange={(str) => { cssFilterStr = str; }} />
</div>

<style type="text/css">
  .editor {
    height: calc(100vh - 80px);
  }

  img {
    filter: var(--filter);
  }
</style>
