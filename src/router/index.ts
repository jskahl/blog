import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/layout/Layout.vue"),
        children: [
            {
                name: "Home",
                path: "",
                component: () => import("@/views/HomeView.vue"),
            },
            {
                name: "Posts",
                path: "/postagens",
                component: () => import("@/views/PostsListingView.vue"),
            },
            {
                name: "Post",
                path: "/postagens/:id",
                component: () => import("@/views/PostView.vue"),
            },
        ],
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        }

        return {
            top: 0,
            behavior: "smooth",
        };
    },
});

export default router;
