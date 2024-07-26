<script setup>
    import PlayPauseReplay from '@/components/video/controls/media/PlayPauseReplay.vue'    
    import Volume from '@/components/video/controls/media/Volume.vue'    
    import Timestamp from '@/components/video/controls/media/Timestamp.vue'    
    import Fullscreen from '@/components/video/controls/media/Fullscreen.vue'    
</script>

<template>
    <div class="flex justify-between items-center">
        <div class="flex gap-6 items-center">
            <PlayPauseReplay />
            <Volume />
            <Timestamp />
        </div>
        <Fullscreen />
    </div>
</template>

<style>
    
</style>