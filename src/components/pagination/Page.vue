<script setup>
    
</script>

<template>
    <div class="page">
        <h6>1</h6>
    </div>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';
    
    .page {
        padding: .5rem 1rem;
        border-radius: .5rem;
        cursor: pointer;
        transition: .3s;
        color: $white;
        background-color: $boxColor;

        &:hover {
            background-color: $red;
        }
    }
</style>