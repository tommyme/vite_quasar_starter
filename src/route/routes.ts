import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layout/MainLayout.vue'),
    children: [
        { path: '', component: () => import('../pages/index.vue'), name:"home" },
        // { path: ':gid/space/:mid', component: () => import('../pages/space.vue'), name:"space" },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue'),
  },
];

const router = createRouter({
    routes: routes,
    history: createWebHashHistory(),
});

export default router;