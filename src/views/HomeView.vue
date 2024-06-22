<script setup>
    import Slides from '/src/components/slides/Slides.vue'
    import Feature from '/src/components/features/Feature.vue'
    import Menu from '/src/components/partials/Menu.vue'
    import Footer from '/src/components/partials/Footer.vue'
    import FeatureSkeleton from '/src/components/skeletons/FeatureSkeleton.vue'
</script>

<template>  
    <div class="master-container">
        <Menu />

        <main>
            <div id="home">
                <!-- <Slides /> -->
                <Suspense>
                    <template #default>
                        <Feature />
                    </template>
                    <template #fallback>
                        <FeatureSkeleton />
                    </template>
                </Suspense>
                <!-- <Suspense>
                    <template #default>
                        <Feature />
                    </template>
                    <template #fallback>
                        <FeatureSkeleton />
                    </template>
                </Suspense>
                <Suspense>
                    <template #default>
                        <Feature />
                    </template>
                    <template #fallback>
                        <FeatureSkeleton />
                    </template>
                </Suspense> -->
            </div>
        </main>

        <Footer />
    </div>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';    
    
    #home {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
</style>