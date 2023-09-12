<script setup lang="ts">
import { ref, inject } from 'vue';
import { JColorThemeDefault } from '../colors';
import { ColorThemeKey } from '../provide';

type Prop = {
  title?: string,
}
const props = withDefaults(defineProps<Prop>(), {
  title: undefined,
})
const color = inject(ColorThemeKey, ref(JColorThemeDefault))

</script>
<template>
  <div class="j-card">
    <header v-if="props.title != null">
      <div class="title">
        {{ props.title }}
      </div>
      <div class="header-extra">
        <slot name="header-extra" />
      </div>
    </header>
    <main>
      <slot />
      <footer>
        <slot name="footer" />
      </footer>
    </main>
  </div>
</template>

<style scoped lang="scss">
.j-card {
  padding: 60px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    position: relative;
    left: -30px;
    top: 20px;
    align-items: center;

    .title {
      margin-top: 5px;
      width: fit-content;
      min-width: 30px;
      background-color: v-bind('color.primary1');
      color: v-bind('color.gray4');
      padding-inline: 20px;
      padding-block: 5px;
      font-size: 20px;
    }

    .header-extra {
      margin-top: 20px;
    }

  }

  main {
    background-color: v-bind('color.gray4');
    padding-inline: 50px;
    padding-top: 50px;
    padding-bottom: 20px;
    min-height: 100px;
    font-size: 18px;
    border-radius: 20px;
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
