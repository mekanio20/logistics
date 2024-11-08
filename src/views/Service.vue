<template>
    <div class="w-full">
        <Navbar active_page="/service" />
        <div class="container">
            
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: "Service",
    components: {
        Navbar,
        Footer,
    },
    data() {
        return {
            services: [
                "Экспедирование экспортно-импортных и транзитных перевозок, грузов по странам СНГ, Ближнего и Дальнего Востока, стран Балтии и Евросоюза",
                "Перевозка опасных грузов",
                "Получение специального разрешения и перевозка грузов любой сложности: крупных, негабаритных, сверхгабаритных, тяжеловесных и длинномерных перевозка сборных грузов",
                "Перевозка грузов под температурным режимом",
                "Перевозка дорогостоящих грузов",
                "Получение виз для иностранных водителей и визовая поддержка на территории Туркменистана."
            ]
        }
    }

}
</script>