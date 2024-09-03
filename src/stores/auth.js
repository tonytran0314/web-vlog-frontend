import { useToast }     from "vue-toastification"
import { reactive }     from "vue"
import { useRouter }    from 'vue-router'
import { defineStore }  from "pinia"

import apiClient        from '@/api/apiClient' 

const toast = useToast()

export const useAuthStore = defineStore('auth', () => {
    
    const router = useRouter()

    const user = reactive({
        username: null,
        password: null
    })

    const login = async () => {
        const userData = new FormData()
        userData.append('username', user.username)
        userData.append('password', user.password)

        try {
            const res = await apiClient.post('/login', userData)
            if (res.status === 200) {
                localStorage.setItem('userToken', res.data.data.token)
                router.push({ name: 'Dashboard' })
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const logout = () => {
        localStorage.removeItem('userToken')
        router.push({ name: 'Authentication' })
    }

    return {
        user,
        login,
        logout
    }
})
