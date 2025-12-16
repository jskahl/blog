<script setup lang="ts">
import { ListPosts } from "@/components";
</script>

<template>
    <div class="w-full flex flex-col justify-start items-center flex-1">
        <h1
            class="w-full text-center text-2xl text-green-800 dark:text-green-400 mt-4 border-b-2 border-(--bg-color) dark:border-(--text-color) border-dashed pb-2">
            Postagens
        </h1>

        <ListPosts />
    </div>
</template>
