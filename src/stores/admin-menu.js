import { defineStore } from "pinia"

export const useAdminMenuStore = defineStore('admin-menu', () => {

    const links = [
        {
            icon: 'table-columns',
            name: 'Dashboard',
            subname: null,
            label: 'Bảng điều khiển'
        },
        {
            icon: 'video',
            name: 'Vlog Management',
            subname: 'New Vlog',
            label: 'Quản lý Vlogs'
        },
        {
            icon: 'layer-group',
            name: 'Category Management',
            subname: null,
            label: 'Quản lý thể loại'
        }
    ]

    return {
        links
    }

})
