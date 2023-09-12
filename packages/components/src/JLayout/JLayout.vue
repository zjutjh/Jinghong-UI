<script setup lang="ts">
import { inject, ref } from 'vue';
import { ColorThemeKey } from '../provide';
import { JColorThemeDefault } from '../colors';

const color = inject(ColorThemeKey, ref(JColorThemeDefault))

</script>
<template>
  <div class="j-layout">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot name="main" />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped lang="scss">
.j-layout {
  display: flex;
  flex-direction: column;
  color: v-bind('color.gray4');

  header {
    background-color: v-bind('color.gray3');
    padding-inline: 10px;
    padding-block: 5px;
  }

  main {
    background-color: v-bind('color.gray2');
    padding-inline: 10px;
    padding-block: 5px;
  }

  footer {
    background-color: v-bind('color.gray3');
    padding-inline: 10px;
    padding-block: 5px;
  }

}
</style>
