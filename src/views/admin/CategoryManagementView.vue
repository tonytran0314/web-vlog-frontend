<script setup>
    import Menu from '@/components/partials/admin/Menu.vue'
    import Setting from '@/components/partials/admin/Setting.vue'
    import Pagination from '@/components/pagination/Pagination.vue'

    import AddCategory from "@/components/modals/AddCategory.vue"
    import EditCategory from '@/components/modals/EditCategory.vue'

    import { useModalStore } from "@/stores/modals"

    const store = useModalStore()

    const openModal = (component) => {
        store.openModal({ component: component })
    }

    const test = 10
</script>

<template>
    <div class="admin-container">
        <Menu />
        <div class="menu-dummy"></div>
        <div class="body">
            <Setting />
            <div id="category-management">
                <div class="body-header">
                    <h1>Quản lý Thể loại</h1>
                    <div class="actions">
                        <div class="action-buttons">
                            <div class="button">
                                <font-awesome-icon :icon="['fas', 'trash']" /><h6>Xoá</h6>
                            </div>

                            <div @click="openModal(EditCategory)" class="button">
                                <font-awesome-icon :icon="['fas', 'pen']" /><h6>Sửa</h6>
                            </div>

                            <div @click="openModal(AddCategory)" class="button primary-button">
                                <font-awesome-icon :icon="['fas', 'plus']" /><h6>Thêm mới</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="category-table">
                    <table>
                        <tr>
                            <th></th>
                            <th>
                                <span>Tên thể loại</span>
                                <font-awesome-icon :icon="['fas', 'arrow-up-short-wide']" />
                            </th>
                            <th>
                                <span>Số lượng vlog</span>
                                <font-awesome-icon :icon="['fas', 'arrow-down-short-wide']" />
                            </th>
                            <th>Ngày tạo</th>
                            <th></th>
                        </tr>
                        <tr v-for="t in test">
                            <td><input type="checkbox" name="" id=""></td>
                            <td>Tên thử nghiệm</td>
                            <td>100</td>
                            <td>06/20/2024</td>
                            <td class="options"><font-awesome-icon :icon="['fas', 'ellipsis-h']" /></td>
                        </tr>
                    </table>
                </div>
                <Pagination />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/variables';  

    #category-management {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        #category-table {
            border-radius: 1rem;
            color: $white;
            background-color: $boxColor;

            table {
                width: 100%;
                border-spacing: 2rem;

                td.options {
                    svg {
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>