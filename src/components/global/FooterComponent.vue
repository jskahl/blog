<script setup lang="ts">
import { Web } from "@/icons";

const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="select-none w-full h-16 flex justify-between items-center px-2 md:px-6 mt-auto mx-2 border-t-2 border-t(--bg-color) dark:border-t-(--text-color)">
        <h1 class="text-sm">
            © {{ currentYear }} José Eduardo Kahl · Blog pessoal
        </h1>
        <div title="Contato"
            class="cursor-pointer hover:text-green-800 active:text-green-800 dark:hover:text-green-400 dark:active:text-green-400 hover:rotate-12 active:rotate-24 active:scale-105 active:text-green-400 transition-transform">
            <a href="https://jskahl.dev">
                <Web />
            </a>
        </div>
    </footer>
</template>
