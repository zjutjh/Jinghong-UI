<script setup lang="ts">
import { JCheckbox } from 'jinghong-ui';
import { ref } from 'vue';
const value = ref<string[]>(['1']);
const options = ref([
  {
    label: '选项1',
    key: '1'
  },
  {
    label: '选项2',
    key: '2'
  },
  {
    label: '选项3',
    key: '3'
  },
]);
</script>
<template>
  {{ value }}
  <j-checkbox v-model="value" :values="options" />
</template>

<style scoped lang="scss"></style>
