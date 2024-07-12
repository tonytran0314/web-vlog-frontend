import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useVlogStore = defineStore('vlog', () => {

    const vlogs = ref(null)

    const apiUrl = import.meta.env.VITE_API_URL
    const featurePath = 'feature/'

    const getLatestVlogs = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/latest-vlogs')
            vlogs.value = response.data.data
        } catch (error) {
            console.error(error)
        }
    }

    const getFeaturedVlogs = async (featureSlug) => {
        const url = `${apiUrl}${featurePath}${featureSlug}`
        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (error) {
            console.error(error)
        }
    }

    return { 
        vlogs, 
        getLatestVlogs, 
        getFeaturedVlogs 
    }

})
