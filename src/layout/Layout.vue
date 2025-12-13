<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'; 
</script>

<template>
    <div class="w-full h-full flex flex-col items-center">
        <HeaderComponent />
        <div class="">
            <router-view class="flex-1 overflow-auto" />
        </div>
    </div>
</template>
