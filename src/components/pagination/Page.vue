<script setup>
    const props = defineProps({
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <router-link to="url" class="page">
        <h6>{{ name }}</h6>
    </router-link>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';
    
    .page {
        padding: .5rem 1rem;
        border-radius: .5rem;
        cursor: pointer;
        transition: .3s;
        color: $white;
        background-color: $boxColor;

        &:hover {
            background-color: $red;
        }
    }

    .current_page {
        background-color: $red;
    }
</style>