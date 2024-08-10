<script setup>
    import Menu from '@/components/partials/admin/Menu.vue'
    import Setting from '@/components/partials/admin/Setting.vue'
    import { useCategoryStore } from '@/stores/categories'
    import { useVlogStore } from '@/stores/vlogs'
    import { storeToRefs } from 'pinia'
    import { onMounted } from 'vue'

    const vlog = useVlogStore()
    const { newVlog } = storeToRefs(vlog)

    const category = useCategoryStore()
    const { categoriesWithoutPagination } = storeToRefs(category)

    onMounted(() => { category.list() })
</script>

<template>
    <Menu />
    <div class="admin-wrapper">
        <Setting />
        <div class="flex flex-col gap-12 p-10 text-white">
            <div class="text-4xl">Thêm Vlog mới</div>
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
                        <input v-model="newVlog.title" class="border-none py-3 px-4 rounded-full bg-secondary-button focus:outline-none" id="title" type="text">
                    </div>
                    <div class="flex flex-col gap-4">
                        <label for="description" class="text-lg font-bold">Mô tả</label>
                        <textarea v-model="newVlog.description" class="border-none py-3 px-4 rounded-2xl bg-secondary-button focus:outline-none" cols="30" rows="10" id="description"></textarea>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="text-lg font-bold">Thể loại</div>
                        <div class="flex flex-wrap gap-6">
                            <div v-for="category in categoriesWithoutPagination" :key="category.id" class="flex items-center">
                                <input 
                                    v-model="newVlog.categories"
                                    :value="category.id"
                                    :id="'category-' + category.id" 
                                    type="checkbox" 
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600">
                                <label :for="'category-' + category.id" class="ms-2 font-medium text-gray-900 dark:text-gray-300">{{ category.name }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-4 items-center">
                        <div class="text-lg font-bold">Hiện Vlog</div>
                        <label class="inline-flex items-center cursor-pointer">
                            <input v-model="newVlog.public" type="checkbox" class="sr-only peer" checked>
                            <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <button class="bg-my-blue text-lg font-bold rounded-full p-2 border-none" type="submit">Đăng Vlog</button>
                </form>
            </div>
        </div>
    </div>
</template>
