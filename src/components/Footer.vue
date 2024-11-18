<template>
    <div class="bg-m_white-200 dark:bg-black pt-20">
        <div class="container sm:py-16 py-10">
            <div class="flex lg:flex-row flex-col-reverse items-start justify-between rounded-xl">
                <div
                    class="lg:flex-1 w-full flex lg:items-start items-center lg:justify-start justify-center flex-col lg:mt-0 mt-10">
                    <router-link to="/" class="flex items-center space-x-4 cursor-pointer">
                        <img class="w-20" src="/svgs/logo.svg">
                    </router-link>
                    <p
                        class="sm:w-96 w-full font-sf_pro font-normal lg:text-base sm:text-sm text-xs lg:text-start text-center text-black dark:text-white my-10">
                        Türkmen Milli Logistik – {{ $t('footer.title1') }}
                    </p>
                    <!-- Social links -->
                    <div class="flex items-center space-x-2">
                        <div v-for="item in icons" :key="item.id" @mouseenter="hoveredIcon = item.id"
                            @mouseleave="hoveredIcon = null"
                            class="rounded-full cursor-pointer w-[30px] h-[30px] flex flex-col items-center justify-center bg-m_gray-400 dark:bg-m_black-100 hover:bg-m_red-100 hover:-mt-1 duration-300">
                            <a :href="item.url">
                                <component :is="item.icon" :color="hoveredIcon === item.id ? '#FFFFFF' : '#B3B3B3'" />
                            </a>
                        </div>
                    </div>
                    <div
                        class="w-full font-sf_pro font-normal lg:text-base sm:text-sm mobile:text-sm text-xs text-center text-m_gray-200 mt-24 lg:hidden block">
                        All Rights Reserved | <router-link to="/terms" class="underline text-m_red-100">Terms and
                            Conditions
                            |</router-link> <router-link to="/privacy" class="text-m_red-100 underline">Privacy
                            Policy</router-link> </div>
                </div>
                <div
                    class="w-full flex sm:flex-row flex-col items-start justify-evenly sm:space-x-10 sm:space-y-0 space-y-10 lg:pb-0 pb-10">
                    <div class="flex flex-col space-y-4">
                        <h4 class="font-poppins font-medium lg:text-base text-sm text-black dark:text-white pb-4 mb-4
                        relative inline-block after:w-[50px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-lg after:bg-m_black-100 after:opacity-50
                        ">{{ $t('footer.title6') }}</h4>
                        <p class="font-sf_pro font-normal lg:text-base text-sm text-m_gray-200 w-[300px]">
                            {{ $t('footer.title7') }}
                        </p>
                        <div class="flex w-full pt-5">
                            <input type="email" :placeholder="`${$t('footer.title8')}`"
                                class="font-sf_pro px-4 py-3 text-black dark:text-white placeholder-gray-300 dark:bg-m_black-100 rounded-l-sm border-none focus:outline-none" />
                            <button
                                class="flex items-center justify-center px-4 py-2 bg-m_red-100 rounded-r-sm hover:bg-m_red-400 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-col space-y-4">
                        <h4 class="font-poppins font-medium lg:text-base text-sm text-black dark:text-white pb-4 mb-4
                        relative inline-block after:w-[20px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-lg after:bg-m_black-100 after:opacity-50
                        ">{{ $t('footer.title2') }}</h4>
                        <ul class="flex flex-col space-y-4">
                            <li v-for="(item, index) in pages" :key="index"
                                class="font-sf_pro font-normal lg:text-base text-sm text-m_gray-200">
                                <router-link :to="item.url">{{ item.name }}</router-link>
                            </li>
                            <li class="font-sf_pro font-normal lg:text-base text-sm text-m_gray-200">
                                <router-link to="/contact">{{ $t('navbar.title1') }}</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col space-y-4">
                        <h4 class="font-poppins font-medium lg:text-base text-sm text-black dark:text-white pb-4 mb-4
                        relative inline-block after:w-[50px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-lg after:bg-m_black-100 after:opacity-50
                        ">{{ $t('navbar.title1') }}</h4>
                        <div class="flex flex-col space-y-4">
                            <div class="flex items-center space-x-4">
                                <div class="bg-m_gray-400 dark:bg-m_black-100 w-10 h-10 flex items-center justify-center rounded-full">
                                    <phone />
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <h4 class="font-poppins font-medium lg:text-sm text-xs text-black dark:text-white">{{
                            $t('footer.title3') }}</h4>
                                    <p class="font-sf_pro font-normal text-xs text-m_gray-200">+993 12 96-49-97</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="bg-m_gray-400 dark:bg-m_black-100 w-10 h-10 flex items-center justify-center rounded-full">
                                    <mail />
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <h4 class="font-poppins font-medium lg:text-sm text-xs text-black dark:text-white">{{
                            $t('footer.title4') }}</h4>
                                    <p class="font-sf_pro font-normal text-xs text-m_gray-200">example@gmail.com</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="bg-m_gray-400 dark:bg-m_black-100 w-10 h-10 flex items-center justify-center rounded-full">
                                    <pin />
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <h4 class="font-poppins font-medium lg:text-sm text-xs text-black dark:text-white">{{
                                        $t('footer.title5') }}</h4>
                                    <p class="font-sf_pro font-normal text-xs text-m_gray-200">744000, Ashgabat,
                                        Seyitnazar Seydi 70/2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="w-full font-sf_pro font-normal lg:text-base sm:text-sm mobile:text-sm text-xs text-center text-m_gray-200 mt-24 mr-10 lg:block hidden">
                All Rights Reserved | <router-link to="/terms" class="underline text-m_red-100">Terms and Conditions
                    |</router-link> <router-link to="/privacy" class="text-m_red-100 underline">Privacy
                    Policy</router-link> </div>
        </div>
    </div>
</template>

<script>
import { markRaw } from 'vue';
import phone from './icons/phone.vue';
import mail from './icons/mail.vue';
import pin from './icons/pin.vue';
import instagram from './icons/instagram.vue';
import facebook from './icons/facebook.vue';
import youtube from './icons/youtube.vue';
import linkedin from './icons/linkedin.vue';
import { pages } from '@/data/index'
const nonReactivePhoneIcon = markRaw(phone)
const nonReactiveMailIcon = markRaw(mail)
const nonReactivePinIcon = markRaw(pin)
const nonReactiveInstagramIcon = markRaw(instagram)
const nonReactiveFacebookIcon = markRaw(facebook)
const nonReactiveYoutubeIcon = markRaw(youtube)
const nonReactiveLinkedinIcon = markRaw(linkedin)
export default {
    name: "Footer",
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
            pages: null,
            hoveredIcon: null,
            icons: [
                { id: 1, icon: instagram, url: '/' },
                { id: 2, icon: facebook, url: '/' },
                { id: 3, icon: youtube, url: '/' },
                { id: 4, icon: linkedin, url: '/' },
            ],
        }
    },
    watch: {
        '$i18n.locale': {
            immediate: true,
            handler() {
                this.pages = pages[this.$i18n.locale]
            }
        }
    }
}
</script>