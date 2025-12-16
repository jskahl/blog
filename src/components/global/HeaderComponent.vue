<script setup lang="ts">
import { WeatherSunny, WeatherNight, BookMultipleOutline, At } from "@/icons";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <header
        class="w-full md:w-1/2 h-16 bg-(--text-color) dark:bg-(--bg-color) sticky top-0 z-50 flex justify-between items-center px-3 md:px-6 mb-8 mx-2 mt-6 md:mt-0 border-b-2 border-b-(--bg-color) dark:border-b-(--text-color) select-none">
        <router-link to="/" class="flex gap-2 hover:scale-105 active:motion-preset-shake transition-transform motion-duration-200">
            <At class="mt-1" :size="30"/>
            <h1 class="text-3xl">
                Blog
            </h1>
        </router-link>

        <!-- Nav Icons -->
        <div class="flex items-center">
            <router-link to="/postagens"
                class="mr-4 cursor-pointer hover:text-green-800 active:text-green-800 dark:hover:text-green-400 dark:active:text-green-400 hover:scale-110 active:scale-90 transition-transform"
                title="Postagens">
                <BookMultipleOutline />
            </router-link>
            <div class="cursor-pointer hover:text-green-800 active:text-green-800 dark:hover:text-green-400 dark:active:text-green-400 hover:scale-105 transition-transform active:motion-preset-spin duration-1000"
                @click="toggleDark()" title="Tema">
                <WeatherSunny v-if="!isDark" />
                <WeatherNight v-if="isDark" />
            </div>
        </div>
    </header>
</template>
