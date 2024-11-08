<template>
    <div class="w-full">
        <Navbar />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import AnimatedCounter from '@/components/AnimatedCounter.vue';
export default {
    name: "About",
    components: {
        Navbar,
        Footer,
        AnimatedCounter
    }
}
</script>