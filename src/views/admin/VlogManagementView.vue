<script setup>
    import Filter               from '@/components/modals/Filter.vue'
    import AddVlog              from '@/components/modals/AddVlog.vue'
    import Dropdown             from '@/components/table/Dropdown.vue'
    import EditVlog             from '@/components/modals/EditVlog.vue'
    import Menu                 from '@/components/partials/admin/Menu.vue'
    import Setting              from '@/components/partials/admin/Setting.vue'
    import Pagination           from '@/components/pagination/Pagination.vue'
    import ConfirmDeleteVlog    from '@/components/modals/ConfirmDeleteVlog.vue'

    import { storeToRefs }          from 'pinia'
    import { useRoute }             from 'vue-router'
    import { onMounted, watch }     from 'vue'
    import { useVlogStore }         from '@/stores/vlogs'
    import { useModalStore }        from '@/stores/modals'
    import { useTableActionStore }  from '@/stores/table-actions'

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

    const toggleDropdown = (vlogId) => {
        tableActions.toggleDropdown(table, vlogId)
    }

    const isDropdownOpen = (vlogId) => {
        return tableActions.isDropdownOpen(table, vlogId)
    }

    const edit = (vlog) => {
        modal.open(EditVlog, vlog)
        tableActions.closeAllDropdown()
    }
    
    const remove = (vlog) => {
        modal.open(ConfirmDeleteVlog, vlog)
        tableActions.closeAllDropdown()
    }
    
    onMounted(() => {
        vlogStore.getVlogsByCategory(category)
    })

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

                    <div @click="modal.open(AddVlog)"
                        class="flex items-center gap-2 text-white bg-my-blue hover:bg-gray-900 rounded-full px-5 py-2.5 me-2 mb-2 dark:bg-my-blue dark:hover:bg-blue-600">
                        <font-awesome-icon :icon="['fas', 'plus']" /><div>Thêm mới</div>
                    </div>
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
                                <img :src="vlog.thumbnail" alt="thumbnail" class="rounded-xl">
                            </td>
                            <td class="px-6 py-4 space-y-4">
                                <div class="line-clamp-1 font-bold">{{ vlog.title }}</div>
                                <div class="line-clamp-2">{{ vlog.description }}</div>
                            </td>
                            <td class="px-6 py-4">
                                <p v-for="category in vlog.categories">{{ category.name }}</p>
                            </td>
                            <td class="px-6 py-4">
                                <font-awesome-icon v-if="vlog.public" :icon="['fas', 'eye']" class="text-green-500" />
                                <font-awesome-icon v-else :icon="['fas', 'eye-slash']" class="text-red-500" />
                            </td>
                            <td class="px-6 py-4">
                                {{ vlog.date }}
                            </td>
                            <td class="px-6 py-4 text-center relative">
                                <font-awesome-icon 
                                    @click="toggleDropdown(vlog.id)" 
                                    v-if="!isDropdownOpen(vlog.id)" 
                                    :icon="['fas', 'ellipsis-h']"
                                    class="cursor-pointer size-5 rounded-full p-1 hover:bg-gray-500" />
                                <font-awesome-icon
                                    v-if="isDropdownOpen(vlog.id)"  
                                    :icon="['fas', 'xmark']"
                                    class="cursor-pointer size-5 rounded-full p-1 hover:bg-gray-500" />
                                <Dropdown 
                                    v-if="isDropdownOpen(vlog.id)" 
                                    @edit="edit(vlog)"
                                    @remove="remove(vlog)" />
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
