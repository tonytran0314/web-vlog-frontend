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
                <div class="header">
                    <h3>Bộ lọc</h3>
                    <div @click="closeModal" class="exit-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="#879FBD" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>
                    </div>
                </div>
                <div class="body"></div>
                <div class="footer">
                    <h6>Áp dụng</h6>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';  

    
    
</style>

<style lang="scss">
    @import '/src/assets/variables';  

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
            color: $white;
            background-color: $boxColor;

            .header {
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

            .footer {
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