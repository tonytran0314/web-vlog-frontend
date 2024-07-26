<script setup>
    import { onMounted, ref } from 'vue'
    import { useVlogControlsStore } from '@/stores/vlog-controls'

    const video = ref(null)
    const controls = useVlogControlsStore()

    onMounted(() => {
        controls.setVideoElement(video.value)
        controls.setDuration()
    })
</script>

<template>

    <video 
        ref="video" 
        @click="controls.togglePlay"
        @timeupdate="controls.updateTime"
        class="size-full object-contain rounded-2xl">

            <source src="http://localhost:8000/api/v1/video/videoplayback.mp4"> 

    </video>
    
</template>