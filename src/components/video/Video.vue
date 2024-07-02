<script setup>
    import { ref } from 'vue'
    import axios from 'axios'
    
    import { useRoute, useRouter } from 'vue-router'

    const emit = defineEmits(['categories'])

    const value = ref(50)
    const isVideoPlaying = ref(true)

    const apiUrl = import.meta.env.VITE_API_URL
    const route = useRoute()
    const router = useRouter()
    const path = 'vlogs/'
    const url = `${apiUrl}${path}${route.params.slug}`
    const vlog = ref(null)

    const getVideo = async () => {
        try {
            const response = await axios.get(url)
            vlog.value = response.data.data
            emit('categories', response.data.data.categories)
        } catch (error) {
            router.push({ name: 'Not Found' })
        }
    }

    const playPauseToggle = () => {
        isVideoPlaying.value = !isVideoPlaying.value
    }

    await getVideo()
</script>

<template>
    <div class="video-container container">
        <div class="video">
            <video>
                <source src="http://127.0.0.1:8000/storage/videoplayback.mp4"> 
            </video>
            <div class="controls-container">
                <div class="timeline-container"></div>
                <div class="controls">
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
                </div>
            </div>
        </div>
        <div class="reaction">
            <div class="my-reaction"></div>
            <div class="reactions"></div>
        </div>
        <div class="video-detail">
            <h1>{{ vlog?.title }}</h1>
            <p>{{ vlog?.date }}</p>
            <p>{{ vlog?.description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/variables';

    .video-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .video {
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
    }

    .reaction {
        display: flex;
        gap: 1rem;
        justify-content: center;

        .my-reaction {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background-color: $blue;
        }

        .reactions {
            width: 10rem;
            height: 3rem;
            border-radius: 2rem;
            background-color: $boxColor;
        }
    }

    .video-detail {
        padding: 1rem 1.5rem;
        border-radius: 1rem;
        background-color: $boxColor;
    }
</style>