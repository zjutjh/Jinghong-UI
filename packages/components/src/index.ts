import type { App } from 'vue'

import JButton from './JButton/JButton.vue'

export default {
  install(app: App) {
    app.component("JButton", JButton)
  }
}

export { JButton }
