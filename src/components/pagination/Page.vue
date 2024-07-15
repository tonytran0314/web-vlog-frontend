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
        class="py-2 px-4 bg-box text-lg font-bold rounded-lg hover:bg-main duration-300" 
        :class="{ 'bg-main': active }"
        >
        {{ name }}
    </router-link>
</template>
