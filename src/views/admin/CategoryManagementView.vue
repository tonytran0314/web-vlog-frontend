<script setup>
    import Menu from '@/components/partials/admin/Menu.vue'
    import Setting from '@/components/partials/admin/Setting.vue'
    import Pagination from '@/components/pagination/Pagination.vue'
    import AddCategory from "@/components/modals/AddCategory.vue"
    import EditCategory from '@/components/modals/EditCategory.vue'
    import ConfirmDeleteCategory from '@/components/modals/ConfirmDeleteCategory.vue'

    import { useModalStore } from "@/stores/modals"
    import { useCategoryStore } from '@/stores/categories'
    import { storeToRefs } from 'pinia'
    import { onMounted, watch } from 'vue'
    import { useRoute } from 'vue-router'
    import { useTableActionStore } from '@/stores/table-actions'

    const route = useRoute()
    const modal = useModalStore()
    const category = useCategoryStore()
    const { categories } = storeToRefs(category)
    const tableActions = useTableActionStore()
    const { dropdownIndex } = storeToRefs(tableActions)

    const edit = (category) => {
        modal.open(EditCategory, category)
        tableActions.toggleDropdown(null)
    }
    
    const remove = (category) => {
        modal.open(ConfirmDeleteCategory, category)
        tableActions.toggleDropdown(null)
    }

    onMounted(() => {
        category.all()
    })

    watch(() => route.query.page, (newPage) => {
        category.all(newPage || 1)
    })
</script>

<template>
    <Menu />
    <div class="admin-wrapper">
        <Setting />
        <div class="space-y-12 p-10">
            <div class="flex justify-between">
                <div class="text-4xl text-white">Quản lý Thể loại</div>
                <div class="flex items-center gap-2">
                    <button 
                        type="button" class="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 rounded-full px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <font-awesome-icon :icon="['fas', 'trash']" class="w-3 h-3 me-2" />
                        <div>Xoá</div>
                    </button>
                    <button @click="modal.open(AddCategory)"
                        class="cursor-pointer flex items-center gap-2 text-white bg-my-blue hover:bg-gray-900 rounded-full px-5 py-2.5 me-2 mb-2 dark:bg-my-blue dark:hover:bg-blue-600">
                        <font-awesome-icon :icon="['fas', 'plus']" /><div>Thêm mới</div>
                    </button>
                </div>
            </div>
            

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Checkbox</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Tên thể loại
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Số lượng vlogs
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Ngày tạo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="category in categories.list"
                            :key="category.id"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600">
                            </td>
                            <td class="px-6 py-4">
                                {{ category.name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ category.totalVlogs }}
                            </td>
                            <td class="px-6 py-4">
                                {{ category.date }}
                            </td>
                            <td class="px-6 py-4 text-center relative">
                                <font-awesome-icon 
                                    @click="tableActions.toggleDropdown(category.id)" 
                                    :icon="['fas', 'ellipsis-h']"
                                    class="cursor-pointer" />
                                <div
                                    v-if="dropdownIndex === category.id"
                                    class="bg-gray-700 rounded absolute z-50 -left-16 top-5">
                                    <div 
                                        @click="edit(category)"
                                        class="flex gap-1 items-center rounded cursor-pointer py-3 px-6 dark:hover:bg-gray-500">
                                        <font-awesome-icon :icon="['fas', 'pen']" class="w-3 h-3 me-2" />
                                        <span>Sửa</span>
                                    </div>
                                    <div
                                        @click="remove(category)" 
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
                v-if="categories.totalPages > 1" 
                :links="categories.links" />
        </div>
    </div>
</template>
