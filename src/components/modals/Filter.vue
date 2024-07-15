<script setup>
    import { useModalStore } from '@/stores/modals'

    const { closeModal } = useModalStore()
</script>

<template>
    <div class="p-8 rounded-2xl flex flex-col gap-12 bg-box">
        <div class="flex justify-between">
            <div class="text-2xl flex items-center">Bộ lọc</div>
            <div @click="closeModal" 
                class="cursor-pointer size-12 p-3 rounded-full bg-secondary-button">
                <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="#879FBD" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </div>
        </div>
        <form class="flex flex-col gap-12">
            <div class="flex flex-col gap-12">
                <div class="flex gap-24">
                    <div class="flex gap-4 items-center">
                        <label for="date">Ngày:</label>
                        <select name="date" id="date" class="py-3 px-4 rounded-full bg-box border-solid border-2 border-my-blue">
                            <option value="all">Tất cả</option>
                            <option value="nearest">Gần nhất</option>
                            <option value="farthest">Xa nhât</option>
                        </select>
                    </div>
                    <div class="flex gap-4 items-center">
                        <label for="privacy">Riêng tư:</label>
                        <select name="privacy" id="privacy" class="py-3 px-4 rounded-full bg-box border-solid border-2 border-my-blue">
                            <option value="all">Tất cả</option>
                            <option value="hide">Video ẩn</option>
                            <option value="show">Video hiện</option>
                        </select>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <div>Thể loại:</div>

                    <div class="flex flex-wrap gap-8">
                        <div class="flex gap-2 items-center">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600">
                            <label for="">Thể loại 1</label>
                        </div>
                        <div class="flex gap-2 items-center">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600">
                            <label for="">Thể loại 1</label>
                        </div>
                        <div class="flex gap-2 items-center">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600">
                            <label for="">Thể loại 1</label>
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" class="flex justify-center bg-my-blue text-center border-none rounded-full py-2 px-6 hover:bg-blue-600">Áp dụng</button>
        </form>
    </div>
</template>
