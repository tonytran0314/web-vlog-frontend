<script setup>
    import { useModalStore } from "@/stores/modals"

    const store = useModalStore()

</script>

<template>
    <Teleport to="body">
        <Transition name="modal">
            <div class="modal-wrapper" @click.self="store.closeModal" v-if="store.modalState?.component">
                <component
                    :is="store.modalState?.component"
                    v-bind="store.modalState?.props" />
            </div>
        </Transition>
    </Teleport>
</template>

<style lang="scss" scoped>
    @import '@/assets/variables';  
    .modal-wrapper {
        position: fixed;
        left: 0;
        top: 0;

        z-index: 500;

        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: $overlay75Color;
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