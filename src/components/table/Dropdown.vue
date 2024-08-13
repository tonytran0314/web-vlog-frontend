<script setup>
    const emit = defineEmits(['edit', 'remove'])

    const handle = (action) => emit(action)
</script>

<template>
    <div class="bg-gray-700 rounded absolute z-50 -left-16 top-5">
        <div 
            @click="handle('edit')"
            class="flex gap-1 items-center rounded cursor-pointer py-3 px-6 dark:hover:bg-gray-500">
            <font-awesome-icon :icon="['fas', 'pen']" class="w-3 h-3 me-2" />
            <span>Sửa</span>
        </div>
        <div
            @click="handle('remove')" 
            class="flex gap-1 items-center cursor-pointer rounded py-3 px-6 dark:hover:bg-gray-600">
            <font-awesome-icon :icon="['fas', 'trash']" class="w-3 h-3 me-2" />
            <span>Xoá</span>
        </div>
    </div>
</template>