<script setup>
    import VideoCard from '/src/components/features/VideoCard.vue'
    import SeeMoreButton from '/src/components/features/SeeMoreButton.vue'
    import Pagination from '/src/components/pagination/Pagination.vue'

    import axios from 'axios'
    import { ref } from 'vue'

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
    <div class="features container">
        <h2>Nhiều người xem nhất</h2>
        <div class="feature-body">
            <VideoCard v-for="vlog in latestVlogs" />
        </div>


        <!-- has a prop to decide -->

        <!-- home: -->
        <SeeMoreButton />

        <!-- category: -->
        <!-- <Pagination /> -->
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