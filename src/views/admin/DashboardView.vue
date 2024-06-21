<script setup>
    import Menu from '/src/components/partials/admin/Menu.vue'
    import Setting from '/src/components/partials/admin/Setting.vue'
</script>

<template>
    <div class="admin-container">
        <Menu />
        <div class="menu-dummy"></div>
        <div class="body">
            <Setting />
            <div id="dashboard">
                <div class="body-header">
                    <h1>Bảng điều khiển</h1>
                </div>
                <div id="dashboard-background">
                    <img src="/src/assets/images/11.png" alt="dashboard background">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';  

    #dashboard {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        #dashboard-background {
            height: calc(100vh - 16.25rem);
            width: 100%;
            img {
                border-radius: 1rem;
                width: inherit;
                height: inherit;
                object-fit: cover;
            }
        }
    } 
</style>


<style lang="scss">
    @import '/src/assets/variables';  

    .body {
        width: 100%;
        padding: 0 4rem 4rem 4rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .body-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: $white;

        a {
            color: $white;
            text-decoration: none;
        }

        .actions {
            display: flex;
            gap: 5rem;
            
            .action-buttons {
                display: flex;
                gap: 1rem;
            }
            
            .button {
                display: flex;
                align-items: center;
                gap: .75rem;
                padding: .5rem 1.5rem;
                border-radius: 1.5rem;
                cursor: pointer;
                background-color: $boxColor;
            }

            .primary-button {
                background-color: $blue;
            }
        }
    }

    .menu-dummy {
        min-width: 16rem;
    }
</style>
