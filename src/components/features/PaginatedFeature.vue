<script setup>
    import VideoCard from '/src/components/features/VideoCard.vue'
    import Pagination from '/src/components/pagination/Pagination.vue'

    import axios from 'axios'
    import { reactive, watchEffect } from 'vue'
    import { useRoute } from 'vue-router'

    const apiUrl = import.meta.env.VITE_API_URL
    const route = useRoute()
    const slug = route.params.slug
    const path = (slug === undefined || slug === null || slug === '') ? 'vlogs' : `categories/${slug}` 
    const url = `${apiUrl}${path}`

    // should setup a function to validate page number : undefined, null, less than 1, not an integer ==> become 1
    if (route.query.page === undefined || 
        route.query.page === null ||
        route.query.page < 1 ) 
        { route.query.page = 1 }  

    const vlogs = reactive({
        list: null,
        header: null,
        links: null,
        totalVlogs: null,
        totalPages: null
    })
    
    const getVlogsByCategory = async () => {
        try {
            const response = await axios.get(url, { params: { page: route.query.page } })
            vlogs.list = response.data.data
            vlogs.header = response.data.header
            vlogs.links = response.data.pagination.links
            vlogs.totalVlogs = response.data.pagination.totalVlogs
            vlogs.totalPages = response.data.pagination.totalPages
        } catch (error) {
            console.error(error)
        }
    }

    watchEffect(async () => {
        await getVlogsByCategory()
    })

    await getVlogsByCategory()
        
</script>

<template>
    <div class="features container">
        <h2>{{ vlogs.header }} (có {{ vlogs.totalVlogs }} vlogs)</h2> 

        <Pagination v-if="vlogs.totalPages > 1" :links="vlogs.links" />
        
        <div class="feature-body">
            <VideoCard
                v-for="vlog in vlogs.list" 
                :title="vlog.title"
                :slug="vlog.slug"
                :date="vlog.date"
            />
        </div>

        <Pagination v-if="vlogs.totalPages > 1" :links="vlogs.links" />
    </div>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';  
    
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