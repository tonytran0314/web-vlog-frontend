<script setup>
    import Menu from '@/components/partials/Menu.vue'
    import VideoWrapper from '@/components/video/VideoWrapper.vue'
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
    <div class="wrapper">
        <Menu />

        <main>
            <Suspense>
                <template #default>
                    <div class="space-y-16">
                        <VideoWrapper />
                        <Feature v-for="category in relatedCategories" :feature="category" />
                    </div>
                </template>
                <template #fallback>
                    <div class="space-y-16">
                        <SlidesSkeleton />
                        <FeatureSkeleton />
                    </div>
                </template>
            </Suspense>
        </main>

        <Footer />
    </div>
</template>
