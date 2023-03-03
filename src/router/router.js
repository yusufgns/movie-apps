import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name : "Home",
        path : "/",
        component: () => import('../page/home.vue')
    },

    {
        name : "About",
        path : "/about",
        component: () => import('../page/about.vue')
    },

    {
        name : "Category",
        path : "/category",
        component : () => import('../page/category.vue')
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;