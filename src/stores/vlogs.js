import { useToast }         from "vue-toastification"
import { useRouter }        from 'vue-router'
import { defineStore }      from 'pinia'
import { ref, reactive }    from 'vue'
import { useModalStore }    from '@/stores/modals'

import apiClient            from '@/api/apiClient'

const toast = useToast()
const ADDED_MESSAGE = 'Added Vlog'

export const useVlogStore = defineStore('vlog', () => {

    const modal = useModalStore()
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
        const selectedCategories = newVlog.categories.map(category => category.id)
        const newVlogData = new FormData()

        // use append when sending HTTP request with files
        newVlogData.append('title', newVlog.title)
        newVlogData.append('description', newVlog.description)
        newVlogData.append('video', newVlog.video)
        newVlogData.append('thumbnail', newVlog.thumbnail)
        newVlogData.append('categories', JSON.stringify(selectedCategories))
        newVlogData.append('public', newVlog.public ? 1 : 0)

        modal.close()

        try {
            const response = await apiClient.post('/vlogs', newVlogData)

            newVlog.title = null,
            newVlog.description = null,
            newVlog.video = null,
            newVlog.thumbnail = null,
            newVlog.categories = [],
            newVlog.public = true

            vlogsByCategory.list.unshift(response.data.data)

            toast.success(ADDED_MESSAGE)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const edit = (updatedVlog) => {
        console.log(updatedVlog)
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
        edit,
        setFile
    }

})
