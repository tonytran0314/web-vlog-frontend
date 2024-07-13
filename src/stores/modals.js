import { defineStore } from "pinia"
import { reactive } from "vue"

export const useModalStore = defineStore('modals', () => {

    const basicState = { component: null, props: null }
    let modalState = reactive(basicState)

    const openModal = (payload) => {

        // prevent scrolling when the modal is opened
        const body = document.body
        if (body) body.style.overflow = "hidden"

        modalState.component = payload.component 
        modalState.props = payload.props || {} 
    }

    const closeModal = () => {

        // reset (allow scrolling when the modal is closed
        const body = document.body
        if (body) body.style.overflow = "auto"

        modalState.component = null
        modalState.props = null
    }

    return {
        modalState,
        openModal,
        closeModal
    }

})
