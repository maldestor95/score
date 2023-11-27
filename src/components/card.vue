<template>
  <div class="border rounded-lg bg-white p-2 w-60 h-max relative">
    <div class="bg-[#7F8A49] h-60">
      <div class="text-xl">{{ props.Tile }}</div>
      <tile
        :Tile="props.Tile"
        size="200"
        :class="'flex justify-center align-center'"
      ></tile>
    </div>
    <div class="bg-[#5A8948] h-50">
      <p class="font-bold text-start pl-2">nouvelle règle</p>
      <p class="text-start pl-4">
        {{ getRule(props.Tile) }}
      </p>
    </div>

    <div class="absolute top-0 right-0 cursor-pointer" @click="$emit('hide')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="4"
        stroke="black"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import tile from "./tile.vue";
import { rules } from "../pages/dorf/tilename";

const props = defineProps<{
  Tile: string;
}>();

function getRule(key: string): string {
  return rules[key] || "";
}
</script>

<style scoped></style>
