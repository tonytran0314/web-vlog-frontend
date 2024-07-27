import { defineStore } from 'pinia'
import apiClient from '@/api/apiClient' 
import { useToast } from "vue-toastification"
import { useModalStore } from '@/stores/modals'

const toast = useToast()
const ADDED_MESSAGE = 'Added Category'
const UPDATED_MESSAGE = 'Updated Category'

export const useCategoryStore = defineStore('categories', () => {
    
    const add = async (categoryName) => {
        const newCategory = { name : categoryName }
        const modal = useModalStore()

        modal.close()

        try {
            await apiClient.post('/categories', newCategory)
            
            toast.success(ADDED_MESSAGE)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return {
        add
    }
})