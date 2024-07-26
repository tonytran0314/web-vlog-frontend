<script setup>
    import { useVlogControlsStore } from '@/stores/vlog-controls'
    import { storeToRefs } from 'pinia'
    import { ref, onMounted } from 'vue'

    const volumeBar = ref(null)
    const controls = useVlogControlsStore()
    const { volumeIcon } = storeToRefs(controls)

    onMounted(() => {
        controls.setVolumeBar(volumeBar.value)
    })
</script>

<template>
    <div class="flex gap-3 items-center group/volume cursor-pointer">
        <div class="w-8">
            <font-awesome-icon 
                @click="controls.toggleMute"
                :icon="['fas', volumeIcon]" size="xl" />
        </div>
        <div class="w-0 transform transition-[width] origin-left scale-x-0 group-hover/volume:w-28 group-hover/volume:scale-x-100 flex items-center">
            <input 
                ref="volumeBar"
                @input="controls.setVolume"
                class="accent-white w-full h-[6px] rounded cursor-pointer"
                type="range" min="0" max="1" step="0.01" value="1">
        </div>
    </div>
</template>