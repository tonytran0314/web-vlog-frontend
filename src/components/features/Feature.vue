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
    <div class="features container">
        <h2>{{ feature.name }}</h2>
        <div class="feature-body">
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

<style lang="scss" scoped>
    @import '@/assets/variables';  
    
    .features {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        h2 {
            color: $lightBlue;
            text-decoration: underline;
            text-transform: capitalize;
        }

        .feature-body {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
</style>