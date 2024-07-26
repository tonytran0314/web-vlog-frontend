<script setup>
    import { useVlogControlsStore } from '@/stores/vlog-controls'
    import { storeToRefs } from 'pinia'

    const controls = useVlogControlsStore()
    const { currentTime, duration } = storeToRefs(controls)
</script>

<template>
    <span>
        {{ controls.formattedTime(currentTime) }}/{{ controls.formattedTime(duration) }}
    </span>
</template>