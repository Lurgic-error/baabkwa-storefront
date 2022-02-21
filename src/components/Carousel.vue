<template>
        <MDBCarousel
        v-model="carousel1"
        :items="items1"
        :controls=false
        captionsClass = "carousel-caption d-none d-md-block captions"
        fade
        interval="2000"
        />
</template>

<script setup>
    import { ref } from "vue";
    import { MDBCarousel } from "mdb-vue-ui-kit";


    const items1 = [
        {
          src: "src/assets/imgs/store.jpg",
          alt: "carousel image 1",
          label: "First slide label",
          caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
          src: "src/assets/imgs/spaghetti.jpg",
          alt: "carousel image 2",
          label: "Second slide label",
          caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          src: "src/assets/imgs/salmon.jpg",
          alt: "carousel image 3",
          label: "Third slide label",
          caption:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        }
      ];
      const carousel1 = ref(0);
    
</script>

<style scoped>
    .carousel-item{
        max-height: 55vh;
    }

</style>