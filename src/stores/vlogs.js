import { useToast }         from "vue-toastification"
import { useRouter }        from 'vue-router'
import { defineStore }      from 'pinia'
import { ref, reactive }    from 'vue'
import { useModalStore }    from '@/stores/modals'

import apiClient            from '@/api/apiClient'

const toast = useToast()
const ADDED_MESSAGE = 'Added Vlog'
const UPDATED_MESSAGE = 'Updated Vlog'
const PATH = '/vlogs' // apply for methods below

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
    const vlogData = reactive({
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
        const selectedCategories = vlogData.categories.map(category => category.id)
        const newVlogData = new FormData()

        // use append when sending HTTP request with files
        newVlogData.append('title',         vlogData.title ?? '')
        newVlogData.append('description',   vlogData.description ?? '')
        newVlogData.append('video',         vlogData.video ?? '')
        newVlogData.append('thumbnail',     vlogData.thumbnail ?? '')
        newVlogData.append('public',        vlogData.public ? 1 : 0)
        newVlogData.append('categories',    (vlogData.categories.length !== 0) ? JSON.stringify(selectedCategories) : '')

        modal.close()

        try {
            const response = await apiClient.post('/vlogs', newVlogData)

            vlogData.title = null,
            vlogData.description = null,
            vlogData.video = null,
            vlogData.thumbnail = null,
            vlogData.categories = [],
            vlogData.public = true

            vlogsByCategory.list.unshift(response.data.data)

            toast.success(ADDED_MESSAGE)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const edit = async (updatedVlog) => {
        const selectedCategories = updatedVlog.categories.map(category => category.id)
        const endpoint = `${PATH}/${updatedVlog.id}`
        const vlogToUpdate = vlogsByCategory.list.find(vlog => vlog.id === updatedVlog.id)
        const updatedVlogData = new FormData() 

        updatedVlogData.append('_method',       'PUT')
        updatedVlogData.append('title',         updatedVlog.title ?? '')
        updatedVlogData.append('description',   updatedVlog.description ?? '')
        updatedVlogData.append('public',        updatedVlog.public ? 1 : 0)
        updatedVlogData.append('categories',    (updatedVlog.categories.length !== 0) ? JSON.stringify(selectedCategories) : '')

        if(vlogData.thumbnail) updatedVlogData.append('thumbnail', vlogData.thumbnail)

        modal.close()

        try {
            const res = await apiClient.post(endpoint, updatedVlogData)

            vlogToUpdate.title          = res.data.data.title
            vlogToUpdate.description    = res.data.data.description
            vlogToUpdate.public         = res.data.data.public
            vlogToUpdate.categories     = res.data.data.categories
            vlogToUpdate.thumbnail      = res.data.data.thumbnail

            vlogData.thumbnail = null

            toast.success(UPDATED_MESSAGE)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const remove = async (id) => {
        const endpoint = `${PATH}/${id}`
        const vlogToDelete = vlogsByCategory.list.find(vlog => vlog.id === id)
        const indexToDelete = vlogsByCategory.list.indexOf(vlogToDelete)

        modal.close()
        
        try {
            // chỗ này khi gọi api, trên server trả message luôn, nên xài message từ server, vì khi thay đổi chỉ đổi 1 lần
            await apiClient.delete(endpoint)

            if(indexToDelete !== -1) vlogsByCategory.list.splice(indexToDelete, 1)

            toast.success(UPDATED_MESSAGE)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const setFile = (field, event) => {
        vlogData[field] = event.target.files[0]
    }

    return { 
        latestVlogs,
        vlogsByCategory, 
        vlog,
        relatedCategories,
        vlogData,
        getLatestVlogs, 
        getFeaturedVlogs,
        getVlogsByCategory,
        getVlog,
        add,
        edit,
        remove,
        setFile
    }

})
