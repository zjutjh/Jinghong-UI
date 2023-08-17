<script setup lang="ts">
import { ref, inject } from 'vue';
import { JColorThemeDefault } from '../colors';
import { ColorThemeKey } from '../provide';

type Prop = {
  title?: string,
}
const props = withDefaults(defineProps<Prop>(), {
})
const color = inject(ColorThemeKey, ref(JColorThemeDefault))

</script>
<template>
  <div class="j-card">
    <header v-if="props.title != null">
      {{ props.title }}
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.j-card {
  padding: 60px;

  header {
    position: relative;
    float: left;
    left: -30px;
    margin-top: 5px;
    width: fit-content;
    min-width: 30px;
    background-color: v-bind('color.primary');
    color: v-bind('color.textSecondary');
    padding-inline: 20px;
    padding-block: 5px;
    font-size: 20px;
  }

  main {
    background-color: v-bind('color.backgroundSecondary');
    padding-inline: 50px;
    padding-top: 50px;
    padding-bottom: 20px;
    min-height: 100px;
    font-size: 18px;
    border-radius: 20px;
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.5);
  }
}
</style>
