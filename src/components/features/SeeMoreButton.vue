<script setup>
    const props = defineProps({
        categorySlug: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <router-link :to="{ name: 'Category', params: { slug: props.categorySlug }  }" class="see-more">
        <h6>xem thêm</h6>
    </router-link>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';  
    
    .see-more {
        border-radius: 1rem;
        padding: 1rem 0;
        text-align: center;
        text-transform: capitalize;
        background-color: $boxColor;
        color: $white;
    }
</style>