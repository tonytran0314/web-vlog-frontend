<script setup>
    import { useAdminMenuStore } from '@/stores/admin-menu'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const { links } = useAdminMenuStore()
</script>

<template>
    <div class="bg-box h-dvh py-8 px-0 fixed w-[16rem]">
        <div class="space-y-12 pt-12">
            <div class="space-y-2">
                <p class="text-dark-label text-sm uppercase pl-8">Admin Menu</p>
                <nav class="text-white">
                    <router-link 
                        v-for="link in links"
                        :to="{ name: link.name }"
                        class="flex items-center gap-4 py-3 pl-12 relative hover:bg-my-blue"
                        :class="{ 'current-admin-tab': route.name === link.name || route.name === link.subname }"
                    >
                        <font-awesome-icon :icon="['fas', link.icon]" />
                        <div>{{ link.label }}</div>
                    </router-link>
                </nav>
            </div>
            <div class="space-y-2">
                <p class="text-dark-label text-sm uppercase pl-8">Client</p>
                <nav class="space-y-8 text-white">
                    <router-link 
                        :to="{ name: 'Home' }"
                        class="flex items-center gap-4 py-3 pl-12 hover:bg-my-blue"
                    >
                        <font-awesome-icon :icon="['fas', 'home']" />
                        <div>Trang chủ</div>
                    </router-link>
                </nav>
            </div>
        </div>
    </div>
</template>
