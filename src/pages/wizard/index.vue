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
      class="grow border-b border-r border-solid border-black h-8 pt-1 hover:cursor-pointer"
      :class="{ 'font-bold bg-slate-200': showSection == 'History' }"
      @click="showSection = 'History'"
    >
      History
    </div>
    <div
      class="grow border-b border-solid border-black h-8 pt-1 hover:cursor-pointer"
      :class="{ 'font-bold bg-slate-200': showSection == 'About' }"
      @click="showSection = 'About'"
    >
      About
    </div>
  </div>
  <div class="container mx-auto mt-2">
    <players v-if="showSection == 'Setup'" class="pb-4">Players</players>
    <score v-if="showSection == 'Score'" class="pb-4">Score</score>
    <history v-if="showSection == 'History'" class="pb-4"></history>
    <About v-if="showSection == 'About'" class="pb-4"></About>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import players from "./players.vue";
import score from "./score.vue";
import history from "./history.vue";
import About from "../about/about.vue";

const showSection = ref("Setup");
</script>
