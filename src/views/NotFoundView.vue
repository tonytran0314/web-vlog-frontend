<script setup>
    
</script>

<template>
    <div class="center-full-height master-container">
        <div class="error-header">
            <h1>404</h1>
            <h1>Page Not Found</h1>
        </div>
        <router-link :to="{ name: 'Home' }" class="back-home-button">
            <h6>Back to Home</h6>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';

    .center-full-height {
        height: 100dvh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .error-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .back-home-button {
        padding: .75rem 1.5rem;
        border-radius: 1.5rem;
        background-color: $red;
    }
    
</style>