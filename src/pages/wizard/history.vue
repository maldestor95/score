<template>
  <div>History</div>
  <container class="grid grid-cols-[56px_1fr]">
    <div class="font-semibold">
      <div>Round</div>
      <div v-for="(item, index) in store.getRoundNumber" :key="index">
        {{ item }}
      </div>
    </div>
    <div class="overflow-x-scroll">
      <div class="flex flex-row gap-2 md:justify-evenly alternateBlue">
        <div v-for="(player, playerId) in store.userList" :key="playerId" class="w-32">
          <div class="font-semibold">{{ player.name }}</div>
          <div v-for="roundIScore in player.scorePerRound">
            {{ roundIScore }}
          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script setup lang="ts">
import { useScoreStore } from "./store";
import container from "../../components/container.vue";
const store = useScoreStore();
</script>

<style scoped>
.alternateBlue > :nth-child(even) {
  @apply bg-blue-400 text-white px-2;
}
</style>
