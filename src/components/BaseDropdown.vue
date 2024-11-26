<template>
  <v-app class="base-dropdown">
    <v-container>
      <v-combobox 
        v-model="selectedItem"
        label="Введите название" 
        :items="cityTitles" 
        variant="outlined" 
        density="compact"
        v-model:menu="isDropdownOpen"
      ></v-combobox>
      <img src="../assets/icons/arrow.svg" :class="{'arrow': true, 'up': isDropdownOpen}">
    </v-container>
  </v-app>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import CityData from '/server/city-data.json';
import store from '../store/index';

const selectedItem = ref(null)
const isDropdownOpen = ref(false)

const cityTitles = computed(() => {
  return CityData.map(city => city.title)
})
watch(selectedItem, (newValue) => {
  store.commit('SET_SELECTED', { isSelected: newValue })
})
</script>

<style lang="scss" scoped>
.base-dropdown {
  width: 100%;
  max-width: 250px;
  position: relative;

  .arrow {
    position: absolute;
    top: 25px;
    right: 25px;
    transition: transform 0.3s ease;

    &.up {
      transform: rotate(-180deg);
    }
  }
}

:deep(.v-application__wrap) {
  min-height: 100%;
}
</style>
