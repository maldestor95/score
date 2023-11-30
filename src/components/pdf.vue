<template>
  <ul class="text-start container px-2">
    <li class="flex flex-row">
      <img src="/flavico.svg" class="w-6 mr-2" />
      <a :href="dorfEnUrl">English Rules</a>
    </li>
    <li class="flex flex-row">
      <img src="/flavico.svg" class="w-6 mr-2" />
      <a :href="dorfFrUrl">Règles en français</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
const dorfEnUrl = ref(
  "https://raw.githubusercontent.com/maldestor95/dorf/master/public/Dorfromantik.pdf"
);
const dorfFrUrl = ref(
  "https://raw.githubusercontent.com/maldestor95/dorf/master/public/DorfromantikFR.pdf"
);
</script>

<style scoped>
li {
  margin-bottom: 0.1rem;
}
</style>
