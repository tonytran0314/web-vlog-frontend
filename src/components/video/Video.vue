<script setup>
    import { storeToRefs }          from 'pinia'
    import { useVlogStore }         from '@/stores/vlogs'
    import { Player, Video, DefaultUi, PipControl } from '@vime/vue-next'
    // import { onMounted, ref }       from 'vue'
    // import { useVlogControlsStore } from '@/stores/vlog-controls'

    // const video = ref(null)
    // const controls = useVlogControlsStore()

    const { vlog } = storeToRefs(useVlogStore())

    // onMounted(() => {
    //     controls.setVideoElement(video.value)
    // })

    // To enable customized video controls, uncomment the commented codes
</script>

<template>

    <!-- customized controls -->
    <!-- <video 
        ref="video" 
        @click="controls.togglePlay"
        @timeupdate="controls.updateTime"
        @loadedmetadata="controls.setDuration"
        class="size-full object-contain rounded-2xl" autoplay>

            <source :src="vlog.video"> 

    </video> -->

    <!-- default controls -->
    <!-- <video class="size-full object-contain rounded-2xl" autoplay controls>
        <source src="https://media.vimejs.com/720p.mp4"> 
    </video> -->

    <Player>
        <Video crossorigin="">
            <source  
                :src="vlog.video" 
                type="video/mp4" />
        </Video>
        <DefaultUi></DefaultUi>
    </Player>
</template>