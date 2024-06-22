<script setup>
    import Slides from '/src/components/slides/Slides.vue'
    import Feature from '/src/components/features/Feature.vue'
    import Menu from '/src/components/partials/Menu.vue'
    import Footer from '/src/components/partials/Footer.vue'
    
    import FeatureSkeleton from '/src/components/skeletons/FeatureSkeleton.vue'
    import SlidesSkeleton from '/src/components/skeletons/SlidesSkeleton.vue'
</script>

<template>  
    <div class="master-container">
        <Menu />

        <main>
                <Suspense>
                    <template #default>
                        <div class="home">
                            <Slides />
                            <Feature />
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
    @import '/src/assets/variables';    
    
    .home {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }
</style>