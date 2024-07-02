<script setup>
    import VideoCardSkeleton from '@/components/skeletons/VideoCardSkeleton.vue'

    const skeletons = Array(24)
</script>

<template>
    <div class="features container">
        <Skeleton width="20rem" height="2.875rem" borderRadius=".5rem"></Skeleton>
        <div class="feature-body">
            <VideoCardSkeleton v-for="item in skeletons" />
        </div>

        <div class="feature-footer">
            <Skeleton width="50%" height="3.75rem" borderRadius="1rem"></Skeleton>
        </div>
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

        .feature-footer {
            display: flex;
            justify-content: center;
        }
    }
</style>