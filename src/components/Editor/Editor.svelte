<script type="text/javascript">
  export let img = '';
</script>

<div class="flex flex-col editor">
  <div class="overflow-hidden">
    <img src={img} alt="to edit" class="w-auto h-full mx-auto" />
  </div>
  <div>
    Controls
  </div>
</div>

<style type="text/css">
  .editor {
    height: calc(100vh - 80px);
  }
</style>
