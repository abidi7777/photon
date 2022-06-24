<script type="text/javascript">
  import cx from 'classnames';

  import CloudUpload from '../../icons/cloud-upload.svelte';
  import ExclamationIcon from '../../icons/exclamation.svelte';
  import createImageDataURL from '../../utils/createImageDataURL';

  const noop = () => {};
  let error = null;
  let isVerifying = false;

  export let onImgChange = noop;

  const onChangeHandler = async (e) => {
    const [img] = e.dataTransfer && e.dataTransfer.files.length
      ? e.dataTransfer.files
      : e.target.files;

    try {
      isVerifying = true;

      const imgDataURL = await createImageDataURL(img);

      onImgChange(imgDataURL);
    } catch (ex) { error = ex.message; } finally { isVerifying = false; }

    e.target.value = '';
  };

  const onDragoverHandler = (e) => {
    e.dataTransfer.dropEffect = 'copy';
    error = null;
  };
</script>

<form
  class={
    cx(
      'p-3 border shadow-md max-w-72 md:w-1/2 bg-white border-gray-300 relative mx-auto',
      { 'text-red-500': error },
      { 'text-gray-500': !error },
    )
  }
  on:dragover|preventDefault|stopPropagation={onDragoverHandler}
  on:drop|preventDefault|stopPropagation={onChangeHandler}
>
  <div class={
    cx(
      'border border-dashed p-6',
      { 'border-red-400': error },
      { 'border-gray-400': !error },
    )
  }>
    <div class="mb-6 flex justify-center">
      <CloudUpload className="w-12 h-12" />
    </div>
    <div class="text-center mb-6">
      <p class="text-lg">Drag and Drop</p>
    </div>
    <div class="text-center mb-8">
      <p class="text-sm italic">or</p>
    </div>
    <div class="flex justify-center">
      <label for="upload-image" class={
        cx(
          'btn cursor-pointer',
          { 'btn-danger-dark': error },
          { 'btn-info-dark': !error },
        )
      }>
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
      <div class="absolute w-full h-full flex flex-col items-center justify-center bg-slate-50 bg-opacity-90 top-0 left-0 text-sm md:text-base">
        <span>Optimizing the image for your browser,</span>
        <span>Please wait...</span> 
      </div>
    {/if}
  </div>
</form>
