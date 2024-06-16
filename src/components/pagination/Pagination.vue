<script setup>
    import Page from '/src/components/pagination/Page.vue'
</script>

<template>
    <div id="pagination">
        <Page />
        <Page />
        <Page />
        <Page />
        <Page />
        <Page />
        <Page />
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