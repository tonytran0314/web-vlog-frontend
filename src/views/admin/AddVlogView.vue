<script setup>
    import Menu from '@/components/partials/admin/Menu.vue'
    import Setting from '@/components/partials/admin/Setting.vue'
</script>

<template>
    <Menu />
    <div class="admin-wrapper">
        <Setting />
        <div class="flex flex-col gap-12 p-10 text-white">
            <div class="text-4xl">Thêm Vlog mới</div>
            <div class="flex gap-8">
                <div>
                    <img
                        class="w-full min-w-40 h-auto rounded-2xl"
                        src="@/assets/images/11.png" alt="thumbnail">
                </div>
                <div class="w-full rounded-2xl p-8 bg-box">
                    <form class="flex flex-col gap-10">
                        <div class="flex flex-col gap-4">
                            <label for=""><div class="text-lg font-bold">Tiêu đề</div></label>
                            <input class="border-none py-3 px-4 rounded-full bg-secondary-button focus:outline-none" type="text">
                        </div>
                        <div class="flex flex-col gap-4">
                            <label for=""><div class="text-lg font-bold">Mô tả</div></label>
                            <textarea class="border-none py-3 px-4 rounded-2xl bg-secondary-button focus:outline-none" cols="30" rows="10"></textarea>
                        </div>
                        <div class="flex flex-col gap-4">
                            <label for=""><div class="text-lg font-bold">Thể loại</div></label>
                            <div class="flex flex-wrap gap-6">
                                <div class="flex items-center">
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600">
                                    <label for="default-checkbox" class="ms-2 font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                                </div>
                                <div class="flex items-center">
                                    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checked-checkbox" class="ms-2 font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-4 items-center">
                            <div class="text-lg font-bold">Hiện Vlog</div>
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer">
                                <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        <button class="bg-my-blue text-lg font-bold rounded-full p-2 border-none" type="submit">Đăng Vlog</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
