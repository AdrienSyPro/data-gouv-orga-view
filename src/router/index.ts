import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'organizations',
      component: () => import('../views/OrganizationsView.vue')
    },
    {
      path: '/organizations/:id',
      name: 'organization-details',
      component: () => import('../views/OrganizationDetailView.vue')
    }
  ]
})

export default router
