<script setup>
    
</script>

<template>
    <div class="cards">
        <div class="thumbnail">
            <Skeleton width="100%" height="12.5rem" borderRadius=".5rem"></Skeleton>
        </div>
        <div class="title">
            <Skeleton width="100%" height="1.25rem"></Skeleton>
            <Skeleton width="75%" height="1.25rem"></Skeleton>
        </div>
        <Skeleton width="50%" height="1rem"></Skeleton>
    </div>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';

    .cards {
        width: 19.875rem;
        height: 21.25rem;
        border-radius: .5rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: $boxColor;

        .title {
            display: flex;
            flex-direction: column;
            gap: .75rem;
        }
    }
</style>