<template>
  <div
    :class="`grid grid-cols-[1fr${
      noscore ? '' : '_100px'
    }] border-t-2 border-white border-solid hover:cursor-pointer`"
  >
    <div
      :class="`text-start px-2 text-white ${
        noscore ? 'border-r-0' : 'border-r-2'
      } border-white border-solid grid grid-cols-[1fr_30px]`"
    >
      <slot></slot>
    </div>

    <input
      v-if="!noscore"
      v-model="value"
      type="number"
      class="bg-[#7E8848] text-center text-white"
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
