<template>
    <div class="w-full">
        <Navbar active_page="/" />
        <div class="container">
            <!-- BIG BANNER -->
            <div class="relative">
                <swiper :slidesPerView="1" :modules="modules" effect="fade" :speed="1000" :loop="true"
                    :autoplay="{ delay: 5000, disableOnInteraction: alse, }" class="w-full h-screen">
                    <swiper-slide v-for="item in images" :key="item" class="!w-full !h-full">
                        <img :src="item" class="w-full h-full object-cover">
                    </swiper-slide>
                </swiper>
                <h1
                    class="hidden lg:block absolute z-10 bottom-12 left-12 font-sf_pro font-bold xl:text-6xl lg:text-5xl text-4xl text-white lg:w-8/12 leading-[70px]">
                    Turkmen Milli Logistik – Delivering seamless logistics solutions worldwide
                </h1>
            </div>
            <!-- OUR SERVICES -->
            <div class="w-full text-center py-20">
                <h2 class="font-poppins font-semibold text-m_black-100 text-3xl">Our Services</h2>
                <div class="pt-20 flex items-start gap-x-6">
                    <div class="rounded-lg relative overflow-hidden">
                        <img class="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                            src="@/assets/imgs/service1.webp">
                        <div class="absolute top-4 right-4 cursor-pointer">
                            <svg width="61" height="61" viewBox="0 0 61 61" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.9" cx="30.7734" cy="30.7734" r="21.2756"
                                    transform="rotate(40.6108 30.7734 30.7734)" fill="white" />
                                <path
                                    d="M27.0284 25.4929C26.8602 25.5143 26.707 25.6006 26.6015 25.7333C26.496 25.866 26.4465 26.0347 26.4636 26.2034C26.4808 26.3721 26.5631 26.5275 26.6931 26.6363C26.8232 26.7451 26.9905 26.7989 27.1596 26.786L34.6043 26.032L26.2913 35.7273C26.1791 35.8582 26.1234 36.0283 26.1366 36.2002C26.1498 36.3721 26.2308 36.5317 26.3617 36.6439C26.4926 36.7562 26.6627 36.8118 26.8346 36.7986C27.0065 36.7854 27.1661 36.7045 27.2783 36.5736L35.5913 26.8783L35.983 34.3514C35.9874 34.4367 36.0085 34.5203 36.0452 34.5974C36.082 34.6745 36.1335 34.7436 36.1969 34.8008C36.2603 34.8579 36.3344 34.9021 36.4148 34.9306C36.4953 34.9592 36.5806 34.9716 36.6659 34.9672C36.7511 34.9628 36.8347 34.9417 36.9118 34.9049C36.9889 34.8682 37.058 34.8167 37.1152 34.7533C37.1724 34.6899 37.2165 34.6158 37.245 34.5354C37.2736 34.4549 37.286 34.3696 37.2816 34.2843L36.8178 25.4146C36.8077 25.2209 36.7329 25.0362 36.6054 24.89C36.5521 24.8244 36.4872 24.7692 36.414 24.727C36.2503 24.624 36.0569 24.5787 35.8644 24.5983L27.0284 25.4929Z"
                                    fill="black" />
                            </svg>
                        </div>
                        <div class="text-start absolute bottom-8 left-8 font-sf_pro font-bold text-xl text-white w-1/2">
                            Reliable Sea Freight
                        </div>
                    </div>
                    <div class="rounded-lg relative overflow-hidden">
                        <img class="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                            src="@/assets/imgs/service2.webp">
                        <div class="absolute top-4 right-4 cursor-pointer">
                            <svg width="61" height="61" viewBox="0 0 61 61" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.9" cx="30.7734" cy="30.7734" r="21.2756"
                                    transform="rotate(40.6108 30.7734 30.7734)" fill="white" />
                                <path
                                    d="M27.0284 25.4929C26.8602 25.5143 26.707 25.6006 26.6015 25.7333C26.496 25.866 26.4465 26.0347 26.4636 26.2034C26.4808 26.3721 26.5631 26.5275 26.6931 26.6363C26.8232 26.7451 26.9905 26.7989 27.1596 26.786L34.6043 26.032L26.2913 35.7273C26.1791 35.8582 26.1234 36.0283 26.1366 36.2002C26.1498 36.3721 26.2308 36.5317 26.3617 36.6439C26.4926 36.7562 26.6627 36.8118 26.8346 36.7986C27.0065 36.7854 27.1661 36.7045 27.2783 36.5736L35.5913 26.8783L35.983 34.3514C35.9874 34.4367 36.0085 34.5203 36.0452 34.5974C36.082 34.6745 36.1335 34.7436 36.1969 34.8008C36.2603 34.8579 36.3344 34.9021 36.4148 34.9306C36.4953 34.9592 36.5806 34.9716 36.6659 34.9672C36.7511 34.9628 36.8347 34.9417 36.9118 34.9049C36.9889 34.8682 37.058 34.8167 37.1152 34.7533C37.1724 34.6899 37.2165 34.6158 37.245 34.5354C37.2736 34.4549 37.286 34.3696 37.2816 34.2843L36.8178 25.4146C36.8077 25.2209 36.7329 25.0362 36.6054 24.89C36.5521 24.8244 36.4872 24.7692 36.414 24.727C36.2503 24.624 36.0569 24.5787 35.8644 24.5983L27.0284 25.4929Z"
                                    fill="black" />
                            </svg>
                        </div>
                        <div class="text-start absolute bottom-8 left-8 font-sf_pro font-bold text-xl text-white w-1/2">
                            Ground Transportation
                        </div>
                    </div>
                    <div class="rounded-lg relative overflow-hidden">
                        <img class="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                            src="@/assets/imgs/service3.webp">
                        <div class="absolute top-4 right-4 cursor-pointer">
                            <svg width="61" height="61" viewBox="0 0 61 61" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.9" cx="30.7734" cy="30.7734" r="21.2756"
                                    transform="rotate(40.6108 30.7734 30.7734)" fill="white" />
                                <path
                                    d="M27.0284 25.4929C26.8602 25.5143 26.707 25.6006 26.6015 25.7333C26.496 25.866 26.4465 26.0347 26.4636 26.2034C26.4808 26.3721 26.5631 26.5275 26.6931 26.6363C26.8232 26.7451 26.9905 26.7989 27.1596 26.786L34.6043 26.032L26.2913 35.7273C26.1791 35.8582 26.1234 36.0283 26.1366 36.2002C26.1498 36.3721 26.2308 36.5317 26.3617 36.6439C26.4926 36.7562 26.6627 36.8118 26.8346 36.7986C27.0065 36.7854 27.1661 36.7045 27.2783 36.5736L35.5913 26.8783L35.983 34.3514C35.9874 34.4367 36.0085 34.5203 36.0452 34.5974C36.082 34.6745 36.1335 34.7436 36.1969 34.8008C36.2603 34.8579 36.3344 34.9021 36.4148 34.9306C36.4953 34.9592 36.5806 34.9716 36.6659 34.9672C36.7511 34.9628 36.8347 34.9417 36.9118 34.9049C36.9889 34.8682 37.058 34.8167 37.1152 34.7533C37.1724 34.6899 37.2165 34.6158 37.245 34.5354C37.2736 34.4549 37.286 34.3696 37.2816 34.2843L36.8178 25.4146C36.8077 25.2209 36.7329 25.0362 36.6054 24.89C36.5521 24.8244 36.4872 24.7692 36.414 24.727C36.2503 24.624 36.0569 24.5787 35.8644 24.5983L27.0284 25.4929Z"
                                    fill="black" />
                            </svg>
                        </div>
                        <div class="text-start absolute bottom-8 left-8 font-sf_pro font-bold text-xl text-white w-3/5">
                            Swift And Efficient Air Cargo
                        </div>
                    </div>
                </div>
            </div>
            <!-- STATISTC -->
            <div class="grid grid-cols-4 gap-x-6">
                <div class="bg-m_white-100 rounded-lg p-10 flex items-center flex-col space-y-4">
                    <AnimatedCounter class="font-poppins font-semibold text-4xl" :finalValue="12" :start-value="0"
                        :speed="50" :plus="true"></AnimatedCounter>
                    <p class="font-poppins font-medium text-lg text-m_gray-100">Years of service</p>
                </div>
                <div class="bg-m_white-100 rounded-lg p-10 flex items-center flex-col space-y-4">
                    <AnimatedCounter class="font-poppins font-semibold text-4xl tracking-tighter" :finalValue="20"
                        :start-value="0" :speed="50" :currency="`K`"></AnimatedCounter>
                    <p class="font-poppins font-medium text-lg text-m_gray-100">Cargo delivered</p>
                </div>
                <div class="bg-m_white-100 rounded-lg p-10 flex items-center flex-col space-y-4">
                    <AnimatedCounter class="font-poppins font-semibold text-4xl" :finalValue="500" :start-value="100"
                        :speed="1"></AnimatedCounter>
                    <p class="font-poppins font-medium text-lg text-m_gray-100">Total cargo</p>
                </div>
                <div class="bg-m_white-100 rounded-lg p-10 flex items-center flex-col space-y-4">
                    <AnimatedCounter class="font-poppins font-semibold text-4xl" :finalValue="12" :start-value="0"
                        :speed="50" :plus="true"></AnimatedCounter>
                    <p class="font-poppins font-medium text-lg text-m_gray-100">Years of service</p>
                </div>
            </div>
            <!-- ABOUT US -->
            <div class="flex items-center py-20">
                <div class="flex-1 mr-28">
                    <img src="@/assets/imgs/about.webp">
                </div>
                <div class="flex-1 flex items-start flex-col space-y-8">
                    <h3 class="font-poppins font-medium text-xl text-m_red-100">About us</h3>
                    <h2 class="font-poppins font-semibold text-4xl">Главный принцип нашей работы –
                        Прозрачность и надежность</h2>
                    <p class="font-poppins font-normal text-m_gray-200 text-lg">Компания имеет прямые договора с
                        Агентствами железнодорожного, автомо- бильного, морского и
                        речного транспорта Туркменистана. Также налажено долгос- рочное сотрудничество с крупнейшими
                        собственниками подвижного состава и экспедиторами стран СНГ, Средиземного моря и стран Балтии.
                    </p>
                    <a
                        class="flex items-center space-x-4 bg-m_red-100 px-10 py-3 rounded-xl sm:mt-14 mt-10 cursor-pointer">
                        <span class="font-poppins font-medium lg:text-lg sm:text-base text-sm text-white">Read
                            more</span>
                        <svg class="sm:w-[15px] w-[10px]" viewBox="0 0 22 18" fill="white"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.3025 0.269824C12.2094 0.182232 12.0989 0.11326 11.9775 0.0669526C11.856 0.0206449 11.7262 -0.00206728 11.5954 0.000147736C11.4647 0.00236275 11.3357 0.0294604 11.2161 0.079852C11.0965 0.130244 10.9886 0.202915 10.8988 0.293607C10.809 0.384299 10.7391 0.491186 10.6931 0.608003C10.6471 0.72482 10.6261 0.849216 10.6312 0.9739C10.6362 1.09858 10.6674 1.22104 10.7227 1.33411C10.778 1.44717 10.8564 1.54856 10.9533 1.63232L17.8159 7.82608L1.14861 7.82608C0.888054 7.82608 0.638166 7.92485 0.453924 8.10066C0.269682 8.27648 0.166178 8.51493 0.166178 8.76357C0.166178 9.01222 0.269682 9.25067 0.453924 9.42649C0.638166 9.6023 0.888054 9.70107 1.14861 9.70107L17.8186 9.70107L10.9533 15.8973C10.8564 15.9811 10.778 16.0825 10.7227 16.1955C10.6674 16.3086 10.6362 16.4311 10.6312 16.5557C10.6261 16.6804 10.6471 16.8048 10.6931 16.9216C10.7391 17.0385 10.809 17.1453 10.8988 17.236C10.9886 17.3267 11.0965 17.3994 11.2161 17.4498C11.3357 17.5002 11.4647 17.5273 11.5954 17.5295C11.7262 17.5317 11.856 17.509 11.9775 17.4627C12.0989 17.4164 12.2094 17.3474 12.3025 17.2598L20.7095 9.67232C20.9183 9.48399 21.0564 9.2354 21.1025 8.96482C21.1334 8.82965 21.1325 8.68963 21.0999 8.55482C21.0523 8.28814 20.9153 8.04339 20.7095 7.85732L12.3025 0.269824Z"
                                fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
            <!-- Certificates -->
            <div class="w-full text-center py-20">
                <h2 class="font-poppins font-semibold text-m_black-100 text-3xl">Licenses and certificates
                </h2>
                <div class="flex items-center gap-x-8 rounded-lg py-20">
                    <div class="flex flex-col space-y-8 py-12 px-20 bg-m_white-100 rounded-xl">
                        <img class="w-full h-full object-cover" src="@/assets/imgs/cert1.webp">
                        <p class="font-poppins font-normal text-lg">Лицензия на морские и речные перевозки</p>
                    </div>
                    <div class="flex flex-col space-y-8 py-12 px-20 bg-m_white-100 rounded-xl">
                        <img class="w-full h-full object-cover" src="@/assets/imgs/cert2.webp">
                        <p class="font-poppins font-normal text-lg">Лицензия на морские автомобильные перевозки</p>
                    </div>
                    <div class="flex flex-col space-y-8 py-12 px-20 bg-m_white-100 rounded-xl">
                        <img class="w-full h-full object-cover" src="@/assets/imgs/cert3.webp">
                        <p class="font-poppins font-normal text-lg">Сертификат ISO 9001:2015</p>
                    </div>
                </div>
            </div>
            <!-- Cargo -->
            <div class="w-full text-center pb-10">
                <h2 class="font-poppins font-semibold text-m_black-100 text-3xl">Main types of cargo
                    transported</h2>
                <div class="grid grid-cols-4 gap-6 py-20">
                    <div class="rounded-xl relative overflow-hidden">
                        <img class="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                            src="@/assets/imgs/cargo1.webp">
                        <p
                            class="text-start font-sf_pro font-medium text-white text-xl absolute bottom-10 left-8 w-4/5">
                            Бытовая и вычислительная техника</p>
                    </div>
                    <div class="rounded-xl relative overflow-hidden">
                        <img class="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                            src="@/assets/imgs/cargo2.webp">
                        <p
                            class="text-start font-sf_pro font-medium text-white text-xl absolute bottom-10 left-8 w-4/5">
                            Медицина и фармацевтика</p>
                    </div>
                    <div class="rounded-xl relative overflow-hidden">
                        <img class="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                            src="@/assets/imgs/cargo3.webp">
                        <p
                            class="text-start font-sf_pro font-medium text-white text-xl absolute bottom-10 left-8 w-4/5">
                            Производственные линии и оборудования</p>
                    </div>
                    <div class="rounded-xl relative overflow-hidden">
                        <img class="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                            src="@/assets/imgs/cargo4.webp">
                        <p
                            class="text-start font-sf_pro font-medium text-white text-xl absolute bottom-10 left-8 w-4/5">
                            Семена и растения</p>
                    </div>
                    <div class="rounded-xl relative overflow-hidden">
                        <img class="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                            src="@/assets/imgs/cargo5.webp">
                        <p
                            class="text-start font-sf_pro font-medium text-white text-xl absolute bottom-10 left-8 w-4/5">
                            Сельскохозяйственная техника</p>
                    </div>
                    <div class="rounded-xl relative overflow-hidden">
                        <img class="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                            src="@/assets/imgs/cargo6.webp">
                        <p
                            class="text-start font-sf_pro font-medium text-white text-xl absolute bottom-10 left-8 w-4/5">
                            Химическая промышленность (сера, карбамид, полипропилен)</p>
                    </div>
                    <div class="rounded-xl relative overflow-hidden">
                        <img class="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                            src="@/assets/imgs/cargo7.webp">
                        <p
                            class="text-start font-sf_pro font-medium text-white text-xl absolute bottom-10 left-8 w-4/5">
                            Текстиль</p>
                    </div>
                    <div class="rounded-xl relative overflow-hidden">
                        <img class="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                            src="@/assets/imgs/cargo8.webp">
                        <p
                            class="text-start font-sf_pro font-medium text-white text-xl absolute bottom-10 left-8 w-4/5">
                            Продукты питания</p>
                    </div>
                </div>
            </div>
            <!-- Countries -->
            <div class="w-full overflow-x-hidden pb-20">
                <h2 v-scroll-reveal="{ origin: 'bottom', distance: '50px', duration: 1000 }"
                    class="font-poppins font-semibold lg:text-3xl sm:text-2xl text-xl sm:!leading-[55px] text-black text-center pb-10">
                    Providing Services Across 4 Countries
                </h2>
                <swiper :slides-per-view="slidesPerView" :breakpoints="country_breakpoints" :spaceBetween="20"
                    :modules="modules" :autoplay="{ delay: 1000, disableOnInteraction: false, }" :speed="1000"
                    class="w-full my-10">
                    <swiper-slide v-for="item in countries" :key="item.id">
                        <div class="bg-m_white-300 rounded-xl flex flex-col items-center py-10">
                            <div class="w-28 h-28">
                                <img :src="item.flag" class="w-full h-full object-cover">
                            </div>
                            <p class="font-poppins font-semibold lg:text-2xl text-xl text-black mt-10">{{ item.name }}
                            </p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <!-- Service -->
            <div class="w-full pb-20">
                <h2 class="font-poppins font-semibold text-m_black-100 text-3xl text-center pb-10">Services We provide
                </h2>
                <div class="flex flex-col lg:flex-row items-center bg-white p-8">
                    <div class="lg:w-1/2 h-[585px] mb-16 lg:mb-0 lg:mr-16">
                        <img src="@/assets/imgs/provide.webp" alt="Warehouse"
                            class="rounded-lg shadow-lg object-cover w-full h-full" />
                    </div>
                    <div class="lg:w-1/2">
                        <ul class="space-y-4 text-gray-700">
                            <li v-for="(service, index) in services" :key="index" class="flex items-start">
                                <span class="text-red-500 mr-2">◆</span>
                                <p class="leading-relaxed font-poppins font-normal text-xl">{{ service }}</p>
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
import AnimatedCounter from '@/components/AnimatedCounter.vue';
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
export default {
    name: "Home",
    components: {
        Navbar,
        Footer,
        AnimatedCounter,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            slidesPerView: null,
            modules: [Navigation, EffectFade, Autoplay],
            images: ['/imgs/slider-1.webp', '/imgs/slider-2.webp', '/imgs/slider-3.webp'],
            countries: [
                {
                    id: 1,
                    name: "Turkey",
                    flag: "/src/assets/imgs/turkey.png"
                },
                {
                    id: 2,
                    name: "Russia",
                    flag: "/src/assets/imgs/russia.png"
                },
                {
                    id: 3,
                    name: "China",
                    flag: "/src/assets/imgs/china.png"
                },
                {
                    id: 4,
                    name: "Dubai",
                    flag: "/svgs/dubay.svg"
                },
            ],
            country_breakpoints: {
                300: { slidesPerView: 1 },
                500: { slidesPerView: 2 },
                950: { slidesPerView: 2.8 },
                1100: { slidesPerView: 3.4 },
                1200: { slidesPerView: 4 }
            },
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