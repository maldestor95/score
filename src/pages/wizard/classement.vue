<template>
  <div v-for="(item, index) in classement" :key="index" class="grid grid-cols-2 gap-2 text-2xl py-2">
    <div>
    {{ item.name }}
    </div>
    <div>
     {{ item.score }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useScoreStore } from "./store";
const store = useScoreStore();

const classement = computed(() => {
  const users = store.userList.map((user) => {
    return {
      name: user.name,
      score: user.scorePerRound.reduce((acc, score) => acc + score, 0),
    };
  });
  const ranking = (a, b) => {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return 0;
  };
  users.sort(ranking);
  return users;
});
</script>

<style scoped></style>
