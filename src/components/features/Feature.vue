<script setup>
    import VideoCard from '/src/components/features/VideoCard.vue'
</script>

<template>
    <div class="features container">
        <h2>Nhiều người xem nhất</h2>
        <div class="feature-body">
            <div class="row">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
            <div class="row">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
        <div class="see-more">
            <h6>xem thêm</h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';  
    
    .features {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        h2 {
            color: $lightBlue;
            text-decoration: underline;
            text-transform: capitalize;
        }

        .feature-body {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .row {
                display: inherit;
                gap: inherit;
            }
        }

        .see-more {
            border-radius: 1rem;
            padding: 1rem 0;
            text-align: center;
            text-transform: capitalize;
            cursor: pointer;
            background-color: $boxColor;
            color: $white;
        }
    }
</style>