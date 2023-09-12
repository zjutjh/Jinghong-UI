import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

export const routes = <RouteRecordRaw[]>[{
  path: '/',
  component: () => import('./pages/Home.vue'),
  meta: {
    title: 'Jinghong UI | 精弘组件库',
  }
},
{
  path: '/components',
  component: () => import('./pages/Components.vue'),
  meta: {
    title: '组件 | Jinghong UI',
  },
  children: [{
    path: 'j-button',
    component: () => import('./pages/components/JButton.vue'),
    meta: {
      title: '按钮 | Jinghong UI',
    },
  }, {
    path: 'j-input',
    component: () => import('./pages/components/JInput.vue'),
    meta: {
      title: '输入框 | Jinghong UI',
    },
  }, {
    path: 'j-radio',
    component: () => import('./pages/components/JRadio.vue'),
    meta: {
      title: '单选框 | Jinghong UI',
    },
  }, {
    path: 'j-checkbox',
    component: () => import('./pages/components/JCheckbox.vue'),
    meta: {
      title: '多选框 | Jinghong UI',
    },
  }, {
    path: 'j-card',
    component: () => import('./pages/components/JCard.vue'),
    meta: {
      title: '卡片 | Jinghong UI',
    },
  },
  ],
}];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.afterEach((to) => {
  document.title = to.meta.title as string;
});

export default router;
