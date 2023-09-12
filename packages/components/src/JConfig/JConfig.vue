<script setup lang="ts">
import { onMounted, provide, ref, watch } from 'vue';
import type { JColorTheme, ComponentSize } from '../types';
import { JColorThemeDefault } from '../colors';
import { ColorThemeKey, ComponentSizeKey } from '../provide';

type Props = {
  theme?: JColorTheme;
  size?: ComponentSize;
};

const props = withDefaults(defineProps<Props>(), {
  theme: () => JColorThemeDefault,
  size: () => 'large',
});

const color = ref(props.theme);
const size = ref<ComponentSize>(props.size ? props.size : 'large');

function updateTheme() {
  color.value = props.theme;
}

// function updateSize() {
//   size.value = props.size;
// }

watch(() => props.theme, updateTheme);
// watch(() => props.size, updateSize)

provide(ColorThemeKey, color);
provide(ComponentSizeKey, size);

function handleResize() {
  const width = document.body.clientWidth;
  if (width < 768) {
    size.value = 'small';
  } else if (width < 992) {
    size.value = 'medium';
  } else {
    size.value = 'large';
  }
}

onMounted(() => {
  handleResize();
  if (props.size == undefined)
    window.onresize = handleResize;
});

</script>
<template>
  <slot />
</template>

<style scoped lang="scss"></style>
