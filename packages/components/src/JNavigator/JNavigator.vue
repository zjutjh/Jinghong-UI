<script setup lang="ts">
import { inject, ref, watch } from 'vue';
import type { JNavigatorData, ComponentSize } from '../types'
import { MdMenu } from '@vicons/ionicons4'
import { ColorThemeKey, ComponentSizeKey } from '../provide';
import { JColorThemeDefault } from '../colors';
import { useVModel, useWindowScroll } from '@vueuse/core';

type Props = {
  data: JNavigatorData[],
  now: string, // one of the data's key
  fixed?: boolean,
  autoHide?: boolean,
  hide?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  fixed: false,
  autoHide: false,
  hide: false,
})

const emits = defineEmits<{
  (e: 'update:hide', value: boolean): void
  (e: 'update:now', value: string): void
}>();

const color = inject(ColorThemeKey, ref(JColorThemeDefault))
const size = inject(ComponentSizeKey, ref<ComponentSize>('large'))

const hide = useVModel(props, 'hide', emits)
const now = useVModel(props, 'now', emits)

const { y } = useWindowScroll();
const lastY = ref(0);

const isDropDown = ref<boolean>(false);

watch(y, (value: number) => {
  if (props.autoHide) {
    if (value > lastY.value) {
      emits('update:hide', true)
      isDropDown.value = false
    } else {
      emits('update:hide', false)
    }
    lastY.value = value
  }
})

function handleClick(item: JNavigatorData) {
  if (item.disabled) return
  now.value = item.key
  emits('update:now', item.key)
  if (item.click) item.click()
}

function handleDropDown() {
    hide.value = false;
    emits('update:hide', !hide.value)
}

</script>
<template>
  <div>
    <div
      class="j-navigator"
      :class="[{
                 'fixed': props.fixed,
                 'auto-hide': props.autoHide,
                 'show': !hide,
               },
               size,
      ]"
    >
      <div class="logo">
        <slot name="logo" />
      </div>

      <div
        v-if="size == 'large'"
        class="menu"
      >
        <div
          v-for="item in props.data"
          :key="item.key"
          class="j-navigator-item"
          :class="{
            'selected': item.key == now,
            'disabled': item.disabled,
          }"
          @click="handleClick(item)"
        >
          <span>
            {{ item.label }}
          </span>
        </div>
      </div>

      <div
        v-if="size != 'large'"
        class="drop-down"
        :class="{ 'show': isDropDown }"
      >
        <div
          v-for="item in props.data"
          :key="item.key"
          class="j-navigator-item"
          :class="{
            'selected': item.key == now,
            'disabled': item.disabled,
          }"
          @click="handleClick(item)"
        >
          {{ item.label }}
        </div>
      </div>

      <div
        v-if="size == 'medium' || size == 'small'"
        class="control"
        @click="handleDropDown"
      >
        <MdMenu />
      </div>
    </div>
    <div
      style="margin-top: 80px"
    />
  </div>
</template>

<style scoped lang="scss">
.j-navigator {
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: v-bind("color.primary1");

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

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;

    &.auto-hide {
      transition: all 0.3s;
      transform: translateY(-100%);
      opacity: 0;

      &.show {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  .j-navigator-item {
    padding: 5px 20px;
    width: fit-content;
    transition: all 0.3s;

    span {
      width: fit-content;
      display: flex;
      color: v-bind("color.white");
      width: fit-content;
      border-radius: 20px;
      cursor: pointer;
      padding: 5px 20px;
    }

    &:hover {
      span {
        background-color: v-bind("color.primary2");
        color: v-bind("color.gray4");
      }
    }

    &.selected {
      span {
        background-color: v-bind("color.gray3");
        color: v-bind("color.primary1");
      }

      &::after {
        content: '';
        display: block;
        position: relative;
        width: 100%;
        background-color: v-bind("color.gray3");
        top: 7px;
        border-radius: 3px;
        height: 3px;
      }

    }

    &.disabled {
      cursor: not-allowed;

      &:hover {
        background-color: v-bind("color.primary1");
        color: v-bind("color.gray1");
      }
    }
  }
}

.control {
  width: 30px;
  height: 30px;
  margin: auto 20px;

  svg {
    width: 100%;
    height: 100%;
    fill: v-bind("color.gray4");
    cursor: pointer;
  }
}

.j-navigator.small,
.j-navigator.medium {
  .drop-down {
    display: none;
    padding-top: 20px;
    z-index: 100;

    &.show {
      position: fixed;
      top: 60px;
      width: 100vw;
      height: 100vh;
      background: v-bind("color.white");
      display: flex;
      flex-direction: column;
      row-gap: 20px;
    }

    .j-navigator-item {
      display: flex;
      justify-content: center;
      background: v-bind("color.white");
      border: solid 1px v-bind("color.primary1");
      color: v-bind("color.primary1");
      margin-inline: auto;
      width: 200px;

      &::after {
        display: none
      }

      &.selected {
        background-color: v-bind("color.primary1");
        color: v-bind("color.white");
      }

      &:hover {
        cursor: pointer;
        box-shadow: 1px 1px 1px gray;
      }

      &.disabled {
        cursor: not-allowed;
        box-shadow: none;
      }
    }

    &::after {
      height: max-content;
      background-color: gray;
    }
  }
}
</style>
