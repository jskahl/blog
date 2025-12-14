<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
    <RouterView />
</template>

<style scoped>
@import "tailwindcss";

body {
    @apply bg-(var[--text-color]) text-(var[--bg-color]) dark:bg-(var[--bg-color]) dark:text-(var[--text-color]);
}
</style>
