<script type="text/javascript">
  import { UploadIcon, ExclamationIcon, Spinner } from '../Icons';
  import { createImageDataURL } from './ImageForm.utils';
  import { noop } from '../../App.constants';

  let error = null;
  let isVerifying = false;

  export let onImgChange = noop;

  const onChangeHandler = async (e) => {
    const [img] = e.dataTransfer && e.dataTransfer.files.length
      ? e.dataTransfer.files
      : e.target.files;

    try {
      isVerifying = true;

      const dataURL = await createImageDataURL(img);
      const { type, name } = img;

      onImgChange({ type, name, dataURL });
    } catch (ex) { error = ex.message; } finally { isVerifying = false; }

    e.target.value = '';
  };

  const onDragoverHandler = (e) => {
    e.dataTransfer.dropEffect = 'copy';
    error = null;
  };
</script>

<form
  class="p-3 border shadow-md max-w-xs bg-white border-gray-300 relative mx-auto"
  class:text-red-500="{error !== null}"
  class:text-gray-500="{error === null}"
  on:dragover|preventDefault|stopPropagation={onDragoverHandler}
  on:drop|preventDefault|stopPropagation={onChangeHandler}
>
  <div
    class="border border-dashed p-6"
    class:border-red-400="{error !== null}"
    class:border-gray-400="{error === null}"
  >
    <div class="mb-6 flex justify-center">
      <UploadIcon className="w-12 h-12" />
    </div>
    <div class="text-center mb-6">
      <p class="text-lg">Drag and Drop</p>
    </div>
    <div class="text-center mb-8">
      <p class="text-sm italic">or</p>
    </div>
    <div class="flex justify-center">
      <label
        for="upload-image"
        class="btn cursor-pointer"
        class:btn-danger-dark="{error !== null}"
        class:btn-info-dark="{error === null}"
      >
        <span>Browse Image</span>
        <input
          type="file" 
          class="hidden"
          id="upload-image"
          accept="image/*"
          on:click={() => { error = null; }}
          on:change={onChangeHandler}
        />
      </label>
    </div>
    {#if error}
      <div class="text-red-500 text-xs italic flex justify-center items-center gap-1 mt-2">
        <span><ExclamationIcon className="w-4 h-4" /></span>
        <span>{error}</span>
      </div>
    {/if}
    {#if isVerifying}
      <div class="absolute w-full h-full flex gap-2 items-center justify-center bg-slate-50 bg-opacity-90 top-0 left-0 text-sm md:text-base">
        <span>Optimizing</span>
        <Spinner className="animate-spin" />
      </div>
    {/if}
  </div>
</form>
