<script setup>
    import VideoCardSkeleton from '/src/components/skeletons/VideoCardSkeleton.vue'
    import SeeMoreButton from '/src/components/features/SeeMoreButton.vue'
    import { ref } from 'vue'
</script>

<template>
    <div class="features container">
        <Skeleton width="20rem" height="2.875rem" borderRadius=".5rem"></Skeleton>
        <div class="feature-body">
            <div class="row">
                <VideoCardSkeleton />
                <VideoCardSkeleton />
                <VideoCardSkeleton />
                <VideoCardSkeleton />
            </div>
        </div>

        <Skeleton width="100%" height="3.75rem" borderRadius="1rem"></Skeleton>
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