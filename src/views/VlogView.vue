<script setup>
    import Menu from '@/components/partials/Menu.vue'
    import Video from '@/components/video/Video.vue'
    import Feature from '@/components/features/Feature.vue'
    import Footer from '@/components/partials/Footer.vue'
    import SlidesSkeleton from '@/components/skeletons/SlidesSkeleton.vue'
    import FeatureSkeleton from '@/components/skeletons/FeatureSkeleton.vue'

    import { useVlogStore } from '@/stores/vlogs'
    import { storeToRefs } from 'pinia'

    const vlogStore = useVlogStore()
    const { relatedCategories } = storeToRefs(vlogStore)
</script>

<template>
    <div class="master-container">
        <Menu />

        <main>
            <Suspense>
                <template #default>
                    <div class="watch-video">
                        <Video />
                        <Feature v-for="category in relatedCategories" :feature="category" />
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
    @import '@/assets/variables';

    .watch-video {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }
</style>