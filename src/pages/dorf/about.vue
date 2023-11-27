<template>
  <div v-if="show" class="absolute top-0 left-0 w-full h-full bg-[#7d8846]">
    <p>Pour retourner sur le site pricincipal, cela se passe ici</p>
    <p>Maldestor95 -- 2023</p>
    <button class="text-black" @click="show = !show">quit</button>
  </div>

  <div v-if="!show" class="flex justify-center align-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke="white"
      class="w-8 h-40"
      @click="show = !show"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);
</script>

<style scoped></style>
