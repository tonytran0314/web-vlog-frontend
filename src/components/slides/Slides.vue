<script setup>
    import SlideItem from '@/components/slides/SlideItem.vue'
    import { useVlogStore } from '@/stores/vlogs'
    import { register } from 'swiper/element/bundle'

    register()

    const vlogStore = useVlogStore()
    await vlogStore.getLatestVlogs()
</script>

<template>
    <swiper-container 
        id="slides" class="container" 
        speed="500" loop="true"
        :autoplay="{ delay: 8000 }"
        :pagination="{ clickable: true }"
        style="--swiper-pagination-color: #EC454F;--swiper-pagination-bullet-size: 12px;"
        >
        <swiper-slide v-for="vlog in vlogStore.vlogs">
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
    @import '@/assets/variables';    
    
    #slides {
        height: 38rem;
        border-radius: 1rem;
    }
</style>