<script setup>
    import { useRoute } from 'vue-router'
    import { useVlogStore } from '@/stores/vlogs'
    import { storeToRefs } from 'pinia'
    import { watch } from 'vue'

    const vlogStore = useVlogStore()
    const { vlog } = storeToRefs(vlogStore)
    const route = useRoute()

    await vlogStore.getVlog(route.params.slug)

    watch(() => route.params.slug, (newSlug) => {
        vlogStore.getVlog(newSlug)
    })
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="video relative w-full h-[38rem]">
            <video class="w-full h-[38rem] object-cover rounded-2xl" controls>
                <source
                    src="http://127.0.0.1:8000/storage/videoplayback.mp4"> 
            </video>
            <div class="controls-container">
                <div class="timeline-container"></div>
                <!-- <div class="controls">
                    <div class="left-controls">
                        <button class="play-pause-button">
                            <font-awesome-icon
                                v-if="isVideoPlaying" 
                                :icon="['fas', 'pause']" size="2x"
                                @click="playPauseToggle" />
                            <font-awesome-icon
                                v-else
                                :icon="['fas', 'play']" size="2x"
                                @click="playPauseToggle" />
                        </button>
                        <div class="volume">
                            <font-awesome-icon :icon="['fas', 'volume-high']" size="xl" />
                            <div class="volume-slider">
                                <Slider v-model="value" class="w-56" />
                            </div>
                        </div>
                        <span>15:06/1:23:27</span>
                    </div>
                    <div class="right-controls">
                        <font-awesome-icon :icon="['fas', 'expand']" size="2x" />
                    </div>
                </div> -->
            </div>
        </div>
        <div class="flex gap-4 justify-center">
            <div class="size-12 rounded-full bg-main"></div>
            <div class="w-40 h-12 rounded-2xl bg-box"></div>
        </div>
        <div class="flex flex-col gap-6 py-4 px-6 rounded-2xl bg-box">
            <div class="text-3xl font-bold">{{ vlog?.title }}</div>
            <p>{{ vlog?.date }}</p>
            <p>{{ vlog?.description }}</p>
        </div>
    </div>
</template>

<style>
    /* .video {
        position: relative;
        width: 100%;
        height: 38rem;

        &:hover .controls-container {
            opacity: 1;
        }

        video {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            background-color: $darkLabel;
        }

        .controls-container {
            padding: 1.5rem 2rem;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 100;
            opacity: 1;
            transition: opacity 150ms ease-in-out;
            border-radius: 1rem;

            .controls {
                display: flex;
                justify-content: space-between;
                // background-color: $red;

                svg {
                    width: 1.5rem;
                    cursor: pointer;
                    opacity: .8;
                    transition: opacity 150ms ease-in-out;

                    &:hover {
                        opacity: 1;
                    }
                }

                .left-controls {
                    display: flex;
                    gap: 2rem;
                    align-items: center;

                    button {
                        border: none;
                        background: none;
                    }

                    .volume {
                        display: flex;
                        align-items: center;
                        gap: 1rem;

                        .volume-slider {
                            width: 5rem;
                            display: none;
                            transition: 150ms ease-in-out;

                            &:hover {
                                display: block;
                            }
                        }
                        
                        &:hover .volume-slider {
                            display: block;
                        }
                    }
                }
            }
        }
    } */
</style>
