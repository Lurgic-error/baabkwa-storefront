<template>
    <header class="the__header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
            <div class="container-fluid d-flex justify-content-between w-100 the__flex">
                <div class="navbar-brand">
                    <img src="../assets/logo.svg" alt="baabkubwa logo" width="200">
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
                <!-- <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">

                </div> -->
                <ul class="navbar-nav  mb-2 mb-lg-0 w-100 d-flex justify-content-end">
                    <li class="nav-item">
                        <router-link ref="navLink" id="TheHome" :to="{ name:'TheHome'}" class="nav-link"  aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link ref="navLink" id="TheShops" :to="{ name:'TheShops'}" class="nav-link"  aria-current="page">Shops</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link ref="navLink" id="TheProducts" :to="{ name:'TheProducts'}" class="nav-link"  aria-current="page">Product</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link ref="navLink" id="TheFoods" :to="{ name:'TheFoods'}" class="nav-link"  aria-current="page">Food</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-flex align-items-center justify-content-between" style="gap:.5rem"
                            href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-cart" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg> Cart
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link d-flex align-items-center justify-content-between" style="gap:.5rem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg> Wishlist
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup>


</script>

<style>
    .the__flex {
        display: flex;
        justify-content: baseline;
        align-items: center;
    }

    .the__flex>* {
        flex: 1;
    }
</style>