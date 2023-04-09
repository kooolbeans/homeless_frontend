import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { join } from 'path';
import { cwd } from 'process';
import { defineConfig, loadEnv } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, cwd(), '');
  const { VITE_API_BASEURL } = env;
  return {
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api': VITE_API_BASEURL,
      }
    },

    plugins: [
      vue(),
      vueJsx(),
      eslintPlugin({
        fix: true
      }),
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
    ],

    resolve: {
      alias: {
        '@': join(__dirname, './src'),
      }
    }
  }
});