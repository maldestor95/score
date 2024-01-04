<template>
  <div class="relative py-0.5">
    <label :for="refData">
      <slot name="label"></slot>
    </label>
    <input
      ref="refData"
      :value="props.modelValue"
      type="number"
      :disabled="disabled"
      @input="updateData"
      class="mx-2 rounded-lg text-center"
      @keyup.enter="toggleDisable"
      @keydown.tab="toggleDisable"
    />
    <div
      class="absolute top-0 right-2 hover:cursor-pointer"
      @click.prevent="toggleDisable"
      :hidden="!disabled"
    >
      <!-- pencil from heroicon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

interface Props {
  modelValue: number;
  Editable?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  Editable: true,
});

const refData = ref();
const disabled = ref(!props.Editable);

const toggleDisable = () => {
  if (props.Editable) disabled.value = false;
  else disabled.value = !disabled.value;
};

const updateData = (event: Event) => {
  const data = (event.target as HTMLInputElement).value;
  emit("update:modelValue", Number(data));
};
</script>

<style scoped></style>
