<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { JButton, JLayout, JSpace } from 'jinghong-ui';
import { JColorThemeDark, JColorThemeDefault } from 'jinghong-ui';

const color = ref(JColorThemeDefault);

function handleChangeTheme() {
  if (color.name == JColorThemeDefault.name) {
    color.value = JColorThemeDark;
  } else {
    color.value = JColorThemeDefault;
  }
}
</script>
<template>
  <j-layout :theme="color">
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

<style scoped lang="scss"></style>

