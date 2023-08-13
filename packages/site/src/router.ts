import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/components',
      component: () => import('./pages/Components.vue'),
      children: [
        {
          path: 'j-button',
          component: () => import('./pages/components/JButton.vue')
        },
        {
          path: 'j-input',
          component: () => import('./pages/components/JInput.vue')
        },
        {
          path: 'j-radio',
          component: () => import('./pages/components/JRadio.vue')
        },
        {
          path: 'j-checkbox',
          component: () => import('./pages/components/JCheckbox.vue')
        },
        {
          path: 'j-card',
          component: () => import('./pages/components/JCard.vue')
        },
      ],
    },
  ],
})
