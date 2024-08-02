<template>
  <div>
    <div v-for="item in props.options">
      <div :class="{ 'bg-red-200': choice == item }" @click="choice = item">
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

<style scoped></style>
