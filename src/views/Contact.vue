<template>
    <div class="w-full">
        <Navbar active_page="/contact" />
        <div class="container">
           
        </div>
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
    methods: {
        addContact() {

        }
    }
}
</script>