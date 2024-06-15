<script setup>
    import SlideItem from './SlideItem.vue'

    import { register } from 'swiper/element/bundle'

    register()

</script>

<template>
    <swiper-container 
        id="slides" class="container" 
        speed="500" loop="true"
        :autoplay="{ delay: 8000 }"
        :pagination="{ clickable: true }"
        style="--swiper-pagination-color: #EC454F;--swiper-pagination-bullet-size: 12px;"
        >
        <swiper-slide><SlideItem /></swiper-slide>
        <swiper-slide><SlideItem /></swiper-slide>
        <swiper-slide><SlideItem /></swiper-slide>
        <swiper-slide><SlideItem /></swiper-slide>
        <swiper-slide><SlideItem /></swiper-slide>
        <swiper-slide><SlideItem /></swiper-slide>
        <swiper-slide><SlideItem /></swiper-slide>
        <swiper-slide><SlideItem /></swiper-slide>
        <swiper-slide><SlideItem /></swiper-slide>
        <swiper-slide><SlideItem /></swiper-slide>
    </swiper-container>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';    
    
    #slides {
        height: 38rem;
        border-radius: 1rem;
    }
</style>