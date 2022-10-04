import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import  todoPage from '../pages/todoPage.vue'
import logoutComp from '../components/logoutComp.vue'
//import todoComp from '../components/todoComp.vue'

const routes = [
    {
        component : todoPage,
        path : '/',
        name : 'todoPage'
    },
    // {
    //     component : todoComp,
    //     path : '/todo',
    //     name : 'todoComp'
    // },
    {
        component : logoutComp,
        path : '/logout',
        name : 'logoutComp'
    },

]

const router = createRouter ({
    history : createWebHistory(),
    routes
})

export default router