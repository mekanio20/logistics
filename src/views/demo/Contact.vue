<template>
    <div class="w-full">
        <Navbar active_page="/contact" />
        <div class="container">
            <!-- BANNER -->
            <Banner name="Contact us" image="contact-page.webp" />
            <!-- FORM -->
            <div class="flex justify-center items-center my-10">
                <form @submit.prevent="addContact" class="bg-white p-8 rounded-lg lg:w-1/2 sm:w-4/5 w-full">
                    <div class="mb-6">
                        <label for="fullName" class="block font-sf_pro text-m_gray-300">Full name</label>
                        <input id="fullName" type="text" v-model="fullname"
                            class="mt-2 w-full font-sf_pro rounded-lg p-3 bg-m_white-300 border-none focus:outline-none" />
                    </div>
                    <div class="mb-6">
                        <label for="phoneNumber" class="block font-sf_pro text-m_gray-300">Phone number</label>
                        <input id="phoneNumber" type="text" v-model="phone"
                            class="mt-2 w-full font-sf_pro rounded-lg p-3 bg-m_white-300 border-none focus:outline-none"
                            value="+993" />
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block font-sf_pro text-m_gray-300">Message</label>
                        <textarea id="message" rows="4" v-model="message"
                            class="mt-2 w-full font-sf_pro rounded-lg p-3 bg-m_white-300 border-none focus:outline-none"></textarea>
                    </div>
                    <button type="submit"
                        class="w-full bg-red-500 text-white font-bold py-3 rounded hover:bg-red-600 transition duration-300">
                        Send
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
import Banner from '@/components/Banner.vue';
export default {
    name: "Contact",
    components: {
        Navbar,
        Footer,
        Banner
    },
    methods: {
        addContact() {

        }
    }
}
</script>