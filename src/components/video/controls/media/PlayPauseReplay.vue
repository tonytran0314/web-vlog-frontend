<script setup>
    import { useVlogControlsStore } from '@/stores/vlog-controls'
    import { storeToRefs } from 'pinia'

    const controls = useVlogControlsStore()
    const { currentTime, duration, isVlogPlaying } = storeToRefs(controls)
</script>

<template>
    <button class="cursor-pointer">
        <div v-if="currentTime < duration">
            <font-awesome-icon
                v-if="isVlogPlaying"
                @click="controls.togglePlay"
                :icon="['fas', 'pause']"
                size="2x"
            />
            <font-awesome-icon 
                v-else
                @click="controls.togglePlay"
                :icon="['fas', 'play']" 
                size="2x"
            />
        </div>
        
        <font-awesome-icon 
            v-else
            size="2x"
            @click="controls.replay"
            :icon="['fas', 'rotate-left']"
        />
    </button>
</template>