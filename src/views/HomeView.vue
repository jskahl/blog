<script setup lang="ts">
import { ListPosts } from '@/components'; 
</script>

<template>
    <div>
        <h1 class="text-2xl text-green-800 dark:text-green-400 mb-1.5">Olá!</h1>
        <p class="text-justify">
            Esse blog é destinado para os meus relatos sobre assuntos relacionados ao desenvolvimento de software.
        </p>
        <router-link to="/postagens">
            <h1
                class="text-2xl text-green-800 dark:text-green-400 mt-4 border-b-2 border-(--bg-color) dark:border-(--text-color) border-dashed pb-2">
                Postagens
            </h1>
        </ router-link >

        <ListPosts />
    </div>
</template>
