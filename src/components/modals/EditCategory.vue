<script setup>
    import { useModalStore } from '@/stores/modals'

    const { closeModal } = useModalStore()
</script>

<template>
    <div class="inner">
        <div class="modal-header">
            <h3>Sửa thể loại</h3>
            <div @click="closeModal" class="exit-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="#879FBD" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </div>
        </div>
        <form>
            <div class="modal-body">
                <input type="text" name="category-name" id="category-name" placeholder="Tên thể loại ...">
            </div>
            <div class="modal-footer">
                <h6>Lưu</h6>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/variables';  

    .inner {
        padding: 2rem;
        border-radius: 1rem;
        display: flex;
        gap: 3rem;
        flex-direction: column;
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

        form {
            display: flex;
            gap: 1rem;

            input {
                border: none;
                padding: .75rem 1rem;
                border-radius: 1.5rem;
                width: 16rem;
                color: $white;
                background-color: $secondaryButton;

                &:focus {
                    outline: none;
                }

                &::placeholder {
                    color: $darkLabel;
                }
            }

            .modal-footer {
                display: flex;
                align-items: center;

                h6 {
                    border: none;
                    border-radius: 1.5rem;
                    cursor: pointer;
                    padding: .5rem 1.5rem;
                    color: $white;
                    background-color: $blue;
                }
            }
        }
    }
</style>