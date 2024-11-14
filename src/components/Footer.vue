<template>
    <div class="bg-m_white-200">
        <div class="container sm:py-16 py-10">
            <div class="flex lg:flex-row flex-col-reverse items-start justify-between rounded-xl">
                <div
                    class="lg:flex-1 w-full flex lg:items-start items-center lg:justify-start justify-center flex-col lg:mt-0 mt-10">
                    <router-link to="/" class="flex items-center space-x-4 cursor-pointer">
                        <img class="w-20" src="/svgs/logo.svg">
                    </router-link>
                    <p
                        class="sm:w-96 w-full font-sf_pro font-normal lg:text-lg sm:text-base mobile:text-sm text-xs lg:text-start text-center text-black my-10">
                        Turkmen Milli Logistik – Delivering seamless logistics solutions worldwide
                    </p>
                    <div class="flex items-center space-x-6">
                        <router-link v-for="item in icons" :key="item.id" :to="item.url">
                            <img :src="item.icon">
                        </router-link>
                    </div>
                    <div
                        class="w-full font-sf_pro font-normal lg:text-base sm:text-sm mobile:text-sm text-xs text-center text-m_gray-200 mt-24 lg:hidden block">
                        All Rights Reserved | <router-link to="/terms" class="underline text-m_red-100">Terms and
                            Conditions
                            |</router-link> <router-link to="/privacy" class="text-m_red-100 underline">Privacy
                            Policy</router-link> </div>
                </div>
                <div
                    class="w-full flex sm:flex-row flex-col items-start justify-evenly sm:space-x-20 sm:space-y-0 space-y-10 lg:pb-0 pb-10">
                    <div class="flex flex-col space-y-4">
                        <h4 class="font-poppins font-medium lg:text-base text-sm text-black pb-4 mb-4
                        relative inline-block after:w-[20px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-lg after:bg-m_black-100 after:opacity-50
                        ">Pages</h4>
                        <ul class="flex flex-col space-y-4">
                            <li class="font-sf_pro font-normal lg:text-base text-sm text-m_gray-200">
                                <router-link to="/">Home</router-link>
                            </li>
                            <li class="font-sf_pro font-normal lg:text-base text-sm text-m_gray-200">
                                <router-link to="/service">Services</router-link>
                            </li>
                            <li class="font-sf_pro font-normal lg:text-base text-sm text-m_gray-200">
                                <router-link to="/about">About us</router-link>
                            </li>
                            <li class="font-sf_pro font-normal lg:text-base text-sm text-m_gray-200">
                                <router-link to="/contact">Contact us</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col space-y-4">
                        <h4 class="font-poppins font-medium lg:text-base text-sm text-black pb-4 mb-4
                        relative inline-block after:w-[50px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-lg after:bg-m_black-100 after:opacity-50
                        ">Contact us</h4>
                        <div class="flex flex-col space-y-4">
                            <div class="flex items-center space-x-4">
                                <div class="bg-m_gray-400 w-10 h-10 flex items-center justify-center rounded-full">
                                    <phone />
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <h4 class="font-poppins font-medium lg:text-sm text-xs text-black">Call now</h4>
                                    <p class="font-sf_pro font-normal text-xs text-m_gray-200">+993 12 96-49-97</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="bg-m_gray-400 w-10 h-10 flex items-center justify-center rounded-full">
                                    <mail />
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <h4 class="font-poppins font-medium lg:text-sm text-xs text-black">Email</h4>
                                    <p class="font-sf_pro font-normal text-xs text-m_gray-200">example@gmail.com</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="bg-m_gray-400 w-10 h-10 flex items-center justify-center rounded-full">
                                    <pin />
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <h4 class="font-poppins font-medium lg:text-sm text-xs text-black">Location</h4>
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
            icons: [
                { id: 1, icon: '/svgs/instagram.svg', url: '/' },
                { id: 2, icon: '/svgs/facebook.svg', url: '/' },
                { id: 3, icon: '/svgs/youtube.svg', url: '/' },
                { id: 4, icon: '/svgs/linkedIn.svg', url: '/' },
            ]
        }
    }
}
</script>