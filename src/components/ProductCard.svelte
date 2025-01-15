<script>
  export let product;
</script>

<!-- Product Card -->
<div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white w-56 h-80 mx-auto mt-4 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
  
  <!-- Heart Icon in Top-Right Corner -->
  <div class="absolute top-2 right-2 text-gray-400 border-0 rounded-full p-1 cursor-pointer bg-gray-100 hover:bg-gray-200 hover:border-gray-400">
    <i class="far fa-heart fa-lg text-gray-400"></i>
  </div>

  <!-- Product Image -->
  <img src={product.image} alt={product.name} class="w-full h-44 object-cover">

  <!-- Product Details -->
  <div class="p-4 flex-grow">
    <h3 class="text-lg font-medium text-gray-800">{product.name}</h3>
    <p class="text-base font-medium text-gray-600 mt-2">LKR {product.price}</p>

    <!-- Add to Cart Button -->
    <div class="mt-4 flex justify-start">
      <button 
        class="flex items-center space-x-2 border-2 border-orange-500 text-orange-500 p-2 rounded-full hover:bg-gray-200 hover:shadow-md"
        aria-label="Add to Cart"
      >
        <i class="fas fa-shopping-cart fa-lg"></i>
      </button>
    </div>
  </div>
</div>

<style>
  /* Optional: Customize your styles if needed */
</style>
