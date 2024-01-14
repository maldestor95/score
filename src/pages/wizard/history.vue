<template>
  <div>History</div>
  <container class="flex flex-row justify-evenly">
    <div class="w-20 font-semibold">
      <div>Round</div>
      <div v-for="(item, index) in store.getRoundNumber" :key="index">
        {{ item }}
      </div>
    </div>
    <div v-for="(player, playerId) in store.userList" :key="playerId" class="w-40">
      <div class="font-semibold">{{ player.name }}</div>
      <div v-for="roundIScore in player.scorePerRound">
        {{ roundIScore }}
      </div>
    </div>
  </container>
</template>

<script setup lang="ts">
import { useScoreStore } from "./store";
import container from "../../components/container.vue";
const store = useScoreStore();
</script>

<style scoped></style>
