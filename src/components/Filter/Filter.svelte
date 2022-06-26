<script type="text/javascript">
  import RangeSlider from 'svelte-range-slider-pips';

  import { FILTER_TYPES_AS_ARRAY } from './Filter.constants';
  import { toCSSFilterString } from './Filter.utils';
  import { noop } from '../../App.constants';

  const appliedFilters = {};
  let [selectedFilter] = FILTER_TYPES_AS_ARRAY;
  let filterValues = [selectedFilter.defaultValue];

  export let onFilterChange = noop;

  $: {
    const [filterValue] = filterValues;
    appliedFilters[selectedFilter.attr] = filterValue;

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
  <ul
    class="px-2 inline-flex justify-start mx-auto items-center text-xs uppercase max-w-full h-12 gap-8 overflow-auto shrink-0 hide-scrollbar"
  >
    {#each FILTER_TYPES_AS_ARRAY as filter}
      <li>
        <button
          type="button"
          class="btn circle w-20"
          class:bg-gray-300="{selectedFilter.attr !== filter.attr}"
          class:btn-info-light="{selectedFilter.attr === filter.attr}"
          on:click={() => updateSelectedFilter(filter)}
        >
          {filter.displayName}
        </button>
      </li>
    {/each}
  </ul>
  <div class="max-w-md mx-auto flex-1 w-full text-xs">
    <RangeSlider
      id="color-pips"
      bind:values={filterValues}
      min={selectedFilter.min}
      max={selectedFilter.max}
      range="min"
      float
      formatter={(v) => `${v}${selectedFilter.displayUnit}`}
    />
  </div>
</div>
