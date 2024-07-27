import { defineStore } from 'pinia'
import apiClient from '@/api/apiClient'

export const useCategoryStore = defineStore('categories', () => {
    
    const add = async (categoryName) => {
        const newCategory = { name : categoryName }

        try {
            const response = await apiClient.post('/categories', newCategory)
        } catch (error) {
            console.error(error)
        }
    }

    return {
        add
    }
})