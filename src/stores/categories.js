import { defineStore } from 'pinia'
import apiClient from '@/api/apiClient' 
import { useToast } from "vue-toastification"
import { useModalStore } from '@/stores/modals'
import { ref } from 'vue'

const toast = useToast()
const ADDED_MESSAGE = 'Added Category'
const UPDATED_MESSAGE = 'Updated Category'

export const useCategoryStore = defineStore('categories', () => {

    const categories = ref(null)

    const all = async () => {
        try {
            const response = await apiClient.get('/categories')
            categories.value = response.data.data
        } catch (error) {
            console.error(error)
        }
    }

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
        categories,
        all,
        add
    }
})