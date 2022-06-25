<script type="text/javascript">
 import Editor from '../Editor';
 import ImageFrom from '../ImageForm';

 let dataURL = null;
</script>

<div>
  {#if dataURL}
    <Editor img={dataURL} on:close={() => { dataURL = null; }} />
  {:else}
    <div class="mb-12 text-center">
      <p class="text-xl mb-4">A simple Web based Photo editor.</p>
      <p> For now it supports the following <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter" target="_blank" class="text-sky-600 hover:underline">CSS Filters</a>.</p>
    </div>
    <div>
      <ImageFrom onImgChange={(val) => { dataURL = val; }}  />
    </div>
  {/if}
</div>
