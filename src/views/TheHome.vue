<template>
    <div class="container the__view">
        <div class="card p-3 mt-4">
            <div class="row">
                <div class="col-lg-2">
                    <ul class="nav nav-pills flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Electronics</a>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-secondary" :to="{ name:'TheProducts'}">Clothes and Wear
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-secondary" :to="{ name:'TheProducts'}">Home Interior
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-secondary" :to="{ name:'TheProducts'}">Computer and tech
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-secondary" :to="{ name:'TheProducts'}">Tools, equipment
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-secondary" :to="{ name:'TheProducts'}">Sports and outdoor
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-secondary" :to="{ name:'TheProducts'}">Animal and pets
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-secondary" :to="{ name:'TheProducts'}">Machinery
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-secondary" :to="{ name:'TheProducts'}">Other</router-link>
                        </li>
                    </ul>
                </div>

                <div class="col-lg-10">
                    <div class="card h-100 text-white py-3 px-4 product-hero__card">
                        <div class="card-body d-flex justify-content-center align-item-center">
                            <div class="wrapper">
                                <h1>
                                    Great products with best deals
                                </h1>
                                <p>
                                    No matter how far along you are in your sophistication as an amateur astronomer,
                                    there is always one.
                                </p>
                                <button class="btn btn-warning">View More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="my-4">New Products</h2>
        <ProductList />

        <section class="padding__top">
            <div class="row gy-4">
                <aside class="col-lg-6">
                    <article class="card-banner bg-gray h-100" style="min-height: 200px">
                        <div class="p-3 p-lg-5" style="max-width:70%">
                            <h3> Best products &amp; brands in our store at 80% off</h3>
                            <p>That's true but not always</p>
                            <a class="btn btn-warning" href="#"> Claim offer </a>
                        </div>
                        <img src="../assets/imgs/product-2.jpg" height="350" class="img-bg">
                    </article>
                </aside> <!-- col.// -->
                <aside class="col-lg-6">
                    <div class="row mb-4">
                        <div class="col-6">
                            <article class="card bg-primary" style="min-height: 200px">
                                <div class="card-body">
                                    <h5 class="text-white">Gaming toolset</h5>
                                    <p class="text-white-50">Technology for cyber sport </p>
                                    <a class="btn btn-outline-light btn-sm" href="#">Learn more</a>
                                </div>
                            </article>
                        </div>
                        <div class="col-6">
                            <article class="card bg-primary" style="min-height: 200px">
                                <div class="card-body">
                                    <h5 class="text-white">Quality sound</h5>
                                    <p class="text-white-50">All you need for music</p>
                                    <a class="btn btn-outline-light btn-sm" href="#">Learn more</a>
                                </div>
                            </article>
                        </div>
                    </div> <!-- row.// -->

                    <article class="card bg-success" style="min-height: 200px">
                        <div class="card-body">
                            <h5 class="text-white">Buy 2 items, With special gift</h5>
                            <p class="text-white-50" style="max-width:400px;">Buy one, get one free marketing strategy
                                helps your business improves the brand by sharing the profits </p>
                            <a class="btn btn-outline-light btn-sm" href="#">Learn more</a>
                        </div>
                    </article>

                </aside> <!-- col.// -->
            </div>
        </section>

        <section class="padding__top">
            <h2 class="my-4">Recently Viewed</h2>

            <ProductRecentlyViewed></ProductRecentlyViewed>
        </section>

        <section class="padding-y">
            <div class="container">
                <article class="card p-3 p-lg-5">
                    <div class="row g-3">
                        <div class="col-lg-3 col-md-6">
                            <figure class="icontext">
                                <div class="icon">
                                    <span class="icon-sm bg-warning-light text-warning rounded">
                                        <i class="bi bi-hand-thumbs-up"></i>
                                    </span>
                                </div>
                                <figcaption class="text">
                                    <h6 class="title">Reasonable prices</h6>
                                    <p>Have you ever finally just </p>
                                </figcaption>
                            </figure> <!-- icontext // -->
                        </div><!-- col // -->
                        <div class="col-lg-3 col-md-6">
                            <figure class="icontext">
                                <div class="icon">
                                    <span class="icon-sm bg-warning-light text-warning rounded">
                                        <i class="bi bi-truck"></i>
                                    </span>
                                </div>
                                <figcaption class="text">
                                    <h6 class="title">Delivery</h6>
                                    <p>Have you ever finally just </p>
                                </figcaption>
                            </figure> <!-- icontext // -->
                        </div><!-- col // -->
                        <div class="col-lg-3 col-md-6">
                            <figure class="icontext">
                                <div class="icon">
                                    <span class="icon-sm bg-warning-light text-warning rounded">
                                        <i class="bi bi-star"></i>
                                    </span>
                                </div>
                                <figcaption class="text">
                                    <h6 class="title">Best ratings</h6>
                                    <p>Have you ever finally just </p>
                                </figcaption>
                            </figure> <!-- icontext // -->
                        </div> <!-- col // -->
                        <div class="col-lg-3 col-md-6">
                            <figure class="icontext">
                                <div class="icon">
                                    <span class="icon-sm bg-warning-light text-warning rounded">
                                        <i class="bi bi-telephone"></i>
                                    </span>
                                </div>
                                <figcaption class="text">
                                    <h6 class="title">Help center</h6>
                                    <p>Have you ever finally just </p>
                                </figcaption>
                            </figure> <!-- icontext // -->
                        </div> <!-- col // -->
                    </div> <!-- row // -->
                </article>
            </div><!-- //container -->
        </section>
    </div>
    <TheFooter class="bg-light" style="background:#ced4da !important;"/>
</template>

<script setup>
    import TheSubNav from '../components/TheSubNav.vue';
    import ProductList from '../components/ProductList.vue';
    import ProductRecentlyViewed from '../components/ProductRecentlyViewed.vue';
import TheFooter from '../components/TheFooter.vue';
</script>

<style scoped>
    .product-hero__card {
        background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../assets/imgs/product-1.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        /* background-position: right; */
        border-radius: 8px;
    }

    .product-hero__card>.wrapper>h1,
    p {
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    }

    .product__features {
        padding-top: 40px;
    }

    .card-banner {
        display: flex;
        position: relative;
        overflow: hidden;
        background-color: rgb(199, 197, 197);
        background-size: cover;
        background-position: center center;
        border-radius: 0.35rem;
        /* background-image: url("../assets/imgs/product-2.jpg"); */
    }

    .card-banner .img-bg {
        position: absolute;
        right: 0;
        bottom: 0;
        mix-blend-mode: multiply;
        max-width: 100%;
    }

    .padding__top {
        padding-top: 40px;
    }

    .padding-y {
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .icontext {
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
    }

    .icontext .icon {
        position: relative;
        margin-right: 10px;
        flex-shrink: 0;
        flex-grow: 0;
    }

    .icon-sm {
        width: 42px;
        height: 42px;
        font-size: 20px;
    }

    .icontext .text {
        width: 100%;
        line-height: 1.25;
    }

    .icontext .title {
        display: block;
        margin-bottom: 3px;
    }
</style>