<script>
  import NavBar from '../components/NavBar.svelte';
  import ProductFilter from '../components/ProductFilter.svelte';
  import ProductCard from '../components/ProductCard.svelte';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  // Stores for products, current page, and pagination
  let products = writable([]);
  let currentPage = writable(1);
  const itemsPerPage = 10;
  let totalPages = 0;

  // On mount, fetch data from JSONPlaceholder API
  onMount(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    const transformedData = data.slice(0, 50).map((item, index) => ({
      id: item.id,
      name: `Product ${index + 1}`,
      price: Math.floor(Math.random() * 5000) + 500,
      image: item.thumbnailUrl,
    }));
    products.set(transformedData);
    totalPages = Math.ceil(transformedData.length / itemsPerPage);
  });

  let paginatedProducts = writable([]);

  // Subscribe to products and update the paginated list when the current page changes
  $: {
    products.subscribe((data) => {
      paginatedProducts.set(
        data.slice(($currentPage - 1) * itemsPerPage, $currentPage * itemsPerPage)
      );
    });
  }

  // Function to go to a specific page
  function goToPage(page) {
    currentPage.set(page);
  }
</script>

<main>
  <NavBar />
  <ProductFilter />
  
  <!-- Product Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {#each $paginatedProducts as product}
      <ProductCard {product} />
    {/each}
  </div>

  <!-- Pagination -->
  <div class="flex justify-center space-x-2 mt-4">
    {#each Array.from({ length: totalPages }, (_, i) => i + 1) as page}
      <button
        class="px-4 py-2 border rounded-md hover:bg-gray-200"
        class:selected={$currentPage === page}
        on:click={() => goToPage(page)}
      >
        {page}
      </button>
    {/each}
  </div>
</main>

<style>
  button.selected {
    background-color: #f97316; /* Orange */
    color: white;
  }
</style>
