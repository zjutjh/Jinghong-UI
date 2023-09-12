<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { JColorTheme, JColorThemeDark, JColorThemeDefault, JConfig, JNavigator, JIcon } from 'jinghong-ui';
import type { JNavigatorData } from 'jinghong-ui';
import { ref } from 'vue';
const now = ref<string>('home');
const hide = ref<boolean>(false);
const color = ref<JColorTheme>(JColorThemeDefault);
const menu = ref<JNavigatorData[]>(
  [{
    key: 'home',
    label: '组件库',
    click: () => {
      router.push('/components/j-button');
    },
  }, {
    key: 'about',
    label: '关于我们',
    click: () => {
      window.open('https://www.myzjut.org');
      now.value = 'home';
    },
  }, {
    key: 'color',
    label: color.value.name == 'defalut' ? '深色' : '浅色',
    click: handleColorChange,
  }
  ]
)
const router = useRouter();

function handleColorChange() {
  color.value = color.value.name == JColorThemeDefault.name ? JColorThemeDark : JColorThemeDefault;
  menu.value[3].label = (color.value.name === 'default-dark' ? '浅色' : '深色');
  now.value = 'home';
}

document.title = 'Jinghong UI';

</script>

<template>
  <j-config :color="color">
    <div class="page">
      <j-navigator :data="menu" v-model:now="now" v-model:hide="hide" auto-hide fixed>
        <template #logo>
          <img src="/logo.png" style="height: 50px; padding: 5px" />
        </template>
      </j-navigator>
      <router-view />
      <footer>
        <div>
          精弘组件库 Copyright 精弘网络 2023
        </div>
      </footer>
    </div>
  </j-config>
</template>

<style scoped lang="scss">
.page {
  width: 80%;
  margin-inline: auto;
  flex-direction: column;
}

footer {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  margin-inline: auto;
  justify-content: center;

  div {
    width: fit-content;
  }
}
</style>
