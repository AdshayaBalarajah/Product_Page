<script>
  let selectedCategory = '';
  const categories = ['Clothing', 'Shoes', 'Books'];

  let minPrice = '';
  let maxPrice = '';

  const clearSelection = () => {
    selectedCategory = '';
    minPrice = '';
    maxPrice = '';
  };
</script>

<!-- Container Styled with Tailwind -->
<div class="max-w-7xl mx-auto p-4 bg-white rounded-lg shadow-md border border-gray-300 min-h-32 flex items-center">
  <div class="flex items-center justify-start space-x-4 w-full">
    <!-- Select Category Bar -->
    <select
      bind:value={selectedCategory}
      class="border p-2 py-1 rounded-full w-52 h-8 text-gray-500 bg-gray-100 
             hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
    >
      <option value="" disabled selected hidden>Select Category</option>
      {#each categories as category}
        <option value={category} class="text-black">{category}</option>
      {/each}
    </select>

    <!-- Clear All Button -->
   <button
  on:click={clearSelection}
  class="border-2 border-orange text-orange p-1 rounded-full bg-white-300 w-20 h-6 text-sm flex items-center justify-center"
>
  Clear All
</button>


    <!-- Min Price, Max Price, Final Clear Button -->
    <div class="flex items-center space-x-4 pl-64">
      <!-- Min Price Input -->
      <input
        type="number"
        placeholder="Min Price"
        bind:value={minPrice}
        class="border p-2 py-3 rounded-full w-32 h-8 text-gray-500 bg-gray-100 
               hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
      />

      <!-- Max Price Input -->
      <input
        type="number"
        placeholder="Max Price"
        bind:value={maxPrice}
        class="border p-2 py-3 rounded-full w-32 h-8 text-gray-500 bg-gray-100 
               hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
      />

      <!-- Final Clear All Button -->
      <button
  on:click={clearSelection}
  class="border-2 border-orange text-orange p-1 rounded-full bg-white-300 w-20 h-6 text-sm flex items-center justify-center"
>
  Clear All
</button>

    </div>

    <!-- Separate div for Filter Button with space -->
    <div class="pl-20">
      <button
        class="border-2 border-orange bg-orange text-white p-2 w-20 text-md rounded-md"
      >
        Filter
      </button>
    </div>
  </div>
</div>
