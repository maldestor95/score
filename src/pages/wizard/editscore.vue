<template>
  <div
    class="container my-4 text-2xl capitalize"
    :class="{ 'bg-blue-500 text-white': editable }"
  >
    <div class="flex flex-row flex-grow">
      <div class="basis-1/3 px-2">
        <slot>UserName</slot>
      </div>
      <div class="basis-2/3">
        <div class="flex justify-between mx-4">
          <div>{{ roundScore }}</div>
          <div v-if="store.trackBets">{{ betScore }}</div>
          <div class="text-2xl">{{ props.lastScore }}</div>
        </div>
      </div>
    </div>

    <div class="border border-black border-solid container" v-if="editable">
      <div class="flex justify-evenly py-2 text-white" v-for="step in props.steps">
        <button @click="emitupdate(phase, -step)" class="bg-red-500 w-20 h-14">
          {{ -step }}
        </button>
        <button @click="emitupdate(phase, +step)" class="bg-green-500 w-20 h-14">
          {{ step }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScoreStore } from "./store";
const store = useScoreStore();

const emit = defineEmits<{
  changeBet: [value: number];
  changeScore: [value: number];
  log: [text: string];
}>();

interface Props {
  lastScore: number;
  betScore: number;
  roundScore: number;
  steps: number[];
  phase: "round" | "bet";
  editable?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  lastScore: 0,
  betScore: 0,
  roundScore: 0,
  steps: () => [1, 3, 5],
  editable: false,
  phase: "round",
});

const emitupdate = (phase: string, value: number) => {
  switch (phase) {
    case "bet":
      emit("changeBet", props.betScore + value);
      break;
    case "round":
      emit("changeScore", props.roundScore + value);
      break;

    default:
      emit("log", "default txt");
      break;
  }
};
</script>
