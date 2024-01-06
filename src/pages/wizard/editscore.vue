<template>
  <div class="container my-4" :class="{ 'bg-blue-500 text-white': editable }">
    <div class="flex flex-row flex-grow">
      <div class="basis-1/3 px-2 text-2xl capitalize">
        <slot>UserName</slot>
      </div>
      <div class="basis-2/3">
        <div class="flex justify-between mx-4">
          <input
            type="number"
            v-model="modelValue"
            class="w-10 rounded-md bg-transparent text-2xl"
            readonly
          />
          <div class="text-2xl">{{ props.lastScore }}</div>
        </div>
      </div>
    </div>
    <div class="border border-black border-solid container" v-if="editable">
      <div class="flex justify-evenly py-2 text-white" v-for="step in props.steps">
        <button @click="modelValue = modelValue - step" class="bg-red-500 w-16">
          {{ -step }}
        </button>
        <button @click="modelValue = modelValue + step" class="bg-green-500 w-16">
          {{ step }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  lastScore: number;
  steps: number[];
  editable?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  lastScore: 0,
  steps: () => [1, 3, 5],
  editable: true,
});
const modelValue = defineModel<number>({ required: true });
</script>
