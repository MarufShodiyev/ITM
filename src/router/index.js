// pages
import {createRouter, createWebHistory} from 'vue-router'

import Home from '../pages/home/index.vue';
import Contact from '../pages/contact/index.vue';
import About from '../pages/about/index.vue'
import Katalog from '../pages/katalog/index.vue'
const routes=[
    {
        path:"/",
        name:"home",
        component:Home
    },
    {
        path:"/contact",
        name:"contact",
        component:Contact
    },
    {
        path:"/about",
        name:"about",
        component:About
    },
    {
        path:"/katalog",
        name:"katalog",
        component:Katalog
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router