<template>
  <div class="product__list">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6">
        <ProductItemCard />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <ProductItemCard />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <ProductItemCard />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <ProductItemCard />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <ProductItemCard />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <ProductItemCard />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <ProductItemCard />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <ProductItemCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductItemCard from "./ProductItemCard.vue";
</script>

<style scoped>
/* .row {
    gap: 1rem;
} */
</style>
