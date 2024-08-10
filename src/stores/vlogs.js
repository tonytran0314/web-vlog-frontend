import { defineStore } from 'pinia'
import apiClient from '@/api/apiClient'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from "vue-toastification"

const toast = useToast()
const ADDED_MESSAGE = 'Added Vlog'

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
    const newVlog = reactive({
        title: null,
        description: null,
        video: null,
        thumbnail: null,
        categories: [],
        public: true
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

    const add = async () => {

        const newVlogData = new FormData()

        // use append when sending HTTP request with files
        newVlogData.append('title', newVlog.title)
        newVlogData.append('description', newVlog.description)
        newVlogData.append('video', newVlog.video)
        newVlogData.append('thumbnail', newVlog.thumbnail)
        newVlogData.append('categories', JSON.stringify(newVlog.categories))
        newVlogData.append('public', newVlog.public ? 1 : 0)

        try {
            await apiClient.post('/vlogs', newVlogData)
            router.push({ name: 'Vlog Management' })
            toast.success(ADDED_MESSAGE)

            newVlog.title = null,
            newVlog.description = null,
            newVlog.video = null,
            newVlog.thumbnail = null,
            newVlog.categories = [],
            newVlog.public = true
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const setFile = (field, event) => {
        newVlog[field] = event.target.files[0]
    }

    return { 
        latestVlogs,
        vlogsByCategory, 
        vlog,
        relatedCategories,
        newVlog,
        getLatestVlogs, 
        getFeaturedVlogs,
        getVlogsByCategory,
        getVlog,
        add,
        setFile
    }

})
