<script setup>
    
</script>

<template>
    <div id="video-container" class="container">
        <div id="video">
            <video controls>
                <source src="http://127.0.0.1:8000/storage/videoplayback.mp4" type="video/mp4">
            </video>
            <!-- <div id="reaction">
                <div id="my-reaction"></div>
                <div id="reactions"></div>
            </div> -->
        </div>
        <div id="video-detail">
            <h1>Title here</h1>
            <p>00/00/2024</p>
            <p>Description</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';

    #video-container {
        display: flex;
        flex-direction: column;
        gap: 3.5rem;
    }

    #video {
        position: relative;
        width: 100%;

        video {
            width: 100%;
            border-radius: 1rem;
            background-color: $darkLabel;
        }

        #reaction {
            display: flex;
            gap: 1rem;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);

            #my-reaction {
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                cursor: pointer;
                background-color: $boxColor;
            }
            #reactions {
                width: 12rem;
                height: 3rem;
                border-radius: 2rem;
                background-color: $boxColor;
            }
        }
    }

    #video-detail {
        padding: 1rem 1.5rem;
        border-radius: 1rem;
        background-color: $boxColor;
        h1 {
        }
    }
</style>