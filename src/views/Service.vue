<template>
    <div class="w-full">
        <Navbar />
        <!-- Service header -->
        <div class="w-full h-[600px] relative top-[120px]">
            <div class="w-full h-full absolute left-0 right-0 -z-10">
                <img class="w-full h-full object-cover filter brightness-50" src="@/assets/imgs/service-page.webp">
            </div>
            <div class="flex flex-col space-y-6 pt-40 container">
                <h1 class="font-poppins font-bold lg:text-4xl text-3xl text-white">{{ $t('service.title1') }}</h1>
                <div class="flex items-center space-x-2 font-manjari text-white lg:text-lg text-base">
                    <router-link to="/">{{ $t('about.title1') }}</router-link>
                    <span>/</span>
                    <router-link to="/service">{{ $t('service.title1') }}</router-link>
                </div>
            </div>
        </div>
        <div class="w-full">
            <!-- Our services -->
            <div class="bg-m_gray-400">
                <div class="container lg:py-20 py-10">
                    <h2 class="font-poppins font-semibold text-m_black-100 lg:text-3xl text-2xl text-center">
                        {{ $t('home.title20') }}
                    </h2>
                    <div class="pt-20 flex items-start gap-x-6 overflow-x-auto no-scrollbar">
                        <div class="relative inline-block min-w-[20rem] rounded-lg overflow-hidden">
                            <img class="transition-transform duration-500 ease-in-out transform hover:scale-110"
                                src="@/assets/imgs/service1.webp">
                            <div class="absolute top-4 right-4 cursor-pointer">
                                <svg width="61" height="61" viewBox="0 0 61 61" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.9" cx="30.7734" cy="30.7734" r="21.2756"
                                        transform="rotate(40.6108 30.7734 30.7734)" fill="white" />
                                    <path
                                        d="M27.0284 25.4929C26.8602 25.5143 26.707 25.6006 26.6015 25.7333C26.496 25.866 26.4465 26.0347 26.4636 26.2034C26.4808 26.3721 26.5631 26.5275 26.6931 26.6363C26.8232 26.7451 26.9905 26.7989 27.1596 26.786L34.6043 26.032L26.2913 35.7273C26.1791 35.8582 26.1234 36.0283 26.1366 36.2002C26.1498 36.3721 26.2308 36.5317 26.3617 36.6439C26.4926 36.7562 26.6627 36.8118 26.8346 36.7986C27.0065 36.7854 27.1661 36.7045 27.2783 36.5736L35.5913 26.8783L35.983 34.3514C35.9874 34.4367 36.0085 34.5203 36.0452 34.5974C36.082 34.6745 36.1335 34.7436 36.1969 34.8008C36.2603 34.8579 36.3344 34.9021 36.4148 34.9306C36.4953 34.9592 36.5806 34.9716 36.6659 34.9672C36.7511 34.9628 36.8347 34.9417 36.9118 34.9049C36.9889 34.8682 37.058 34.8167 37.1152 34.7533C37.1724 34.6899 37.2165 34.6158 37.245 34.5354C37.2736 34.4549 37.286 34.3696 37.2816 34.2843L36.8178 25.4146C36.8077 25.2209 36.7329 25.0362 36.6054 24.89C36.5521 24.8244 36.4872 24.7692 36.414 24.727C36.2503 24.624 36.0569 24.5787 35.8644 24.5983L27.0284 25.4929Z"
                                        fill="black" />
                                </svg>
                            </div>
                            <div
                                class="text-start absolute bottom-8 left-8 font-sf_pro font-bold lg:text-xl text-lg text-white w-1/2">
                                {{ $t('home.title21') }}
                            </div>
                        </div>
                        <div class="relative inline-block min-w-[20rem] rounded-lg overflow-hidden">
                            <img class="transition-transform duration-500 ease-in-out transform hover:scale-110"
                                src="@/assets/imgs/service2.webp">
                            <div class="absolute top-4 right-4 cursor-pointer">
                                <svg width="61" height="61" viewBox="0 0 61 61" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.9" cx="30.7734" cy="30.7734" r="21.2756"
                                        transform="rotate(40.6108 30.7734 30.7734)" fill="white" />
                                    <path
                                        d="M27.0284 25.4929C26.8602 25.5143 26.707 25.6006 26.6015 25.7333C26.496 25.866 26.4465 26.0347 26.4636 26.2034C26.4808 26.3721 26.5631 26.5275 26.6931 26.6363C26.8232 26.7451 26.9905 26.7989 27.1596 26.786L34.6043 26.032L26.2913 35.7273C26.1791 35.8582 26.1234 36.0283 26.1366 36.2002C26.1498 36.3721 26.2308 36.5317 26.3617 36.6439C26.4926 36.7562 26.6627 36.8118 26.8346 36.7986C27.0065 36.7854 27.1661 36.7045 27.2783 36.5736L35.5913 26.8783L35.983 34.3514C35.9874 34.4367 36.0085 34.5203 36.0452 34.5974C36.082 34.6745 36.1335 34.7436 36.1969 34.8008C36.2603 34.8579 36.3344 34.9021 36.4148 34.9306C36.4953 34.9592 36.5806 34.9716 36.6659 34.9672C36.7511 34.9628 36.8347 34.9417 36.9118 34.9049C36.9889 34.8682 37.058 34.8167 37.1152 34.7533C37.1724 34.6899 37.2165 34.6158 37.245 34.5354C37.2736 34.4549 37.286 34.3696 37.2816 34.2843L36.8178 25.4146C36.8077 25.2209 36.7329 25.0362 36.6054 24.89C36.5521 24.8244 36.4872 24.7692 36.414 24.727C36.2503 24.624 36.0569 24.5787 35.8644 24.5983L27.0284 25.4929Z"
                                        fill="black" />
                                </svg>
                            </div>
                            <div
                                class="text-start absolute bottom-8 left-8 font-sf_pro font-bold lg:text-xl text-lg text-white w-1/2">
                                {{ $t('home.title22') }}
                            </div>
                        </div>
                        <div class="relative inline-block min-w-[20rem] rounded-lg overflow-hidden">
                            <img class="transition-transform duration-500 ease-in-out transform hover:scale-110"
                                src="@/assets/imgs/service3.webp">
                            <div class="absolute top-4 right-4 cursor-pointer">
                                <svg width="61" height="61" viewBox="0 0 61 61" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.9" cx="30.7734" cy="30.7734" r="21.2756"
                                        transform="rotate(40.6108 30.7734 30.7734)" fill="white" />
                                    <path
                                        d="M27.0284 25.4929C26.8602 25.5143 26.707 25.6006 26.6015 25.7333C26.496 25.866 26.4465 26.0347 26.4636 26.2034C26.4808 26.3721 26.5631 26.5275 26.6931 26.6363C26.8232 26.7451 26.9905 26.7989 27.1596 26.786L34.6043 26.032L26.2913 35.7273C26.1791 35.8582 26.1234 36.0283 26.1366 36.2002C26.1498 36.3721 26.2308 36.5317 26.3617 36.6439C26.4926 36.7562 26.6627 36.8118 26.8346 36.7986C27.0065 36.7854 27.1661 36.7045 27.2783 36.5736L35.5913 26.8783L35.983 34.3514C35.9874 34.4367 36.0085 34.5203 36.0452 34.5974C36.082 34.6745 36.1335 34.7436 36.1969 34.8008C36.2603 34.8579 36.3344 34.9021 36.4148 34.9306C36.4953 34.9592 36.5806 34.9716 36.6659 34.9672C36.7511 34.9628 36.8347 34.9417 36.9118 34.9049C36.9889 34.8682 37.058 34.8167 37.1152 34.7533C37.1724 34.6899 37.2165 34.6158 37.245 34.5354C37.2736 34.4549 37.286 34.3696 37.2816 34.2843L36.8178 25.4146C36.8077 25.2209 36.7329 25.0362 36.6054 24.89C36.5521 24.8244 36.4872 24.7692 36.414 24.727C36.2503 24.624 36.0569 24.5787 35.8644 24.5983L27.0284 25.4929Z"
                                        fill="black" />
                                </svg>
                            </div>
                            <div
                                class="text-start absolute bottom-8 left-8 font-sf_pro font-bold lg:text-xl text-lg text-white w-3/5">
                                {{ $t('home.title23') }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Shipping -->
            <div class="container mt-20 mb-10">
                <h2 class="font-poppins font-semibold text-m_black-100 lg:text-3xl text-2xl text-center">
                    {{ $t('service.title2') }}
                </h2>
                <div class="py-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                    <div class="rounded-lg bg-m_white-300 flex flex-col items-start space-y-14 p-6">
                        <div class="p-4 rounded-full flex items-center justify-center bg-m_red-300">
                            <svg class="lg:w-[35px] w-[25px]" viewBox="0 0 35 35" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.0625 13.7083L10.9375 6.13959" stroke="#E92A34" stroke-width="2.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M30.625 23.3333V11.6667C30.6245 11.1552 30.4895 10.6528 30.2335 10.21C29.9775 9.76721 29.6096 9.39949 29.1667 9.14375L18.9583 3.31041C18.5149 3.05442 18.012 2.91965 17.5 2.91965C16.988 2.91965 16.4851 3.05442 16.0417 3.31041L5.83333 9.14375C5.39038 9.39949 5.02247 9.76721 4.76651 10.21C4.51054 10.6528 4.37552 11.1552 4.375 11.6667V23.3333C4.37552 23.8448 4.51054 24.3472 4.76651 24.79C5.02247 25.2328 5.39038 25.6005 5.83333 25.8562L16.0417 31.6896C16.4851 31.9456 16.988 32.0803 17.5 32.0803C18.012 32.0803 18.5149 31.9456 18.9583 31.6896L29.1667 25.8562C29.6096 25.6005 29.9775 25.2328 30.2335 24.79C30.4895 24.3472 30.6245 23.8448 30.625 23.3333Z"
                                    stroke="#E92A34" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M4.76855 10.15L17.4998 17.5146L30.2311 10.15" stroke="#E92A34"
                                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.5 32.2V17.5" stroke="#E92A34" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p class="font-poppins font-medium lg:text-2xl text-xl text-black">
                            {{ $t('service.title3') }}
                        </p>
                    </div>
                    <div class="rounded-lg bg-m_white-300 flex flex-col items-start space-y-14 p-6">
                        <div class="p-4 rounded-full flex items-center justify-center bg-m_red-300">
                            <svg class="lg:w-[35px] w-[25px]" viewBox="0 0 33 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.4375 26.25C27.336 26.25 28.875 24.8509 28.875 23.125C28.875 21.3991 27.336 20 25.4375 20C23.539 20 22 21.3991 22 23.125C22 24.8509 23.539 26.25 25.4375 26.25Z"
                                    stroke="#E92A34" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M7.5625 26.25C9.46098 26.25 11 24.8509 11 23.125C11 21.3991 9.46098 20 7.5625 20C5.66402 20 4.125 21.3991 4.125 23.125C4.125 24.8509 5.66402 26.25 7.5625 26.25Z"
                                    stroke="#E92A34" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M22 10H27.5L31.625 13.75V20H22V10Z" stroke="#E92A34" stroke-width="2.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 3.75H1.375V20H22V3.75Z" stroke="#E92A34" stroke-width="2.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p class="font-poppins font-medium lg:text-2xl text-xl text-black">
                            {{ $t('service.title4') }}
                        </p>
                    </div>
                    <div class="rounded-lg bg-m_white-300 flex flex-col items-start space-y-14 p-6">
                        <div class="p-4 rounded-full flex items-center justify-center bg-m_red-300">
                            <svg class="lg:w-[35px] w-[25px]" viewBox="0 0 38 38" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.7502 6.33334C27.1096 6.33334 30.3314 7.66786 32.7068 10.0433C35.0823 12.4188 36.4168 15.6406 36.4168 19C36.4168 22.3594 35.0823 25.5812 32.7068 27.9567C30.3314 30.3321 27.1096 31.6667 23.7502 31.6667C20.3908 31.6667 17.1689 30.3321 14.7935 27.9567C12.418 25.5812 11.0835 22.3594 11.0835 19C11.0835 15.6406 12.418 12.4188 14.7935 10.0433C17.1689 7.66786 20.3908 6.33334 23.7502 6.33334ZM23.7502 9.5C21.2306 9.5 18.8142 10.5009 17.0326 12.2825C15.2511 14.0641 14.2502 16.4804 14.2502 19C14.2502 21.5196 15.2511 23.9359 17.0326 25.7175C18.8142 27.4991 21.2306 28.5 23.7502 28.5C26.2697 28.5 28.6861 27.4991 30.4677 25.7175C32.2493 23.9359 33.2502 21.5196 33.2502 19C33.2502 16.4804 32.2493 14.0641 30.4677 12.2825C28.6861 10.5009 26.2697 9.5 23.7502 9.5ZM22.1668 12.6667H24.5418V18.6517L28.231 22.3408L26.5527 24.0192L22.1668 19.6333V12.6667ZM3.16683 28.5C2.7469 28.5 2.34418 28.3332 2.04724 28.0363C1.75031 27.7393 1.5835 27.3366 1.5835 26.9167C1.5835 26.4967 1.75031 26.094 2.04724 25.7971C2.34418 25.5002 2.7469 25.3333 3.16683 25.3333H9.231C9.72183 26.4575 10.3552 27.5183 11.0835 28.5H3.16683ZM4.75016 20.5833C4.33024 20.5833 3.92751 20.4165 3.63058 20.1196C3.33364 19.8227 3.16683 19.4199 3.16683 19C3.16683 18.5801 3.33364 18.1774 3.63058 17.8804C3.92751 17.5835 4.33024 17.4167 4.75016 17.4167H7.996L7.91683 19L7.996 20.5833H4.75016ZM6.3335 12.6667C5.91357 12.6667 5.51084 12.4999 5.21391 12.2029C4.91698 11.906 4.75016 11.5033 4.75016 11.0833C4.75016 10.6634 4.91698 10.2607 5.21391 9.96375C5.51084 9.66682 5.91357 9.5 6.3335 9.5H11.0835C10.3552 10.4817 9.72183 11.5425 9.231 12.6667H6.3335Z"
                                    fill="#E92A34" />
                            </svg>
                        </div>
                        <p class="font-poppins font-medium lg:text-2xl text-xl text-black">
                            {{ $t('service.title5') }}
                        </p>
                    </div>
                </div>
            </div>
            <!-- Service -->
            <div class="container pb-20">
                <h2 class="font-poppins font-semibold text-m_black-100 lg:text-3xl text-2xl text-center pb-10">
                    {{ $t('service.title6') }}
                </h2>
                <div class="flex flex-col lg:flex-row items-center bg-white p-8">
                    <div class="lg:w-1/2 lg:h-[585px] mb-16 lg:mb-0 lg:mr-16">
                        <img src="@/assets/imgs/provide.webp" alt="Warehouse"
                            class="rounded-lg shadow-lg object-cover w-full h-full" />
                    </div>
                    <div class="lg:w-1/2">
                        <ul class="space-y-4 text-gray-700">
                            <li v-for="(service, index) in services[this.$i18n.locale]" :key="index" class="flex items-start">
                                <span class="text-red-500 mr-2">◆</span>
                                <p class="leading-relaxed font-poppins font-normal lg:text-xl sm:text-lg text-base">
                                    {{ service }}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: "Service",
    components: {
        Navbar,
        Footer,
    },
    data() {
        return {
            services: {
                RU: [
                    "Экспедирование экспортно-импортных и транзитных перевозок, грузов по странам СНГ, Ближнего и Дальнего Востока, стран Балтии и Евросоюза",
                    "Перевозка опасных грузов",
                    "Получение специального разрешения и перевозка грузов любой сложности: крупных, негабаритных, сверхгабаритных, тяжеловесных и длинномерных перевозка сборных грузов",
                    "Перевозка грузов под температурным режимом",
                    "Перевозка дорогостоящих грузов",
                    "Получение виз для иностранных водителей и визовая поддержка на территории Туркменистана."
                ],
                EN: [
                    "Freight forwarding for export-import and transit shipments across CIS countries, the Near and Far East, the Baltic states, and the European Union",
                    "Transportation of hazardous goods",
                    "Obtaining special permits and transporting goods of any complexity: large, oversized, over-dimensional, heavy, and long loads, as well as consolidated cargo transportation",
                    "Transportation of goods under temperature control",
                    "Transportation of high-value goods",
                    "Visa issuance for foreign drivers and visa support within Turkmenistan."
                ],
                TM: [
                    "Eksport-import we üstaşyr ýükleriň, Arkalaşygyň Garaşsyz Döwletleriniň, Ýakyn we Uzak Gündogar, Baltika döwletleriniň we Ýewropa Bileleşiginiň ýurtlary boýunça ýükleriniň ekspedisiýasy",
                    "Howply ýükleriň daşalmagy",
                    "Ýükleriň islendik çylşyrymly görnüşleri üçin ýörite rugsatnamalaryň alynmagy we daşalmagy: uly, ululykdan daşary, aşa ululykly, agyr we uzyn ýükleriň, şeýle hem birleşdirilen ýükleriň daşalmagy",
                    "Temperatura gözegçiligi astynda ýükleriň daşalmagy",
                    "Gymmat bahaly ýükleriň daşalmagy",
                    "Daşary ýurtly sürüjiler üçin wiza almak we Türkmenistanyň çäginde wiza goldawy."
                ]
            }
        }
    }

}
</script>