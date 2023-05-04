import {createRouter,createWebHistory} from "vue-router"
import QuizesView from "../views/QuizesView.vue"
import QuizeView from "../views/QuizeView.vue"


const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            name:'quizes',
            component: QuizesView
        },
        {
            path:"/quize/:id",
            name:'quiz view',
            component: QuizeView
        }
    ]
});

export default router;