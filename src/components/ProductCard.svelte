<script>
  import tshirtImage from '../assets/tshirt.jpg'; // Import your T-shirt image from the assets folder

  // Product details
  let product = {
    name: 'T-shirt',
    price: 1500, // Example price in LKR
    image: tshirtImage
  };
</script>

<!-- Product Card -->
<div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white w-56 h-80 ml-32 mt-16 relative flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
  <!-- Heart Icon in Top-Right Corner -->
  <div class="absolute top-2 right-2 text-gray-400 border-0 rounded-full p-1 cursor-pointer bg-gray-100 hover:bg-gray-200 hover:border-gray-400">
    <!-- Font Awesome Heart Outline Icon with Gray Color -->
    <i class="far fa-heart fa-lg text-gray-400"></i> <!-- Outline Heart Icon with Gray Color -->
  </div>

  <!-- Product Image -->
  <img src={product.image} alt={product.name} class="w-full h-44 object-cover">

  <!-- Product Details -->
  <div class="p-4 flex-grow">
    <!-- Product Name -->
    <h3 class="text-lg font-normal text-gray-800" style="font-family: 'Inter', sans-serif;">{product.name}</h3>

    <!-- Product Price -->
    <p class="text-base font-medium text-gray-600 mt-2" style="font-family: 'Inter', sans-serif;">LKR {product.price}</p>
    
    <!-- Cart Icon Below Price -->
    <div class="mt-4 flex justify-start">
      <button class="flex items-center space-x-2 border-2 border-orange-500 text-orange-500 p-2 rounded-full hover:bg-gray-200 hover:shadow-md">
        <!-- Font Awesome Solid Cart Icon -->
        <i class="fas fa-shopping-cart fa-lg"></i> <!-- Solid Cart Icon with Orange Border -->
      </button>
    </div>
  </div>
</div>

<style>
  /* Optional: Customize your styles if needed */
</style>
