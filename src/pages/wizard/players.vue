<template>
  <div class="container border-2 border-solid border-black bg-slate-400 px-2">
    <h1>Players</h1>
    <div v-for="userIndex in store.getUsers.length" class="grid grid-cols-2 gap-2">
      <Editplayer :user-id="userIndex"></Editplayer>
    </div>
    <!-- {{ store.getUsers }} -->
    <div class="grid grid-cols-3">
      <p>nom</p>
      <input v-model="user.name" />
      <button @click="newUser">Add</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useScoreStore } from "./store.ts";
import Editplayer from "../../components/editplayer.vue";

const store = useScoreStore();
const user = ref({ name: "" });
const newUser = () => {
  store.addUser(user.value.name);
  user.value.name = "";
};
</script>

<style scoped></style>
