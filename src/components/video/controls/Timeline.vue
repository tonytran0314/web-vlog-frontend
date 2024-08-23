<script setup>
    import { useVlogControlsStore } from '@/stores/vlog-controls'
    import { storeToRefs } from 'pinia'

    const controls = useVlogControlsStore()
    const { process, previewPosition, previewTime } = storeToRefs(controls)
</script>

<template>
    <div
        @click="controls.seek" 
        @mousemove="controls.preview"
        @mousedown="controls.startDragging"
        @mouseup="controls.stopDragging"
        class="group/timeline h-[7px] rounded cursor-pointer flex items-center">
        <div class="bg-[rgba(100,100,100,.5)] h-[3px] w-full rounded relative group-hover/timeline:h-full">
            <div
                :style="{ width: process }"
                class="absolute left-0 top-0 h-full rounded bg-main">
                <div class="scale-0 size-4 bg-main rounded-full absolute -right-2 top-1/2 -translate-y-1/2 group-hover/timeline:scale-100"></div>
            </div>
            
            <!-- with preview image -->
            <!-- <div
                id="preview"
                class="hidden space-y-3 absolute -top-36 w-44 h-auto group-hover/timeline:block"
                :style="{ left: previewPosition }">
                <img src="@/assets/images/2.png" alt="preview image" class="rounded-xl border-2 border-white">
                <p class="text-center">{{ controls.formattedTime(previewTime) }}</p>
            </div> -->

            <!-- without preview image -->
            <div
                id="preview"
                class="hidden space-y-3 absolute -top-10 bg-overlay rounded-full w-44 h-auto group-hover/timeline:block"
                :style="{ left: previewPosition }">
                <p class="text-center">{{ controls.formattedTime(previewTime) }}</p>
            </div>
        </div>
    </div>
</template>