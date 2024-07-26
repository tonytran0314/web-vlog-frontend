<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <router-link 
        :to="{ name: 'Vlog', params: { slug: slug } }"
        class="flex flex-col gap-3 w-[19.25rem] p-4 bg-box rounded-2xl"
    >
        <img 
            class="rounded-lg"
            src="@/assets/images/11.png" alt="thumbnail">
        <div class="text-lg font-bold line-clamp-2">{{ title }}</div>
        <p class="text-dark-label">{{ date }}</p>
    </router-link>
</template>
