import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../layout/Layout.vue"),
        children: [
            {
                name: "Home",
                path: "",
                component: () => import("@/views/HomeView.vue"),
            },
            {
                name: "Post",
                path: "/post/:id",
                component: () => import("../views/PostView.vue"),
            },
        ],
    },
];


export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
