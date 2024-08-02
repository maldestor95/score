<template>
  <div class="debug" :class="{ selected: checked }" @click="checked = !checked">
    <slot>default Label</slot>
  </div>
</template>

<script setup lang="ts">
const checked = defineModel<boolean>();
</script>

<style scoped>
.selected {
  @apply bg-red-200;
}
</style>
