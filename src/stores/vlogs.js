import { defineStore } from 'pinia'
import apiClient from '@/api/apiClient'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

export const useVlogStore = defineStore('vlog', () => {

    const latestVlogs = ref(null)
    const vlog = ref(null)
    const relatedCategories = ref(null)
    const vlogsByCategory = reactive({
        list: null,
        header: null,
        links: null,
        totalVlogs: null,
        totalPages: null 
    })

    const router = useRouter()

    const getLatestVlogs = async () => {
        try {
            const response = await apiClient.get('/latest-vlogs')
            latestVlogs.value = response.data.data
        } catch (error) {
            console.error(error)
        }
    }

    const getFeaturedVlogs = async (featureSlug) => {
        const url = `/feature/${featureSlug}`
        try {
            const response = await apiClient.get(url)
            return response.data.data
        } catch (error) {
            console.error(error)
        }
    }

    const getVlogsByCategory = async (category) => {
        const url = (
            category.slug === undefined ||
            category.slug === null || 
            category.slug === '') ? 
            'vlogs' : `categories/${category.slug}`
        
        try {
            const response = await apiClient.get(url, { params: { page: category.page } })
            vlogsByCategory.list = response.data.data
            vlogsByCategory.header = response.data.header
            vlogsByCategory.links = response.data.pagination.links
            vlogsByCategory.totalVlogs = response.data.pagination.totalVlogs
            vlogsByCategory.totalPages = response.data.pagination.totalPages
        } catch (error) {
            router.push({ name: 'Not Found' })
        }
    }

    const getVlog = async (vlogSlug) => {
        const url = `/vlogs/${vlogSlug}`
        try {
            const response = await apiClient.get(url)
            vlog.value = response.data.data
            relatedCategories.value = response.data.data.categories
        } catch (error) {
            router.push({ name: 'Not Found' })
        }
    }

    return { 
        latestVlogs,
        vlogsByCategory, 
        vlog,
        relatedCategories,
        getLatestVlogs, 
        getFeaturedVlogs,
        getVlogsByCategory,
        getVlog
    }

})
