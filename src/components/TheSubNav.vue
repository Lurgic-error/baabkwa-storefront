<template>
  <div class="the__subnav navbar-light bg-light border-top">
    <nav class="container navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link
            ref="navLink"
            id="TheHome"
            :to="{ name: 'TheHome' }"
            class="nav-link"
            aria-current="page"
            >Hot Sales</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            ref="navLink"
            id="TheShops"
            :to="{ name: 'TheShops' }"
            class="nav-link"
            aria-current="page"
            >Gift Boxes</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            ref="navLink"
            id="TheProducts"
            :to="{ name: 'TheProducts' }"
            class="nav-link"
            aria-current="page"
            >Categories</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
