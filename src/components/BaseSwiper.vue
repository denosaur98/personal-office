<template>
  <div class="base-swiper">
    <swiper
      :slides-per-view="1"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      loop="true"
    >
      <swiper-slide v-for="image in selectedImages" :key="image" class="slide">
        <img :src="image" class="slide-image">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import store from '../store/index';
import CityData from '/server/city-data.json';

const selectedImages = computed(() => {
  const selectedItem = CityData.find(item => item.title === store.state.isSelected)
  return selectedItem ? selectedItem.images : []
})
</script>

<style lang="scss" scoped>
.base-swiper {
  width: 650px;
  height: 100%;

  @media (max-width: 750px) {
    width: 90%
  }

  .slide-image {
    width: 100%;
    height: 100%;
    border-radius: 8px;

    .slide-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>