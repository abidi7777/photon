<script type="text/javascript">
  import EditorActions from '../EditorActions';
  import Filter from '../Filter';

  let cssFilterStr = '';

  export let img = '';
</script>

<div class="flex flex-col editor gap-6">
  <div class="overflow-hidden flex-1 flex items-center justify-center">
    <div class="h-auto lg:h-full max-h-[100%] mx-auto overflow-hidden flex items-center justify-center">
      <img src={img} alt="ready for editing" class="h-auto max-h-[100%] mx-auto" style:--filter="{cssFilterStr}" />
    </div>
  </div>
  <div>
    <EditorActions on:close />
    <Filter onFilterChange={(str) => { cssFilterStr = str; }} />
  </div>
</div>

<style type="text/css">
  .editor {
    height: calc(100vh - 80px);
  }

  img {
    filter: var(--filter);
  }
</style>
