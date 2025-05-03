<template>
  <div>
    <div class="flex justify-evenly items-center md:justify-center md:gap-10">
      <h1>
        Round <span>{{ scoreStore.getRoundNumber }}</span>
      </h1>
      <img
        :src="`/${scoreStore.targetGame.toLowerCase()}.jpg`"
        :alt="`${scoreStore.targetGame.toLowerCase()}`"
        class="w-16 opacity-80"
        v-if="scoreStore.targetGame != 'Custom Settings'"
      />
    </div>

    <div class="flex flex-row justify-evenly">
      <button
        @click="
          scoreStore.newRound();
          activeUser = '';
        "
      >
        New Round
      </button>
      <toggleSwitch v-model="betOrRoundPhase" v-if="scoreStore.trackBets">
        Round
        <template #post> Bet</template>
      </toggleSwitch>
    </div>

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
      @click="activeUser = user.userId"
    >
      <editscore
        :lastScore="scoreStore.getScore(userId)"
        :roundScore="scoreStore.userList[userId].currentRound"
        :betScore="scoreStore.userList[userId].currentBet"
        :steps="betOrRoundPhase ? scoreStore.betSteps : scoreStore.scoreSteps"
        :editable="activeUser == user.userId"
        :phase="betOrRoundPhase ? 'bet' : 'round'"
        @changeScore="(event) => scoreStore.editCurrentRound(userId, event)"
        @changeBet="(event) => scoreStore.editCurrentBet(userId, event)"
        :activePlayer="activeUser == user.userId"
      >
        {{ user.name }}
      </editscore>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScoreStore } from "./store";
import editscore from "./editscore.vue";
import toggleSwitch from "../../components/toggleswitch.vue";

import { ref } from "vue";
const scoreStore = useScoreStore();
const activeUser = ref("");
const betOrRoundPhase = ref(false);
</script>
