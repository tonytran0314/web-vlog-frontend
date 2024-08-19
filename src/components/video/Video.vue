<script setup>
    import { storeToRefs }          from 'pinia'
    import { useVlogStore }         from '@/stores/vlogs'
    import { onMounted, ref }       from 'vue'
    import { useVlogControlsStore } from '@/stores/vlog-controls'

    const video = ref(null)
    const controls = useVlogControlsStore()

    const { vlog } = storeToRefs(useVlogStore())

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

            <source :src="vlog.video"> 

    </video>
    
</template>