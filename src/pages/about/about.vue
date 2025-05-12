<template>
  <ul class="text-black border-b border-black border-solid pb-4">
    <li>
      <RouterLink to="/">About</RouterLink>
    </li>
    <li>
      <RouterLink to="/ColtExpress">ColtExpress</RouterLink>
    </li>
  </ul>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
