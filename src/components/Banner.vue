<template>
    <div class="relative">
        <img class="w-full h-full object-cover" :src="`/src/assets/imgs/${image}`">
        <h1
            class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-sf_pro font-bold text-6xl text-white leading-[70px]">
            {{ name }}
        </h1>
        <div
            class="absolute z-50 inset-y-1/3 right-28 border h-fit bg-white bg-opacity-30 border-white p-4 rounded-full">
            <a href="#" target="_blank"><img class="w-5 block py-4 cursor-pointer" src="@/assets/icons/instagram.svg"
                    alt="instagram"></a>
            <a href="#" target="_blank"><img class="w-5 block py-4 cursor-pointer" src="@/assets/icons/facebook.svg"
                    alt="facebook"></a>
            <a href="#" target="_blank"><img class="w-5 block py-4 cursor-pointer" src="@/assets/icons/youtube.svg"
                    alt="youtube"></a>
            <a href="#" target="_blank"><img class="w-5 block py-4 cursor-pointer" src="@/assets/icons/linkedIn.svg"
                    alt="linkedin"></a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
}
</script>