<template>
  <div class="main-page">
    <BaseHeader />
    <BaseDropdown class="main__dropdown" />
    <div class="main__info">
      <h1 class="info__title">{{ infoTitle }}</h1>
      <p class="info__description">{{ infoDescription }}</p>
    </div>
    <BaseSwiper v-if="infoTitle" class="swiper-wrapper"/>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import BaseHeader from '../components/BaseHeader';
import BaseDropdown from '../components/BaseDropdown';
import BaseSwiper from '../components/BaseSwiper.vue';
import store from '../store/index';
import CityData from '/server/city-data.json';

const infoTitle = computed(() => store.state.isSelected)
const infoDescription = computed(() => {
  const selectedItem = CityData.find(item => item.title === store.state.isSelected)
  return selectedItem ? selectedItem.description : ''
})
</script>

<style lang="scss" scoped>
.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  .main__dropdown {
    margin-top: 80px;
  }

  .main__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 650px;
    height: 100%;
    margin-top: 110px;
    gap: 30px;

    .info__title {
      color: #000;
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
      letter-spacing: 0%;
      text-align: left;
    }

    .info__description {
      color: #000;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0%;
      text-align: left;
    }
  }

  .swiper-wrapper {
    margin: 50px 0;
  }
}
</style>