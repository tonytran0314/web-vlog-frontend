import { defineStore } from "pinia"
import { ref } from "vue"

export const useTableActionStore = defineStore('table-actions', () => {

    const dropdownIndex = ref(null)

    const toggleDropdown = (index) => {
        dropdownIndex.value = (dropdownIndex.value !== index) ? index : null
    }

    return {
        dropdownIndex,
        toggleDropdown
    }

})