<template>
    <div class="flex items-center justify-center h-screen bg-blue-900">
        <div class="flex w-full max-w-md">
            <!-- Email Input -->
            <input type="email" placeholder="Enter Email"
                class="flex-1 px-4 py-3 text-white placeholder-gray-300 bg-blue-800 border-none rounded-l-md focus:outline-none" />
            <!-- Submit Button -->
            <button
                class="flex items-center justify-center px-4 py-2 bg-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none">
                <!-- Arrow Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 text-white" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="1.4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmailInputWithIcon",
};
</script>

<style scoped>
/* TailwindCSS ile stil verildiği için ek CSS gerekmez. */
</style>