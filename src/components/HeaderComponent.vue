<script setup lang="ts">
import { ref } from 'vue';
import { ThemeLightDark, WhiteBalanceSunny, MoonWaningCrescent } from '@/icons';

const theme = ref("dark")
const isHover = ref(false);
</script>

<template>
    <div class="
        w-full md:w-1/2 h-16
        flex justify-between items-center
        px-6 mb-8 mx-2
        border-b-2 border-b-white
        ">
        <router-link to="/">
            <h1>Blog</h1> 
        </router-link>
        <div>
            <div class="cursor-pointer hover:text-green-400" @mouseover="isHover = true" @mouseleave="isHover = false" @click="theme = theme === 'light' ? 'dark' : 'light'">
                <ThemeLightDark v-if="isHover" />
                <WhiteBalanceSunny v-if="theme === 'light' && !isHover" />
                <MoonWaningCrescent v-if="theme ==='dark' && !isHover" />
            </div>
        </div>
    </div>
</template>
