<script>
  export let product;
  export let name; 
  let isFavorite = false;
</script>

<!-- Product Card -->
<div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white w-56 h-80 mx-auto mt-8 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative">
  
  <!-- Heart Icon  -->
  <button
    class="absolute top-2 right-2 z-10 border-0 rounded-full p-1 cursor-pointer bg-gray-100 hover:bg-gray-200 hover:border-gray-400"
    on:click={() => isFavorite = !isFavorite}
    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
  >
    <i class="fa-heart fa-lg"
       class:far={!isFavorite}  
       class:fas={isFavorite} 
       class:text-gray-400={!isFavorite} 
       class:text-red-500={isFavorite} 
    ></i>
  </button>

  <!-- Product Image  -->
  <div class="relative w-full h-48 bg-gray-200 flex justify-center items-center">
    {#if product.image}
      <img src={product.image} alt={product.name} class="w-full h-full object-cover"/>
    {:else}
      <p class="text-gray-500">Image not available</p>
    {/if}
  </div>

  <!-- Product Details  -->
  <div class="p-4 flex-grow flex flex-col justify-between">
    <h3 class="text-md font-medium text-gray-800 font-inter">{name}</h3> 
    <p class="text-sm font-medium text-gray-600 font-inter">{product.category}</p>
    <p class="text-sm font-medium text-gray-500 mt-2">LKR {product.price}</p>

    <!-- Add to Cart Button -->
    <div class="mt-4 flex justify-start">
      <button 
        class="flex items-center space-x-2 border-2 border-orange-500 text-orange-500 p-2 rounded-full hover:bg-gray-200 hover:shadow-md"
        aria-label="Add to Cart"
      >
        <i class="fas fa-shopping-cart fa-md"></i>
      </button>
    </div>
  </div>
</div>

<style>
 
</style>
