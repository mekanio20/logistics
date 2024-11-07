<template>
    <div class="container flex items-center justify-between mt-4 -mb-[70px]">
        <div class="flex items-center space-x-4">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_64_354)">
                    <path
                        d="M8.77917 2.91671C9.34893 3.02787 9.87256 3.30652 10.283 3.717C10.6935 4.12748 10.9722 4.65111 11.0833 5.22087M8.77917 0.583374C9.96291 0.714878 11.0668 1.24498 11.9095 2.08663C12.7522 2.92828 13.2837 4.03146 13.4167 5.21504M12.8333 9.87004V11.62C12.834 11.7825 12.8007 11.9433 12.7356 12.0922C12.6705 12.241 12.5751 12.3746 12.4554 12.4845C12.3357 12.5943 12.1943 12.6779 12.0404 12.73C11.8865 12.782 11.7235 12.8013 11.5617 12.7867C9.76666 12.5917 8.04242 11.9783 6.5275 10.9959C5.11807 10.1003 3.92311 8.90531 3.0275 7.49587C2.04166 5.97408 1.42814 4.24145 1.23667 2.43837C1.22209 2.27706 1.24126 2.11448 1.29296 1.96099C1.34466 1.80749 1.42775 1.66644 1.53695 1.54682C1.64615 1.4272 1.77905 1.33162 1.92721 1.26618C2.07537 1.20074 2.23553 1.16686 2.3975 1.16671H4.1475C4.4306 1.16392 4.70505 1.26417 4.9197 1.44877C5.13435 1.63337 5.27455 1.88972 5.31417 2.17004C5.38803 2.73008 5.52501 3.27996 5.7225 3.80921C5.80099 4.018 5.81797 4.24491 5.77145 4.46305C5.72492 4.6812 5.61684 4.88144 5.46 5.04004L4.71917 5.78087C5.54958 7.24128 6.75877 8.45047 8.21917 9.28087L8.96 8.54004C9.1186 8.3832 9.31884 8.27512 9.53699 8.22859C9.75514 8.18207 9.98205 8.19906 10.1908 8.27754C10.7201 8.47503 11.27 8.61201 11.83 8.68587C12.1134 8.72585 12.3722 8.86858 12.5571 9.08691C12.7421 9.30525 12.8404 9.58396 12.8333 9.87004Z"
                        stroke="#E92A34" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_64_354">
                        <rect width="14" height="14" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <p class="font-sf_pro font-normal text-base text-m_gray-200">+993 12 96-49-97</p>
            <p class="font-sf_pro font-normal text-base text-m_gray-200">+993 12 96-49-97</p>
        </div>
        <div class="flex items-center space-x-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.25 5.83337C12.25 9.91671 7 13.4167 7 13.4167C7 13.4167 1.75 9.91671 1.75 5.83337C1.75 4.44099 2.30312 3.10563 3.28769 2.12106C4.27226 1.1365 5.60761 0.583374 7 0.583374C8.39239 0.583374 9.72774 1.1365 10.7123 2.12106C11.6969 3.10563 12.25 4.44099 12.25 5.83337Z"
                    stroke="#E92A34" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M7 7.58337C7.9665 7.58337 8.75 6.79987 8.75 5.83337C8.75 4.86688 7.9665 4.08337 7 4.08337C6.0335 4.08337 5.25 4.86688 5.25 5.83337C5.25 6.79987 6.0335 7.58337 7 7.58337Z"
                    stroke="#E92A34" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p class="font-sf_pro font-normal text-base text-m_gray-200">744000, Ashgabat, Seyitnazar Seydi 70/2</p>
        </div>
    </div>
    <div class="container relative top-28 px-20 select-none">
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
                    class="hidden lg:block ml-2 cursor-pointer z-50 px-8 py-3 rounded-lg bg-m_red-100 text-white font-poppins font-bold text-base">
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
                // { id: 4, name: 'Projects', url: '/projects' },
            ],
            pages: [
                { id: 1, name: 'Home', url: '/' },
                { id: 2, name: 'About us', url: '/about' },
                { id: 3, name: 'Service', url: '/service' },
                // { id: 4, name: 'Projects', url: '/projects' },
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