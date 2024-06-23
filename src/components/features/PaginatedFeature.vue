<script setup>
    import VideoCard from '/src/components/features/VideoCard.vue'
    import Pagination from '/src/components/pagination/Pagination.vue'

    import axios from 'axios'
    import { ref } from 'vue'

    const vlogs = ref(null)
    const links = ref(null)
    const meta = ref(null)

    const getVlogsByCategory = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/vlogs')
            vlogs.value = response.data.data
            links.value = response.data.links
            meta.value = response.data.meta
        } catch (error) {
            console.error(error)
        }
    }

    await getVlogsByCategory()
</script>

<template>
    <div class="features container">
        <h2>Nhiều người xem nhất</h2> 
        <!-- should show how many vlogs in this category -->
        <div class="feature-body">
            <VideoCard
                v-for="vlog in vlogs" 
                :title="vlog.title"
                :slug="vlog.slug"
                :date="vlog.date"
            />
        </div>

        <Pagination :links="links" />
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