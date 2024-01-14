<template>
  <div class="flex justify-evenly hover:cursor-pointer">
    <div
      class="grow border-b border-r border-solid border-black h-8 pt-1"
      :class="{ 'font-bold bg-slate-200': showSection == 'Setup' }"
      @click="showSection = 'Setup'"
    >
      Setup
    </div>
    <div
      class="grow border-b border-r border-solid border-black h-8 pt-1"
      :class="{ 'font-bold bg-slate-200': showSection == 'Score' }"
      @click="showSection = 'Score'"
    >
      Round
    </div>
    <div
      class="grow border-b border-solid border-black h-8 pt-1"
      :class="{ 'font-bold bg-slate-200': showSection == 'History' }"
      @click="showSection = 'History'"
    >
      History
    </div>
  </div>
  <players v-if="showSection == 'Setup'">Players</players>
  <score v-if="showSection == 'Score'">Score</score>
  <bets v-if="showSection == 'History'">Bets</bets>
</template>

<script setup lang="ts">
import { ref } from "vue";
import players from "./players.vue";
import score from "./score.vue";
import bets from "./bets.vue";

const showSection = ref("Setup");
</script>
