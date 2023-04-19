import { Component } from 'vue';
import { RouteRecordRaw } from 'vue-router';

const route = (name: string, path: string, component: Component) => ({
  name,
  path,
  component,
  props: true,
});

const routes: RouteRecordRaw[] = [
  route('QR', '/:id/qr', () => import('@/views/QR.vue')),
  route('Homie', '/:id/homie', () => import('@/views/Homie.vue')),
  route('Donate', '/:id/donate', () => import('@/views/Donate.vue')),
  route('Confirmation', '/:id/confirmation', () => import('@/views/Confirmation.vue')),
];

export default routes;
