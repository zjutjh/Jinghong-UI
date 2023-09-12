<script setup lang="ts">
import { ref } from 'vue';

const message = ref<JMessageData[]>({
})
</script>
<template>
  <div class="j-message">
    <slot />
    <div class="message">
      <div class="message-item">
        <div class="icon" />
        <div class="content" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.j-message {
  position: fixed;
  top: 80px;
  min-width: 300px;
  max-width: 500px;
  width: 40vw;
  margin: 0 auto;
  z-index: 1000;
}
</style>
