<template>
  <div>
    <div class="flex">
      <div class="basis-1/12"></div>
      <input
        v-model="recipeSelection"
        type="text"
        class="border-2 border-blue-400 rounded-lg basis-10/12"
      />
    </div>
    <ul
      v-for="item in recipeListFiltered"
      :key="item.title"
      class="cursor-pointer text-left hover:bg-blue-400"
      @click="$emit('choice', item.title)"
    >
      <li>
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, ref } from "vue";
import { recipeListType } from "./methods";
const recipeSelection = ref("");

const props = defineProps({
  recipeList: { type: Object as PropType<recipeListType>, required: true },
});

const recipeListFiltered = computed(() => {
  // return [{ title: 13 }, { title: "aaa" }];
  return props.recipeList.filter((rl) =>
    rl.title.toUpperCase().includes(recipeSelection.value.toUpperCase())
  );
});
</script>

<style scoped>
li:before {
  content: "\00BB";
  margin-right: 6px;
}
</style>
