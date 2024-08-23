<script setup>
    import { storeToRefs }              from 'pinia'
    import { useVlogStore }             from '@/stores/vlogs'
    import { useVlogControlsStore }     from '@/stores/vlog-controls'
    import { onMounted, ref, watch }    from 'vue'
    import { Player, Video, DefaultUi } from '@vime/vue-next'

    const video = ref(null)
    const controls = useVlogControlsStore()

    const { vlog } = storeToRefs(useVlogStore())

    watch(() => vlog.value.video, () => { video.value.load() })

    onMounted(() => {
        controls.setVideoElement(video.value)
        controls.setDuration()
    })
</script>

<template>

    <!-- customized controls -->
    <video 
        ref="video" 
        @click="controls.togglePlay"
        @timeupdate="controls.updateTime"
        @loadedmetadata="controls.setDuration"
        class="size-full object-contain rounded-2xl" >

            <source :src="vlog.video"> 

    </video>

    <!-- default controls -->
    <!-- <video ref="video" class="size-full object-contain rounded-2xl" autoplay controls>
        <source :src="vlog.video"> 
    </video> -->

    <!-- <Player>
        <Video crossorigin="">
            <source  
                :src="vlog.video" 
                type="video/mp4" />
        </Video>
        <DefaultUi></DefaultUi>
    </Player> -->
</template>