import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../layout/Layout.vue"),
        children: [
            {
                path: "",
                component: () => import("@/views/HomeView.vue"),
            },
        ],
    },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
