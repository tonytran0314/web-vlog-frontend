import { useToast }             from "vue-toastification"
import { useRouter }            from 'vue-router'
import { defineStore }          from "pinia"
import { ref, reactive }        from "vue"

import apiClient                from '@/api/apiClient' 

const toast = useToast()

export const useAuthStore = defineStore('auth', () => {
    
    const token = ref(localStorage.getItem('userToken')) || null
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
                setUserToken(res.data.data.token)
                goToAdminDashboard()
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const logout = () => {
        removeUserToken()
        goToLogin()
    }

    const validateToken = async () => {
        if (!token.value) return false;

        try {
            await apiClient.post('/validate-token', {}, {
                headers: {
                  'Authorization': `Bearer ${token.value}`,
                },
            })
            
            return true;
        } catch (error) {
            removeUserToken();
            console.log(error)
            return false;
        }
    }

    const setUserToken = (token) => {
        localStorage.setItem('userToken', token)
    }

    const removeUserToken = () => {
        localStorage.removeItem('userToken')
    }

    const goToAdminDashboard = () => {
        router.push({ name: 'Dashboard' })
    }

    const goToLogin = () => {
        router.push({ name: 'Authentication' })
    }

    return {
        user,
        login,
        logout,
        validateToken
    }
})
