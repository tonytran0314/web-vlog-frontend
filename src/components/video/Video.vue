<script setup>
    import { useRoute } from 'vue-router'
    import { storeToRefs } from 'pinia'
    import { watch, ref, onMounted } from 'vue'
    import { useVlogStore } from '@/stores/vlogs'
    import { useVlogControlsStore } from '@/stores/vlog-controls'

    const { vlog } = storeToRefs(useVlogStore())
    const { getVlog } = useVlogStore()

    const video = ref(null)
    const videoWrapper = ref(null)
    const { isVlogPlaying, duration } = storeToRefs(useVlogControlsStore())
    const { 
        togglePlay, 
        toggleFullscreen, 
        watchExitFullScreenWithESC,
        setDuration
    } = useVlogControlsStore()

    const route = useRoute()
    await getVlog(route.params.slug)

    onMounted(() => { watchExitFullScreenWithESC() })
    watch(() => route.params.slug, (newSlug) => { getVlog(newSlug) })
</script>

<template>
    <div class="flex flex-col gap-4 text-white">
        <div ref="videoWrapper" class="group relative w-full h-[38rem]">
            <video
                @loadedmetadata="setDuration(video.duration)"
                @click="togglePlay(video)" 
                ref="video" class="size-full object-contain rounded-2xl">
                <source src="http://127.0.0.1:8000/storage/videoplayback.mp4"> 
            </video>
            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 space-y-5 bg-gradient-to-b from-transparent to-overlay absolute bottom-0 w-full rounded-b-2xl pt-8 pb-6 px-6">
                <div class="w-full h-2 cursor-pointer">
                    <div class="relative size-full bg-[#ccc] rounded-full">
                    <div class="absolute h-full bg-main rounded-full w-1/2"></div>
                    <div class="absolute top-0 w-2 h-full bg-main cursor-pointer rounded-full left-1/2"></div>
                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex gap-6 items-center">
                        <button class="cursor-pointer">
                            <font-awesome-icon
                                v-if="isVlogPlaying"
                                :icon="['fas', 'pause']" size="2x" @click="togglePlay(video)" />
                            <font-awesome-icon 
                                v-else
                                :icon="['fas', 'play']" size="2x" @click="togglePlay(video)" />
                        </button>
                        <div class="flex gap-3 items-center">
                            <font-awesome-icon :icon="['fas', 'volume-high']" size="xl" />
                            <input id="default-range" type="range" value="70" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                        </div>
                        <span>15:06/{{ duration }}</span>
                    </div>
                    <font-awesome-icon @click="toggleFullscreen(videoWrapper)" :icon="['fas', 'expand']" size="2x" class="cursor-pointer" />
                </div>
            </div>
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
