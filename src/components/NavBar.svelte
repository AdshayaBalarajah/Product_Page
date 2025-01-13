<style>
  /* Completely remove the blue outline and apply only black box-shadow */
  .no-outline:focus {
    outline: none !important; /* Remove the blue outline */
    box-shadow: 0 0 0 2px #000 !important; /* Add a black ring */
  }

  /* Adjust the space between nav links and search bar */
  .nav-container {
    display: flex;
    justify-content: flex-start;
    flex-grow: 1;
    margin-left: 120px; /* Adjust this value to move the nav links slightly to the left */
  }

  .search-container {
    display: flex;
    justify-content: flex-end;
    margin-left: auto; /* This makes the search bar adjust its position automatically */
    margin-right: 430px;
  }

  /* Additional hover styling for icons */
  .icon-container i {
    transition: all 0.3s ease-in-out;
  }

  .icon-container i:hover {
    background-color: rgba(128, 128, 128, 0.3); /* Light gray background on hover */
    border-radius: 50%; /* Circular background */
    padding: 8px; /* Add space around the icon */
  }
</style>

<nav class="flex items-center p-4 bg-white shadow-none border-b-0">
  <!-- TrendMart Logo -->
  <div class="text-3xl font-semibold text-orange pl-24" style="font-family: 'Dela Gothic One', sans-serif;">
    TrendMart
  </div>

  <!-- Navigation Links Container -->
  <div class="nav-container">
    <a
      href="#home"
      class="text-black font-lighter-bold text-sm hover:bg-gray-300 py-3 px-4 rounded-md transition duration-300 mr-4"
      style="font-family: 'Inter', sans-serif;"
      >HOME</a
    >
    <a
      href="#sell"
      class="text-black font-lighter-bold text-sm hover:bg-gray-300 py-3 px-4 rounded-md transition duration-300 mr-4"
      style="font-family: 'Inter', sans-serif;"
      >SELL</a
    >
    <a
      href="#categories"
      class="text-black font-lighter-bold text-sm hover:bg-gray-300 py-3 px-4 rounded-md transition duration-300 mr-4"
      style="font-family: 'Inter', sans-serif;"
      >CATEGORIES</a
    >
    <a
      href="#about"
      class="text-black font-lighter-bold text-sm hover:bg-gray-300 py-3 px-4 rounded-md transition duration-300"
      style="font-family: 'Inter', sans-serif;"
      >ABOUT</a
    >
  </div>

  <!-- Search Bar Container -->
  <div class="search-container">
    <div class="relative">
      <input
        type="text"
        class="p-2 pl-6 pr-10 border border-black-300 hover:bg-gray-300 rounded-full w-52 bg-gray-200 opacity-80 no-outline focus:ring-0"
        placeholder="Search products"
      />
      <i class="fas fa-search absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
    </div>
  </div>

  <!-- Icons for Favorites, Cart, User Profile (Outline Icons) -->
  <div class="absolute right-36 top-9 transform -translate-y-1/2 flex items-center space-x-6 icon-container">
    <i class="far fa-heart text-black-500 cursor-pointer text-xl hover:text-black-500"></i>
    <i class="fas fa-cart-arrow-down text-black-500 cursor-pointer text-xl hover:text-black"></i>
    <i class="far fa-user-circle text-black-500 cursor-pointer text-xl hover:text-black"></i>
  </div>
</nav>
