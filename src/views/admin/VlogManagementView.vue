<script setup>
    import Menu from '@/components/partials/admin/Menu.vue'
    import Setting from '@/components/partials/admin/Setting.vue'
    import Pagination from '@/components/pagination/Pagination.vue'
    import FilterModal from '@/components/modals/FilterModal.vue'

    import { ref } from 'vue'

    const test = 10

    const isFilterModalOpen = ref(false)

    const openFilterModal = () => {
        isFilterModalOpen.value = true
    }

    const closeFilterModal = () => {
        isFilterModalOpen.value = false
    }
</script>

<template>
    <div class="admin-container">
        <Menu />
        <div class="menu-dummy"></div>
        <div class="body">
            <Setting />
            <div id="vlog-management">
                <div class="body-header">
                    <h1>Quản lý Vlogs</h1>
                    <div class="actions">
                        <div @click="openFilterModal" class="button"><font-awesome-icon :icon="['fas', 'sliders-h']" /><h6>Bộ lọc</h6></div>
                        <div class="action-buttons">
                            <div class="button"><font-awesome-icon :icon="['fas', 'eye-slash']" /><h6>Ẩn/Hiện</h6></div>
                            <div class="button"><font-awesome-icon :icon="['fas', 'trash']" /><h6>Xoá</h6></div>
                            <div class="button"><font-awesome-icon :icon="['fas', 'pen']" /><h6>Sửa</h6></div>
                            <router-link to="/admin/vlog/add" class="button primary-button">
                                <font-awesome-icon :icon="['fas', 'plus']" />
                                <h6>Thêm mới</h6>
                            </router-link>
                        </div>
                    </div>
                </div>
                <!-- <div id="vlog-table">
                    <table>
                        <tr>
                            <th></th>
                            <th>Hình nền</th>
                            <th>Chi tiết</th>
                            <th>Thể loại</th>
                            <th>Riêng tư</th>
                            <th>Ngày đăng</th>
                            <th></th>
                        </tr>
                        <tr v-for="t in test">
                            <td><input type="checkbox" name="" id=""></td>
                            <td><img src="@/assets/images/11.png" alt=""></td>
                            <td class="details">
                                <div class="title"><p>Tiêu đề video. Tiêu đề video. Tiêu đề video. Tiêu đề video Tiêu đề video. Tiêu đề video. Tiêu đề video. Tiêu đề video Tiêu đề video. Tiêu đề video. Tiêu đề video. Tiêu đề video Tiêu đề video. Tiêu đề video. Tiêu đề video. Tiêu đề video Tiêu đề video. Tiêu đề video. Tiêu đề video. Tiêu đề video</p></div>
                                <div class="description"><span>Mô tả video, mô tả video, mô tả video, Mô tả video, mô tả video, mô tả video, Mô tả video, mô tả video, mô tả video Mô tả video, mô tả video, mô tả video, Mô tả video, mô tả video, mô tả video, Mô tả video, mô tả video, mô tả video Mô tả video, mô tả video, mô tả video, Mô tả video, mô tả video, mô tả video, Mô tả video, mô tả video, mô tả video </span></div>
                            </td>
                            <td class="category"><p>Thể loại 1, Thể loại 2, Thể loại 3, Thể loại 4, Thể loại 5, Thể loại 6,
                                Thể loại 7, Thể loại Thể loại 1, Thể loại 2, Thể loại 3, Thể loại 4, Thể loại 5, Thể loại 6,
                                Thể loại 7, Thể loại</p></td>
                            <td><font-awesome-icon :icon="['fas', 'eye']" /></td>
                            <td>06/20/2024</td>
                            <td class="options"><font-awesome-icon :icon="['fas', 'ellipsis-h']" /></td>
                        </tr>
                    </table>
                </div> -->
                <Pagination />
            </div>
        </div>
    </div>
    <FilterModal v-show="isFilterModalOpen" @closeModal="closeFilterModal" />
</template>

<style lang="scss" scoped>
    @import '@/assets/variables';  

    #vlog-management {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        #vlog-table {
            border-radius: 1rem;
            color: $white;
            background-color: $boxColor;

            table, th, td {
                // border: 1px solid $white;
            }

            table {
                width: 100%;
                border-spacing: 2rem;

                img {
                    width: 12rem;
                    height: 7rem;
                    border-radius: 1rem;
                }

                tr {
                    cursor: pointer;
                }

                td.details {
                    display: flex;
                    flex-direction: column;
                    gap: .5rem;

                    .title {
                        overflow: hidden;
                        width: 33rem;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }

                    .description {
                        overflow: hidden;
                        width: 33rem;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        color: $darkLabel;
                    }
                }

                td.category {
                    max-width: 12rem;
                }

                td.options {
                    svg {
                        cursor: pointer;
                    }
                }
            }
        }
    }

    
</style>