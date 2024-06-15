<script setup>
    
</script>

<template>
    <div class="cards">
        <div class="thumbnail">
            <img src="/src/assets/images/11.png" alt="thumbnail">
        </div>
        <div class="title">
            <h6>Tiêu đề Video. Tiêu đề Video. Tiêu đề Video. Tiêu đề Video Tiêu đề Video. Tiêu đề Video. Tiêu đề Video. Tiêu đề Video</h6>
        </div>
        <p>13/06/2024</p>
    </div>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';

    .cards {
        width: 19.875rem;
        height: 21.25rem;
        border-radius: .5rem;
        padding: 1rem;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: .75rem;
        background-color: $boxColor;

        .thumbnail {
            width: 100%;
            height: 12.5rem;
            border-radius: .5rem;

            img {
                width: inherit;
                height: inherit;
                object-fit: cover;
                border-radius: .5rem;
            }
        }

        .title {
            width: 100%;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            color: $white;
        }

        p {
            color: $darkLabel;
        }
    }
</style>