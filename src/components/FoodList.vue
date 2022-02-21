<template>
  <div class="foodlist">
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <FoodItemCard />
      </div>
      <div class="col-lg-4 col-md-6">
        <FoodItemCard />
      </div>
      <div class="col-lg-4 col-md-6">
        <FoodItemCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import FoodItemCard from "./FoodItemCard.vue";
</script>
