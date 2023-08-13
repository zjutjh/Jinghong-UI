<script setup lang="ts">
import { JCheckboxData } from '../types';

const props = defineProps<{
  modelValue: string[];
  values: JCheckboxData[];
}>();
const emits = defineEmits(['update:modelValue'])

function handleSelect(value: string) {
  if (props.modelValue.includes(value)) {
    emits('update:modelValue', props.modelValue.filter(item => item !== value))
  }
  else {
    emits('update:modelValue', [...props.modelValue, value])
  }

}
</script>
<template>
  <div class="j-checkbox" v-for="value in values">
    <input type="checkbox" :checked="modelValue.includes(value.key)" @change="handleSelect(value.key)" />
    <label>{{ value.label }}</label>
  </div>
</template>

<style scoped lang="scss"></style>
