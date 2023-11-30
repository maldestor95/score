<template>
  <div
    class="grid border-t-2 border-white border-solid hover:cursor-pointer grid-cols-[1fr_100px]"
  >
    <!-- :class="gridNoScore" -->
    <div
      class="text-start px-2 text-white border-white border-solid grid grid-cols grid-cols-[1fr_30px]"
    >
      <slot></slot>
    </div>

    <input
      v-if="!noscore"
      v-model="value"
      type="number"
      class="bg-[#7E8848] text-center text-white border-l-2"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
interface Props {
  modelValue: number;
  noscore?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  noscore: false,
});
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
