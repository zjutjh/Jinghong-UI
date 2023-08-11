<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  label?: string;
  placeholder?: string;
  type?: null | "password" | "textarea";
  validate?: (value: string) => boolean;
  errorMessage?: string;
  disabled?: boolean;
  modelValue?: string;
}>();

const status = ref<"error" | "success">("success");

const validate = () => {
  if (props.validate) {
    status.value = props.validate(props.modelValue as string) ? "success" : "error";
  }
};

</script>
<template>
  <div class="j-input">
    <span class="label">{{ props.label }}</span>
    <component :value="modelValue" @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value);
    " :disabled="disabled" :placeholder="placeholder" @change="validate"
      :is="props.type == 'textarea' ? 'textarea' : 'input'" :class="status">
    </component>
    <div class="message" :class="status">{{ props.errorMessage }}</div>
  </div>
</template>

<style scoped lang="scss">
.j-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 5px;

  .label {
    font-size: 16px;
    width: fit-content;
  }



  input {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: #333;
    }

    &.error {
      border-color: red;
    }

    &.success {
      border-color: green;
    }

  }

  textarea {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: #333;
    }

    &.error {
      border-color: red;
    }

    &.success {
      border-color: green;
    }
  }


  .message {
    font-size: 12px;
    color: red;

    &.success {
      display: none;
    }

    &.error {
      color: red;
      transition: all 0.3s;
    }
  }
}
</style>
