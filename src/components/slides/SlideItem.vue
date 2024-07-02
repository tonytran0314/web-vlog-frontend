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
    <div class="slide-item">
        <div class="background">
            <img src="@/assets/images/11.png" alt="background">
        </div>
        <div class="slide-info">
            <div class="info-body">
                <div class="title">
                    <h1>{{ title }}</h1>
                </div>
                <p class="date">{{ date }}</p>
                <div class="description">
                    <p>{{ description }}</p>
                </div>
                <div class="categories">
                    <router-link 
                        v-for="category in categories" 
                        :to="{ name: 'Category', params: {slug: category.slug} }"
                        class="category"
                        >
                            {{ category.name }}
                    </router-link>
                </div>
            </div>
            <router-link 
                class="watch-button" 
                :to="{ name: 'Vlog', params: { slug: slug } }" 
                >
                <h6>Xem ngay</h6>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/variables';  

    .slide-item {
        position:relative;

        .background {
            img {
                width: 82.5rem;
                height: 38rem;
                object-fit: cover;
                border-radius: 1rem;
            }
        }

        .slide-info {
            position: absolute;
            width: 33rem;
            height: 38rem;
            left: 0;
            top: 0;
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
            padding: 3rem 2rem;
            display: flex;
            flex-direction: column;
            gap: 3rem;
            color: $white;
            background-color: $overlay65Color;

            .info-body {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                .title {
                    overflow: hidden;
                    width: 29rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .description {
                    overflow: hidden;
                    width: 29rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                }

                .categories {
                    display: flex;
                    gap: .5rem;
                    flex-wrap: wrap;
                    max-height: 5.75rem;
                    overflow: hidden;

                    .category {
                        border-radius: 2rem;
                        padding: .5rem 1rem;
                        background-color: $secondaryButton;
                    }
                }
            }

            .watch-button {
                padding: .75rem;
                text-align: center;
                border-radius: 2rem;
                text-decoration: none;
                background-color: $red;
                color: $white;
            }
        }
    }
</style>