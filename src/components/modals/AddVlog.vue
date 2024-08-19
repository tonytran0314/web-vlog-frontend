<script setup>
    import { storeToRefs }      from 'pinia'
    import { useVlogStore }     from '@/stores/vlogs'
    import { useCategoryStore } from '@/stores/categories'

    import MultiSelect          from 'primevue/multiselect'

    const vlog = useVlogStore()
    const { vlogData } = storeToRefs(vlog)

    const category = useCategoryStore()
    const { categoriesWithoutPagination } = storeToRefs(category)
</script>

<template>
    <div class="bg-box h-[85%] w-3/4 overflow-auto hide-scrollbar flex flex-col gap-12 p-8 text-white rounded-2xl">
        <div class="flex justify-between">
            <div class="text-2xl flex items-center">Thêm Vlog</div>
            <div 
                @click="modal.close"
                class="cursor-pointer size-12 p-3 rounded-full bg-secondary-button">
                <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="#879FBD" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </div>
        </div>
        <div class="w-full rounded-2xl p-8 bg-box space-y-10">
            <div class="flex gap-10">
                <div class="space-y-4 w-full">
                    <label for="video" class="text-lg font-bold">Chọn video</label>
                    <input 
                        @change="vlog.setFile('video', $event)"
                        class="block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="video" type="file" accept="video/mp4">
                </div>
                <div class="space-y-4 w-full">
                    <label for="thumbnail" class="text-lg font-bold">Chọn thumbnail</label>
                    <input 
                        @change="vlog.setFile('thumbnail', $event)"
                        class="block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="thumbnail" type="file" accept="image/png, image/jpeg">
                </div>
            </div>
            <form @submit.prevent="vlog.add" class="flex flex-col gap-10">
                <div class="flex flex-col gap-4">
                    <label for="title" class="text-lg font-bold">Tiêu đề</label>
                    <input v-model="vlogData.title" class="border-none py-3 px-4 rounded-full bg-secondary-button focus:outline-none" id="title" type="text">
                </div>
                <div class="flex flex-col gap-4">
                    <label for="description" class="text-lg font-bold">Mô tả</label>
                    <textarea v-model="vlogData.description" class="border-none py-3 px-4 rounded-2xl bg-secondary-button focus:outline-none" cols="30" rows="10" id="description"></textarea>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="text-lg font-bold">Thể loại</div>
                    <MultiSelect v-model="vlogData.categories" :options="categoriesWithoutPagination" optionLabel="name" filter placeholder="Chọn thể loại ..." class="w-full" />
                </div>
                <div class="flex gap-4 items-center">
                    <div class="text-lg font-bold">Hiện Vlog</div>
                    <label class="inline-flex items-center cursor-pointer">
                        <input v-model="vlogData.public" type="checkbox" class="sr-only peer" checked>
                        <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
                <button class="bg-my-blue text-lg font-bold rounded-full p-2 border-none" type="submit">Đăng Vlog</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .hide-scrollbar {
        scrollbar-width: none; /* For Firefox */
        -ms-overflow-style: none; /* For Internet Explorer and Edge */
    }

    .hide-scrollbar::-webkit-scrollbar {
        display: none; /* For Chrome, Safari, and Opera */
    }
</style>
