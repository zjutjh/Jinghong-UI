<script setup lang="ts">
import { inject, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { JColorThemeDark, JColorThemeDefault } from 'jinghong-ui/src/colors';
import { ColorThemeKey } from 'jinghong-ui/src/provide';
import { JButton, JLayout, JSpace } from 'jinghong-ui';
const color = inject(ColorThemeKey, ref(JColorThemeDefault))

function handleChangeTheme() {
  if (color.value.name == JColorThemeDefault.name) {
    color.value = JColorThemeDark
  } else {
    color.value = JColorThemeDefault
  }
}

</script>
<template>
  <j-layout>
    <template #header>

      <j-space>
        JingHong-UI
        <j-button :on-click="handleChangeTheme" type="primary"> 主题: {{ color.name }} </j-button>
        <router-link to="/components">components</router-link>
      </j-space>
    </template>
    <template #main>
      main
    </template>
    <template #footer>
      footer
    </template>
  </j-layout>
  <div class="page">
  </div>
</template>

<style scoped lang="scss">
.page {
  background-color: v-bind('color.background');
  color: v-bind('color.text');
}
</style>
