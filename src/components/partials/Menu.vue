<script setup>
    
</script>

<template>
    <div id="menu" class="container">
        <div id="logo"></div>
        <nav>
            <ul>
                <li><router-link to="/"><h6>Trang chủ</h6></router-link></li>
                <li><router-link to="/"><h6>Gia Huy là ai?</h6></router-link></li>
                <li><router-link to="/category"><h6>Series</h6></router-link></li>
                <li><router-link to="/"><h6>Số Đặc Biệt</h6></router-link></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';

    #menu {
        height: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $white;

        #logo {}

        nav {
            ul {
                display: flex;
                gap: 3.5rem;

                li {
                    list-style-type: none;

                    a {
                        color: $white;
                        text-decoration: none;
                    }
                }
            }
        }
    }
</style>