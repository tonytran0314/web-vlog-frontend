<script setup>
    import Feature from '/src/components/features/Feature.vue'
    import Menu from '/src/components/partials/Menu.vue'
    import Footer from '/src/components/partials/Footer.vue'
</script>

<template>
    
    <div class="master-container">
        <Menu />

        <main>
            <div id="category" class="container">
                <Feature />
            </div>
        </main>

        <Footer />
    </div>

</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';

</style>