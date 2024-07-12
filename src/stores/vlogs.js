import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useVlogStore = defineStore('vlog', () => {

    const vlogs = ref([])

    const getLatestVlogs = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/latest-vlogs')
            vlogs.value = response.data.data
        } catch (error) {
            console.error(error)
        }
    }

    return { vlogs, getLatestVlogs }

})