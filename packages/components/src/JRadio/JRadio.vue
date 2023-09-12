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
  <div
    v-for="value in props.values"
    class="j-radio"
  >
    <input
      type="radio"
      :checked="props.modelValue == value.key"
      @change="handleSelect(value.key)"
    >
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
