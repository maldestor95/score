<template>
  <div>
    <container>
      <button
        class="bg-blue-400 text-white w-32 justify-self-end"
        @click="store.newGame()"
      >
        New Game
      </button>
    </container>

    <container class="mt-2">
      <div v-if="store.getUsers.length > 0" class="pt-8 mx-2 relative">
        <div class="absolute top-2">name</div>
        <div
          v-for="userIndex in store.getUsers.length"
          class="flex flex-row md:gap-10 mb-4 md:mb-2 gap-2"
        >
          <input v-model="store.userList[userIndex - 1].name" class="grow w-60 shrink" />
          <button
            @click="deleteU(userIndex)"
            class="grow-0"
            :hidden="store.getUsers.length < 2"
            tabindex="-1"
            v-if="!store.isGameStarted"
          >
            <!-- delete icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
      <button class="w-32" @click="store.addUser()" v-if="!store.isGameStarted">
        Add Player
      </button>
    </container>

    <container class="shadow-md" v-if="!showStepsSetup">
      <listSelector
        :options="[...store.preDefinedGames, 'Custom Settings']"
        v-model="PredefinedChoice"
        @update:model-value="store.setGame(PredefinedChoice)"
      ></listSelector>

      <div
        class="flex flex-wrap justify-center mt-4 scale-0 transition delay-150 duration-300 ease-out scale-x-100"
        :class="{
          'scale-y-100': store.targetGame == 'Custom Settings',
          'h-0': store.targetGame != 'Custom Settings',
        }"
      >
        <container class="basis-full md:basis-1/2 pl-4">
          <defineSteps
            :steps="store.scoreSteps"
            :disabled="false"
            @change="
              (ev) => {
                store.scoreSteps = ev;
              }
            "
            >ROUND STEPS</defineSteps
          >
        </container>

        <container class="basis-full pl-4 md:basis-1/2">
          <toggleSwitch v-model="store.trackBets" class="text-black justify-self-end"
            >Bets
          </toggleSwitch>
          <defineSteps
            :steps="store.betSteps"
            @change="
              (ev) => {
                store.betSteps = ev;
              }
            "
            :disabled="!store.trackBets"
            >BETS STEPS</defineSteps
          ></container
        >
      </div>
    </container>

    <container>
      <spinner :sectors="store.getUsers.map(uu=>uu.name)" class="w-60 mx-auto"></spinner>
    </container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useScoreStore } from "./store.ts";
import toggleSwitch from "../../components/toggleswitch.vue";
import container from "../../components/container.vue";
import defineSteps from "./definesteps.vue";
import listSelector from "../../components/listSelector.vue";
import spinner from "../../components/spinner.vue";

const store = useScoreStore();
const PredefinedChoice = ref(store.targetGame);
const showStepsSetup = ref(false);

const deleteU = (userId: number) => {
  store.deleteUser(userId);
};
</script>
