<script setup>
    import Menu from '@/components/partials/admin/Menu.vue'
    import Setting from '@/components/partials/admin/Setting.vue'
    import Pagination from '@/components/pagination/Pagination.vue'
    import Filter from '@/components/modals/Filter.vue'
    import { useModalStore } from '@/stores/modals'

    const modal = useModalStore() 

    const test = 10
</script>

<template>
    <Menu />
    <div class="admin-wrapper">
        <Setting />
        <div class="p-10 space-y-12">
            <div class="flex justify-between">
                <div class="text-4xl text-white">Quản lý Vlogs</div>
                <div class="flex items-center gap-2">
                    <button 
                        @click="modal.open(Filter)" 
                        type="button" class="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 rounded-full px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <font-awesome-icon :icon="['fas', 'sliders']" /><div>Bộ lọc</div>
                    </button>
                
                    <button 
                        type="button" class="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 rounded-full px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <font-awesome-icon :icon="['fas', 'eye-slash']" class="w-3 h-3 me-2" />
                        <div>Ẩn/Hiện</div>
                    </button>

                    <router-link to="/admin/vlog/add"
                        class="flex items-center gap-2 text-white bg-my-blue hover:bg-gray-900 rounded-full px-5 py-2.5 me-2 mb-2 dark:bg-my-blue dark:hover:bg-blue-600">
                        <font-awesome-icon :icon="['fas', 'plus']" /><div>Thêm mới</div>
                    </router-link>
                </div>
            </div>


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Hình nền
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Chi tiết
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Thể loại
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Riêng tư
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Ngày đăng
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="t in test"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src="@/assets/images/11.png" alt="thumbnail" class="rounded-xl">
                            </td>
                            <td class="px-6 py-4 space-y-4">
                                <div class="line-clamp-1 font-bold">Tiêu đề video. Tiêu đề video. Tiêu đề video. Tiêu đề video Tiêu đề video. Tiêu đề video. Tiêu đề video. Tiêu đề video Tiêu đề video. Tiêu đề video. Tiêu đề video. Tiêu đề video Tiêu đề video. Tiêu đề video. Tiêu đề video. Tiêu đề video Tiêu đề video. Tiêu đề video. Tiêu đề video. Tiêu đề video</div>
                                <div class="line-clamp-2">Mô tả video, mô tả video, mô tả video, Mô tả video, mô tả video, mô tả video, Mô tả video, mô tả video, mô tả video Mô tả video, mô tả video, mô tả video, Mô tả video, mô tả video, mô tả video, Mô tả video, mô tả video, mô tả video Mô tả video, mô tả video, mô tả video, Mô tả video, mô tả video, mô tả video, Mô tả video, mô tả video, mô tả video</div>
                            </td>
                            <td class="px-6 py-4">
                                Thể loại 1, Thể loại 2, Thể loại 3, Thể loại 4, Thể loại 5, Thể loại 6,
                                Thể loại 7, Thể loại Thể loại 1, Thể loại 2, Thể loại 3, Thể loại 4, Thể loại 5, Thể loại 6,
                                Thể loại 7, Thể loại
                            </td>
                            <td class="px-6 py-4">
                                <font-awesome-icon :icon="['fas', 'eye']" />
                            </td>
                            <td class="px-6 py-4">
                                06/20/2024
                            </td>
                            <td class="px-6 py-4 text-right">
                                <font-awesome-icon :icon="['fas', 'ellipsis-h']" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Pagination />
        </div>
    </div>
</template>
