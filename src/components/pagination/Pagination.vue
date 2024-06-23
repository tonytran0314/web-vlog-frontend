<script setup>
    import Page from '/src/components/pagination/Page.vue'

    const props = defineProps({
        links: {
            type: Object,
            required: true
        }
    })

    const test = 'abc'
</script>

<template>
    <div id="pagination">
        <Page name="Trang đầu" :url="links.first" />
        <Page name="Trang cuối" :url="links.last" />
    </div>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';
    
    #pagination {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }
</style>