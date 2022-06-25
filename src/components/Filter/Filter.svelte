<script type="text/javascript">
  import RangeSlider from 'svelte-range-slider-pips';

  import { FILTER_TYPES_AS_ARRAY } from './Filter.constants';
  import { isValidCSS, toCSSFilterString } from './Filter.utils';
  import { noop } from '../../App.constants';

  const appliedFilters = {};
  let [selectedFilter] = FILTER_TYPES_AS_ARRAY;
  let filterValues = [selectedFilter.defaultValue];

  export let onFilterChange = noop;

  $: if (selectedFilter.type !== 'text') {
    const [filterValue] = filterValues;

    appliedFilters[selectedFilter.attr] = filterValue;

    onFilterChange(toCSSFilterString(appliedFilters));
  }
  $: if (selectedFilter.type === 'text') {
    const cssFilterStr = `${selectedFilter.attr}(${filterValues[0]})`;

    appliedFilters[selectedFilter.attr] = isValidCSS('filter', cssFilterStr)
      ? filterValues[0]
      : selectedFilter.defaultValue;

    onFilterChange(toCSSFilterString(appliedFilters));
  }

  const updateSelectedFilter = (filter) => {
    selectedFilter = filter;
    filterValues = [
      Object.prototype.hasOwnProperty.call(appliedFilters, selectedFilter.attr)
        ? appliedFilters[selectedFilter.attr]
        : selectedFilter.defaultValue,
    ];
  };
</script>

<div class="flex flex-col">
  <div class="max-w-md mx-auto flex-1 w-full">
    {#if selectedFilter.type === 'range'}
      <RangeSlider
        id="color-pips"
        bind:values={filterValues}
        min={selectedFilter.min}
        max={selectedFilter.max}
        first="label"
        last="label"
        range="min"
        float
        pips
        formatter={(v) => `${v}${selectedFilter.unit}`}
      />
    {:else if selectedFilter.type === 'text'}
      <input
        type="text"
        placeholder="offset-x offset-y blur-radius color"
        class="w-full pb-1 outline-none bg-transparent border-0 border-b border-b-black mb-4"
        on:input={(e) => { filterValues[0] = e.target.value; }}
      />
      <span class="italic text-xs">e.g. 16px 16px 10px black</span>
    {/if}
  </div>
  <ul class="inline-flex justify-between items-center text-xs uppercase w-full h-16 gap-8 overflow-auto shrink-0">
    {#each FILTER_TYPES_AS_ARRAY as filter}
      <li>
        <button
          type="button"
          class="btn"
          class:btn-info-dark="{selectedFilter.attr === filter.attr}"
          class:btn-info-light="{selectedFilter.attr !== filter.attr}"
          on:click={() => updateSelectedFilter(filter)}
        >
          {filter.displayName}
        </button>
      </li>
    {/each}
  </ul>
</div>
