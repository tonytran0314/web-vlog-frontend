import { defineStore } from "pinia"
import { ref, markRaw } from "vue"

export const useModalStore = defineStore('modals', () => {

    const content = ref(null)
    const propsData = ref(null)

    const open = (modal, props = null) => {
        // prevent scrolling when the modal is opened
        const body = document.body
        if (body) body.style.overflow = "hidden"

        content.value = markRaw(modal)
        propsData.value = props 
    }

    const close = () => {

        // reset (allow scrolling when the modal is closed)
        const body = document.body
        if (body) body.style.overflow = "auto"

        content.value = null
    }

    return {
        content,
        propsData,
        open,
        close
    }

})
