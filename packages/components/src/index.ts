import type { App } from 'vue'

import JButton from './JButton/JButton.vue'
import JInput from './JInput/JInput.vue'
export default {
  install(app: App) {
    app.component("JButton", JButton)
    app.component("JInput", JInput)
  }
}

export { JButton, JInput }
