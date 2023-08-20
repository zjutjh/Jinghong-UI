<script setup lang="ts">
import { inject, ref } from 'vue';
import type { JNavigatorData, PageSize } from '../types'
import { MdMenu } from '@vicons/ionicons4'
import { ColorThemeKey, PageSizeKey } from '../provide';
import { JColorThemeDefault } from '../colors';
type Props = {
  vertical?: boolean,
  data: JNavigatorData[],
}

const props = withDefaults(defineProps<Props>(), {
  vertical: false,
})

const now = ref<string>(
  props.data.find(item => !item.disabled)?.key ?? ''
)

const color = inject(ColorThemeKey, ref(JColorThemeDefault))
const size = inject(PageSizeKey, ref<PageSize>('large'))

function handleClick(item: JNavigatorData) {
  if (item.disabled) return
  now.value = item.key
  if (item.click) item.click()
}

</script>
<template>
  <div class="j-navigator" :class="[{ 'vertical': props.vertical }, size]">
    <div class="logo">
      <slot name="logo">
      </slot>
    </div>

    <div class="menu">
      <div class="j-navigator-item" v-for="item in props.data" :class="{
        'selected': item.key == now,
        'disabled': item.disabled,
      }" v-if="size == 'large'" @click="handleClick(item)">
        {{ item.label }}
      </div>
    </div>

    <div class="control" v-if="size == 'medium' || size == 'small'">
      <MdMenu />
    </div>

  </div>
</template>

<style scoped lang="scss">
.j-navigator {
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: v-bind("color.primary");

  .logo {
    max-height: 60px;
  }

  .menu {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    justify-content: center;
    align-items: center;
  }

  .j-navigator-item {
    padding: 5px 20px;
    margin: 0 10px;
    border-radius: 20px;
    cursor: pointer;
    color: v-bind("color.textSecondary");

    transition: all 0.3s;

    &:hover {
      background-color: v-bind("color.secondary");
      color: v-bind("color.text");
    }

    &.selected {
      background-color: v-bind("color.white");
      color: v-bind("color.text");

      &::after {
        content: '';
        display: block;
        position: relative;
        width: 100%;
        height: 3px;
        background-color: v-bind("color.white");
        top: 14px;
        padding: 0 20px;
        left: -20px;
        border-radius: 3px;
      }

    }

    &.disabled {
      cursor: not-allowed;

      &:hover {
        background-color: v-bind("color.primary");
        color: v-bind("color.textSecondary");
      }
    }
  }
}

.j-navigator.vertical {
  width: 200px;
}

.control {
  width: 30px;
  height: 30px;
  margin: auto 20px;

  svg {
    width: 100%;
    height: 100%;
    fill: v-bind("color.textSecondary");
    cursor: pointer;
  }
}
</style>
