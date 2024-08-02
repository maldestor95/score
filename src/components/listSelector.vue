<template>
  <div>
    <div v-for="item in props.options">
      <div :class="{ chosen: choice == item }" class="py-1" @click="choice = item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const choice = defineModel<string>();
interface Props {
  options: string[];
}
const props = withDefaults(defineProps<Props>(), {
  options: () => ["Wizard", "Uno"],
});
</script>

<style scoped>
.chosen {
  @apply bg-blue-400 text-white font-semibold py-2;
}
</style>
