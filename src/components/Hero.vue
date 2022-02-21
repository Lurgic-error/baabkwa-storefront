<template>
  <div class="hero-container container">
    <div class="row hero">
      <div class="col-3 left">
        <TreeNav/>
      </div>
      <div class="col-9 right">
        <Carousel/>
      </div>
    </div>
  </div>

  <div class="listings-container">
    <Listings/>
  </div>
</template>

<script setup>
import TreeNav from "./TreeNav.vue"
import Carousel from "./Carousel.vue"
import Listings from "./Listings.vue"
</script>

<style scoped>

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.listings-container{
  margin-top:5rem
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
