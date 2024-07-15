<script setup>
    import Page from '@/components/pagination/Page.vue'

    const props = defineProps({
        links: {
            type: Array
        }
    })
</script>

<template>
    <div class="flex justify-center gap-4">
        <Page 
            v-for="link in links" 
            :name="link.label" 
            :page="link.page"
            :active="link.active" />
    </div>
</template>
