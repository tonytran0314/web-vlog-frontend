<script setup>
    import SlideItem from './SlideItem.vue'

    import axios from 'axios'
    import { ref } from 'vue'
    import { register } from 'swiper/element/bundle'

    register()

    const latestVlogs = ref(null)

    const getLatestVlogs = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/latest-vlogs')
            latestVlogs.value = response.data.data
        } catch (error) {
            console.error(error)
        }
    }

    await getLatestVlogs()
</script>

<template>
    <swiper-container 
        id="slides" class="container" 
        speed="500" loop="true"
        :autoplay="{ delay: 8000 }"
        :pagination="{ clickable: true }"
        style="--swiper-pagination-color: #EC454F;--swiper-pagination-bullet-size: 12px;"
        >
        <swiper-slide v-for="vlog in latestVlogs">
            <SlideItem
                :title="vlog.title"
                :slug="vlog.slug"
                :date="vlog.date"
                :description="vlog.description"
                :categories="vlog.categories"
            />
        </swiper-slide>
    </swiper-container>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';    
    
    #slides {
        height: 38rem;
        border-radius: 1rem;
    }
</style>