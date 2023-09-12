<script setup lang="ts">
import { inject, ref } from 'vue';
import { ColorThemeKey } from '../provide';
import { JColorThemeDefault } from '..';

type Prop = {
  weight?: string,
  vertical?: boolean,
  dashed?: boolean,
}
const props = withDefaults(defineProps<Prop>(), {
  weight: '1px',
  vertical: false,
  dashed: false,
})

const color = inject(ColorThemeKey, ref(JColorThemeDefault));

</script>
<template>
  <div
    class="j-divider"
    :class="{'vertical': props.vertical,
             'dashed': props.dashed,
    }"
  >
    <div class="text">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.j-divider {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: v-bind("props.weight");
  background-color: v-bind("color.primary1");

  &.vertical{
    width: v-bind("props.weight");
    height: 100%;
  }

  &.dashed{
    background-color: transparent;
    background-image: linear-gradient(to right, v-bind("color.primary1") 33%, transparent 0%);
    background-position: bottom;
    background-size: 20px v-bind("props.weight");
    background-repeat: repeat-x;

    &.vertical{
      background-image: linear-gradient(to bottom, v-bind("color.primary1") 33%, transparent 0%);
      background-position: right;
      background-size: v-bind("props.weight") 10px;
      background-repeat: repeat-y;
    }
  }
  
  .text{
    padding: 0 10px;
    font-size: 20px;
    color: v-bind("color.primary1");
    background-color: v-bind("color.white");
  }
}
</style>
