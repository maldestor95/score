<template>
  <div class="container mx-auto">
    <div @click="menu = 'choice'" class="absolute left-0 top-1 w-8 h-8 p-0">
      <img src="/public/logo.svg" />
    </div>
    <div
      @click="menu = 'introduction'"
      v-if="menu == 'choice'"
      class="absolute right-0 top-1 w-8 h-8 p-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        class="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    </div>
    <recipeListForm
      class="mt-1 px-2"
      v-if="menu == 'choice'"
      :recipe-list="recipeList"
      @choice="
        (e) => {
          changerecipe(e);
          menu = 'chosen';
        }
      "
    ></recipeListForm>

    <recipeView
      :title="recipechosen"
      :recipeDetails="recipeDetails"
      class="mx-auto px-2"
      v-if="menu == 'chosen'"
    ></recipeView>

    <introduction v-if="menu == 'introduction'"></introduction>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import methods from "./methods";
import recipeListForm from "./recipelist.vue";
import recipeView from "./recipeview.vue";
import introduction from "./introduction.vue";
// import menubtn from "../../components/menubtn.vue";

const recipeList = ref([{ title: "testa", link: "linktest" }]);
const recipechosen = ref("sample recipe chosen");
const recipeDetails = ref(`# sample details`);
const menu = ref("introduction");

onMounted(async () => {
  recipeList.value = await methods.fetchList();
});

async function changerecipe(recipeTitle: string) {
  recipechosen.value = recipeList.value.filter(
    (rr) => rr.title.toUpperCase() == recipeTitle.toUpperCase()
  )[0].title;
  const link = recipeList.value.filter(
    (rr) => rr.title.toUpperCase() == recipeTitle.toUpperCase()
  )[0].link;
  recipeDetails.value = await methods.fetchRecipe(link);
}
</script>

<style scoped></style>
