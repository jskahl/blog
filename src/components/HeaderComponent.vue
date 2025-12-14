<script setup lang="ts">
import { ref, watch } from "vue";
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
    border-b-2 border-b-(--text-color)"
  >
    <router-link to="/">
      <h1>Blog</h1>
    </router-link>
    <div>
      <div
        class="
            cursor-pointer 
            hover:text-green-400 active:text-green-400
            hover:rotate-12 active:scale-95 transition-transform
            "
        @click="toggleDark()"
        title="Tema"
      >
          <WeatherSunny v-if="!isDark" />
          <WeatherNight v-if="isDark" />
      </div>
    </div>

    <div class="w-10 h-10 bg-green-200 dark:bg-red-900">aaa</div>
  </header>
</template>
