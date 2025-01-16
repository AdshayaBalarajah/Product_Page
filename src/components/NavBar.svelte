<script>
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";
  import { onMount } from "svelte";

  const searchQuery = writable('');
  const dispatcher = createEventDispatcher();
  let isMenuOpen = writable(false);

 
  $: dispatcher("search", $searchQuery);

  
  onMount(() => {
    
  });
</script>

<nav class="flex items-center p-4 bg-white shadow-none border-b-0 relative backdrop-blur-lg z-10">
  <!--title-->
  <div
    class="text-3xl font-semibold text-orange pl-4 sm:pl-8 md:pl-8 lg:pl-24"
    style="font-family: 'Dela Gothic One', sans-serif;"
  >
    TrendMart
  </div>

  <!-- Hamburger Menu -->
<button
  class="md:hidden ml-auto text-black text-2xl p-2"
  on:click={() => $isMenuOpen = !$isMenuOpen}
  aria-label="Open navigation menu"  
>
  <i class="fas fa-bars"></i>
</button>

  <!-- Navigation Links -->
  <div class="hidden md:flex space-x-6 ml-auto flex-grow justify-center md:space-x-4 lg:space-x-6">
    <a
      href="#home"
      class="text-black text-xs sm:text-sm md:text-base hover:bg-gray-300 py-2 px-4 rounded-md transition duration-300"
    >
      HOME
    </a>
    <a
      href="#sell"
      class="text-black text-xs sm:text-sm md:text-base hover:bg-gray-300 py-2 px-4 rounded-md transition duration-300"
    >
      SELL
    </a>
    <a
      href="#categories"
      class="text-black text-xs sm:text-sm md:text-base hover:bg-gray-300 py-2 px-4 rounded-md transition duration-300"
    >
      CATEGORIES
    </a>
    <a
      href="#about"
      class="text-black text-xs sm:text-sm md:text-base hover:bg-gray-300 py-2 px-4 rounded-md transition duration-300"
    >
      ABOUT
    </a>
  </div>

  <!-- Menu Dropdown -->
  {#if $isMenuOpen}
  <div class="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-4 space-y-4 z-50 overflow-y-auto">
    <a
      href="#home"
      class="text-black text-xs sm:text-sm hover:bg-gray-300 py-2 px-4 rounded-md transition duration-300 block text-center"
    >
      HOME
    </a>
    <a
      href="#sell"
      class="text-black text-xs sm:text-sm hover:bg-gray-300 py-2 px-4 rounded-md transition duration-300 block text-center"
    >
      SELL
    </a>
    <a
      href="#categories"
      class="text-black text-xs sm:text-sm hover:bg-gray-300 py-2 px-4 rounded-md transition duration-300 block text-center"
    >
      CATEGORIES
    </a>
    <a
      href="#about"
      class="text-black text-xs sm:text-sm hover:bg-gray-300 py-2 px-4 rounded-md transition duration-300 block text-center"
    >
      ABOUT
    </a>

    <!-- Search Bar (Mobile) -->
    <div class="relative flex items-center justify-center mt-4 md:hidden">
      <input
        type="text"
        bind:value={$searchQuery}
        class="p-2 pl-6 pr-10 border border-gray-300 hover:bg-gray-100 rounded-full w-44 sm:w-52 bg-gray-200 focus:ring-2 focus:outline-none focus:ring-orange"
        placeholder="Search products"
      />
      <i class="fas fa-search absolute right-36 text-gray-500"></i>
    </div>
  </div>
  {/if}

  <!-- Search Bar (Desktop) -->
<div class="hidden md:block ml-auto mr-8 lg:mr-16 xl:mr-24">
  <div class="relative flex items-center">
    <input
      type="text"
      bind:value={$searchQuery}
      class="p-2 pl-6 pr-10 border border-gray-300 hover:bg-gray-100 rounded-full w-44 sm:w-52 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange"
      placeholder="Search products"
    />
    <i class="fas fa-search absolute right-4 text-gray-500"></i>
  </div>
</div>



</nav>
