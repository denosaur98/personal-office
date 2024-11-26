<template>
  <v-app class="base-dropdown">
    <v-container>
      <v-combobox 
        v-model="selectedItem"
        label="Введите название" 
        :items="items" 
        variant="outlined" 
        density="compact"
        v-model:menu="isDropdownOpen"
      ></v-combobox>
      <img src="../assets/icons/arrow.svg" :class="{'arrow': true, 'up': isDropdownOpen}">
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  'Москва', 'Санкт-Петербург', 'Нижний-Новгород', 'Казань', 'Екатеринбург', 'Новосибирск', 'Красноярск', 'Сочи', 'Волгоград', 'Краснодар'
])

const selectedItem = ref(null)
const isDropdownOpen = ref(false)
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
</style>