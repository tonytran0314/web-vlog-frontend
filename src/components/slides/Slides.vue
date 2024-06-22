<script setup>
    import SlideItem from './SlideItem.vue'

    import axios from 'axios'
    import { ref, watchEffect } from 'vue'
    import { register } from 'swiper/element/bundle'

    register()

    const latestVlogs = ref(null)

    const getLatestVlogs = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/latest-vlogs')
            return response.data.data
        } catch (error) {
            console.error(error)
        }
    }

    watchEffect(() => {
        getLatestVlogs()
            .then(response => {
                latestVlogs.value = response
                console.log(latestVlogs.value)
            })
            .catch(error => {
                console.error(error)
            })
    })
</script>

<template>
    <swiper-container 
        id="slides" class="container" 
        speed="500" loop="true"
        :autoplay="{ delay: 8000 }"
        :pagination="{ clickable: true }"
        style="--swiper-pagination-color: #EC454F;--swiper-pagination-bullet-size: 12px;"
        >
        <swiper-slide v-for="vlog in latestVlogs"><SlideItem /></swiper-slide>
    </swiper-container>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';    
    
    #slides {
        height: 38rem;
        border-radius: 1rem;
    }
</style>