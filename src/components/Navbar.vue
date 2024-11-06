<template>
    <div class="container relative top-28 px-20">
        <div
            class="rounded-xl sticky right-0 left-0 z-50 flex items-center justify-between bg-white opacity-85 sm:px-10 px-4 py-5 -mt-10">
            <router-link to="/" class="cursor-pointer flex items-center">
                <div class="w-28 mr-4">
                    <img class="w-full h-full object-cover" src="/svgs/logo.svg">
                </div>
            </router-link>
            <div class="hidden lg:flex items-center">
                <router-link v-for="item in items" :key="item.id" :to="item.url"
                    class="font-poppins xl:text-lg text-base xl:mr-10 lg:mr-8 mr-6 cursor-pointer hover:text-red-500 duration-300"
                    :class="[active_page === item.url ? 'text-red-500 font-bold' : 'text-black font-medium']">
                    {{ item.name }}
                </router-link>
            </div>
            <div :class="{ 'hidden': !isOpen }"
                class="absolute top-[90px] left-0 w-full bg-white opacity-85 rounded-bl-xl rounded-br-xl">
                <div class="flex flex-col items-center">
                    <router-link v-for="item in pages" :key="item.id" :to="item.url"
                        class="font-sf_pro lg:text-lg text-base xl:mr-14 lg:mr-10 py-4 cursor-pointer hover:text-red-500 duration-300"
                        :class="[active_page === item.url ? 'text-red-500 font-bold' : 'text-black font-medium']">
                        {{ item.name }}
                    </router-link>
                </div>
            </div>
            <div class="flex items-center">
                <div @click="toogleLang" class="mr-4 cursor-pointer relative">
                    <img src="/svgs/lang.svg">
                    <div v-if="isLang" class="absolute bg-white h-fit top-14 -right-5 flex flex-col">
                        <span v-for="(item, index) in langs" :key="index" @click="updateLang(item)"
                            :class="[item === this.$i18n.locale ? 'text-red-500' : 'text-black']"
                            class="py-2 px-5 cursor-pointer hover:text-red-500 duration-200">{{ item
                            }}</span>
                    </div>
                </div>
                <div class="cursor-pointer lg:hidden block" @click="toggleMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" viewBox="0 0 24 24">
                        <path fill="#000" fill-rule="evenodd"
                            d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
                            clip-rule="evenodd">
                        </path>
                    </svg>
                </div>
                <router-link to="/contact"
                    class="hidden lg:block ml-2 cursor-pointer relative px-8 py-3 rounded-lg bg-m_red-100 text-white font-poppins font-bold text-base">
                    Contact us
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            items: [
                { id: 1, name: 'Home', url: '/' },
                { id: 2, name: 'About us', url: '/about' },
                { id: 3, name: 'Service', url: '/service' },
                { id: 4, name: 'Projects', url: '/projects' },
            ],
            pages: [
                { id: 1, name: 'Home', url: '/' },
                { id: 2, name: 'About us', url: '/about' },
                { id: 3, name: 'Service', url: '/service' },
                { id: 4, name: 'Projects', url: '/projects' },
                { id: 5, name: 'Contact us', url: '/contact' },
            ],
            isOpen: false,
            isLang: false,
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
    },
    props: {
        active_page: {
            type: String
        }
    }
}
</script>