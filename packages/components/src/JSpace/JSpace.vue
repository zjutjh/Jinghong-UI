<script setup lang="ts">
type Props = {
  vertical?: boolean,
  justify?: 'end' | 'space-between' | 'space-around' | 'center';
}

const props = withDefaults(defineProps<Props>(), {
  vertical: false,
  justify: undefined,
})

</script>
<template>
  <div
    class="j-space"
    :class="[{ vertical: props.vertical }, props.justify]"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.j-space {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  row-gap: 10px;
  align-items: center;
  flex-flow: wrap;
  justify-content: v-bind("props.justify");

  &.vertical {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    align-items: flex-start;
  }
}
</style>
