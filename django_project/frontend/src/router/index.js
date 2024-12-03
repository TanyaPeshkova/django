import { createRouter, createWebHistory } from 'vue-router';
import ImageForm from '@/components/ImageForm.vue';
import ImageList from '@/components/ImageList.vue';

const routes = [
  {
    path: '/',
    name: 'ImageForm',
    component: ImageForm,
  },
  {
    path: '/list',
    name: 'ImageList',
    component: ImageList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;