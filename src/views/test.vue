<template>
  <div class="swiper-container">
    <swiper
      class="swiper"
      :modules="modules"
      loop
      speed="900"
      centeredSlides
      :pagination="{
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: (swiper, current, total) => {
          let indT = total >= 5 ? total : `${total}`;
          let indC = current >= 5 ? current : `${current}`;
          return `<b>${indC}</b><span>/</span>${indT}`;
        }
      }"
      navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      scrollbar="{ el: '.swiper-scrollbar', draggable: true }"
      keyboard="{ enabled: true, onlyInViewport: false }"
    >
      <swiper-slide class="relative flex items-center justify-center">
        <div class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('https://i.postimg.cc/hvWNG7wV/ruoa-bg-slide.png');">
        </div>
        <div class="relative z-10 text-center p-8">
          <h2 class="text-4xl font-bold animate__animated animate__fadeInUp animate__delay-1s">
            Why do we use it <br />
            <span class="text-xl text-orange-400">Lorem Ipsum is simply dummy text</span>
          </h2>
          <p class="text-lg text-white animate__animated animate__fadeInUp animate__delay-2s">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
        </div>
      </swiper-slide>

      <swiper-slide class="relative flex items-center justify-center">
        <div class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('https://i.postimg.cc/ZRy1ZLfT/home.png');">
        </div>
        <div class="relative z-10 text-center p-8">
          <h2 class="text-4xl font-bold animate__animated animate__fadeInUp animate__delay-1s">
            Lorem Ipsum is simply <br />
            <span class="text-xl text-orange-400">dummy text of the printing</span>
          </h2>
          <p class="text-lg text-white animate__animated animate__fadeInUp animate__delay-2s">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>
        </div>
      </swiper-slide>

      <!-- Add more slides as needed -->
      
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, Scrollbar, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'animate.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, Keyboard]);
export default {
  name: "Test",
  data() {
    return {
      modules: [Navigation, Pagination, Scrollbar, Keyboard]
    }
  }
}
</script>

<style scoped>
.swiper-container {
  max-width: 100%;
  height: 100vh;
}

.swiper-slide {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-pagination {
  color: white;
  font-size: 25px;
}

.swiper-button-next,
.swiper-button-prev {
  color: white;
}
</style>
