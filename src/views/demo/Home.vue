<template>
    <div class="w-full relative">
        <Navbar />
        <div class="w-full absolute top-[120px] -z-10">
            <div class="w-full h-[600px] relative select-none">
                <swiper :slidesPerView="1" :modules="modules" :speed="2000" :loop="true"
                    :navigation="{ nextEl: '.next-slider', prevEl: '.prev-slider' }" class="w-full h-full">
                    <swiper-slide v-for="item in galleryItems" :key="item.id" class="w-full h-full">
                        <img :src="item.img" class="absolute w-full h-full object-cover">
                        <div class="container relative">
                            <div class="absolute top-40 w-1/2 h-full flex flex-col items-start space-y-6 text-white">
                                <h1 class="font-poppins font-bold lg:text-5xl md:text-4xl text-3xl !leading-[60px]"
                                    v-scroll-reveal="{ origin: 'bottom', distance: '100px', duration: 1000 }">
                                    {{ item.title }}
                                </h1>
                                <p class="font-manjari lg:text-lg text-sm"
                                    v-scroll-reveal="{ origin: 'bottom', distance: '100px', duration: 1500 }">
                                    {{ item.desc }}
                                </p>
                                <router-link v-scroll-reveal="{ origin: 'bottom', distance: '100px', duration: 2000 }"
                                    to="/about"
                                    class="font-manjari font-medium lg:text-lg text-sm hover:bg-m_red-100 duration-300 text-white py-4 px-10 bg-m_red-100">
                                    Learn more
                                </router-link>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <div
                    class="absolute z-10 top-1/2 left-6 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-m_gray-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-m_red-100 duration-300 prev-slider">
                    <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                            d="M5 12h14M5 12l4-4m-4 4 4 4" />
                    </svg>
                </div>
                <div
                    class="absolute z-10 top-1/2 right-6 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-m_gray-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-m_red-100 duration-300 next-slider">
                    <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                            d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../../components/demo/Navbar.vue';
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
import 'swiper/css';
import ScrollReveal from 'scrollreveal';

export default {
    name: "Home",
    components: {
        Navbar,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Navigation, EffectFade, Autoplay],
            galleryItems: [
                {
                    id: 1,
                    img: '/imgs/slide-1.webp',
                    title: 'Delivering seamless logistics solutions worldwide',
                    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quae.',
                },
                {
                    id: 2,
                    img: '/imgs/service1.webp',
                    title: 'Logistics solutions for international shipping',
                    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quae.',
                },
                {
                    id: 3,
                    img: '/imgs/slide-9.webp',
                    title: 'Delivering seamless logistics solutions worldwide',
                    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quae.',
                },
                {
                    id: 4,
                    img: '/imgs/slide-10.webp',
                    title: 'Logistics solutions for international shipping',
                    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quae.',
                },
            ],
        };
    },
    mounted() {
        // İlk yükleme sırasında ScrollReveal'ı başlat
        this.initScrollReveal();
    },
    methods: {
        initScrollReveal() {
            console.log('tetiklandı');
            // ScrollReveal'ı temizle ve yeniden başlat
            ScrollReveal().clean(); // Eski tanımlamaları temizle
            ScrollReveal().reveal("[v-scroll-reveal]");
        },
    },
};
</script>
