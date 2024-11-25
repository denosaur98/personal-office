<template>
  <div class="auth-page">
    <h1 class="auth__title">Войти в панель</h1>
    <form class="auth__form">
      <input class="form__auth-input" :class="authError ? 'auth__error' : ''" placeholder="Введите логин" type="text" v-model="login">
      <input class="form__auth-input" :class="authError ? 'auth__error' : ''" placeholder="Введите пароль" type="password" v-model="password">
      <p class="auth__error-text" v-if="authError">Заполните Логин/Пароль</p>
      <button class="form__auth-button" @click="handleLogin" type="button">Войти</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import store from '../store/index.js';

const router = useRouter()

const login = ref('')
const password = ref('')
const authError = ref(false)
function handleLogin() {
  if (login.value !== '' && password.value !== '') {
    store.commit('GET_LOGIN', { login: login.value })
    store.commit('GET_PASSWORD', { password: password.value })
    store.commit('SET_AUTH_STATUS', { isAuthenticated: true })
    router.push('/main');
  } else {
    authError.value = true
  }
}
</script>

<style lang="scss" scoped>
.auth-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  height: 100%;

  .auth__title {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: left;
  }

  .auth__form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    width: 230px;
    gap: 10px;

    .form__auth-input {
      width: 100%;
      height: 30px;
      padding: 8px 16px;
      border: 1px solid rgb(215, 215, 215);
      color: #000;
      font-size: 12px;
      font-weight: 400;
      line-height: 15px;
      letter-spacing: 0%;
      text-align: left;
      border-radius: 8px;

      &::placeholder {color: rgb(215, 215, 215);}

      &.auth__error {border: 1.5px solid #da0000bd;}
    }

    .auth__error-text {
      position: absolute;
      color: #da0000bd;
      font-size: 12px;
      bottom: 50px;
    }

    .form__auth-button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 16px;
      border-radius: 8px;
      background: #000;
      color: rgb(215, 215, 215);
      font-size: 12px;
      font-weight: 400;
      line-height: 15px;
      letter-spacing: 0%;
      text-align: left;
      border: none;
      margin-top: 30px;
      width: 70px;
    }
  }
}
</style>