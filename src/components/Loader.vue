<template>
    <div v-if="loading" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <lottie-player class="sm:w-600 sm:h-406 w-96 h-96" src="/loader.json" background="transparent" speed="1" loop
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