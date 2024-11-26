<template>
  <header class="base-header">
    <h1 class="header__username">Привет,  <span>{{ store.state.login }}</span></h1>
    <button to="/auth" class="header__exit" @click="exitProfile">Выйти</button>
  </header>
</template>

<script setup>
import store from '../store/index.js';
import { useRouter } from 'vue-router';

const router = useRouter()
function exitProfile() {
  store.commit('RESET_SELECTED')
  router.push('/auth')
}
</script>

<style lang="scss" scoped>
.base-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px;

  .header__username {
    color: #000;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0%;
    text-align: left;

    span {
      font-weight: 700;
    }
  }

  .header__exit {
    color: #000;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0%;
    text-align: left;
  }
}
</style>