<script setup lang="ts">
import { inject, ref } from 'vue';
import { JColorThemeDefault } from '../colors';
import { ColorThemeKey } from '../provide';

type Props = {
  onClick?: () => void,
  disabled?: boolean,
  filled?: boolean,
  // circle?: boolean,
  // rect?: boolean,
  // cube?: boolean,
  shape?: 'rect' | 'round-rect' | 'circle' | 'cube'
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  filled: false,
  // circle: false,
  // rect: false,
  // cube: false,
  shape: 'rect',
});

const color = inject(ColorThemeKey, ref(JColorThemeDefault))

</script>
<template>
  <button @click="props.onClick" :disabled="props.disabled || props.onClick == null" :class="[{
    'filled': props.filled,
  },
  props.shape
  ]">
    <slot></slot>
    <div class="icon">
      <slot name="icon" />
    </div>
  </button>
</template>

<style scoped lang="scss">
button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: v-bind('color.primary1');
  background-color: v-bind('color.white');
  border: 1px solid v-bind('color.primary1');
  font-size: 18px;
  padding-inline: 50px;
  padding-block: 5px;
  cursor: pointer;
  flex-flow: nowrap;

  :deep(svg) {
    fill: v-bind('color.primary1');
    width: 30px;
    height: 30px;
  }

  &:hover {
    box-shadow: 0px 0px 5px v-bind('color.gray1');
    transition: 0.3s;
  }

  &.filled {
    color: v-bind('color.white');
    background-color: v-bind('color.primary1');
    border: none;

    :deep(svg) {
      fill: v-bind("color.white")
    }
  }

  &.round-rect {
    border-radius: 20px;
  }

  &.circle {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  &.rect {
    border-radius: 8px;
  }

  &.cube {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    padding: 0;
  }

  .icon {
    display: flex;

    position: relative;
    right: -20px;

    :deep(svg) {
      max-width: 24px;
      max-height: 24px;
    }
  }
}
</style>
