<script setup>
    
</script>

<template>
    <div id="admin-menu">
        <div id="nav-bar">
            <p>Menu</p>
            <nav>
                <router-link :to="{ name: 'Dashboard' }">
                    <font-awesome-icon :icon="['fas', 'home']" />
                    <h6>Bảng điều khiển</h6>
                </router-link>
                <router-link :to="{ name: 'Vlog Management' }">
                    <font-awesome-icon :icon="['fas', 'video']" />
                    <h6>Quản lý Vlogs</h6>
                </router-link>
                <router-link :to="{ name: 'Category Management' }">
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
        }
    }
</style>