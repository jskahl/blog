<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'; 
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col items-center px-2 md:px-0">
    <HeaderComponent />

    <div class="w-full md:w-1/2 flex flex-col items-center flex-1">
      <router-view />
      <FooterComponent />
    </div>
  </div>
</template>
