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
    <div class="flex flex-col gap-6">
        <div class="text-3xl font-bold text-main underline capitalize">
            {{ vlogsByCategory.header }} (có {{ vlogsByCategory.totalVlogs }} vlogs)
        </div> 

        <Pagination 
            v-if="vlogsByCategory.totalPages > 1" 
            :links="vlogsByCategory.links" />
        
        <div class="flex flex-wrap gap-4 justify-center">
            <VideoCard
                v-for="vlog in vlogsByCategory.list" 
                :title="vlog.title"
                :slug="vlog.slug"
                :date="vlog.date"/>
        </div>

        <Pagination 
            v-if="vlogsByCategory.totalPages > 1" 
            :links="vlogsByCategory.links" />
    </div>
</template>
