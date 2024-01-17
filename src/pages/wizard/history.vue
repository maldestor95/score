<template>
  <div>History</div>
  <container class="grid grid-cols-[56px_1fr] overflow-y-auto max-h-[300px]">
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
  </container>
  <historychart></historychart>
</template>

<script setup lang="ts">
import { useScoreStore } from "./store";
import container from "../../components/container.vue";
import historychart from "./historychart.vue";

const store = useScoreStore();
</script>

<style scoped>
.alternateBlue > :nth-child(even) {
  @apply bg-blue-400 text-white px-2;
}
.firstLine {
  /* @apply bg-blue-500 text-white px-2 font-semibold; */
  /* @apply sticky top-0; */
}
</style>
