import type { App } from 'vue';
import JButton from './JButton/JButton.vue'
import JInput from './JInput/JInput.vue'
import JRadio from './JRadio/JRadio.vue'
import JCheckbox from './JCheckbox/JCheckbox.vue'
import JConfig from './JConfig/JConfig.vue'
import JLayout from './JLayout/JLayout.vue'
import JSpace from './JSpace/JSpace.vue'
import JCard from './JCard/JCard.vue'
import JNavigator from './JNavigator/JNavigator.vue'
import JIcon from './JIcon/JIcon.vue'
import JDivider from './JDivider/JDivider.vue'
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
    app.component("JNavigator", JNavigator)
    app.component("JIcon", JIcon)
    app.component("JDivider", JDivider)
  }
}

export { JButton, JInput, JRadio, JCheckbox, JConfig, JLayout, JSpace, JCard, JNavigator, JIcon, JDivider }
// export { ColorThemeKey }
export * from "./types"
export * from "./colors"
