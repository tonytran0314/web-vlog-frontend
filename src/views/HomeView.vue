<script setup>
    import Slides from '/src/components/slides/Slides.vue'
    import Feature from '../components/features/Feature.vue'
</script>

<template>
    <div id="home">
        <Slides />
        <Feature />
        <Feature />
        <Feature />
    </div>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';    
    
    #home {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
</style>