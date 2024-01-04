<template>
  <div>
    nb rounds: <span>{{ scoreStore.getRoundNumber }}</span>
  </div>
  <div class="flex flex-row">
    <button @click="scoreStore.newRound">New Round</button>
  </div>

  <h1>Round {{ scoreStore.getRoundNumber }}</h1>
  <div class="grid grid-cols-2">
    <section>
      <h2>Round</h2>
      <div
        v-for="(user, userId) in scoreStore.getUsers"
        :key="userId"
        class="container flex flex-row flex-grow"
      >
        <div class="basis-1/3 px-2">
          {{ user.name }}
        </div>
        <div>
          <inputnumber v-model="user.currentRound" />
        </div>
      </div>
    </section>
    <section>
      <h2>Bet</h2>
      <div v-for="(user, userId) in scoreStore.getUsers" :key="userId">
        <inputnumber v-model="user.currentBet" />
      </div>
    </section>
  </div>

  <h1>history</h1>
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
  </div>
  <slot></slot>
</template>

<script setup lang="ts">
import { useScoreStore } from "./store";
import inputnumber from "../../components/inputnumber.vue";
const scoreStore = useScoreStore();
</script>

<style scoped></style>
