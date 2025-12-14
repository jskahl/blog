<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
    <div class="bg-(--text-color) text-(--bg-color) dark:bg-(--bg-color) dark:text-(--text-color)">
        <RouterView />
    </div>
</template>

<style scoped>
html.dark {
    color-scheme: dark;
}
</style>
