<template>
    <p ref="counterElement">{{ upto }}<sup v-if="plus">+</sup>
    {{ currency }}</p>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  finalValue: {
    type: Number,
    default: 0,
  },
  speed: {
    // smaller is faster
    type: Number,
    default: 100,
  },
  startValue: {
    type: Number,
    default: 0
  },
  plus: {
    type: Boolean,
    default: false
  },
  currency: {
    type: String,
    default: null
  }
});

const displayNumber = ref(props.finalValue);
let upto = ref(props.startValue);
let animationInterval;

const updateCounter = () => {
  upto.value += 1;
  if (upto.value === displayNumber.value) {
    clearInterval(animationInterval);
  }
};

// Initializing the counterElement ref
const counterElement = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animationInterval = setInterval(updateCounter, props.speed);
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  });

  observer.observe(counterElement.value);
});
</script>
