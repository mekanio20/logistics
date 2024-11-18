<template>
  <div :class="{ 'dark': isDarkMode }" class="w-full h-full">
    <ThemeToggleButton />
    <Loader :loading="loading" />
    <RouterView v-show="!loading" />
    <ScrollToTop />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import Loader from "@/components/Loader.vue";
import ScrollToTop from '@/components/ScrollToTop.vue'
import ThemeToggleButton from "@/components/ThemeToggleButton.vue";

export default {
  name: "App",
  components: {
    RouterView,
    Loader,
    ScrollToTop,
    ThemeToggleButton
  },
  data() {
    return {
      isDarkMode: false,
      loading: false,
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
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

      this.$nextTick(() => {
        const images = Array.from(document.images);

        if (images.length === 0) {
          this.loading = false;
          return;
        }

        setTimeout(() => {
          this.loading = false;
        }, 7000);

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
          clearTimeout(this.loadTimeout)
        });
      });
    },
  },
};
</script>