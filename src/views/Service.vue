<template>
    <div class="w-full">
        <Navbar active_page="/service" />
        <div class="container">
            <!-- BANNER -->
            <div class="relative">
                <img class="w-full h-full object-cover" src="@/assets/imgs/service-page.webp">
                <h1
                    class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-sf_pro font-bold text-6xl text-white leading-[70px]">
                    Service
                </h1>
                <div
                    class="absolute z-50 inset-y-1/3 right-28 border h-fit bg-white bg-opacity-30 border-white p-4 rounded-full">
                    <a href="#" target="_blank"><img class="w-5 block py-4 cursor-pointer"
                            src="@/assets/icons/instagram.svg" alt="instagram"></a>
                    <a href="#" target="_blank"><img class="w-5 block py-4 cursor-pointer"
                            src="@/assets/icons/facebook.svg" alt="facebook"></a>
                    <a href="#" target="_blank"><img class="w-5 block py-4 cursor-pointer"
                            src="@/assets/icons/youtube.svg" alt="youtube"></a>
                    <a href="#" target="_blank"><img class="w-5 block py-4 cursor-pointer"
                            src="@/assets/icons/linkedIn.svg" alt="linkedin"></a>
                </div>
            </div>
            <!-- OUR SERVICES -->
            <div class="w-full text-center py-20">
                <h2 class="font-poppins font-semibold text-m_black-100 text-3xl uppercase">Our Services</h2>
                <div class="pt-20 flex items-start gap-x-6">
                    <div class="rounded-lg relative">
                        <img class="w-full h-full object-cover" src="@/assets/imgs/service1.webp">
                        <div class="absolute top-4 right-4">
                            <svg width="61" height="61" viewBox="0 0 61 61" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.9" cx="30.7734" cy="30.7734" r="21.2756"
                                    transform="rotate(40.6108 30.7734 30.7734)" fill="white" />
                                <path
                                    d="M27.0284 25.4929C26.8602 25.5143 26.707 25.6006 26.6015 25.7333C26.496 25.866 26.4465 26.0347 26.4636 26.2034C26.4808 26.3721 26.5631 26.5275 26.6931 26.6363C26.8232 26.7451 26.9905 26.7989 27.1596 26.786L34.6043 26.032L26.2913 35.7273C26.1791 35.8582 26.1234 36.0283 26.1366 36.2002C26.1498 36.3721 26.2308 36.5317 26.3617 36.6439C26.4926 36.7562 26.6627 36.8118 26.8346 36.7986C27.0065 36.7854 27.1661 36.7045 27.2783 36.5736L35.5913 26.8783L35.983 34.3514C35.9874 34.4367 36.0085 34.5203 36.0452 34.5974C36.082 34.6745 36.1335 34.7436 36.1969 34.8008C36.2603 34.8579 36.3344 34.9021 36.4148 34.9306C36.4953 34.9592 36.5806 34.9716 36.6659 34.9672C36.7511 34.9628 36.8347 34.9417 36.9118 34.9049C36.9889 34.8682 37.058 34.8167 37.1152 34.7533C37.1724 34.6899 37.2165 34.6158 37.245 34.5354C37.2736 34.4549 37.286 34.3696 37.2816 34.2843L36.8178 25.4146C36.8077 25.2209 36.7329 25.0362 36.6054 24.89C36.5521 24.8244 36.4872 24.7692 36.414 24.727C36.2503 24.624 36.0569 24.5787 35.8644 24.5983L27.0284 25.4929Z"
                                    fill="black" />
                            </svg>
                        </div>
                        <div
                            class="text-start absolute bottom-8 left-8 font-sf_pro font-bold text-xl text-white uppercase w-1/2">
                            Reliable Sea Freight
                        </div>
                    </div>
                    <div class="rounded-lg relative">
                        <img class="w-full h-full object-cover" src="@/assets/imgs/service2.webp">
                        <div class="absolute top-4 right-4">
                            <svg width="61" height="61" viewBox="0 0 61 61" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.9" cx="30.7734" cy="30.7734" r="21.2756"
                                    transform="rotate(40.6108 30.7734 30.7734)" fill="white" />
                                <path
                                    d="M27.0284 25.4929C26.8602 25.5143 26.707 25.6006 26.6015 25.7333C26.496 25.866 26.4465 26.0347 26.4636 26.2034C26.4808 26.3721 26.5631 26.5275 26.6931 26.6363C26.8232 26.7451 26.9905 26.7989 27.1596 26.786L34.6043 26.032L26.2913 35.7273C26.1791 35.8582 26.1234 36.0283 26.1366 36.2002C26.1498 36.3721 26.2308 36.5317 26.3617 36.6439C26.4926 36.7562 26.6627 36.8118 26.8346 36.7986C27.0065 36.7854 27.1661 36.7045 27.2783 36.5736L35.5913 26.8783L35.983 34.3514C35.9874 34.4367 36.0085 34.5203 36.0452 34.5974C36.082 34.6745 36.1335 34.7436 36.1969 34.8008C36.2603 34.8579 36.3344 34.9021 36.4148 34.9306C36.4953 34.9592 36.5806 34.9716 36.6659 34.9672C36.7511 34.9628 36.8347 34.9417 36.9118 34.9049C36.9889 34.8682 37.058 34.8167 37.1152 34.7533C37.1724 34.6899 37.2165 34.6158 37.245 34.5354C37.2736 34.4549 37.286 34.3696 37.2816 34.2843L36.8178 25.4146C36.8077 25.2209 36.7329 25.0362 36.6054 24.89C36.5521 24.8244 36.4872 24.7692 36.414 24.727C36.2503 24.624 36.0569 24.5787 35.8644 24.5983L27.0284 25.4929Z"
                                    fill="black" />
                            </svg>
                        </div>
                        <div
                            class="text-start absolute bottom-8 left-8 font-sf_pro font-bold text-xl text-white uppercase w-1/2">
                            Ground Transportation
                        </div>
                    </div>
                    <div class="rounded-lg relative">
                        <img class="w-full h-full object-cover" src="@/assets/imgs/service3.webp">
                        <div class="absolute top-4 right-4">
                            <svg width="61" height="61" viewBox="0 0 61 61" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.9" cx="30.7734" cy="30.7734" r="21.2756"
                                    transform="rotate(40.6108 30.7734 30.7734)" fill="white" />
                                <path
                                    d="M27.0284 25.4929C26.8602 25.5143 26.707 25.6006 26.6015 25.7333C26.496 25.866 26.4465 26.0347 26.4636 26.2034C26.4808 26.3721 26.5631 26.5275 26.6931 26.6363C26.8232 26.7451 26.9905 26.7989 27.1596 26.786L34.6043 26.032L26.2913 35.7273C26.1791 35.8582 26.1234 36.0283 26.1366 36.2002C26.1498 36.3721 26.2308 36.5317 26.3617 36.6439C26.4926 36.7562 26.6627 36.8118 26.8346 36.7986C27.0065 36.7854 27.1661 36.7045 27.2783 36.5736L35.5913 26.8783L35.983 34.3514C35.9874 34.4367 36.0085 34.5203 36.0452 34.5974C36.082 34.6745 36.1335 34.7436 36.1969 34.8008C36.2603 34.8579 36.3344 34.9021 36.4148 34.9306C36.4953 34.9592 36.5806 34.9716 36.6659 34.9672C36.7511 34.9628 36.8347 34.9417 36.9118 34.9049C36.9889 34.8682 37.058 34.8167 37.1152 34.7533C37.1724 34.6899 37.2165 34.6158 37.245 34.5354C37.2736 34.4549 37.286 34.3696 37.2816 34.2843L36.8178 25.4146C36.8077 25.2209 36.7329 25.0362 36.6054 24.89C36.5521 24.8244 36.4872 24.7692 36.414 24.727C36.2503 24.624 36.0569 24.5787 35.8644 24.5983L27.0284 25.4929Z"
                                    fill="black" />
                            </svg>
                        </div>
                        <div
                            class="text-start absolute bottom-8 left-8 font-sf_pro font-bold text-xl text-white uppercase w-3/5">
                            Swift And Efficient Air Cargo
                        </div>
                    </div>
                </div>
            </div>
            <!-- Service -->
            <div class="w-full pb-20">
                <h2 class="font-poppins font-semibold text-m_black-100 text-3xl uppercase text-center pb-10">Services We provide</h2>
                <div class="flex flex-col lg:flex-row items-center lg:items-start bg-white p-8">
                    <div class="lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
                        <img src="@/assets/imgs/provide.webp" alt="Warehouse"
                            class="rounded-lg shadow-lg object-cover w-full h-full" />
                    </div>

                    <div class="lg:w-1/2">
                        <ul class="space-y-4 text-gray-700">
                            <li v-for="(service, index) in services" :key="index" class="flex items-start">
                                <span class="text-red-500 mr-2">◆</span>
                                <p class="leading-relaxed">{{ service }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
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
        Footer
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