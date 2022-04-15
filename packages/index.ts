import { App, Plugin } from 'vue';
import { testPlugin } from './test'

const JingHongUIPlugin: Plugin = {
  install(app: App) {
    testPlugin.install?.(app);
  },
}

export default JingHongUIPlugin;

export * from './test';