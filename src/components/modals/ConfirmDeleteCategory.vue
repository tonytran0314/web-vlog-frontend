<script setup>
    import { useModalStore } from '@/stores/modals'

    const modal = useModalStore()
</script>

<template>
    <div class="p-8 rounded-2xl flex flex-col gap-12 bg-box">
        <div class="flex justify-between">
            <div class="text-2xl flex items-center">Xoá Thể Loại</div>
            <div 
                @click="modal.close"
                class="cursor-pointer size-12 p-3 rounded-full bg-secondary-button">
                <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="#879FBD" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </div>
        </div>
        <p>Bạn có chắc muốn xoá thể loại này không ?</p>
        <form class="flex justify-end gap-4">
            <div @click="modal.close" class="flex items-center border-none rounded-full py-2 px-6 bg-secondary-button cursor-pointer">Huỷ</div>
            <button type="submit" class="flex items-center border-none rounded-full py-2 px-6 bg-main">Xoá</button>
        </form>
    </div>
</template>
