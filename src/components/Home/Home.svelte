<script type="text/javascript">
 import Editor from '../Editor';
 import Header from '../Header';
 import ImageFrom from '../ImageForm';

 let img = null;
</script>

<div>
  {#if img}
    <Editor img={img} on:close={() => { img = null; }} />
  {:else}
    <div class="p-2">
      <Header />
      <div class="mb-12 text-center">
        <p class="text-xl mb-4">A simple Web based Photo editor.</p>
        <p> For now it supports the following <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter" target="_blank" class="text-sky-600 hover:underline">CSS Filters</a>.</p>
      </div>
      <div>
        <ImageFrom onImgChange={(data) => { img = data; }}  />
      </div>
    </div>
  {/if}
</div>
