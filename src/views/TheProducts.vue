<template>
  <div class="container the__view">
    <div class="card p-3 mt-4">
      <div class="row">
        <div class="col-lg-2">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >Electronics</a
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link text-secondary"
                :to="{ name: 'TheProducts' }"
                >Clothes and Wear
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link text-secondary"
                :to="{ name: 'TheProducts' }"
                >Home Interior
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link text-secondary"
                :to="{ name: 'TheProducts' }"
                >Computer and tech
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link text-secondary"
                :to="{ name: 'TheProducts' }"
                >Tools, equipment
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link text-secondary"
                :to="{ name: 'TheProducts' }"
                >Sports and outdoor
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link text-secondary"
                :to="{ name: 'TheProducts' }"
                >Animal and pets
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link text-secondary"
                :to="{ name: 'TheProducts' }"
                >Machinery
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link text-secondary"
                :to="{ name: 'TheProducts' }"
                >Other</router-link
              >
            </li>
          </ul>
        </div>

        <div class="col-lg-10">
          <div class="card h-100 text-white py-3 px-4 product-hero__card">
            <div
              class="card-body d-flex justify-content-center align-item-center"
            >
              <div class="wrapper">
                <h1>Great products with best deals</h1>
                <p>
                  No matter how far along you are in your sophistication as an
                  amateur astronomer, there is always one.
                </p>
                <button class="btn btn-warning">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Products  -->
    <section class="padding-top">
      <div class="container">
        <header class="section-heading">
          <h3 class="section-title">New products</h3>
        </header>

        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <figure class="card card-product-grid">
              <router-link :to="{ name: 'ProductDetail' }" class="img-wrap">
                <span class="topbar">
                  <b class="badge bg-success"> Offer </b>
                </span>
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/12.jpg"
                />
              </router-link>
              <figcaption class="info-wrap border-top">
                <router-link
                  :to="{ name: 'ProductDetail' }"
                  class="float-end btn btn-light btn-icon"
                >
                  <i class="bi bi-heart"></i>
                </router-link>
                <router-link
                  :to="{ name: 'ProductDetail' }"
                  class="title text-truncate"
                  >Blue T-shirt for Men</router-link
                >
                <small class="text-muted">Sizes: S, M, XL</small>
                <div class="price-wrap">
                  <span class="price">Tsh 33,000</span>
                  <del class="price-old">Tsh 40,000</del>
                </div>
                <!-- price-wrap.// -->
              </figcaption>
            </figure>
          </div>
          <!-- col end.// -->

          <div class="col-lg-3 col-md-6 col-sm-6">
            <figure class="card card-product-grid">
              <router-link :to="{ name: 'ProductDetail' }" class="img-wrap">
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.jpg"
                />
              </router-link>
              <figcaption class="info-wrap border-top">
                <router-link
                  :to="{ name: 'ProductDetail' }"
                  class="float-end btn btn-light btn-icon"
                >
                  <i class="bi bi-heart"></i>
                </router-link>
                <router-link
                  :to="{ name: 'ProductDetail' }"
                  class="title text-truncate"
                  >Warm Winter Jacket</router-link
                >
                <small class="text-muted">Sizes: S, M, XL</small>
                <div class="price">Tsh 40,000</div>
                <!-- price-wrap.// -->
              </figcaption>
            </figure>
          </div>
          <!-- col end.// -->

          <div class="col-lg-3 col-md-6 col-sm-6">
            <figure class="card card-product-grid">
              <router-link :to="{ name: 'ProductDetail' }" class="img-wrap">
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.jpg"
                />
              </router-link>
              <figcaption class="info-wrap border-top">
                <router-link
                  :to="{ name: 'ProductDetail' }"
                  class="float-end btn btn-light btn-icon"
                >
                  <i class="bi bi-heart"></i>
                </router-link>
                <router-link
                  :to="{ name: 'ProductDetail' }"
                  class="title text-truncate"
                  >Mens T-shirt Cotton Base</router-link
                >
                <small class="text-muted">Blue, White, Black</small>
                <div class="price">Tsh 20,000</div>
                <!-- price-wrap.// -->
              </figcaption>
            </figure>
          </div>
          <!-- col end.// -->

          <div class="col-lg-3 col-md-6 col-sm-6">
            <figure class="card card-product-grid">
              <router-link :to="{ name: 'ProductDetail' }" class="img-wrap">
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.jpg"
                />
              </router-link>
              <figcaption class="info-wrap border-top">
                <router-link
                  :to="{ name: 'ProductDetail' }"
                  class="float-end btn btn-light btn-icon"
                >
                  <i class="bi bi-heart"></i>
                </router-link>
                <router-link
                  :to="{ name: 'ProductDetail' }"
                  class="title text-truncate"
                  >Men's Denim Shorts Jeans</router-link
                >
                <small class="text-muted">Blue, White, Black</small>
                <div class="price">Tsh 25,000</div>
                <!-- price-wrap.// -->
              </figcaption>
            </figure>
          </div>
          <!-- col end.// -->

          <div class="col-lg-3 col-md-6 col-sm-6">
            <figure class="card card-product-grid">
              <router-link :to="{ name: 'ProductDetail' }" class="img-wrap">
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.jpg"
                />
              </router-link>
              <figcaption class="info-wrap border-top">
                <router-link
                  :to="{ name: 'ProductDetail' }"
                  class="float-end btn btn-light btn-icon"
                >
                  <i class="bi bi-heart"></i>
                </router-link>
                <router-link
                  :to="{ name: 'ProductDetail' }"
                  class="title text-truncate"
                  >Apple Watch Series 1 Sport Case 38mm Black</router-link
                >
                <small class="text-muted">5GB, 10GB, 24GB</small>
                <div class="price">Tsh 250,000</div>
                <!-- price-wrap.// -->
              </figcaption>
            </figure>
          </div>
          <!-- col end.// -->

          <div class="col-lg-3 col-md-6 col-sm-6">
            <figure class="card card-product-grid">
              <router-link :to="{ name: 'ProductDetail' }" class="img-wrap">
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/6.jpg"
                />
              </router-link>
              <figcaption class="info-wrap border-top">
                <router-link
                  :to="{ name: 'ProductDetail' }"
                  class="float-end btn btn-light btn-icon"
                >
                  <i class="bi bi-heart"></i>
                </router-link>
                <router-link
                  :to="{ name: 'ProductDetail' }"
                  class="title text-truncate"
                  >Gaming Headset 32db Black built in mic</router-link
                >
                <small class="text-muted">Black, Blue, Green</small>
                <div class="price">Tsh 250,000</div>
                <!-- price-wrap.// -->
              </figcaption>
            </figure>
          </div>
          <!-- col end.// -->

          <div class="col-lg-3 col-md-6 col-sm-6">
            <figure class="card card-product-grid">
              <router-link :to="{ name: 'ProductDetail' }" class="img-wrap">
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.jpg"
                />
              </router-link>
              <figcaption class="info-wrap border-top">
                <router-link
                  :to="{ name: 'ProductDetail' }"
                  class="float-end btn btn-light btn-icon"
                >
                  <i class="bi bi-heart"></i>
                </router-link>
                <router-link
                  :to="{ name: 'ProductDetail' }"
                  class="title text-truncate"
                  >Gaming Headset 32db Black built in mic</router-link
                >
                <small class="text-muted">Sizes: S, M, XL</small>
                <div class="price">Tsh 200,000</div>
                <!-- price-wrap.// -->
              </figcaption>
            </figure>
          </div>
          <!-- col end.// -->

          <div class="col-lg-3 col-md-6 col-sm-6">
            <figure class="card card-product-grid">
              <router-link :to="{ name: 'ProductDetail' }" class="img-wrap">
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.jpg"
                />
              </router-link>
              <figcaption class="info-wrap border-top">
                <router-link
                  :to="{ name: 'ProductDetail' }"
                  class="float-end btn btn-light btn-icon"
                >
                  <i class="bi bi-heart"></i>
                </router-link>
                <router-link
                  :to="{ name: 'ProductDetail' }"
                  class="title text-truncate"
                  >Slim fit T-shirt for men</router-link
                >
                <small class="text-muted">Sizes: S, M, XL</small>
                <div class="price">Tsh 25,,000</div>
                <!-- price-wrap.// -->
              </figcaption>
            </figure>
          </div>
          <!-- col end.// -->
        </div>
        <!-- row end.// -->
      </div>
      <!-- container end.// -->
    </section>

    <!-- Section Promo -->
    <section class="padding-top">
      <div class="container">
        <div class="row gy-4">
          <aside class="col-lg-6">
            <article
              class="card-banner bg-gray h-100"
              style="min-height: 200px"
            >
              <div class="p-3 p-lg-5" style="max-width: 70%">
                <h3>Best products &amp; brands in our store at 80% off</h3>
                <p>That's true but not always</p>
                <a class="btn btn-warning" href="#"> Claim offer </a>
              </div>
              <img
                src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/banners/banner-item2.jpg"
                height="350"
                class="img-bg"
              />
            </article>
          </aside>
          <!-- col.// -->
          <aside class="col-lg-6">
            <div class="row mb-4">
              <div class="col-6">
                <article class="card bg-primary" style="min-height: 200px">
                  <div class="card-body">
                    <h5 class="text-white">Gaming toolset</h5>
                    <p class="text-white-50">Technology for cyber sport</p>
                    <a class="btn btn-outline-light btn-sm" href="#"
                      >Learn more</a
                    >
                  </div>
                </article>
              </div>
              <div class="col-6">
                <article class="card bg-primary" style="min-height: 200px">
                  <div class="card-body">
                    <h5 class="text-white">Quality sound</h5>
                    <p class="text-white-50">All you need for music</p>
                    <a class="btn btn-outline-light btn-sm" href="#"
                      >Learn more</a
                    >
                  </div>
                </article>
              </div>
            </div>
            <!-- row.// -->

            <article class="card bg-success" style="min-height: 200px">
              <div class="card-body">
                <h5 class="text-white">Buy 2 items, With special gift</h5>
                <p class="text-white-50" style="max-width: 400px">
                  Buy one, get one free marketing strategy helps your business
                  improves the brand by sharing the profits
                </p>
                <a class="btn btn-outline-light btn-sm" href="#">Learn more</a>
              </div>
            </article>
          </aside>
          <!-- col.// -->
        </div>
        <!-- row.// -->
      </div>
      <!-- container end.// -->
    </section>

    <!-- Section Recently Reviewed -->
    <section class="padding-top">
      <div class="container">
        <header class="section-heading">
          <h3 class="section-title">Recently viewed</h3>
        </header>

        <div class="row gy-3">
          <div class="col-lg-2 col-md-4 col-4">
            <router-link :to="{ name: 'ProductDetail' }" class="img-wrap">
              <img
                height="200"
                width="200"
                class="img-thumbnail"
                src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/1.jpg"
              />
            </router-link>
          </div>
          <!-- col.// -->
          <div class="col-lg-2 col-md-4 col-4">
            <router-link :to="{ name: 'ProductDetail' }" class="img-wrap">
              <img
                height="200"
                width="200"
                class="img-thumbnail"
                src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/2.jpg"
              />
            </router-link>
          </div>
          <!-- col.// -->
          <div class="col-lg-2 col-md-4 col-4">
            <router-link :to="{ name: 'ProductDetail' }" class="img-wrap">
              <img
                height="200"
                width="200"
                class="img-thumbnail"
                src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/3.jpg"
              />
            </router-link>
          </div>
          <!-- col.// -->
          <div class="col-lg-2 col-md-4 col-4">
            <router-link :to="{ name: 'ProductDetail' }" class="img-wrap">
              <img
                height="200"
                width="200"
                class="img-thumbnail"
                src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/4.jpg"
              />
            </router-link>
          </div>
          <!-- col.// -->
          <div class="col-lg-2 col-md-4 col-4">
            <router-link :to="{ name: 'ProductDetail' }" class="img-wrap">
              <img
                height="200"
                width="200"
                class="img-thumbnail"
                src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.jpg"
              />
            </router-link>
          </div>
          <!-- col.// -->
          <div class="col-lg-2 col-md-4 col-4">
            <router-link :to="{ name: 'ProductDetail' }" class="img-wrap">
              <img
                height="200"
                width="200"
                class="img-thumbnail"
                src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/6.jpg"
              />
            </router-link>
          </div>
          <!-- col.// -->
        </div>
        <!-- row end.// -->
      </div>
      <!-- container end.// -->
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
                  <p>Have you ever finally just</p>
                </figcaption>
              </figure>
              <!-- icontext // -->
            </div>
            <!-- col // -->
            <div class="col-lg-3 col-md-6">
              <figure class="icontext">
                <div class="icon">
                  <span class="icon-sm bg-warning-light text-warning rounded">
                    <i class="bi bi-truck"></i>
                  </span>
                </div>
                <figcaption class="text">
                  <h6 class="title">Delivery</h6>
                  <p>Have you ever finally just</p>
                </figcaption>
              </figure>
              <!-- icontext // -->
            </div>
            <!-- col // -->
            <div class="col-lg-3 col-md-6">
              <figure class="icontext">
                <div class="icon">
                  <span class="icon-sm bg-warning-light text-warning rounded">
                    <i class="bi bi-star"></i>
                  </span>
                </div>
                <figcaption class="text">
                  <h6 class="title">Best ratings</h6>
                  <p>Have you ever finally just</p>
                </figcaption>
              </figure>
              <!-- icontext // -->
            </div>
            <!-- col // -->
            <div class="col-lg-3 col-md-6">
              <figure class="icontext">
                <div class="icon">
                  <span class="icon-sm bg-warning-light text-warning rounded">
                    <i class="bi bi-telephone"></i>
                  </span>
                </div>
                <figcaption class="text">
                  <h6 class="title">Help center</h6>
                  <p>Have you ever finally just</p>
                </figcaption>
              </figure>
              <!-- icontext // -->
            </div>
            <!-- col // -->
          </div>
          <!-- row // -->
        </article>
      </div>
      <!-- //container -->
    </section>
  </div>
  <section
    class="bg-primary shadow"
    style="
      background-image: url(https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/banners/intro-bg.jpg);
      background-position: center;
      background-size: cover;
      padding: 40px 0;
    "
  >
    <div
      class="container align-items-center justify-content-center d-flex"
      style="min-height: 520px"
    >
      <article class="text-center">
        <h1 class="display-4 text-white">
          Great products are <br />
          always in our store available
        </h1>
        <p class="lead text-white">
          Trendy Products, Factory Prices, Excellent Service
        </p>
        <router-link
          :to="{ name: 'ProductDetail' }"
          class="btn btn-light btn-lg"
        >
          Purchase now</router-link
        >
        <router-link
          :to="{ name: 'ProductDetail' }"
          class="btn btn-warning btn-lg"
        >
          Learn more
        </router-link>
      </article>
    </div>
    <!-- container end.// -->
  </section>
  <TheFooter />
</template>

<script setup>
import TheSubNav from "../components/TheSubNav.vue";
import ProductList from "../components/ProductList.vue";
import ProductRecentlyViewed from "../components/ProductRecentlyViewed.vue";
import TheFooter from "../components/TheFooter.vue";
</script>

<style scoped>
.product-hero__card {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../assets/imgs/product-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: right; */
  border-radius: 8px;
}

.product-hero__card > .wrapper > h1,
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
