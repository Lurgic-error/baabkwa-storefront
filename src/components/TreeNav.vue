<template>
  <div id="myUL" class="card">
    <List :data="['pre-order','Vegan', 'Fast snack', 'Lunch', 'Dinner']" list-name="FOOD" /> 
        <!-- <template #titleIcon>
            <unicon name="restaurant"/> &nbsp
        </template>
      </List>    -->
    <List :data = "['Black Tea', 'White Tea']" list-name="SHOPPING"/>
  </div>
</template>

<script setup>
    import List from "./TreeNavList.vue"
</script>


<style scoped>
     /* Remove margins and padding from the parent conainer */
  #myUL {
    margin: 0;
    padding: 1rem;
    list-style-type: none;
    font-weight: 500;
  }
</style>

