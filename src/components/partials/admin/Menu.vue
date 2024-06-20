<script setup>
    
</script>

<template>
    <div id="admin-menu">
        <div id="nav-bar">
            <p>Menu</p>
            <nav>
                <router-link to="/admin">
                    <!-- <font-awesome-icon :icon="['fas', 'home']" /> -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="#ffffff" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                    </svg>
                    <h6>Bảng điều khiển</h6>
                </router-link>
                <router-link to="/admin/vlog">
                    <font-awesome-icon :icon="['fas', 'video']" />
                    <h6>Quản lý Vlogs</h6>
                </router-link>
                <router-link to="/admin/category">
                    <font-awesome-icon :icon="['fas', 'layer-group']" />
                    <h6>Quản lý thể loại</h6>
                </router-link>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';  
    
    #admin-menu {
        min-width: 16rem;
        height: 100vh;
        padding: 2rem 0;
        position: fixed;
        background-color: $boxColor;

        #nav-bar {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            padding: 2rem;

            p {
                color: $darkLabel;
            }

            nav {
                display: flex;
                flex-direction: column;
                gap: 2rem;

                a {
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: .75rem;
                    color: $white;
                }
            }

            svg {
                width: 1rem;
            }
        }
    }
</style>