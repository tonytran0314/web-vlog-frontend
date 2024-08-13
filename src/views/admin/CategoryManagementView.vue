<script setup>
    import Menu from '@/components/partials/admin/Menu.vue'
    import Setting from '@/components/partials/admin/Setting.vue'
    import Pagination from '@/components/pagination/Pagination.vue'
    import AddCategory from "@/components/modals/AddCategory.vue"
    import EditCategory from '@/components/modals/EditCategory.vue'
    import ConfirmDeleteCategory from '@/components/modals/ConfirmDeleteCategory.vue'
    import Dropdown from '@/components/table/Dropdown.vue'

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
    const table = 'category'

    const toggleDropdown = (categoryId) => {
        tableActions.toggleDropdown(table, categoryId)
    }

    const isDropdownOpen = (categoryId) => {
        return tableActions.isDropdownOpen(table, categoryId)
    }

    const edit = (category) => {
        modal.open(EditCategory, category)
        tableActions.closeAllDropdown()
    }
    
    const remove = (category) => {
        modal.open(ConfirmDeleteCategory, category)
        tableActions.closeAllDropdown()
    }

    onMounted(() => { category.all() })

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
                <button @click="modal.open(AddCategory)"
                    class="cursor-pointer flex items-center gap-2 text-white bg-my-blue hover:bg-gray-900 rounded-full px-5 py-2.5 me-2 mb-2 dark:bg-my-blue dark:hover:bg-blue-600">
                    <font-awesome-icon :icon="['fas', 'plus']" /><div>Thêm mới</div>
                </button>
            </div>
            
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
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
                                    @click="toggleDropdown(category.id)" 
                                    v-if="!isDropdownOpen(category.id)" 
                                    :icon="['fas', 'ellipsis-h']"
                                    class="cursor-pointer size-5 rounded-full p-1 hover:bg-gray-500" />
                                <font-awesome-icon
                                    v-if="isDropdownOpen(category.id)"  
                                    :icon="['fas', 'x']"
                                    class="cursor-pointer size-5 rounded-full p-1 hover:bg-gray-500" />
                                <Dropdown 
                                    v-if="isDropdownOpen(category.id)" 
                                    @edit="edit(category)"
                                    @remove="remove(category)" />
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
