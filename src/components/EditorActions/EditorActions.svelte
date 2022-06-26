<script type="text/javascript">
  import { createEventDispatcher } from 'svelte';

  import { CloseIcon, DownloadIcon } from '../Icons';
  import { noop } from '../../App.constants';

  const dispatch = createEventDispatcher();
  let confirm = false;

  export let onDownload = noop;

  const onCloseHanlder = () => {
    if (!confirm) {
      confirm = true;

      return;
    }

    dispatch('close');

    confirm = false;
  };
</script>

<ul class="flex gap-3 justify-center">
  <li>
    <button
      type="button"
      class="btn circle btn-danger-dark text-slate-50 rounded-full min-w-0 min-h-0 w-auto h-auto hover:scale-110"
      on:click={onCloseHanlder}
    >
      {#if confirm}
        <span class="text-xs">Sure?</span>
      {:else}
        <CloseIcon className="w-4 h-4" />
      {/if}
    </button>
  </li>
  <li>
    <button
      type="button"
      class="btn circle btn-info-dark text-slate-50 rounded-full min-w-0 min-h-0 hover:scale-110"
      on:click={onDownload}
    >
      <DownloadIcon className="w-4 h-4" />
    </button>
  </li>
</ul>
