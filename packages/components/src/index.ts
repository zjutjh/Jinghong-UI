import type { App } from 'vue'

import JButton from './JButton/JButton.vue'
import JInput from './JInput/JInput.vue'
import JRadio from './JRadio/JRadio.vue'
import JCheckbox from './JCheckbox/JCheckbox.vue'
import JConfig from './JConfig/JConfig.vue'
import JLayout from './JLayout/JLayout.vue'
import JSpace from './JSpace/JSpace.vue'
import JCard from './JCard/JCard.vue'


export default {
  install(app: App) {
    app.component("JButton", JButton)
    app.component("JInput", JInput)
    app.component("JRadio", JRadio)
    app.component("JCheckbox", JCheckbox)
    app.component("JConfig", JConfig)
    app.component("JLayout", JLayout)
    app.component("JSpace", JSpace)
    app.component("JCard", JCard)
  }
}

export { JButton, JInput, JRadio, JCheckbox, JConfig, JLayout, JSpace, JCard }
// export { ColorThemeKey }
export * from "./types"
