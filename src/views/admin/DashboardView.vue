<script setup>
    import Menu from '@/components/partials/admin/Menu.vue'
    import Setting from '@/components/partials/admin/Setting.vue'
</script>

<template>
    <Menu />
    <div class="admin-wrapper">
        <Setting />
        <div class="space-y-12 p-10">
            <div class="text-4xl text-white">Bảng điều khiển</div>
            <img src="@/assets/images/11.png" alt="dashboard background"
                class="rounded-2xl">
        </div>
    </div>
</template>
