<script setup>
    import { storeToRefs }  from 'pinia'
    import { useAuthStore } from '@/stores/auth'

    const authentication = useAuthStore()
    const { user } = storeToRefs(authentication)
</script>

<template>
    <section class="w-full h-dvh bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Đăng nhập web vlog
                    </h1>
                    <form @submit.prevent="authentication.login" class="space-y-4 md:space-y-6">
                        <div>
                            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Tên tài khoản
                                <span class="text-main">*</span>
                            </label>
                            <input v-model="user.username" type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                            <small class="text-main font-bold">Username error</small>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Mật khẩu
                                <span class="text-main">*</span>
                            </label>
                            <input v-model="user.password" type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                            <small class="text-main font-bold">Password error</small>
                        </div>
                        <button type="submit" class="w-full text-white bg-my-blue hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-my-blue dark:hover:bg-blue-600 dark:focus:ring-primary-800">Đăng nhập</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>