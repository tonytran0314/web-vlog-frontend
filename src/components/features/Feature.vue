<script setup>
    import VideoCard from '@/components/features/VideoCard.vue'
    import SeeMoreButton from '@/components/features/SeeMoreButton.vue'

    import axios from 'axios'
    import { ref } from 'vue'

    const props = defineProps({
        feature: {
            type: Object,
            required: true
        }
    })
    
    const apiUrl = import.meta.env.VITE_API_URL
    const featurePath = 'feature/'
    const url = `${apiUrl}${featurePath}${props.feature.slug}`
    
    const featuredVlogs = ref(null)

    const getFeaturedVlogs = async () => {
        try {
            const response = await axios.get(url)
            featuredVlogs.value = response.data.data
        } catch (error) {
            console.error(error)
        }
    }
 
    await getFeaturedVlogs()
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