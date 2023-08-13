<script setup lang="ts">
import { JButton } from 'jinghong-ui';
function handleClick() {
  console.log('click');
}
</script>
<template>
  主要按钮
  <j-button :on-click="handleClick" type="primary">按钮</j-button>
  <br />
  次要按钮
  <j-button type="secondary">按钮</j-button>
</template>

<style scoped lang="scss"></style>
