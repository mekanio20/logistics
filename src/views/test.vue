<template>
    <div :class="{ dark: isDarkMode }">
      <div class="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
        <button @click="toggleDarkMode" class="p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white">
          {{ isDarkMode ? "Light Mode" : "Dark Mode" }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDarkMode: JSON.parse(localStorage.getItem('isDarkMode')) || false,
      };
    },
    methods: {
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('isDarkMode', this.isDarkMode);
      },
    },
  };
  </script>
  