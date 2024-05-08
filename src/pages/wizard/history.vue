<template>
  <div>
    <div>History</div>
    <div class="flex flex-row justify-center gap-2">
      <button @click="setGraph = 'total'">Total</button>
      <button @click="setGraph = 'table'">Table</button>
      <button @click="setGraph = 'cumulative'">cumulative</button>
    </div>
    <container
      class="grid grid-cols-[56px_1fr] overflow-y-auto max-h-[300px]"
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
    </container>
    <historychart :graph-type="<graphType><unknown>setGraph"></historychart>
  </div>
</template>

<script setup lang="ts">
import { useScoreStore } from "./store";
import container from "../../components/container.vue";
import historychart, { Props as graphType } from "./historychart.vue";
import { ref } from "vue";

const setGraph = ref<"total" | "cumulative" | "table" | undefined>("total");
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
