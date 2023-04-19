import { Component } from 'vue';
import { RouteRecordRaw } from 'vue-router';

const route = (name: string, path: string, component: Component) => ({
  name,
  path,
  component,
  props: true,
});

const routes: RouteRecordRaw[] = [
  route('Home', '/', () => import('@/views/Homie.vue')),
  route('Homie', '/homie/:id', () => import('@/views/Homie.vue')),
  route('QR', '/qr/:id', () => import('@/views/QR.vue')),
  route('Homie', '/homie/:id', () => import('@/views/Homie.vue')),
  route('Donate', '/donate/:id', () => import('@/views/Donate.vue')),
  route('Confirmation', '/confirmation/:id', () => import('@/views/Confirmation.vue')),
];

export default routes;
