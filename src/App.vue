<script setup>
  import Menu from './components/partials/Menu.vue'
  import Footer from './components/partials/Footer.vue'
</script>

<template>

  <Menu />

  <main>
    <RouterView />
  </main>

  <Footer />

</template>

<style scoped>
</style>
