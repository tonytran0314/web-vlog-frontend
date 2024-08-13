<script setup>
    import Menu from '@/components/partials/admin/Menu.vue'
    import Setting from '@/components/partials/admin/Setting.vue'
    import Pagination from '@/components/pagination/Pagination.vue'
    import Filter from '@/components/modals/Filter.vue'
    import { useModalStore } from '@/stores/modals'
    import { useVlogStore } from '@/stores/vlogs'
    import { storeToRefs } from 'pinia'
    import { onMounted, watch } from 'vue'
    import { useRoute } from 'vue-router'
    import { useTableActionStore } from '@/stores/table-actions'

    const route = useRoute()
    const modal = useModalStore() 
    const vlogStore = useVlogStore()
    const { vlogsByCategory } = storeToRefs(vlogStore)
    const tableActions = useTableActionStore()
    const table = 'vlog'
    const category = {
        slug: null,
        page: route.query.page || 1
    }

    const toggleDropdown = (categoryId) => {
        tableActions.toggleDropdown(table, categoryId)
    }

    const isDropdownOpen = (categoryId) => {
        return tableActions.isDropdownOpen(table, categoryId)
    }

    const edit = (category) => {
        // modal.open(EditCategory, category)
        tableActions.toggleDropdown(table)
    }
    
    const remove = (category) => {
        // modal.open(ConfirmDeleteCategory, category)
        tableActions.toggleDropdown(table)
    }
    
    onMounted(() => vlogStore.getVlogsByCategory(category))

    watch(() => route.query.page, (newPage) => {
        category.page = newPage
        vlogStore.getVlogsByCategory(category)
    })
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
                                Công khai
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
                        <tr v-for="vlog in vlogsByCategory.list"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src="@/assets/images/11.png" alt="thumbnail" class="rounded-xl">
                            </td>
                            <td class="px-6 py-4 space-y-4">
                                <div class="line-clamp-1 font-bold">{{ vlog.title }}</div>
                                <div class="line-clamp-2">{{ vlog.description }}</div>
                            </td>
                            <td class="px-6 py-4">
                                <p v-for="category in vlog.categories">{{ category.name }}</p>
                            </td>
                            <td class="px-6 py-4">
                                <font-awesome-icon v-if="vlog.public" :icon="['fas', 'eye']" />
                                <font-awesome-icon v-else :icon="['fas', 'eye-slash']" />
                            </td>
                            <td class="px-6 py-4">
                                {{ vlog.date }}
                            </td>
                            <td class="px-6 py-4 text-center relative">
                                <font-awesome-icon 
                                    @click="toggleDropdown(vlog.id)" 
                                    :icon="['fas', 'ellipsis-h']"
                                    class="cursor-pointer" />
                                <div
                                    v-if="isDropdownOpen(vlog.id)"
                                    class="bg-gray-700 rounded absolute z-50 -left-16 top-5">
                                    <div 
                                        @click="edit(vlog)"
                                        class="flex gap-1 items-center rounded cursor-pointer py-3 px-6 dark:hover:bg-gray-500">
                                        <font-awesome-icon :icon="['fas', 'pen']" class="w-3 h-3 me-2" />
                                        <span>Sửa</span>
                                    </div>
                                    <div
                                        @click="remove(vlog)" 
                                        class="flex gap-1 items-center cursor-pointer rounded py-3 px-6 dark:hover:bg-gray-600">
                                        <font-awesome-icon :icon="['fas', 'trash']" class="w-3 h-3 me-2" />
                                        <span>Xoá</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Pagination 
                v-if="vlogsByCategory.totalPages > 1" 
                :links="vlogsByCategory.links" />
        </div>
    </div>
</template>
