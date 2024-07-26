<script setup>
    import VideoCard from '@/components/features/VideoCard.vue'
    import SeeMoreButton from '@/components/features/SeeMoreButton.vue'
    import { useVlogStore } from '@/stores/vlogs'

    const vlogStore = useVlogStore()

    const props = defineProps({
        feature: {
            type: Object
        }
    })
    
    const featuredVlogs = await vlogStore.getFeaturedVlogs(props.feature.slug)
</script>

<template>
    <div class="flex flex-col gap-6">
        <div class="text-3xl font-bold text-main underline capitalize">{{ feature.name }}</div>
        <div class="flex flex-wrap gap-4 justify-start text-white">
            <VideoCard
                v-for="vlog in featuredVlogs" 
                :title="vlog.title"
                :slug="vlog.slug"
                :date="vlog.date"
                :key="vlog.id"
            /> 
        </div>
        <SeeMoreButton :categorySlug="feature.slug" />
    </div>
</template>
