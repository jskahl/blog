<script setup lang="ts">
import { HeaderComponent, FooterComponent } from "@/components";
</script>

<template>
    <div class="min-h-dvh flex flex-col items-center px-4 md:px-0">
        <HeaderComponent />

        <div class="w-full md:w-1/2 flex flex-col items-center flex-1">
            <router-view />
            <FooterComponent />
        </div>
    </div>
</template>
