<template>
    <div class="w-full">
        <Navbar />
        <!-- Contact us header -->
        <div class="w-full !h-[400px] relative sm:top-[120px] top-[100px]">
            <div class="w-full h-full absolute left-0 right-0 -z-10">
                <img class="w-full h-full object-cover filter brightness-50" src="@/assets/imgs/contact-page.webp">
            </div>
            <div class="flex flex-col space-y-6 pt-40 container">
                <h1 class="font-poppins font-bold lg:text-4xl text-3xl text-white">{{ $t('navbar.title1') }}</h1>
                <div class="flex items-center space-x-2 font-manjari text-white lg:text-lg text-base">
                    <router-link to="/">{{ $t('about.title1') }}</router-link>
                    <span>/</span>
                    <router-link to="/contact">{{ $t('navbar.title1') }}</router-link>
                </div>
            </div>
        </div>
        <div class="w-full mt-20 dark:bg-m_black-100">
            <!-- Contact -->
            <div class="flex justify-center items-center py-10">
                <form @submit.prevent="addContact" class="bg-white dark:bg-black p-8 rounded-lg lg:w-1/2 sm:w-4/5 w-full">
                    <div class="mb-6">
                        <label for="fullName" class="block font-sf_pro text-m_gray-300">{{ $t('contact.title1') }}</label>
                        <input id="fullName" type="text" v-model="fullname"
                            class="mt-2 w-full font-sf_pro rounded-lg p-3 bg-m_white-300 dark:bg-m_black-100 border-none focus:outline-none" />
                    </div>
                    <div class="mb-6">
                        <label for="phoneNumber" class="block font-sf_pro text-m_gray-300">{{ $t('contact.title2') }}</label>
                        <input id="phoneNumber" type="text" v-model="phone"
                            class="mt-2 w-full font-sf_pro rounded-lg p-3 bg-m_white-300 dark:bg-m_black-100 border-none focus:outline-none"
                            value="" />
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block font-sf_pro text-m_gray-300">{{ $t('contact.title3') }}</label>
                        <textarea id="message" rows="4" v-model="message"
                            class="mt-2 w-full font-sf_pro rounded-lg p-3 bg-m_white-300 dark:bg-m_black-100 border-none focus:outline-none"></textarea>
                    </div>
                    <button type="submit"
                        class="w-full bg-red-500 text-white font-bold py-3 rounded hover:bg-red-600 transition duration-300">
                        {{ $t('contact.title4') }}
                    </button>
                </form>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: "Contact",
    components: {
        Navbar,
        Footer,
    },
    methods: {
        addContact() {

        }
    }
}
</script>