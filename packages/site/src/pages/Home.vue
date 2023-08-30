<script setup lang="ts">
import { JSpace, JButton } from 'jinghong-ui';
import { IosArrowForward } from '@vicons/ionicons4';
import { useRouter } from 'vue-router';
const router = useRouter();
function handleClick() {
  router.push('/components/j-button');
}
</script>
<template>
  <div class="page">
    <div class="center">
      <img src="/logo.png" class="logo">
      精弘组件库
      <j-space>
        <j-button type="primary" shape="round-rect" filled :on-click="handleClick">开始探索
          <template #icon>
            <ios-arrow-forward />
          </template>
        </j-button>
      </j-space>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  align-content: center;
  flex-direction: column;

  min-height: calc(100vh - 100px);

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
    flex-direction: column;
    margin: auto;
    text-align: center;
    font-size: 2rem;
    color: #333;
    font-weight: bold;

    .logo {
      width: 300px;
      margin-bottom: 1rem;
    }
  }

}
</style>
