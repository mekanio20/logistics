<template>
    <div v-if="loading" class="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]">
        <lottie-player class="w-full h-full" src="/loader.json" background="transparent" speed="1" loop
            autoplay></lottie-player>
    </div>
</template>

<script>
export default {
    props: {
        loading: {
            type: Boolean,
            required: true
        }
    }
}
</script>