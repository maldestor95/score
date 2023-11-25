<template>
  <div class="flex my-2">
    <div class="basis-1/6 flex items-center">
      <button @click="reset">Reset</button>
    </div>
    <div class="basis-3/6">
      <svg viewBox="0 0 150 82" width="140" class="mx-auto">
        <image xlink:href="/dorftitle.svg" />
      </svg>
    </div>
    <div class="basis-2/6 flex items-center justify-center">
      <h1 class="text-white font-bold">{{ total }}</h1>
    </div>
  </div>

  <!-- Objectives & Flags -->
  <div
    class="grid grid-cols-[minmax(90px,1fr)_repeat(5,minmax(0,1fr))] items-center scoregrid text-white"
  >
    <toprow></toprow>

    <div class="flex flex-row px-1">
      <div class="my-auto hidden md:block">Objectifs</div>
      <svg viewBox="300 0 50 50" class="mx-auto">
        <image xlink:href="/scoreicons.svg" />
      </svg>
    </div>
    <input v-model="score.Woods" type="number" />
    <input v-model="score.Grain" type="number" />
    <input v-model="score.Village" type="number" />
    <input v-model="score.Track" type="number" />
    <input v-model="score.Stream" type="number" />

    <div class="flex flex-row px-1">
      <div class="my-auto hidden md:block">Drapeaux</div>
      <svg viewBox="250 0 50 50" class="mx-auto">
        <image xlink:href="/scoreicons.svg" />
      </svg>
    </div>
    <input v-model="score.WoodsFlag" type="number" />
    <input v-model="score.GrainFlag" type="number" />
    <input v-model="score.VillageFlag" type="number" />
    <input v-model="score.LongestTrack" type="number" />
    <input v-model="score.LongestStream" type="number" />
  </div>

  <!-- unlocks -->
  <div class="border-white border-solid border-2 border-t-0">
    <unlock v-model="score.Cabane">
      Cabane dans le bois<span>
        <svg viewBox="0 0 50 60" height="30">
          <image xlink:href="/scoreicons.svg" />
        </svg> </span
    ></unlock>
    <unlock v-model="score.Moisson"
      >fête des moissons
      <span>
        <svg viewBox="50 0 50 60" height="30">
          <image xlink:href="/scoreicons.svg" /></svg></span
    ></unlock>
    <unlock v-model="score.TourDeGuet"
      >Tour de guet<span>
        <svg viewBox="100 0 50 60" height="30">
          <image xlink:href="/scoreicons.svg" /></svg></span
    ></unlock>
    <unlock v-model="score.Locomotive"
      >Locomotive<span>
        <svg viewBox="150 0 50 60" height="30">
          <image xlink:href="/scoreicons.svg" /></svg></span
    ></unlock>
    <unlock v-model="score.Bateaux"
      >Bateaux de plaisance<span>
        <svg viewBox="200 0 50 60" height="30">
          <image xlink:href="/scoreicons.svg" /></svg></span
    ></unlock>
    <unlock v-model="score.Hearts">Coeurs rouge</unlock>
    <unlock v-model="score.Circus">Cirque</unlock>
    <unlock v-model="score.Aiguilleur">Aiguilleurs (2/passage à niveau)</unlock>
    <unlock v-model="score.Bergere">Bergère(1/Mouton)</unlock>
    <unlock v-model="score.Colline">Colline(à dist.2*2/tuile Objectif)</unlock>
    <unlock v-model="score.Chantier"
      >Chantier de Construction (territoire de 7+=7)</unlock
    >
    <unlock v-model="score.Decollage">Site de décollage(2/tuile parcourue)</unlock>
    <unlock v-model="score.GoldHearts">Coeur doré (2/bords correspondant)</unlock>

    <unlock v-model="score.Gare">Gare ferroviare(si fermée=1/tuile)</unlock>
    <unlock v-model="score.Port">Port de plaisance(si fermé=1/tuile)</unlock>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import toprow from "./toprow.vue";
import unlock from "./unlock.vue";
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
  Hearts: 0,
  Circus: 0,
  Aiguilleur: 0,
  Bergere: 0,
  Colline: 0,
  Chantier: 0,
  Decollage: 0,
  GoldHearts: 0,
  Cabane: 0,
  Moisson: 0,
  TourDeGuet: 0,
  Locomotive: 0,
  Bateaux: 0,
  Gare: 0,
  Port: 0,
};
let score = reactive({ ...resetScore });
function reset() {
  Object.assign(score, resetScore);
}
const total = computed(() => {
  let totalTemp = 0;
  // return Object.values(score).reduce(
  //   (a, c) => a + (c.length > 0 ? parseInt(c) : 0),
  //   initialValue
  // );
  // Object.keys(score).forEach((element:string) => {
  // console.log(`${score[element]}`)
  totalTemp = Object.values(score).reduce((a, c) => {
    if (typeof c == "number") return a + c;
    if (c == "") return a;
    return a + parseInt(c);
  });
  // });
  return totalTemp;
});
</script>

<style scoped>
input {
  text-align: center;
  color: white;
  background-color: #7e8848;
}
</style>
