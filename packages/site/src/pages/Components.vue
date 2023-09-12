<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { JNavigator, JNavigatorData } from 'jinghong-ui';
import { ref } from 'vue';
import { routes } from '../router'
const hide = ref<boolean>(true);
const now = ref<string>('j-button');
const router = useRouter();

const menu = ref<JNavigatorData[]>(
  routes.find(item => item.path === '/components')?.children?.map(item => ({
    key: item.path,
    label: (item.meta?.title as string).split(' | ')[0],
    click: () => { router.push(item.path) },
  })) || []
);

</script>
<template>
  <j-navigator :data="menu" v-model:now="now" v-model:hide="hide" vertical></j-navigator>
  <div class="page">
    <div class="title">
      {{ menu.find(item => item.key === now)?.label }}
    </div>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.title {
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
}
</style>
