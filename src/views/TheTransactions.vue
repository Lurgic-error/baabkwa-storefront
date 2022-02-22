<template>
  <section class="padding-y">
    <div class="container">
      <div class="row">
        <aside class="col-lg-3">
          <!-- COMPONENT MENU LIST -->
          <div class="card p-3 h-100">
            <nav class="nav flex-column nav-pills">
              <router-link class="nav-link" :to="{ name: 'UserProfile' }"
                >Account div</router-link
              >
              <router-link class="nav-link" :to="{ name: 'TheOrders' }"
                >Orders</router-link
              >
              <router-link class="nav-link" :to="{ name: 'TheWishlist' }"
                >My wishlist</router-link
              >
              <router-link
                class="nav-link active"
                :to="{ name: 'TheTransactions' }"
                >Transactions</router-link
              >
              <router-link class="nav-link" :to="{ name: 'UserEditProfile' }"
                >Profile setting</router-link
              >
              <router-link class="nav-link" :to="{ name: 'TheLogout' }"
                >Log out</router-link
              >
            </nav>
          </div>
          <!-- COMPONENT MENU LIST END .// -->
        </aside>
        <div class="col-lg-9"></div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
