<script setup></script>

<template>
    <div class="wrapper w-full h-dvh flex flex-col justify-center items-center text-white">
        <div class="flex flex-col gap-8 items-center">
            <div class="text-5xl font-bold">404 Error</div>
            <div class="text-4xl font-bold">Page Not Found</div>
        </div>
        <router-link 
            :to="{ name: 'Home' }" 
            class="text-xl font-bold py-4 px-8 rounded-full bg-main"
        >
            Back to Home
        </router-link>
    </div>
</template>
