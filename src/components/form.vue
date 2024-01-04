<template>
  <Modal :click-anywhere="false">
    <div>
      <slot>Form content</slot>
      <div class="flex flex-row gap-4">
        <button class="basis-1/2">cancel</button>
        <button>ok</button>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Modal from "./modal.vue";
</script>

<style scoped></style>
