<template>
  <div class="flex my-2">
    <div class="basis-1/6 flex items-center">
      <button @click="reset">Reset</button>
    </div>
    <div class="basis-3/6">
      <svg viewBox="0 0 150 82" width="140" class="mx-auto">
        <image xlink:href="dorftitle.svg" />
      </svg>
    </div>
    <div class="basis-2/6 flex items-center justify-center">
      <h1 class="text-white font-bold">{{ total }}</h1>
    </div>
  </div>

  <div
    class="grid grid-cols-[minmax(90px,1fr)_repeat(6,minmax(0,1fr))] items-center scoregrid"
  >
    <toprow></toprow>
    <div class="flex flex-row px-1">
      <div class="my-auto hidden md:block">Objectifs</div>
      <svg viewBox="300 0 50 50" class="mx-auto">
        <image xlink:href="scoreicons.svg" />
      </svg>
    </div>
    <input v-model="score.Woods" type="number" />
    <input v-model="score.Grain" type="number" />
    <input v-model="score.Village" type="number" />
    <input v-model="score.Track" type="number" />
    <input v-model="score.Stream" type="number" />
    <div>
      {{ score.Woods + score.Grain + score.Village + score.Track + score.Stream }}
    </div>
    <div class="flex flex-row px-1">
      <div class="my-auto hidden md:block">Drapeaux</div>
      <svg viewBox="250 0 50 50" class="mx-auto">
        <image xlink:href="scoreicons.svg" />
      </svg>
    </div>
    <input v-model="score.WoodsFlag" type="number" />
    <input v-model="score.GrainFlag" type="number" />
    <input v-model="score.VillageFlag" type="number" />
    <input v-model="score.LongestTrack" type="number" />
    <input v-model="score.LongestStream" type="number" />
    <div>
      {{
        score.WoodsFlag +
        score.GrainFlag +
        score.VillageFlag +
        score.LongestTrack +
        score.LongestStream
      }}
    </div>
  </div>
  <div class="my-4"></div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import toprow from "./toprow.vue";
const resetScore = {
  Woods: 0,
  Grain: 0,
  Village: 0,
  Stream: 0,
  Track: 0,
  WoodsFlag: 0,
  GrainFlag: 0,
  VillageFlag: 0,
  LongestStream: 0,
  LongestTrack: 0,
  RedHeart: 0,
};
let score = reactive({ ...resetScore });
function reset() {
  Object.assign(score, resetScore);
}
const total = computed(() => {
  return Object.values(score).reduce((a, c) => a + c);
});
</script>

<style scoped>
input {
  text-align: center;
}
</style>
