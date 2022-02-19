<template>
  <div class="base__app">
    <TheHeader/>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue';</script>

<style></style>
