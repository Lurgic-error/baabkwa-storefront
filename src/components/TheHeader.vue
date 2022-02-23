<template>
  <header class="the__header">
    <div class="card top-bar bk-primary-bg">
      <p class="bk-white">
        <marquee behavior="" direction=""
          >A <span class="bk-accent">marketing pitch</span> in one line goes
          here.</marquee>
      </p>
    </div>
    <nav class="card navbar navbar-expand-lg navbar-light bg-light w-100">
      <div class="container-fluid w-100 d-flex flex-column flex-md-row">
        <div class="navbar-brand">
          <img src="../assets/logo.svg" alt="baabkubwa logo" width="350" />
        </div>
        <div class="d-block d-md-none w-100">
          <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        </div>

        <form class="w-100 mx-4 d-none d-md-flex flex-md-row justify-content-md-between justify-content-lg-between border rounded-pill">
          <div>
            <input
            class="form-control me-2 border-0"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          </div>
          <div>
            <button class="btn bk-tertiary-bg bk-white rounded-pill" type="submit">
            Search
            </button>
          </div>
        </form>
        <!-- <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">

                </div> -->
        <ul class="navbar-nav my-2 mb-lg-0 w-100 d-flex justify-content-end flex-md-row justify-content-md-start">
          <li class="nav-item d-flex justify-content-between me-5 me-lg-3">
            <router-link
              ref="navLink"
              id="TheHome"
              :to="{ name: 'TheHome' }"
              class="nav-link"
              aria-current="page"
            >
              <unicon name="estate"></unicon> Home
            </router-link>
          </li>
          <li class="nav-item d-flex justify-content-between me-5 me-lg-3">
            <router-link
              ref="navLink"
              id="TheShops"
              :to="{ name: 'TheShops' }"
              class="nav-link"
              aria-current="page"
            >
              <unicon name="shop"></unicon> Shops
            </router-link>
          </li>
          <li class="nav-item d-flex justify-content-between me-5 me-lg-3">
            <router-link
              ref="navLink"
              id="TheProducts"
              :to="{ name: 'TheProducts' }"
              class="nav-link"
              aria-current="page"
            >
              <unicon name="shopping-bag"></unicon> Products
            </router-link>
          </li>
          <li class="nav-item d-flex justify-content-between me-5 me-lg-3">
            <router-link
              ref="navLink"
              id="TheFoods"
              :to="{ name: 'TheFoods' }"
              class="nav-link"
              aria-current="page"
            >
              <unicon name="restaurant"></unicon> Food
            </router-link>
          </li>
          <li class="nav-item d-flex justify-content-between me-5 me-lg-3">
            <router-link
              class="nav-link"
              style="gap: 0.5rem"
              :to="{ name: 'TheCart' }"
            >
              <unicon name="shopping-cart" /> Cart</router-link
            >
          </li>

          <li class="nav-item d-flex justify-content-between me-5 me-lg-3">
            <router-link
              :to="{ name: 'TheWishlist' }"
              class="nav-link"
              style="gap: 0.5rem"
            >
              <unicon name="heart" /> Wishlist
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
.the__flex {
  display: flex;
  justify-content: baseline;
  align-items: center;
}

/* .the__flex > * {
  flex: 1;
} */

.top-bar {
  width: 100%;
  height: 4rem;
  border-radius: 0;
  display: grid;
  place-items: center;
}
</style>
