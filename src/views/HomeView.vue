<script setup lang="ts">
import ListPosts from '../components/ListPosts.vue'; 
</script>

<template>
    <div>
        <h1 class="text-2xl text-green-800 dark:text-green-400 mb-1.5">Olá!</h1>
        <p class="text-justify">
            Esse blog é dedicado especificamente as minhas explicações sobre desenvolvimento web, programação e assuntos relacionados. Compartilharei meus conhecimentos, experiências e dicas para ajudar outros desenvolvedores em seus devidos aprendizados. Fique à vontade para explorar os artigos e aprender junto comigo!
        </p>
        <ListPosts />
    </div>
</template>
