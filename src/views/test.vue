<template>
  <div class="relative h-screen">
    <!-- Burger Icon -->
    <button
      @click="toggleSidebar"
      class="fixed top-4 left-4 z-20 p-2 bg-gray-800 text-white rounded-full"
    >
      <!-- Burger Icon (3 lines) -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>

    <!-- Sidebar -->
    <div
      class="fixed top-0 left-0 h-full bg-gray-900 text-white z-10 transition-all duration-500 ease-in-out"
      :class="isOpen ? 'w-full' : 'w-0'"
    >
      <!-- Sidebar Content -->
      <div v-if="isOpen" class="p-8">
        <h2 class="text-2xl mb-4">Sidebar İçeriği</h2>
        <p>Buraya istediğiniz içeriği ekleyebilirsiniz.</p>

        <!-- Close Button -->
        <button @click="toggleSidebar" class="mt-4 p-2 bg-red-500 rounded-lg">
          Kapat
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false, // Sidebar açık kapalı durumu
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
/* Sidebar açıkken ekranın diğer içeriklerini gizlemek için ek stil */
body {
  overflow: hidden;
}
</style>
