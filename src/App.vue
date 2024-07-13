<script setup>
  import ModalWindow from "@/components/modals/ModalWindow.vue"
</script>

<template>
  <router-view />
  <ModalWindow />
</template>

<style lang="scss">
  @import '@/assets/variables';

  .master-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: $baseColor;
  }

  .admin-container {
    width: 100%;
    display: flex;
    background-color: $baseColor;
  }

  .container {
    width: 82.5rem;
    margin: auto;
  }
</style>
