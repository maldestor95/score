<template>
  <div v-if="!debug">
    <div>wizard</div>
    <players>Players</players>
    <score>Score</score>
    <bets>Bets</bets>
    <round>Round</round>
  </div>
</template>

<script setup lang="ts">
import players from "./players.vue";
import score from "./score.vue";
import bets from "./bets.vue";
import round from "./round.vue";
import { onMounted, ref } from "vue";

const debug = ref(false);

import { useScoreStore } from "./store.ts";
const store = useScoreStore();
const initStore = () => {
  store.trackBets = true;
  store.addUser("ludo");
  store.addUser("user2");
  store.addUser("user3");
};
onMounted(() => {
  initStore();
});
</script>

<style scoped></style>
