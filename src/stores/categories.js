import { defineStore } from 'pinia'
import apiClient from '@/api/apiClient' 
import { useToast } from "vue-toastification"
import { useModalStore } from '@/stores/modals'
import { reactive, ref } from 'vue'

const toast = useToast()
const ADDED_MESSAGE = 'Added Category'
const UPDATED_MESSAGE = 'Updated Category'
const DELETED_MESSAGE = 'Deleted Category'
const PATH = '/categories'
const CATEGORY_PATH_WITHOUT_PAGINATION = '/list/category'

export const useCategoryStore = defineStore('categories', () => {

    const modal = useModalStore()
    const categoriesWithoutPagination = ref(null)
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

    // list all categories without pagination
    const list = async () => {
        try {
            const response = await apiClient.get(CATEGORY_PATH_WITHOUT_PAGINATION)
            categoriesWithoutPagination.value = response.data.data
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

    const remove = async (id) => {
        const endpoint = `${PATH}/${id}`
        const index = categories.list.findIndex(category => category.id === id);
        
        modal.close()

        try {
            await apiClient.delete(endpoint)

            if(index !== -1) categories.list.splice(index, 1)
            
            toast.success(DELETED_MESSAGE)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    list()

    return {
        categories,
        categoriesWithoutPagination,
        all,
        add,
        edit,
        remove
    }
})