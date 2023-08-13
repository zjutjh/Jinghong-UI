<script setup lang="ts">
import { JCard, JSpace } from 'jinghong-ui';
</script>
<template>
  <j-space vertical>

    带有标题的卡片
    <j-card title="title">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, temporibus, quo porro voluptatum beatae
      excepturi, exercitationem eveniet repellendus maiores maxime perspiciatis obcaecati cumque dolore facere deserunt
      libero ea magni laborum.
    </j-card>
    没有标题的卡片
    <j-card>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla dolore reprehenderit quam, officia eos beatae,
      incidunt esse, delectus ut est asperiores consequuntur voluptas velit. Eos quaerat ipsa totam officiis ea!
    </j-card>
  </j-space>
</template>

<style scoped lang="scss"></style>
