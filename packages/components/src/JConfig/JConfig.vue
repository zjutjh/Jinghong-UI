<script setup lang="ts">
import { provide, ref, watch } from 'vue';
import type { JColorTheme } from '../types';
import { JColorThemeDefault } from '../colors';
import { ColorThemeKey } from '../provide';

type Props = {
  theme?: JColorTheme;
};

const props = withDefaults(defineProps<Props>(), {
  theme: () => JColorThemeDefault,
});

const color = ref(props.theme);

function updateTheme() {
  color.value = props.theme;
}

watch(() => props.theme, updateTheme);

provide(ColorThemeKey, color);

</script>
<template>
  <slot />
</template>

<style scoped lang="scss"></style>
