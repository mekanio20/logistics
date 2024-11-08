<template>
    <div class="container">
        <!-- Header -->
        <header class="flex items-center justify-between py-5">
            <!-- Contact header -->
            <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-2">
                    <phone />
                    <p class="font-sf_pro font-normal text-sm text-m_gray-200">+993 12 96-49-97</p>
                </div>
                <div class="flex items-center space-x-2">
                    <mail />
                    <p class="font-sf_pro font-normal text-sm text-m_gray-200">mail@logistics.tm </p>
                </div>
                <div class="flex items-center space-x-2">
                    <pin />
                    <p class="font-sf_pro font-normal text-sm text-m_gray-200">744000, Ashgabat, Seyitnazar Seydi 70/2
                    </p>
                </div>
            </div>
            <div class="flex items-center space-x-6">
                <!-- Social links -->
                <div class="flex items-center space-x-2">
                    <div v-for="item in icons" :key="item.id"
                        @mouseenter="hoveredIcon = item.id"
                        @mouseleave="hoveredIcon = null"
                        class="rounded-full p-2 bg-m_gray-400 hover:bg-m_red-100 hover:-mt-2 duration-300">
                        <a :href="item.url">
                            <component :is="item.icon" :color="hoveredIcon === item.id ? '#FFFFFF' : '#B3B3B3'" />
                        </a>
                    </div>
                </div>
                <!-- Language -->
                <div class="flex items-center space-x-2 cursor-pointer select-none">
                    <svg class="w-[14px]" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.00004 13.4167C10.5438 13.4167 13.4167 10.5438 13.4167 7.00004C13.4167 3.45629 10.5438 0.583374 7.00004 0.583374M7.00004 13.4167C3.45629 13.4167 0.583374 10.5438 0.583374 7.00004C0.583374 3.45629 3.45629 0.583374 7.00004 0.583374M7.00004 13.4167C8.75004 13.4167 9.33337 10.5 9.33337 7.00004C9.33337 3.50004 8.75004 0.583374 7.00004 0.583374M7.00004 13.4167C5.25004 13.4167 4.66671 10.5 4.66671 7.00004C4.66671 3.50004 5.25004 0.583374 7.00004 0.583374M1.16671 9.33337H12.8334M1.16671 4.66671H12.8334"
                            stroke="#E92A34" />
                    </svg>
                    <p class="font-sf_pro font-normal text-sm text-m_gray-200">English</p>
                    <svg class="w-[14px]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6L8 10L12 6" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </header>
        <!-- Navbar -->
        <nav class="flex items-center select-none">
            <div class="flex-1 flex items-center justify-between bg-m_red-100 pl-4">
                <!-- Logo -->
                <router-link to="/">
                    <img src="/svgs/white-logo.svg">
                </router-link>
                <!-- Pages -->
                <div class="flex space-x-10 items-center pt-8 pb-7 px-5">
                    <router-link v-for="item in pages" :key="item.id" :to="item.url"
                        class="font-sf_pro font-medium lg:text-base text-sm cursor-pointer text-white pb-1 hover_effect"
                        :class="{ 'active_page': $route.path === item.url }">
                        {{ item.name }}
                    </router-link>
                </div>
            </div>
            <router-link to="/contact"
                class="font-sf_pro font-normal lg:text-base text-sm bg-m_red-400 hover:opacity-80 duration-300 text-white py-8 px-10">
                Contact us
            </router-link>
        </nav>
    </div>
</template>

<script>
import phone from './icons/phone.vue';
import mail from './icons/mail.vue';
import pin from './icons/pin.vue';
import instagram from './icons/instagram.vue';
import facebook from './icons/facebook.vue';
import youtube from './icons/youtube.vue';
import linkedin from './icons/linkedin.vue';
export default {
    name: "Navbar",
    components: {
        phone,
        mail,
        pin,
        instagram,
        facebook,
        youtube,
        linkedin
    },
    data() {
        return {
            items: [
                { id: 1, name: 'Home', url: '/' },
                { id: 2, name: 'About us', url: '/about' },
                { id: 3, name: 'Service', url: '/service' },
            ],
            pages: [
                { id: 1, name: 'Home', url: '/' },
                { id: 2, name: 'About us', url: '/about' },
                { id: 3, name: 'Service', url: '/service' },
                // { id: 4, name: 'Contact us', url: '/contact' },
            ],
            icons: [
                { id: 1, icon: instagram, url: '/' },
                { id: 2, icon: facebook, url: '/' },
                { id: 3, icon: youtube, url: '/' },
                { id: 4, icon: linkedin, url: '/' },
            ],
            isOpen: false,
            isLang: false,
            hoveredIcon: null,
            langs: ['TM', 'EN', 'RU']
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
        toogleLang() {
            this.isLang = !this.isLang;
        },
        updateLang(lang) {
            localStorage.setItem('lang', lang)
            this.$i18n.locale = lang
        }
    }
}
</script>