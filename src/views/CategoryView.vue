<script setup>
    import PaginatedFeature from '/src/components/features/PaginatedFeature.vue'
    import Menu from '/src/components/partials/Menu.vue'
    import Footer from '/src/components/partials/Footer.vue'
    
    import PaginatedFeatureSkeleton from '/src/components/skeletons/PaginatedFeatureSkeleton.vue'
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
    @import '/src/assets/variables';

</style>