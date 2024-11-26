<template>
  <div class="main-page">
    <BaseHeader />
    <BaseDropdown class="main__dropdown" />
  </div>
</template>

<script setup>
import BaseHeader from '../components/BaseHeader';
import BaseDropdown from '../components/BaseDropdown';

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
}
</style>