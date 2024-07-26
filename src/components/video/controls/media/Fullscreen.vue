<script setup>
    import { useVlogControlsStore } from '@/stores/vlog-controls'

    const controls = useVlogControlsStore()
</script>

<template>
    <font-awesome-icon 
        size="2x" 
        class="cursor-pointer"
        :icon="['fas', 'expand']"
        @click="controls.toggleFullscreen"
    />
</template>