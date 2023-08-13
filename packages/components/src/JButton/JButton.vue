<script setup lang="ts">
import { inject, ref } from 'vue';
import { JColorThemeDefault } from '../colors';
import { ColorThemeKey } from '../provide';


const props = defineProps<{
  onClick?: () => void,
  type?: 'primary' | 'secondary',
  disabled?: boolean,
}>();

const color = inject(ColorThemeKey, ref(JColorThemeDefault))

</script>
<template>
  <button @click="props.onClick" :disabled="props.disabled || props.onClick == null" :class="props.type">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  color: v-bind('color.text');
  border: none;
  border-radius: 20px;
  font-size: 18px;
  padding-inline: 10px;
  padding-block: 5px;
  margin-inline: 5px;
  cursor: pointer;
  box-shadow: 1px 2px 1px 0px rgba(0, 0, 0, 0.5);

  &:hover {
    box-shadow: 1px 2px 1px 0px rgba(0, 0, 0, 0.8);
    transition: box-shadow 0.5s;
  }

  &.primary {
    background-color: v-bind('color.primary');
    color: white;

    &:hover {
      opacity: 0.8;
      transition: background-color 0.5s;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &.secondary {
    background-color: v-bind('color.secondary');
    color: white;

    &:hover {
      opacity: 0.8;
      transition: background-color 0.5s;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
