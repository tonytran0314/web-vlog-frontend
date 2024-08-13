import { defineStore } from "pinia"
import { ref } from "vue"

export const useTableActionStore = defineStore('table-actions', () => {

    const dropdown = ref({})

    const toggleDropdown = (table, index = null) => {
        dropdown.value[table] = (dropdown.value[table] !== index) ? index : null
    }

    const isDropdownOpen = (table, index) => {
        return dropdown.value[table] === index
    }

    return {
        dropdown,
        toggleDropdown,
        isDropdownOpen
    }

})