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
              <router-link class="nav-link active" :to="{ name: 'TheWishlist' }"
                >My wishlist</router-link
              >
              <router-link class="nav-link" :to="{ name: 'TheTransactions' }"
                >Transactions</router-link
              >
              <router-link class="nav-link" :to="{ name: 'UserEditProfile' }"
                >Profile setting
              </router-link>
              <router-link class="nav-link" :to="{ name: 'TheLogout' }"
                >Log out</router-link
              >
            </nav>
          </div>
          <!-- COMPONENT MENU LIST END .// -->
        </aside>
        <div class="col-lg-9">
          <aside class="col-md-9">
            <article class="card-body border-bottom">
              <div class="row gy-3">
                <div class="col-md-7">
                  <div class="itemside">
                    <a href="#" class="aside">
                      <img
                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.jpg"
                        class="img-md img-thumbnail"
                      />
                    </a>
                    <div class="info">
                      <a href="#" class="title"
                        >Some name of item goes here nice
                      </a>
                      <strong class="price d-block mb-2">Tsh 45,000</strong>
                      <div>
                        <a href="#" class="btn-link">Save for later</a>
                        <b class="dot mx-1"></b>
                        <a href="#" class="btn-link text-danger"> Remove </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- col.// -->
                <div class="col-md-5">
                  <div class="input-group input-spinner float-lg-end">
                    <button class="btn btn-light" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#999"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 13H5v-2h14v2z"></path>
                      </svg>
                    </button>
                    <input type="text" class="form-control" value="1" />
                    <button class="btn btn-light" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#999"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                      </svg>
                    </button>
                  </div>
                  <!-- input-group.// -->
                </div>
                <!-- col.// -->
              </div>
              <!-- row.// -->
            </article>
            <!-- card-group.// -->
            <article class="card-body border-bottom">
              <div class="row gy-3">
                <div class="col-md-7">
                  <div class="itemside">
                    <a href="#" class="aside">
                      <img
                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/6.jpg"
                        class="img-md img-thumbnail"
                      />
                    </a>
                    <div class="info">
                      <a href="#" class="title"
                        >Some name of item goes here nice
                      </a>
                      <strong class="price d-block mb-2">Tsh 50,000</strong>
                      <div>
                        <a href="#" class="btn-link">Save for later</a>
                        <b class="dot mx-1"></b>
                        <a href="#" class="btn-link text-danger"> Remove </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- col.// -->
                <div class="col-md-5">
                  <div class="input-group input-spinner float-lg-end">
                    <button class="btn btn-light" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#999"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 13H5v-2h14v2z"></path>
                      </svg>
                    </button>
                    <input type="text" class="form-control" value="1" />
                    <button class="btn btn-light" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#999"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                      </svg>
                    </button>
                  </div>
                  <!-- input-group.// -->
                </div>
                <!-- col.// -->
              </div>
              <!-- row.// -->
            </article>
            <!-- card-group.// -->
            <article class="card-body">
              <div class="row gy-3">
                <div class="col-md-7">
                  <div class="itemside">
                    <a href="#" class="aside">
                      <img
                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.jpg"
                        class="img-md img-thumbnail"
                      />
                    </a>
                    <div class="info">
                      <a href="#" class="title"
                        >Gaming Headset 32db Black built in mic
                      </a>
                      <strong class="price d-block mb-2">Tsh 240,000</strong>
                      <div>
                        <a href="#" class="btn-link">Save for later</a>
                        <b class="dot mx-1"></b>
                        <a href="#" class="btn-link text-danger"> Remove </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- col.// -->
                <div class="col-md-5">
                  <div class="input-group input-spinner float-lg-end">
                    <button class="btn btn-light" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#999"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 13H5v-2h14v2z"></path>
                      </svg>
                    </button>
                    <input type="text" class="form-control" value="1" />
                    <button class="btn btn-light" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#999"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                      </svg>
                    </button>
                  </div>
                  <!-- input-group.// -->
                </div>
                <!-- col.// -->
              </div>
              <!-- row.// -->
            </article>
            <!-- card-group.// -->
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
