<template>
    <div class="w-full relative">
        <Navbar />
        <!-- About us header -->
        <div class="w-full h-[600px] relative sm:top-[120px] top-[100px]">
            <div class="w-full h-full absolute left-0 right-0 -z-10">
                <img class="w-full h-full object-cover filter brightness-50" :src="about?.header_image">
            </div>
            <div class="flex flex-col space-y-6 pt-40 container">
                <h1 class="font-poppins font-bold xl:text-5xl lg:text-4xl text-3xl text-white">{{ $t('home.title2') }}
                </h1>
                <div class="flex items-center space-x-2 font-manjari text-white lg:text-lg text-base">
                    <router-link to="/">{{ $t('about.title1') }}</router-link>
                    <span>/</span>
                    <router-link to="/about">{{ $t('home.title2') }}</router-link>
                </div>
            </div>
        </div>
        <div class="w-full h-full">
            <!-- About us -->
            <div class="bg-white dark:bg-m_black-100">
                <div
                    class="container flex lg:flex-row flex-col lg:space-y-0 space-y-6 items-center lg:space-x-10 space-x-0 lg:py-20 py-10">
                    <div class="lg:w-[500px] w-full lg:h-[600px] h-full select-none">
                        <img class="w-full h-full object-cover rounded-lg" :src="about?.image">
                    </div>
                    <div class="lg:flex-1 w-full flex flex-col space-y-4">
                        <h3
                            class="font-poppins font-semibold uppercase lg:text-base text-sm text-m_red-100 border-b-2 border-m_red-100 w-fit">
                            {{ $t('home.title2') }}
                        </h3>
                        <h1 class="font-poppins font-bold lg:text-3xl text-2xl pb-3 dark:text-white">
                            {{ getLocalizedName(about) }}
                        </h1>
                        <p class="font-manjari font-normal lg:text-base text-sm text-m_gray-300">
                            {{ getLocalizedDesc(about) }}
                        </p>
                        <div class="flex flex-col space-y-4">
                            <div v-for="item in aboutItems" :key="item.id" class="p-6 flex items-start space-x-4 border"
                                style="border-color: rgba(0, 0, 0, 0.06);">
                                <div class="w-[70px] pt-1">
                                    <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.33337 0.333374C12.7518 0.333374 16.3334 3.91497 16.3334 8.33337C16.3334 12.7518 12.7518 16.3334 8.33337 16.3334C3.91497 16.3334 0.333374 12.7518 0.333374 8.33337C0.333374 3.91497 3.91497 0.333374 8.33337 0.333374ZM10.9094 5.90937L7.33337 9.48537L5.75737 7.90937C5.64363 7.80339 5.4932 7.74569 5.33776 7.74843C5.18232 7.75118 5.03401 7.81415 4.92408 7.92408C4.81415 8.03401 4.75118 8.18232 4.74843 8.33776C4.74569 8.4932 4.80339 8.64363 4.90937 8.75737L6.90937 10.7574C7.02187 10.8697 7.17437 10.9328 7.33337 10.9328C7.49237 10.9328 7.64487 10.8697 7.75737 10.7574L11.7574 6.75737C11.8163 6.70244 11.8636 6.6362 11.8964 6.5626C11.9292 6.48901 11.9468 6.40955 11.9482 6.32899C11.9497 6.24843 11.9348 6.16841 11.9047 6.0937C11.8745 6.01899 11.8296 5.95112 11.7726 5.89414C11.7156 5.83717 11.6478 5.79225 11.5731 5.76208C11.4983 5.7319 11.4183 5.71708 11.3378 5.7185C11.2572 5.71992 11.1777 5.73756 11.1041 5.77035C11.0305 5.80314 10.9643 5.85042 10.9094 5.90937Z"
                                            fill="#E92A34" />
                                    </svg>
                                </div>
                                <div class="flex flex-col space-y-4">
                                    <h3 class="font-poppins font-bold lg:text-lg text-base dark:text-white">
                                        {{ getLocalizedName(item) }}
                                    </h3>
                                    <p class="font-manjari font-normal lg:text-base text-sm text-m_gray-300">
                                        {{ getLocalizedDesc(item) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Certificate -->
            <div class="bg-m_gray-400 dark:bg-black">
                <div class="container py-20">
                    <h2
                        class="font-poppins font-semibold text-m_black-100 dark:text-white lg:text-4xl text-3xl text-center">
                        {{ $t('home.title9') }}
                    </h2>
                    <div class="mt-20">
                        <swiper :slidesPerView="3" :spaceBetween="30" :modules="modules" :speed="2000"
                            :breakpoints="{ '300': { slidesPerView: 1 }, '480': { slidesPerView: 2 }, '1024': { slidesPerView: 3 } }">
                            <swiper-slide v-for="item in licenses" :key="item.id"
                                class="flex flex-col space-y-8 py-12 bg-m_white-100 dark:bg-m_black-100 rounded-xl">
                                <img class="w-full h-full object-cover px-20" :src="item.image">
                                <p
                                    class="h-[60px] dark:text-white text-center px-10 font-poppins font-normal lg:text-lg text-base">
                                    {{ getLocalizedName(item) }}
                                </p>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
            <!-- Core values -->
            <div class="w-full py-20 dark:bg-m_black-100">
                <h2
                    class="font-poppins font-semibold text-m_black-100 dark:text-white text-center lg:text-3xl text-2xl pb-20">
                    {{ $t('about.title2') }}
                </h2>
                <div v-for="item in coreValue" :key="item.id" class="flex flex-wrap justify-center gap-10">
                    <div
                        class="sm:w-[300px] w-full h-[300px] sm:mx-0 mx-4 rounded-xl flex items-start flex-col justify-between group bg-m_white-300 hover:bg-m_red-100 duration-300 relative">
                        <img class="w-full h-full object-cover rounded-xl" :src="item?.image">
                        <!-- <div class="absolute top-5 left-5 rounded-full p-2 text-center w-fit bg-white">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.5368 19.1379C21.8524 18.4529 21.0526 17.8939 20.1743 17.4863C21.413 16.4828 22.2032 14.9516 22.2032 13.2344C22.2032 10.2047 19.6766 7.71914 16.6469 7.76563C13.6637 7.81211 11.2602 10.243 11.2602 13.2344C11.2602 14.9516 12.0532 16.4828 13.2891 17.4863C12.4106 17.8936 11.6108 18.4527 10.9266 19.1379C9.43366 20.6336 8.58601 22.6078 8.53132 24.7133C8.53059 24.7425 8.53571 24.7715 8.54637 24.7987C8.55704 24.8258 8.57304 24.8506 8.59342 24.8715C8.61381 24.8924 8.63817 24.909 8.66507 24.9203C8.69198 24.9317 8.72088 24.9375 8.75007 24.9375H10.2813C10.3989 24.9375 10.4973 24.8445 10.5001 24.727C10.552 23.141 11.1946 21.6562 12.3239 20.5297C12.9018 19.9487 13.5891 19.4882 14.3462 19.1746C15.1033 18.8611 15.915 18.7008 16.7344 18.7031C18.3997 18.7031 19.9665 19.3512 21.145 20.5297C22.2716 21.6562 22.9141 23.141 22.9688 24.727C22.9716 24.8445 23.07 24.9375 23.1876 24.9375H24.7188C24.748 24.9375 24.7769 24.9317 24.8038 24.9203C24.8307 24.909 24.8551 24.8924 24.8755 24.8715C24.8958 24.8506 24.9118 24.8258 24.9225 24.7987C24.9332 24.7715 24.9383 24.7425 24.9376 24.7133C24.8829 22.6078 24.0352 20.6336 22.5368 19.1379ZM16.7344 16.7344C15.7993 16.7344 14.9188 16.3707 14.2598 15.709C13.9291 15.3809 13.6679 14.9895 13.4917 14.5582C13.3155 14.127 13.228 13.6646 13.2344 13.1988C13.2426 12.302 13.6008 11.4352 14.227 10.7926C14.8833 10.1199 15.761 9.74531 16.6989 9.73438C17.6258 9.72617 18.5255 10.0871 19.1872 10.7352C19.8653 11.3996 20.2372 12.2883 20.2372 13.2344C20.2372 14.1695 19.8735 15.0473 19.2118 15.709C18.8871 16.0352 18.501 16.2938 18.0758 16.4698C17.6506 16.6458 17.1947 16.7357 16.7344 16.7344ZM9.88483 13.9563C9.86022 13.7184 9.84655 13.4777 9.84655 13.2344C9.84655 12.7996 9.88757 12.3758 9.96413 11.9629C9.98327 11.8645 9.93132 11.7633 9.84108 11.7223C9.46921 11.5555 9.12741 11.3258 8.8321 11.0359C8.48412 10.6985 8.2103 10.2923 8.0281 9.84316C7.8459 9.39401 7.75932 8.91182 7.7739 8.42734C7.79851 7.54961 8.15124 6.71563 8.76647 6.08672C9.44187 5.39492 10.3497 5.01758 11.3149 5.02852C12.1872 5.03672 13.0294 5.37305 13.6665 5.96914C13.8825 6.17149 14.0684 6.3957 14.2243 6.63633C14.279 6.72109 14.3856 6.75664 14.4786 6.72383C14.9598 6.55703 15.4684 6.43945 15.9907 6.38477C16.1438 6.36836 16.2313 6.2043 16.163 6.06758C15.2743 4.30938 13.4587 3.09531 11.3587 3.0625C8.32624 3.01602 5.79968 5.50156 5.79968 8.52852C5.79968 10.2457 6.58991 11.777 7.82858 12.7805C6.95905 13.1824 6.15788 13.7375 5.46335 14.432C3.96491 15.9277 3.11726 17.902 3.06257 20.0102C3.06184 20.0393 3.06696 20.0684 3.07762 20.0955C3.08829 20.1227 3.10429 20.1475 3.12467 20.1684C3.14506 20.1893 3.16942 20.2059 3.19632 20.2172C3.22323 20.2285 3.25213 20.2344 3.28132 20.2344H4.8153C4.93288 20.2344 5.03132 20.1414 5.03405 20.0238C5.08601 18.4379 5.72858 16.9531 6.85788 15.8266C7.66179 15.0227 8.64616 14.4648 9.72077 14.1941C9.82741 14.1668 9.89851 14.0656 9.88483 13.9563Z"
                                    class="fill-black group-hover:fill-m_red-100" />
                            </svg>
                        </div> -->
                        <p
                            class="absolute bottom-5 left-5 right-5 font-poppins font-medium lg:text-lg text-base text-start text-white group-hover:text-white group-hover:font-semibold">
                            {{ getLocalizedName(item) }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import api from '@/api/index'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
import 'swiper/css';
export default {
    name: "About",
    components: {
        Navbar,
        Footer,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Navigation, EffectFade, Autoplay],
            about: null,
            aboutItems: null,
            licenses: null,
            coreValue: null
        };
    },
    async created() {
        this.getAbout()
        this.getAboutItems()
        this.getLicenses()
        this.coreValues()
    },
    methods: {
        getLocalizedName(item) {
            const locale = this.$i18n.locale;
            if (locale === 'TM') return item?.name_tm;
            if (locale === 'RU') return item?.name_ru;
            if (locale === 'EN') return item?.name_en;
            return item?.name_tm;
        },
        getLocalizedDesc(item) {
            const locale = this.$i18n.locale;
            if (locale === 'TM') return item?.desc_tm;
            if (locale === 'RU') return item?.desc_ru;
            if (locale === 'EN') return item?.desc_en;
            return item?.desc_tm;
        },
        // ###############
        async getAbout() {
            const about = await api.get('/about/')
            this.about = about.data[0]
        },
        async getAboutItems() {
            const aboutItems = await api.get('/about-items/')
            this.aboutItems = aboutItems.data
        },
        async getLicenses() {
            const licenses = await api.get('/licenses/')
            this.licenses = licenses.data
        },
        async coreValues() {
            const coreValues = await api.get('/core-values/')
            this.coreValue = coreValues.data
        },
    },
}
</script>