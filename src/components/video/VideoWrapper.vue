<script setup>
    import { useRoute } from 'vue-router'
    import { storeToRefs } from 'pinia'
    import { watch, ref, onMounted } from 'vue'
    import { useVlogStore } from '@/stores/vlogs'
    import { useVlogControlsStore } from '@/stores/vlog-controls'
    import Video from '@/components/video/Video.vue'
    import Controls from '@/components/video/controls/Controls.vue'

    const { vlog } = storeToRefs(useVlogStore())
    const { getVlog } = useVlogStore()

    const videoWrapper = ref(null)

    const controls = useVlogControlsStore()

    const route = useRoute()
    await getVlog(route.params.slug)

    onMounted(() => {
        controls.setVideoWrapper(videoWrapper.value)
        controls.watchExitFullScreenWithESC()
    })
    watch(() => route.params.slug, (newSlug) => { getVlog(newSlug) })
</script>

<template>
    <div class="flex flex-col gap-4 text-white">
        <div ref="videoWrapper" class="group/video relative w-full h-auto">
            <Video />
            <Controls />
        </div>
        <!-- <div class="flex gap-4 justify-center">
            <div class="size-12 rounded-full bg-main"></div>
            <div class="w-40 h-12 rounded-2xl bg-box"></div>
        </div> -->
        <div class="flex flex-col gap-6 py-4 px-6 rounded-2xl bg-box">
            <div class="text-3xl font-bold">{{ vlog?.title }}</div>
            <p>{{ vlog?.date }}</p>
            <p>{{ vlog?.description }}</p>
        </div>
    </div>
</template>
