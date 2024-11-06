<template>
    <div class="bg-m_white-200 px-10 sm:py-16 py-10">
        <div class="flex lg:flex-row flex-col-reverse items-start justify-between rounded-xl">
            <div class="lg:flex-1 w-full flex lg:items-start items-center lg:justify-start justify-center flex-col lg:mt-0 lg:pl-10 mt-10">
                <router-link to="/" class="flex items-center space-x-4 cursor-pointer">
                    <img class="w-20" src="/svgs/logo.svg">
                </router-link>
                <p class="sm:w-96 w-full font-sf_pro font-normal lg:text-lg sm:text-base mobile:text-sm text-xs lg:text-start text-center text-black my-10">
                    Turkmen Milli Logistik – Delivering seamless logistics solutions worldwide
                </p>
                <div class="flex items-center space-x-6">
                    <router-link v-for="item in icons" :key="item.id" :to="item.url">
                        <img :src="item.icon">
                    </router-link>
                </div>
                <div class="font-sf_pro font-normal lg:text-base sm:text-sm mobile:text-xs text-[10px] text-m_gray-200 mt-24 mr-10 lg:hidden block">All Rights Reserved | <span class="text-m_green-100 underline">Terms and Conditions | Privacy Policy</span></div>
            </div>
            <div class="lg:flex-1 w-full flex flex-col items-end justify-end mt-12">
                <div class="w-full grid lg:grid-cols-2 gap-x-10">
                    <router-link class="flex flex-col lg:items-start lg:justify-start items-center justify-center" to="/">
                        <h3 class="font-poppins font-medium lg:text-base sm:text-sm mobile:text-sm text-xs text-black mb-10">Home</h3>
                    </router-link>
                    <router-link class="flex flex-col lg:items-start lg:justify-start items-center justify-center" to="/projects">
                        <h3 class="font-poppins font-medium lg:text-base sm:text-sm mobile:text-sm text-xs text-black mb-10">Projects</h3>
                    </router-link>
                    <router-link class="flex flex-col lg:items-start lg:justify-start items-center justify-center" to="/service">
                        <h3 class="font-poppins font-medium lg:text-base sm:text-sm mobile:text-sm text-xs text-black mb-10">Services</h3>
                    </router-link>
                    <router-link class="flex flex-col lg:items-start lg:justify-start items-center justify-center" to="/contact">
                        <h3 class="font-poppins font-medium lg:text-base sm:text-sm mobile:text-sm text-xs text-black mb-10">Contact us</h3>
                    </router-link>
                    <router-link class="flex flex-col lg:items-start lg:justify-start items-center justify-center" to="/about">
                        <h3 class="font-poppins font-medium lg:text-base sm:text-sm mobile:text-sm text-xs text-black mb-10">About us</h3>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="w-full font-sf_pro font-normal lg:text-base sm:text-sm mobile:text-sm text-xs text-center text-m_gray-200 mt-24 mr-10 lg:block hidden">All Rights Reserved | <router-link to="/terms" class="underline text-m_red-100">Terms and Conditions |</router-link> <router-link to="/privacy" class="text-m_red-100 underline">Privacy Policy</router-link> </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
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