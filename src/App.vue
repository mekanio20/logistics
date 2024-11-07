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
      this.$nextTick(() => {
        setTimeout(() => {
          this.loading = false;
        }, 7000);
      });
    },
  },
}
</script>