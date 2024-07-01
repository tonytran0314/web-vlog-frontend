<script setup>
    import Menu from '/src/components/partials/Menu.vue'
    import Video from '/src/components/video/Video.vue'
    import Feature from '/src/components/features/Feature.vue'
    import Footer from '/src/components/partials/Footer.vue'
    import SlidesSkeleton from '/src/components/skeletons/SlidesSkeleton.vue'
    import FeatureSkeleton from '/src/components/skeletons/FeatureSkeleton.vue'

    import { ref } from 'vue'

    const categories = ref(null)

    const passCategories = (vlogCategories) => {
        categories.value = vlogCategories
    }
</script>

<template>
    <div class="master-container">
        <Menu />

        <main>
            <Suspense>
                <template #default>
                    <div class="watch-video">
                        <Video @categories="passCategories" />
                        <Feature v-for="category in categories" :feature="category" />
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