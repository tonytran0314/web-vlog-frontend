import { defineStore } from 'pinia'
import apiClient from '@/api/apiClient' 
import { useToast } from "vue-toastification"
import { useModalStore } from '@/stores/modals'
import { reactive } from 'vue'

const toast = useToast()
const ADDED_MESSAGE = 'Added Category'
const UPDATED_MESSAGE = 'Updated Category'
const PATH = '/categories'

export const useCategoryStore = defineStore('categories', () => {

    const modal = useModalStore()
    const categories = reactive({
        list: null,
        links: null,
        totalCategories: null,
        totalPages: null 
    })

    const all = async (page) => {
        try {
            const response = await apiClient.get(PATH, { params: { page: page } })
            categories.list = response.data.data
            categories.links = response.data.pagination.links
            categories.totalCategories = response.data.pagination.totalCategories
            categories.totalPages = response.data.pagination.totalPages
        } catch (error) {
            console.error(error)
        }
    }

    const add = async (categoryName) => {
        const newCategory = { name : categoryName }

        modal.close()

        try {
            const response = await apiClient.post(PATH, newCategory)
            
            categories.list.unshift(response.data.data)
            
            toast.success(ADDED_MESSAGE)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const edit = async (category) => {
        const updatedCategory = { name: category.name }
        const endpoint = `${PATH}/${category.id}`
        const categoryToUpdate = categories.list.find(cate => cate.id === category.id)
        
        modal.close()

        try {
            await apiClient.put(endpoint, updatedCategory)

            categoryToUpdate.name = category.name
            
            toast.success(UPDATED_MESSAGE)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return {
        categories,
        all,
        add,
        edit
    }
})