<script setup lang="ts">
import { type JRadioData } from '../types';

const props = defineProps<{
  modelValue: string;
  values: JRadioData[];
}>();

const emit = defineEmits(['update:modelValue'])

function handleSelect(value: string) {
  emit('update:modelValue', value);
}

</script>

<template>
  <div class="j-radio" v-for="value in props.values">
    <input type="radio" @change="handleSelect(value.key)" :checked="props.modelValue == value.key" />
    <label>{{ value.label }}</label>
  </div>
</template>

<style scoped lang="scss">
input[type="radio"] {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ccc;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:checked {
    border: 1px solid #000;
  }

  &:hover {
    border: 1px solid #000;
  }
}
</style>
