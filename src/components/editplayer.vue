<template>
  <div class="flex flex-row">
    <!-- {{ userId }} -->
    <input v-model="userName" :disabled="!showAction" />
    <div>
      <div class="flex gap-2" v-if="showAction">
        <button @click="updateU">edit</button>
        <button @click="deleteU">delete</button>
      </div>
      <div v-else>
        <button @click="showAction = true">Update</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useScoreStore } from "../pages/wizard/store";
const scoreStore = useScoreStore();
interface Props {
  userId: number;
}
const props = withDefaults(defineProps<Props>(), {
  userId: 0,
});

const showAction = ref(false);
const userName = ref(scoreStore.getUsers[props.userId - 1].name);

const deleteU = () => {
  showAction.value = false;
  scoreStore.deleteUser(props.userId);
  userName.value = scoreStore.getUsers[props.userId - 1].name;
};
const updateU = () => {
  showAction.value = false;
  scoreStore.updateUserName(props.userId, userName.value);
};
</script>

<style scoped></style>
