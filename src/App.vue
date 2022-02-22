<template>
  <div class="base__app">
    <TheOtherHeader />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import TheOtherHeader from "./components/TheOtherHeader.vue";
</script>

<style></style>
