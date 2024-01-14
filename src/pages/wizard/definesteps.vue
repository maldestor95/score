<template>
  <form class="text-left">
    <h3>
      <slot>Choose the steps</slot>
    </h3>
    <div v-for="(option, index) in choices" :key="index" class="flex">
      <input
        type="radio"
        :name="choice"
        :value="option.id"
        @click="updateSteps(option.id)"
      />
      <label :for="option.id" class="ml-2 pt-2">{{ option.opt.join("\ \ \ \ ") }}</label>
      <br />
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
type stepsType = number[];
type Props = {
  steps?: number[];
};

const emit = defineEmits<{
  change: [steps: stepsType];
}>();

const props = withDefaults(defineProps<Props>(), {
  steps: () => {
    return [-5, -2, -1, 1, 2, 5];
  },
});

const choice = ref("opt1");
const choices = reactive([
  { id: "opt1", opt: props.steps },
  { id: "opt6", opt: [10, 20, 50] },
  { id: "opt2", opt: [-50, -20, -10, 10, 20, 50] },
  { id: "opt3", opt: [-5, -3, -2, -1, 1, 2, 3, 5] },
  { id: "opt4", opt: [-1, 1] },
  { id: "opt5", opt: [10, 20, 30, 40, 80] },
]);
const updateSteps = (id: string) => {
  emit("change", choices.filter((c) => c.id == id)[0].opt);
};
</script>
