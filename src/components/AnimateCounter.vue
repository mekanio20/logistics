<template>
  <p ref="counterElement">{{ animatedValue }}<sup v-if="plus">+</sup></p>
</template>

<script>
export default {
  name: "AnimateCounter",
  props: {
    start: {
      type: Number,
      default: 0,
    },
    end: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      default: 2000,
    },
    plus: {
      type: Boolean,
      default: false
    },
    currency: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      animatedValue: this.start,
    };
  },
  watch: {
    end: {
      immediate: true,
      handler() {
        this.animateCounter()
      },
    },
  },
  methods: {
    animateCounter() {
      const startTime = performance.now();
      const updateValue = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < this.duration) {
          const progress = elapsedTime / this.duration;
          this.animatedValue = Math.floor(
            this.start + (this.end - this.start) * progress
          );
          requestAnimationFrame(updateValue);
        } else {
          this.animatedValue = this.end;
        }
      };
      requestAnimationFrame(updateValue);
    },
  },
};
</script>