<script setup>
    import Menu from '/src/components/partials/Menu.vue'
    import Video from '/src/components/video/Video.vue'
    import Feature from '/src/components/features/Feature.vue'
    import Footer from '/src/components/partials/Footer.vue'
    import SlidesSkeleton from '/src/components/skeletons/SlidesSkeleton.vue'
    import FeatureSkeleton from '/src/components/skeletons/FeatureSkeleton.vue'

    // an array contains the vlog categories, show features by those categories
    const features = [
        {
            id: 100,
            name: 'Buster Baumbach',
            slug: 'buster-baumbach'
        },
        {
            id: 88,
            name: 'Nestor Lebsack',
            slug: 'nestor-lebsack'
        },
    ]
</script>

<template>
    <div class="master-container">
        <Menu />

        <main>
            <Suspense>
                <template #default>
                    <div class="watch-video">
                        <Video />
                        <Feature v-for="feature in features" :feature="feature" />
                    </div>
                </template>
                <template #fallback>
                    <div class="watch-video">
                        <SlidesSkeleton />
                        <FeatureSkeleton />
                    </div>
                </template>
            </Suspense>
        </main>

        <Footer />
    </div>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';

    .watch-video {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }
</style>