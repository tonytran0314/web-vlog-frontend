<script setup>
    import VideoCardSkeleton from '@/components/skeletons/VideoCardSkeleton.vue'

    const skeletons = Array(8)
</script>

<template>
    <div class="features container">
        <Skeleton width="20rem" height="2.875rem" borderRadius=".5rem"></Skeleton>
        <div class="feature-body">
            <VideoCardSkeleton v-for="item in skeletons" />
        </div>

        <Skeleton width="100%" height="3.75rem" borderRadius="1rem"></Skeleton>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/variables';  
    
    .features {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        .feature-body {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
</style>