<script setup>
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const slug = route.params.slug

    const props = defineProps({
        name: {
            required: true
        },
        page: {
            type: Number
        },
        active: {
            type: Boolean,
            required: true
        }
    })
</script>

<template>
    <router-link 
        v-if="page !== null"
        :to="{ name: 'Category', params: { slug: slug}, query: { page: page } }" 
        class="page" 
        :class="{ 'current-page': active }"
        >
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

    .current-page {
        background-color: $red;
    }
</style>