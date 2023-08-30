<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { JNavigator, JNavigatorData } from 'jinghong-ui';
import { ref } from 'vue';
const hide = ref<boolean>(true);
const now = ref<string>('j-button');
const router = useRouter();

const menu = ref<JNavigatorData[]>([
  {
    key: 'j-button',
    label: 'JButton 按钮',
    click: () => { router.push('/components/j-button') },
  }, {
    key: 'j-card',
    label: 'JCard 卡片',
    click: () => { router.push('/components/j-card') },
  }
]);
</script>
<template>
  <j-navigator :data="menu" v-model:now="now" v-model:hide="hide" vertical></j-navigator>
  <div class="page">

  </div>
  <div class="title">
    {{ menu.find(item => item.key === now)?.label }}
  </div>
  <router-view />
</template>

<style scoped lang="scss">
.title {
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
}
</style>
