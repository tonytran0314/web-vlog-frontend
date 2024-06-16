<script setup>
    import VideoCard from '/src/components/features/VideoCard.vue'
    import SeeMoreButton from '/src/components/features/SeeMoreButton.vue'
    import Pagination from '/src/components/pagination/Pagination.vue'
</script>

<template>
    <div class="features container">
        <h2>Nhiều người xem nhất</h2>
        <div class="feature-body">
            <div class="row">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
            <div class="row">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
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
            flex-direction: column;
            gap: 1rem;

            .row {
                display: inherit;
                gap: inherit;
            }
        }
    }
</style>