<script type="text/javascript">
  import { drawImageWithFilters, triggerDownload } from './Editor.utils';
  import EditorActions from '../EditorActions';
  import Filter from '../Filter';

  let cssFilterStr = '';

  export let img = {};

  const downloadHanlder = async () => {
    const dataURL = await drawImageWithFilters(img, cssFilterStr);

    triggerDownload({ ...img, dataURL });
  };
</script>

<div class="h-screen flex flex-col">
  <div>
    <Filter onFilterChange={(str) => { cssFilterStr = str; }} />
  </div>
  <div class="overflow-hidden flex-1 flex flex-col items-center justify-center pb-2 relative">
    <div class="h-auto landscape:h-full md:h-full max-h-[100%] mx-auto overflow-hidden flex items-center justify-center">
      <img src={img.dataURL} alt="ready for editing" class="h-auto max-h-[100%] mx-auto" style:--filter="{cssFilterStr}" />
    </div>
    <div class="absolute bottom-4 right-0 left-0 mx-auto z-10">
      <EditorActions on:close onDownload={downloadHanlder} />
    </div>
  </div>
</div>

<style type="text/css">
  img {
    filter: var(--filter);
  }
</style>
