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
    const volumeBar = ref(null)

    const controls = useVlogControlsStore()
    const { isVlogPlaying, duration, volumeIcon, currentTime, process } = storeToRefs(controls)

    const route = useRoute()
    await getVlog(route.params.slug)

    onMounted(() => {
        controls.watchExitFullScreenWithESC()
        controls.setDuration(video.value.duration)
    })
    watch(() => route.params.slug, (newSlug) => { getVlog(newSlug) })
</script>

<template>
    <div class="flex flex-col gap-4 text-white">
        <div ref="videoWrapper" class="group/video relative w-full h-[38rem]">
            <video
                @timeupdate="controls.updateTime(video)"
                @click="controls.togglePlay(video)" 
                ref="video" class="size-full object-contain rounded-2xl">
                <source src="http://localhost:8000/api/v1/video/videoplayback.mp4"> 
            </video>
            <div class="opacity-100 group-hover/video:opacity-100 transition-opacity duration-200 space-y-5 bg-gradient-to-b from-transparent to-overlay absolute bottom-0 w-full rounded-b-2xl pt-8 pb-6 px-6">
                <div
                    @click="controls.seek(video, $event)" 
                    class="group/timeline h-[7px] rounded cursor-pointer flex items-center">
                    <div class="bg-[rgba(100,100,100,.5)] h-[3px] w-full rounded relative group-hover/timeline:h-full">
                        <div
                            :style="{ width: process + '%' }"
                            class="absolute left-0 top-0 h-full rounded bg-main">
                            <div class="scale-0 size-4 bg-main rounded-full absolute -right-2 top-1/2 -translate-y-1/2 group-hover/timeline:scale-100"></div>
                        </div>
                        <div
                            id="preview"
                            class="hidden space-y-3 absolute right-0 -top-36 w-44 h-auto group-hover/timeline:block">
                            <img src="@/assets/images/2.png" alt="">
                            <p class="text-center">00:00</p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex gap-6 items-center">
                        <button class="cursor-pointer">
                            <font-awesome-icon
                                v-if="isVlogPlaying"
                                :icon="['fas', 'pause']" size="2x" @click="controls.togglePlay(video)" />
                            <font-awesome-icon 
                                v-else
                                :icon="['fas', 'play']" size="2x" @click="controls.togglePlay(video)" />
                        </button>
                        <div class="flex gap-3 items-center group/volume cursor-pointer">
                            <font-awesome-icon 
                                @click="controls.toggleMute(video, volumeBar)"
                                :icon="['fas', volumeIcon]" size="xl" />
                            <div class="w-0 transform transition-[width] origin-left scale-x-0 group-hover/volume:w-full group-hover/volume:scale-x-100 rounded flex items-center">
                                <input 
                                    ref="volumeBar"
                                    class="h-[6px] rounded cursor-pointer"
                                    @input="controls.setVolume(video, $event.target.value)"
                                    type="range" min="0" max="1" step="0.01" value="1">
                            </div>
                        </div>
                        <span>{{ currentTime }}/{{ duration }}</span>
                    </div>
                    <font-awesome-icon @click="controls.toggleFullscreen(videoWrapper)" :icon="['fas', 'expand']" size="2x" class="cursor-pointer" />
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
