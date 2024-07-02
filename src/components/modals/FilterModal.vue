<script setup>
    import { onClickOutside } from '@vueuse/core'
    import { ref } from 'vue'

    const modal = ref(null)
    const emit = defineEmits(['closeModal'])

    const closeModal = () => {
        emit('closeModal')
    }

    onClickOutside(modal, () => {
        closeModal()
    })
</script>

<template>
    <Transition name="modal">
        <div class="overlay">
            <div class="modal" ref="modal">
                <div class="modal-header">
                    <h3>Bộ lọc</h3>
                    <div @click="closeModal" class="exit-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="#879FBD" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>
                    </div>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="filter-row">
                            <div id="date-filter" class="input">
                                <label for="date"><h6>Ngày:</h6></label>
                                <select name="date" id="date">
                                    <option value="all">Tất cả</option>
                                    <option value="nearest">Gần nhất</option>
                                    <option value="farthest">Xa nhât</option>
                                </select>
                            </div>
                            <div id="privacy-filter" class="input">
                                <label for="privacy"><h6>Riêng tư:</h6></label>
                                <select name="privacy" id="privacy">
                                    <option value="all">Tất cả</option>
                                    <option value="hide">Video ẩn</option>
                                    <option value="show">Video hiện</option>
                                </select>
                            </div>
                        </div>
                        <div id="category-filter" class="filter-column">
                            <h6>Thể loại:</h6>

                            <div id="category-filter-body">
                                <div class="category">
                                    <input type="checkbox" id="" name="" value="">
                                    <label for="">Thể loại 1</label>
                                </div>
                                <div class="category">
                                    <input type="checkbox" id="" name="" value="">
                                    <label for="">Thể loại 1</label>
                                </div>
                                <div class="category">
                                    <input type="checkbox" id="" name="" value="">
                                    <label for="">Thể loại 1</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <h6>Áp dụng</h6>
                    </div>
                </form>
            </div>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
    @import '@/assets/variables';  

    .modal-body {
        padding: 2.5rem 1.5rem 3.5rem 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;

        #category-filter {
            display: flex;
            flex-direction: column;
            gap: .5rem;

            #category-filter-body {
                display: flex;
                gap: 1.5rem;
                flex-wrap: wrap;

                .category {
                    display: flex;
                    gap: .25rem;
                }
            }
        }
    }

    .filter-row {
        display: flex;
        gap: 6rem;

        .input {
            display: flex;
            gap: 1rem;
            align-items: center;

            select {
                padding: .75rem 1rem;
                border-radius: 1.5rem;
                border: 1px solid $darkLabel;
                color: $white;
                background-color: $boxColor;

                option {
                display: flex;
                gap: 1rem;
                }
            }
        }
    }
</style>

<style lang="scss">
    @import '@/assets/variables';  

    .overlay {
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $overlay75Color;

        .modal {
            padding: 1.5rem;
            border-radius: 1rem;
            max-width: 50%;
            color: $white;
            background-color: $boxColor;

            .modal-header {
                display: flex;
                justify-content: space-between;

                .exit-button {
                    cursor: pointer;
                    width: 3rem;
                    height: 3rem;
                    padding: .75rem;
                    border-radius: 50%;
                    background-color: $secondaryButton;

                    svg {
                        
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                }
            }

            .modal-footer {
                display: flex;
                justify-content: center;

                h6 {
                    border: none;
                    border-radius: 1.5rem;
                    cursor: pointer;
                    padding: .5rem 1.5rem;
                    color: $white;
                    background-color: $red;
                }
            }
        }
    }
    
    .modal-enter-active,
    .modal-leave-active {
        transition: all 0.25s ease;
    }

    .modal-enter-from,
    .modal-leave-to {
        opacity: 0;
        transform: scale(1);
    }
</style>