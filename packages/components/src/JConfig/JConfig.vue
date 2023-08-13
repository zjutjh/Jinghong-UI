<script setup lang="ts">
import { provide, ref } from 'vue';
import type { JColorTheme } from '../types';
import { JColorThemeDefault } from '../colors';
import { ColorThemeKey } from '../provide';
type Props = {
  theme?: JColorTheme;
};

const props = withDefaults(defineProps<Props>(), {
  theme: () => JColorThemeDefault,
});

provide(ColorThemeKey, ref(props.theme));

</script>
<template>
  <slot />
</template>

<style scoped lang="scss"></style>
