<script setup lang="ts">
import { JButton, JSpace, JDivider } from 'jinghong-ui';
import { IosArrowForward, MdCheckmark } from '@vicons/ionicons4';
</script>
<template>
  众多不同的按钮:
  <j-space>
    <j-button>默认按钮</j-button>
    <j-button shape="round-rect">圆矩形按钮</j-button>
    <j-button shape="circle">圆</j-button>
    <j-button shape="cube"> 方 </j-button>
  </j-space>

  <j-divider />
  上述按钮都有对应的填充形式:
  <j-space>
    <j-button filled>默认按钮</j-button>
    <j-button filled shape="round-rect">圆矩形按钮</j-button>
    <j-button filled shape="circle">圆</j-button>
    <j-button shape="cube" filled> 方 </j-button>
  </j-space>
  <j-divider />
  按钮可以加图标, 或者只写一个图标, as your wish.
  <j-space>
    <j-button shape="round-rect"> 点我获取蟹黄煲秘方
      <template #icon>
        <ios-arrow-forward />
      </template>
    </j-button>

    <j-button filled> 确认
      <template #icon>
        <md-checkmark />
      </template>
    </j-button>

    <j-button shape="circle">
      <md-checkmark />
    </j-button>
    <j-button filled shape="circle">
      <md-checkmark />
    </j-button>
  </j-space>
</template>

<style scoped lang="scss"></style>
