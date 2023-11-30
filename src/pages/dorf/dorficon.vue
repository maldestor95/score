<template>
  <!-- crown -->
  <div v-if="icontype == 'crown'">
    <svg viewBox="345 0 100 60" class="flex items-center justify-center px-2">
      <image xlink:href="/scoreicons.svg" />
    </svg>
  </div>
  <!-- wood -->
  <span v-if="icontype == 'wood'">
    <svg viewBox="0 0 50 60" :width="size">
      <image xlink:href="/scoreicons.svg" />
    </svg>
  </span>
  <!-- field -->
  <span v-if="icontype == 'field'">
    <svg viewBox="50 0 50 60" :width="size">
      <image xlink:href="/scoreicons.svg" />
    </svg>
  </span>
  <!-- villages -->
  <span v-if="icontype == 'village'">
    <svg viewBox="100 0 50 60" :width="size">
      <image xlink:href="/scoreicons.svg" />
    </svg>
  </span>
  <!-- railway -->
  <span v-if="icontype == 'railway'">
    <svg viewBox="150 0 50 60" :width="size">
      <image xlink:href="/scoreicons.svg" />
    </svg>
  </span>
  <!-- stream -->
  <span v-if="icontype == 'stream'">
    <svg viewBox="200 0 50 60" :width="size" :height="20">
      <image xlink:href="/scoreicons.svg" />
    </svg>
  </span>
  <!-- Sheperdess -->
  <span v-if="icontype == 'Sheperdess'">
    <svg viewBox="200 0 50 60" :width="size" :height="20">
      <image xlink:href="/scoreicons.svg" />
    </svg>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  icontype: string;
  size?: number;
}>();
</script>

<style scoped>
svg {
  margin-left: auto;
  margin-right: auto;
}
</style>
