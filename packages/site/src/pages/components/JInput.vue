<script setup lang="ts">
import { JInput } from 'jinghong-ui';
import { ref } from 'vue';
const inputValue = ref('');
</script>
<template>
  <JInput v-model="inputValue" 
  type="textarea"
  placeholder="请输入内容" label="请输入内容" errorMessage="输入有误" :validate="(value:string) => {return value == '123'}"/>
</template>

<style scoped lang="scss"></style>
