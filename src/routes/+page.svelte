<script>
  import NavBar from "../components/NavBar.svelte";
  import ProductFilter from "../components/ProductFilter.svelte";
  import Footer from "../components/Footer.svelte";
  import ProductCard from "../components/ProductCard.svelte";
  import { writable } from "svelte/store";
  import { onMount } from "svelte";

  let products = writable([]);
  let filteredProducts = writable([]);
  let currentPage = writable(1);
  const itemsPerPage = 15;

  let searchQuery = writable('');
  let priceRange = writable({ minPrice: 0, maxPrice: 5000 });
  let category = writable('');

  // Category mapping
  const categoryNames = {
    Clothing: [
      "Cotton T-shirt", "Leather Jacket", "Jeans Pants", "Woolen Scarf", "Summer Hat",
      "Slim Fit Jeans", "Winter Coat", "Casual Shirt", "Denim Jacket", "Hoodie Sweatshirt"
    ],
    Electronics: [
      "4K Smart TV", "Wireless Earphones", "Gaming Laptop", "Digital Camera", "Bluetooth Speaker",
      "Smartphone Pro", "Portable Charger", "Fitness Tracker", "LED Monitor", "Tablet PC"
    ],
    Accessories: [
      "Leather Bag", "Canvas Tote Bag", "Clutch Purse", "Men's Wallet", "Sunglasses Case",
      "Wrist Watch", "Formal Belt", "Designer Hat", "Stylish Scarf", "Smartphone Case"
    ],
    Footwear: [
      "Running Sneakers", "Leather Boots", "Casual Sandals", "Beach Flip Flops", "Formal Shoes",
      "Winter Boots", "Outdoor Hiking Shoes", "Sneaker Boots", "Slippers", "Ankle Boots"
    ]
  };

  // Fetching product data using jsonplaceholder
  onMount(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    const transformedData = data.slice(0, 75).map((item, index) => {
      const category = ['Clothing', 'Electronics', 'Accessories', 'Footwear'][index % 4];
      const name = `${categoryNames[category][index % categoryNames[category].length]} ${Math.floor(index / categoryNames[category].length) + 1}`;
      return {
        id: item.id,
        name: name,
        price: Math.floor(Math.random() * 5000) + 500,
        image: item.thumbnailUrl,
        category: category
      };
    });
    products.set(transformedData);
    filteredProducts.set(transformedData);
  });

  
  function handleSearch(query) {
    searchQuery.set(query);
  }

  function handleFilter({ selectedCategory, minPrice, maxPrice }) {
    category.set(selectedCategory);
    priceRange.set({ minPrice, maxPrice });
  }

 
  $: {
    let filtered = $products;

    //search query filter
    if ($searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes($searchQuery.toLowerCase())
      );
    }

    // price range filter
    if ($priceRange.minPrice || $priceRange.maxPrice) {
      filtered = filtered.filter((product) => 
        (product.price >= $priceRange.minPrice && product.price <= $priceRange.maxPrice)
      );
    }

    // category filter
    if ($category) {
      filtered = filtered.filter((product) => product.category === $category);
    }

    // sort by price ascending (without category or search)
    if ($priceRange.minPrice || $priceRange.maxPrice) {
      filtered = filtered.sort((a, b) => a.price - b.price);
    }

    filteredProducts.set(filtered);
  }

  // Pagination
  let paginatedProducts = writable([]);
  $: {
    filteredProducts.subscribe((data) => {
      paginatedProducts.set(
        data.slice(($currentPage - 1) * itemsPerPage, $currentPage * itemsPerPage)
      );
    });
  }

  // Truncate name(limited characters for name)
  function truncateName(name, maxLength) {
    return name.length > maxLength ? name.slice(0, maxLength) + "..." : name;
  }
</script>

<main>
  <div class="bg-bgColor">
  <NavBar on:search={(e) => handleSearch(e.detail)} />
  <ProductFilter onFilter={handleFilter} />

  <!-- Product Grid -->
  <div class="container mx-auto px-4">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    {#each $paginatedProducts as product}
      <ProductCard {product} name={truncateName(product.name, 15)} />
    {/each}
  </div>
</div>


  <!-- Pagination -->
  <div class="flex justify-center space-x-2 mt-4 pb-4 pt-12 flex-wrap">
    {#each Array.from({ length: Math.ceil($filteredProducts.length / itemsPerPage) }, (_, i) => i + 1) as page}
      <button
        class="px-4 py-2 border rounded-md hover:bg-gray-200"
        class:selected={$currentPage === page}
        on:click={() => currentPage.set(page)}
      >
        {page}
      </button>
    {/each}
  </div>

  <!-- Footer -->
  <Footer />
  </div>

</main>

<style>
  button.selected {
    background-color: #f97316;
    color: white;
  }
</style>
