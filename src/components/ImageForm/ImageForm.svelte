<script type="text/javascript">
  import CloudUpload from '../../icons/cloud-upload.svelte';
</script>

<form class="p-3 border border-gray-300 shadow-md text-gray-500 w-72 md:w-1/3 bg-white">
  <div class="border border-gray-400 border-dashed p-6">
    <div class="mb-6 flex justify-center">
      <CloudUpload className="w-12 h-12" />
    </div>
    <div class="text-center mb-6">
      <p class="text-lg">Drag and Drop</p>
    </div>
    <div class="text-center mb-6">
      <p class="text-sm italic">or</p>
    </div>
    <div class="flex justify-center">
      <label for="upload-image" class="btn btn-info-dark cursor-pointer">
        <span>Browse Image</span>
        <input type="file" class="hidden" id="upload-image" />
      </label>
    </div>
  </div>
</form>
