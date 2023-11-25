<template>
  <div class="grid grid-cols-[1fr_200px] border-t-2 border-white border-solid">
    <div class="text-start px-2 text-white border-r-2 border-white border-solid flex">
      <slot></slot>
    </div>
    <input v-model="value" type="number" class="bg-[#7E8848] text-center text-white" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<style scoped></style>
