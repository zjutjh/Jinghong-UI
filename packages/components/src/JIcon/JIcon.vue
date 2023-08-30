<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import { ColorThemeKey } from '../provide';
import { JColorThemeDefault } from '..';

type Props = {
  size?: 'small' | 'middle' | 'large' | number | [number, number];
}

const props = withDefaults(defineProps<Props>(), {
  size: 'middle',
})

const size = computed<[number, number]>(() => {
  if (typeof props.size === 'string') {
    if (props.size === 'small') {
      return [30, 30]
    } else if (props.size === 'middle') {
      return [50, 50]
    } else if (props.size === 'large') {
      return [70, 70]
    }
  } else if (typeof props.size === 'number') {
    return [props.size, props.size];
  } else if (Array.isArray(props.size)) {
    return props.size;
  }
  return [50, 50];
})

const color = inject(ColorThemeKey, ref(JColorThemeDefault))

</script>
<template>
  <div class="j-icon">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.j-icon {
  fill: v-bind("color.white");
  width: v-bind("size[0]")px;
  height: v-bind("size[1]")px;
}
</style>
