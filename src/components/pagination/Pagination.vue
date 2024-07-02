<script setup>
    import Page from '@/components/pagination/Page.vue'

    const props = defineProps({
        links: {
            type: Array
        }
    })
</script>

<template>
    <div id="pagination">
        <Page 
            v-for="link in links" 
            :name="link.label" 
            :page="link.page"
            :active="link.active" />
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/variables';
    
    #pagination {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }
</style>