<script setup lang="ts">
type Props = {
  vertical?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  vertical: false,
})

</script>
<template>
  <div class="j-space" :class="{ vertical: props.vertical }">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.j-space {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;

  &.vertical {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    align-items: flex-start;
  }
}
</style>
