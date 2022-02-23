<template>
  <div>
    <li>
      <div class="d-flex caret bk-primary" @click="caretClicked">
        <slot name="titleIcon"></slot>
        {{ listName }}
      </div>
    </li>
    <ul class="nested active">
      <li v-for="(i, index) in data" :key="index" class="item">{{ i }}</li>
      <li>
        <slot></slot>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps(["data", "listName"]);

function caretClicked(e) {
  e.target.parentElement.parentElement
    .querySelector(".nested")
    .classList.toggle("active");
  e.target.classList.toggle("caret-down");
}
</script>

<style scoped>
/* Remove default bullets */
ul,
li #myUL {
  list-style-type: none;
}

/* Remove margins and padding from the parent ul */
ul {
  margin: 0;
  padding: 0 0.2rem;
}

.item {
  margin: 0 1rem;
}

/* Style the caret/arrow */
.caret {
  cursor: pointer;
  user-select: none;
  /* Prevent text selection */
}

/* Create the caret/arrow with a unicode, and style it */
.caret::before {
  content: "\1F812";
  color: #1b3764;
  display: inline-block;
  margin-right: 6px;
}

/* Rotate the caret/arrow icon when clicked on (using JavaScript) */
.caret-down::before {
  transform: rotate(90deg);
}

/* Hide the nested list */
.nested {
  display: none;
}

/* Show the nested list when the user clicks on the caret/arrow (with JavaScript) */
.active {
  display: block;
}
</style>
