<template>
  <h1>
    Round <span>{{ scoreStore.getRoundNumber }}</span>
  </h1>
  <button
    @click="
      scoreStore.newRound();
      activeUser = '';
    "
  >
    New Round
  </button>
  <button @click="togglePhase" v-if="scoreStore.trackBets">
    Toggle phase {{ phase }}
  </button>

  <div class="flex flex-row flex-grow text-2xl capitalize">
    <div class="basis-1/3 px-2">Player</div>
    <div class="basis-2/3">
      <div class="flex justify-between mx-4">
        <div>Round</div>
        <div v-if="scoreStore.trackBets">Bet</div>
        <div class="text-2xl">Score</div>
      </div>
    </div>
  </div>
  <div
    v-for="(user, userId) in scoreStore.getUsers"
    :key="userId"
    @click="activeUser = user.name"
  >
    <editscore
      :lastScore="scoreStore.getScore(userId)"
      :roundScore="scoreStore.userList[userId].currentRound"
      :betScore="scoreStore.userList[userId].currentBet"
      :steps="scoreStore.scoreSteps"
      :editable="activeUser == user.name"
      :phase="phase"
      @changeScore="(event) => scoreStore.editCurrentRound(userId, event)"
      @changeBet="(event) => scoreStore.editCurrentBet(userId, event)"
    >
      {{ user.name }}
    </editscore>
  </div>
</template>

<script setup lang="ts">
import { useScoreStore } from "./store";
import editscore from "./editscore.vue";

import { ref } from "vue";
type phaseType = "round" | "bet";
const scoreStore = useScoreStore();
const activeUser = ref("");
const phase = ref<phaseType>("round");
const togglePhase = () => {
  if (phase.value == "round") {
    phase.value = "bet";
  } else phase.value = "round";
};
</script>
