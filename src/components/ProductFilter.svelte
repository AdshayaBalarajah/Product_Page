<script>
  export let onFilter;
  let selectedCategory = '';
  const categories = ['Clothing', 'Electronics', 'Accessories', 'Footwear'];

  let minPrice = '';
  let maxPrice = '';

  const clearSelection = () => {
    selectedCategory = '';
  };

  const clearPriceSelection = () => {
    minPrice = '';
    maxPrice = '';
  };

  const handleFilter = () => {
    onFilter({ selectedCategory, minPrice, maxPrice });
  };

  
  $: selectedCategory, handleFilter();
</script>

<!-- Container -->
<div class="max-w-7xl mx-auto p-4 bg-white rounded-lg shadow-md border border-gray-300 min-h-32 flex items-center flex-wrap">
  <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
   
    <div class="flex items-center space-x-2 w-full sm:w-auto">
      <!-- Select Category Bar -->
      <select
        bind:value={selectedCategory}
        class="border p-2 py-1 rounded-full sm:w-52 md:w-48 lg:w-52 h-8 text-gray-500 bg-gray-100 
               hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange"
      >
        <option value="" disabled selected hidden>Select Category</option>
        {#each categories as category}
          <option value={category} class="text-black">{category}</option>
        {/each}
      </select>

      <!-- Clear All Button (for select category) -->
      <button
        on:click={clearSelection}
        class="border-2 border-orange text-orange p-1 rounded-full bg-white-300 sm:w-20 md:w-16 lg:w-20 h-7.5 text-sm flex items-center justify-center 
               active:scale-95 transition-transform duration-200 ease-in-out"
      >
        Clear All
      </button>
    </div>

   
    <div class="flex flex-wrap items-center space-x-2 w-full sm:w-auto sm:pl-4 md:flex-row md:pl-8 lg:flex-row lg:pl-72">

      <!-- Min Price -->
      <input
        type="number"
        placeholder="Min Price"
        bind:value={minPrice}
        class="border p-2 py-3 rounded-full w-full sm:w-32 md:w-28 lg:w-32 h-8 text-gray-500 bg-gray-100 
               hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange"
      />

      <!-- Max Price -->
      <input
        type="number"
        placeholder="Max Price"
        bind:value={maxPrice}
        class="border p-2 py-3 rounded-full w-full sm:w-32 md:w-28 lg:w-32 h-8 text-gray-500 bg-gray-100 
               hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange"
      />

      <!-- Filter Button -->
      <button
        on:click={handleFilter}
        class="border-2 border-orange bg-orange text-white p-1 w-full sm:w-16 md:w-16 lg:w-20 h-8 rounded-full hover:bg-orange-700 focus:outline-none"
      >
        Filter
      </button>

      <!-- Clear All ( for price button) -->
      <button
        on:click={clearPriceSelection}
        class="border-2 border-orange text-orange p-1 rounded-full bg-white-300 sm:w-20 md:w-16 lg:w-20 h-7.5 text-sm flex items-center justify-center 
               active:scale-95 transition-transform duration-200 ease-in-out"
      >
        Clear All
      </button>

    </div>
  </div>
</div>
