<script setup>
    
</script>

<template>
    <footer class="container">
        <div id="background">
            <img src="/src/assets/images/1.jfif" alt="footer background">
            <div class="overlay"></div>
        </div>
        <div id="details">
            <div id="copyright"><h6>Copyright © 2024. All rights are reserved</h6></div>
            <div id="contacts">
                <a href="#"><img src="/src/assets/images/TikTok.png" alt="tiktok"></a>
                <a href="#"><img src="/src/assets/images/Facebook.png" alt="facebook"></a>
                <a href="#"><img src="/src/assets/images/Youtube.png" alt="youtube"></a>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';

    footer {
        height: 37.5rem;
        border-radius: 1rem;
        position: relative;
        margin-bottom: 4rem;

        #background {
            position: relative;
            width: 82.5rem;
            height: inherit;

            img {
                width: inherit;
                height: inherit;
                border-radius: 1rem;
                object-fit: cover;
            }

            .overlay {
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 1rem;
                width: inherit;
                height: inherit;
                background-color: $overlay75Color;
            }
        }

        #details {
            position: absolute;
            left: 4rem;
            bottom: 4rem;
            display: flex;
            align-items: center;
            width: calc(100% - 8rem);
            justify-content: space-between;

            #copyright {
                color: $white;
            }

            #contacts {
                display: flex;
                gap: 1.5rem;
            }
        }
    }
</style>