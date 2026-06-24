<script setup>
import "./assets/css/main.css";

const route = useRoute();
</script>

<template>
  <NuxtLayout>
    <NuxtPage :key="route.fullPath" />
  </NuxtLayout>
</template>
