<script setup>
    import PaginatedFeature from '@/components/features/PaginatedFeature.vue'
    import Menu from '@/components/partials/Menu.vue'
    import Footer from '@/components/partials/Footer.vue'
    
    import PaginatedFeatureSkeleton from '@/components/skeletons/PaginatedFeatureSkeleton.vue'
</script>

<template>
    
    <div class="master-container">
        <Menu />

        <main>
            <Suspense>
                <template #default>
                    <PaginatedFeature />
                </template>
                <template #fallback>
                    <PaginatedFeatureSkeleton />
                </template>
            </Suspense>
        </main>

        <Footer />
    </div>

</template>

<style lang="scss" scoped>
    @import '@/assets/variables';

</style>