<template>
    <div class="w-full">
        <Navbar active_page="/contact" />
        <div class="container py-40">

        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: "Contact",
    components: {
        Navbar,
        Footer,
    },
}
</script>