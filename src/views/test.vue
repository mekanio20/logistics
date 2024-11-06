<template>
  <div class="text-4xl font-bold text-center">
    {{ animatedCounter }}
  </div>
</template>

<script>
export default {
  props: {
    targetNumber: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      default: 2000, // animasyon süresi (milisaniye cinsinden)
    },
  },
  data() {
    return {
      animatedCounter: 0, // Başlangıç değeri
    };
  },
  mounted() {
    this.animateCounter();
  },
  methods: {
    animateCounter() {
      const startTime = performance.now();
      const updateCounter = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / this.duration, 1); // 0 ile 1 arasında bir oran
        this.animatedCounter = Math.floor(progress * this.targetNumber);
        if (progress < 1) {
          requestAnimationFrame(updateCounter); // animasyon devam ediyor
        }
      };
      requestAnimationFrame(updateCounter); // animasyonu başlat
    },
  },
};
</script>

<style scoped>
/* Gerekirse stil ekleyebilirsiniz */
</style>
