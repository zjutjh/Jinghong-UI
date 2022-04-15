import { App, Plugin } from 'vue';
import test from './src/test.vue';

export const testPlugin: Plugin = {
  install(app: App) {
    app.component('test', test);
  },
};

export { test };