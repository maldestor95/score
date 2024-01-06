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
  <button @click="togglePhase">Toggle phase {{ phase }}</button>

  <div
    v-for="(user, userId) in scoreStore.getUsers"
    :key="userId"
    @click="activeUser = user.name"
  >
    <editscore
      v-if="phase == 'Score'"
      v-model="user.currentRound"
      :lastScore="scoreStore.getScore(userId)"
      :steps="scoreStore.scoreSteps"
      :editable="activeUser == user.name"
    >
      {{ user.name }}
    </editscore>
    <editscore
      v-if="phase == 'Bet'"
      v-model="user.currentBet"
      :lastScore="scoreStore.getScore(userId)"
      :steps="scoreStore.betSteps"
      :editable="activeUser == user.name"
    >
      {{ user.name }}
    </editscore>
  </div>

  <!-- <h1>history</h1>
  <div
    v-for="(user, userId) in scoreStore.getUsers"
    :key="userId"
    class="container grid grid-cols-3"
  >
    <section>
      {{ user.name }}
    </section>
    <section>
      <inputnumber
        v-for="roundId in user.scorePerRound.length"
        :key="roundId"
        v-model="user.scorePerRound[user.scorePerRound.length - roundId]"
        :Editable="false"
      >
        <template #label>
          {{ user.name }} --
          {{ user.scorePerRound.length - roundId }}
        </template>
      </inputnumber>
    </section>
    <section>
      <inputnumber
        v-for="roundId in user.betPerRound.length"
        :key="roundId"
        v-model="user.betPerRound[user.betPerRound.length - roundId]"
        :Editable="false"
      >
        <template #label>
          {{ user.name }} --
          {{ user.scorePerRound.length - roundId }}
        </template>
      </inputnumber>
    </section>
  </div> -->
  <slot></slot>
</template>

<script setup lang="ts">
import { useScoreStore } from "./store";
import editscore from "./editscore.vue";
import { ref } from "vue";
const scoreStore = useScoreStore();
const activeUser = ref("");
const phase = ref("Score");
const togglePhase = () => {
  if (phase.value == "Score") {
    phase.value = "Bet";
  } else phase.value = "Score";
};
</script>

<style scoped></style>
