<template>
  <header class="section-header">
    <section class="header__top">
      <div class="card top-bar bk-primary-bg">
        <p class="bk-white">
          <marquee behavior="" direction=""
            >A <span class="bk-accent">marketing pitch</span> in one line goes
            here.</marquee
          >
        </p>
      </div>
    </section>
    <section class="header-main border-bottom">
      <div class="container">
        <div class="row gx-2 gy-3 align-items-center">
          <div class="col-xl col-lg col-6 col-sm-6 col-md flex-grow-0">
            <router-link :to="{ name: 'UserProfile' }" class="brand-wrap me-3">
              <img
                src="../assets/logo.svg"
                class="logo"
                alt="baabkubwa logo"
                width="350"
              />
            </router-link>
            <!-- brand-wrap end.// -->
          </div>
          <!-- col end.// -->
          <div class="col-xl col-lg col-6 col-sm-6 col-md flex-grow-0">
            <div class="dropdown">
              <button
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                class="btn btn-outline-primary text-nowrap"
              >
                <i class="bi bi-bars me-2"></i> Category
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="{ name: 'TheProducts' }"
                    >Clothes</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="{ name: 'TheProducts' }"
                    >Electronics</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="{ name: 'TheProducts' }"
                    >Furniture</router-link
                  >
                </li>
              </ul>
            </div>
            <!-- category-wrap end.// -->
          </div>
          <!-- col end.// -->
          <div class="col-xl col-lg-4 col-12 col-sm-12 col-md">
            <form action="#" class="search mobile-p-y">
              <div class="input-group">
                <input
                  type="search"
                  class="form-control"
                  style="width: 55%"
                  placeholder="Search"
                />
                <select class="form-select">
                  <option value="">All type</option>
                  <option value="codex">Special</option>
                  <option value="comments">Only best</option>
                  <option value="content">Latest</option>
                </select>
                <button class="btn bk-tertiary-bg bk-white" type="submit">
                  <i class="bi bi-search"></i>
                  Search
                </button>
              </div>
              <!-- input-group end.// -->
            </form>
            <!-- search-wrap end.// -->
          </div>
          <!-- col end.// -->
          <div class="col-xl-4 col-lg col-md-12 col-12">
            <div class="widgets-wrap float-md-end">
              <div class="widget-header mx-2">
                <router-link
                  :to="{ name: 'UserProfile' }"
                  class="widget-icontop"
                >
                  <div class="icon-area"><i class="bi bi-person-fill"></i></div>
                  <small class="text"> Profile </small>
                </router-link>
              </div>
              <div class="widget-header mx-2">
                <!-- <router-link
                  :to="{ name: 'UserProfile' }"
                  class="widget-icontop"
                >
                  <div class="icon-area">
                    <i class="bi bi-comment-dots"></i>
                    <span class="notify">1</span>
                  </div>
                  <small class="text"> Message </small>
                </router-link> -->
              </div>
              <div class="widget-header mx-2">
                <router-link
                  :to="{ name: 'TheWishlist' }"
                  class="widget-icontop"
                >
                  <div class="icon-area"><i class="bi bi-heart"></i></div>
                  <small class="text"> Wishlist </small>
                </router-link>
              </div>
              <div class="widget-header mx-2">
                <router-link :to="{ name: 'TheCart' }" class="widget-icontop">
                  <div class="icon-area">
                    <i class="bi bi-cart"></i>
                  </div>
                  <small class="text"> Cart </small>
                </router-link>
              </div>
            </div>
            <!-- widgets-wrap.// -->
          </div>
          <!-- col end.// -->
        </div>
        <!-- row end.// -->
      </div>
      <!-- container end.// -->
    </section>
    <!-- header-main end.// -->
    <nav class="navbar navbar-light bg-white border-bottom navbar-expand">
      <div class="container">
        <ul class="navbar-nav flex-wrap">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'TheProducts' }"
              >Sales</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'TheProducts' }"
              >Electronics</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'TheProducts' }"
              >Smartphones</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'TheProducts' }"
              >Laptops</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'TheProducts' }"
              >Photo video</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'TheProducts' }"
              >Home items</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'TheProducts' }"
              >Clothing</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'TheProducts' }"
              >Tools</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'TheProducts' }"
              >Others</router-link
            >
          </li>
        </ul>
      </div>
      <!-- container end.// -->
    </nav>
    <!-- navbar-main end.// -->
  </header>
</template>
