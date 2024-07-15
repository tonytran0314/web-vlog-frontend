<script setup>
    import VideoCardSkeleton from '@/components/skeletons/VideoCardSkeleton.vue'

    const skeletons = Array(8)
</script>

<template>
    <div class="animate-pulse flex flex-col gap-6">
        <div class="rounded-2xl bg-slate-700 h-9 w-[20rem]"></div>
        <div class="flex flex-wrap gap-4 justify-center">
            <VideoCardSkeleton v-for="skeleton in skeletons" />
        </div>
        <div class="rounded-full bg-slate-700 h-12 w-full"></div>
    </div>
</template>
