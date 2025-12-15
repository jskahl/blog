<script setup lang="ts">
import { WeatherSunny, WeatherNight } from "@/icons";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<template>
  <header
    class="w-full md:w-1/2 h-16
    bg-(--text-color) dark:bg-(--bg-color)
    sticky top-0 z-50
    flex justify-between items-center
    px-3 md:px-6 mb-8 mx-2
    border-b-2 border-b-(--bg-color) dark:border-b-(--text-color)"
  >
    <router-link to="/">
      <h1 class="text-3xl">Blog</h1>
    </router-link>
    <div>
      <div
        class="
            cursor-pointer 
            hover:text-green-800 active:text-green-800
            dark:hover:text-green-400 dark:active:text-green-400
            hover:scale-105 transition-transform active:animate-spin
            "
        @click="toggleDark()"
        title="Tema"
      >
          <WeatherSunny v-if="!isDark" />
          <WeatherNight v-if="isDark" />
      </div>
    </div>
  </header>
</template>
