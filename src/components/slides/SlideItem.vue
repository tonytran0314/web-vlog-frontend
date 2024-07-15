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
        },
        description: {
            type: String,
            required: true
        },
        categories: {
            type: Array,
            required: true
        }
    })

</script>

<template>
    <div class="relative">
        <div>
            <img 
                src="@/assets/images/11.png" 
                alt="background"
                class="rounded-2xl w-full h-[38rem] object-cover">
        </div>
        <div class="absolute left-0 top-0 w-96 bg-overlay h-full rounded-l-2xl py-12 px-8 flex flex-col gap-12">
            <div class="flex flex-col gap-6">
                <div class="line-clamp-2 text-3xl font-bold">{{ title }}</div>
                <p class="text-dark-label">{{ date }}</p>
                <div class="line-clamp-4 ">
                    <p>{{ description }}</p>
                </div>
                <div class="flex gap-2 flex-wrap overflow-hidden max-h-[5.75rem]">
                    <router-link 
                        v-for="category in categories" 
                        :to="{ name: 'Category', params: {slug: category.slug} }"
                        class="py-2 px-4 bg-secondary-button rounded-full"
                        >
                            {{ category.name }}
                    </router-link>
                </div>
            </div>
            <router-link 
                class="bg-main text-center font-bold py-3 rounded-full" 
                :to="{ name: 'Vlog', params: { slug: slug } }" 
            >
                Xem ngay
            </router-link>
        </div>
    </div>
</template>
