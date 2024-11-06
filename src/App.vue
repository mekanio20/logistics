<template>
  <div class="w-full h-full">
    <Loader :loading="loading" />
    <RouterView v-show="!loading" />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import Loader from "@/components/Loader.vue";
export default {
  name: "App",
  components: {
    RouterView,
    Loader
  },
  data() {
    return {
      loading: false,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.handleRouteChange();
      },
    },
  },
  methods: {
    handleRouteChange() {
      this.loading = true;
      console.log(this.loading);
      this.$nextTick(() => {
        const images = Array.from(document.images);
        const imagePromises = images.map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve;
            })
        );

        Promise.all(imagePromises).then(() => {
          this.loading = false;
          console.log(this.loading);
        });
      });
    },
  },
}
</script>