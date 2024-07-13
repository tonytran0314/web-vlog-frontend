<script setup>
    import VideoCard from '@/components/features/VideoCard.vue'
    import Pagination from '@/components/pagination/Pagination.vue'

    import { watch } from 'vue'
    import { useRoute } from 'vue-router'
    import { useVlogStore } from '@/stores/vlogs'
    import { storeToRefs } from 'pinia'

    const vlogStore = useVlogStore()
    const { vlogsByCategory } = storeToRefs(vlogStore)

    const route = useRoute()
    const category = {
        slug: route.params.slug,
        page: route.query.page || 1
    }
    
    await vlogStore.getVlogsByCategory(category)

    watch(() => route.query.page, (newPage) => {
        category.page = newPage
        vlogStore.getVlogsByCategory(category)
    })
</script>

<template>
    <div class="features container">
        <h2>{{ vlogsByCategory.header }} (có {{ vlogsByCategory.totalVlogs }} vlogs)</h2> 

        <Pagination v-if="vlogsByCategory.totalPages > 1" :links="vlogsByCategory.links" />
        
        <div class="feature-body">
            <VideoCard
                v-for="vlog in vlogsByCategory.list" 
                :title="vlog.title"
                :slug="vlog.slug"
                :date="vlog.date"
            />
        </div>

        <Pagination v-if="vlogsByCategory.totalPages > 1" :links="vlogsByCategory.links" />
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