<template>
  <div class="flex justify-evenly">
    <div
      class="grow border-b border-r border-solid border-black h-8 pt-1 hover:cursor-pointer"
      :class="{ 'font-bold bg-slate-200': showSection == 'Setup' }"
      @click="showSection = 'Setup'"
    >
      Setup
    </div>
    <div
      class="grow border-b border-r border-solid border-black h-8 pt-1 hover:cursor-pointer"
      :class="{ 'font-bold bg-slate-200': showSection == 'Score' }"
      @click="showSection = 'Score'"
    >
      Round
    </div>
    <div
      class="grow border-b border-solid border-black h-8 pt-1 hover:cursor-pointer"
      :class="{ 'font-bold bg-slate-200': showSection == 'History' }"
      @click="showSection = 'History'"
    >
      History
    </div>
  </div>
  <players v-if="showSection == 'Setup'">Players</players>
  <score v-if="showSection == 'Score'">Score</score>
  <history v-if="showSection == 'History'"></history>
</template>

<script setup lang="ts">
import { ref } from "vue";
import players from "./players.vue";
import score from "./score.vue";
import history from "./history.vue";

const showSection = ref("Setup");
</script>
