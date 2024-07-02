<script setup>
    import Slides from '@/components/slides/Slides.vue'
    import Feature from '@/components/features/Feature.vue'
    import Menu from '@/components/partials/Menu.vue'
    import Footer from '@/components/partials/Footer.vue'
    
    import FeatureSkeleton from '@/components/skeletons/FeatureSkeleton.vue'
    import SlidesSkeleton from '@/components/skeletons/SlidesSkeleton.vue'

    // later, this array would be fetch from DB. In admin dashboard, this array can be adjusted
    // the array should store id only
    // table `features`
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
                    <div class="home">
                        <Slides />
                        <Feature v-for="feature in features" :feature="feature" />
                    </div>
                </template>
                <template #fallback>
                    <div class="home">
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
    
    .home {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }
</style>