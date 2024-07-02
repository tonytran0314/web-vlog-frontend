<script setup>
    import Menu from '@/components/partials/Menu.vue'
    import Video from '@/components/video/Video.vue'
    import Feature from '@/components/features/Feature.vue'
    import Footer from '@/components/partials/Footer.vue'
    import SlidesSkeleton from '@/components/skeletons/SlidesSkeleton.vue'
    import FeatureSkeleton from '@/components/skeletons/FeatureSkeleton.vue'

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
    @import '@/assets/variables';

    .watch-video {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }
</style>