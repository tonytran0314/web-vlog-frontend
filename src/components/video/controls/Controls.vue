<script setup>
    import Timeline from '@/components/video/controls/Timeline.vue'
    import Media from '@/components/video/controls/media/Media.vue'
</script>

<template>
    <div class="opacity-0 group-hover/video:opacity-100 transition-opacity duration-200 space-y-5 bg-gradient-to-b from-transparent to-overlay absolute bottom-0 w-full rounded-b-2xl pt-8 pb-6 px-6">
        <Timeline />
        <Media />
    </div>
</template>

<style>
    
</style>