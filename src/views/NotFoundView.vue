<script setup>
    
</script>

<template>
    <div class="master-container">
        <p>404 Not Found</p>
        <router-link :to="{ name: 'Home' }">Back to Home</router-link>
    </div>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';

    a {
        background-color: $red;
    }
    
</style>