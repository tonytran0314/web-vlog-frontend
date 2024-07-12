import { defineStore } from 'pinia'

import axios from 'axios'

export const useVlogStore = defineStore('vlog', {
    state: () => ({
        vlogs: []
    }),
    actions: {
        async getLatestVlogs() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/v1/latest-vlogs')
                this.vlogs = response.data.data
            } catch (error) {
                console.error(error)
            }
        },
        
    }
})