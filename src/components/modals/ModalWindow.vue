<script setup>
    import { useModalStore } from "@/stores/modals"

    const modal = useModalStore()

</script>

<template>
    <Teleport to="body">
        <Transition name="modal">
            <div  @click.self="modal.close" v-if="modal.content"
                class="fixed left-0 top-0 z-[500] w-full h-dvh flex justify-center items-center bg-overlay text-white">
                <component :is="modal.content" />
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
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