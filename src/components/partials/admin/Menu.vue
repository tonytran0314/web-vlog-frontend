<script setup>
    
</script>

<template>
    <div class="bg-box h-dvh py-8 px-0 fixed w-[16rem]">
        <div class="flex flex-col gap-6 p-8">
            <p class="text-dark-label text-sm">Admin Menu</p>
            <nav class="flex flex-col gap-8">
                <router-link 
                    :to="{ name: 'Dashboard' }"
                    class="flex items-center gap-4"
                >
                    <font-awesome-icon :icon="['fas', 'home']" />
                    <div>Bảng điều khiển</div>
                </router-link>
                <router-link 
                    :to="{ name: 'Vlog Management' }"
                    class="flex items-center gap-4"
                >
                    <font-awesome-icon :icon="['fas', 'video']" />
                    <div>Quản lý Vlogs</div>
                </router-link>
                <router-link 
                    :to="{ name: 'Category Management' }"
                    class="flex items-center gap-4"
                >
                    <font-awesome-icon :icon="['fas', 'layer-group']" />
                    <div>Quản lý thể loại</div>
                </router-link>
            </nav>
        </div>
    </div>
</template>
