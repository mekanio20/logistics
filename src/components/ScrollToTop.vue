<template>
    <div>
        <transition name="fade">
            <svg v-show="isVisible" @click="scrollToTop" class="w-[50px] h-[50px] text-gray-800 dark:text-white scroll-to-top" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m5 15 7-7 7 7" />
            </svg>
        </transition>
    </div>
</template>

<script>
export default {
    name: "ScrollToTop",
    data() {
        return {
            isVisible: false,
        };
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
        checkScroll() {
            this.isVisible = window.scrollY > 300; // 300px'den fazla kaydırıldığında görünür
        },
    },
    mounted() {
        window.addEventListener("scroll", this.checkScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.checkScroll);
    },
};
</script>

<style scoped>
.scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #E92A34;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>