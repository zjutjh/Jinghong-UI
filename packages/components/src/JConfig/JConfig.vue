<script setup lang="ts">
import { onMounted, provide, ref, watch } from 'vue';
import type { JColorTheme, PageSize } from '../types';
import { JColorThemeDefault } from '../colors';
import { ColorThemeKey, PageSizeKey } from '../provide';

type Props = {
  theme?: JColorTheme;
};

const props = withDefaults(defineProps<Props>(), {
  theme: () => JColorThemeDefault,
  pageSize: 'medium',
});

const color = ref(props.theme);
const size = ref<PageSize>('large');

function updateTheme() {
  color.value = props.theme;
}

watch(() => props.theme, updateTheme);

provide(ColorThemeKey, color);
provide(PageSizeKey, size);

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
  window.onresize = handleResize;
});

</script>
<template>
  <slot />
</template>

<style scoped lang="scss"></style>
