<script setup>
  import Menu from './components/partials/Menu.vue'
  import Footer from './components/partials/Footer.vue'
</script>

<template>

  <div class="master-container">
    <Menu />

    <main>
      <RouterView />
    </main>

    <Footer />
  </div>

</template>

<style lang="scss">
  @import '/src/assets/variables';

  .master-container {
    width: 100%;
    background-color: $baseColor;
  }

  .container {
    width: 82.5rem;
    margin: auto;
  }
</style>
