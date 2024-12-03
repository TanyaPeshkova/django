import { createRouter, createWebHistory } from 'vue-router';
import ImageForm from '@/components/ImageForm.vue';

const routes = [
  {
    path: '/',
    name: 'ImageForm',
    component: ImageForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;