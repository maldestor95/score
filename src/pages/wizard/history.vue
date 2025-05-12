<template>
  <div>
    <div>History</div>
    <div class="flex flex-row justify-center gap-2 flex-wrap mb-4">
      <button @click="setGraph = 'total'">Total</button>
      <button @click="setGraph = 'table'">Table</button>
      <button @click="setGraph = 'cumulative'">cumulative</button>
      <button @click="setGraph = 'classement'">classement</button>
    </div>
    <div
      class="container grid grid-cols-[56px_1fr] overflow-y-auto max-h-[300px]"
      v-if="setGraph == 'table'"
    >
      <div class="font-semibold">
        <div class="firstLine">Round</div>
        <div v-for="(item, index) in store.getRoundNumber" :key="index">
          {{ item }}
        </div>
      </div>
      <div class="overflow-x-scroll">
        <div class="flex flex-row gap-2 alternateBlue">
          <div v-for="(player, playerId) in store.userList" :key="playerId" class="w-32">
            <div class="font-semibold firstLine">{{ player.name }}</div>
            <div v-for="roundIScore in player.scorePerRound">
              {{ roundIScore }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <historychart :graph-type="setGraph "></historychart>
    <Classement v-if="setGraph === 'classement'"></Classement>

  </div>
</template>

<script setup lang="ts">
import { useScoreStore } from "./store";
import historychart from "./historychart.vue";
import { ref } from "vue";
import Classement from "./classement.vue";

const setGraph = ref<"total" | "cumulative" | "table" | "classement" | "spinner" | undefined>("total");
const store = useScoreStore();
</script>

<style scoped>
.alternateBlue > :nth-child(even) {
  @apply bg-blue-400 text-white px-2;
}
</style>
