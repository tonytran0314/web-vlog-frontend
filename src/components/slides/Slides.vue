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
        speed="500" loop="true"
        :autoplay="{ delay: 8000 }"
        :pagination="{ clickable: true }"
        style="--swiper-pagination-color: #EC454F;--swiper-pagination-bullet-size: 12px;"
        class="rounded-2xl h-[38rem]" 
    >
        <swiper-slide v-for="vlog in vlogStore.latestVlogs">
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
