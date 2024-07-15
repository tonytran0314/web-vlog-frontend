<script setup>
    const props = defineProps({
        categorySlug: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <router-link 
        :to="{ name: 'Category', params: { slug: props.categorySlug }  }" 
        class="bg-secondary-button rounded-full text-center py-3 text-lg font-bold capitalize"
    >
        xem thêm
    </router-link>
</template>
