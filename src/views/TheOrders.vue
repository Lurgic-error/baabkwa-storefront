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
              <router-link class="nav-link active" :to="{ name: 'TheOrders' }"
                >Orders</router-link
              >
              <router-link class="nav-link" :to="{ name: 'TheWishlist' }"
                >My wishlist</router-link
              >
              <router-link class="nav-link" :to="{ name: 'TheTransactions' }"
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
        <div class="col-lg-9">
          <article class="card mb-3">
            <div class="card-body">
              <header class="d-md-flex">
                <div class="flex-grow-1">
                  <h6 class="mb-0">
                    Order ID: 1032 <i class="dot"></i
                    ><span class="text-danger"> Pending </span>
                  </h6>
                  <span>Date: 16 December 2022</span>
                </div>
                <div>
                  <a
                    :to="{ name: 'theOrders' }"
                    class="btn btn-sm btn-outline-danger"
                    >Cancel order</a
                  >
                  <a :to="{ name: 'TheOrders' }" class="btn btn-sm btn-primary"
                    >Track order</a
                  >
                </div>
              </header>
              <hr />
              <div class="row">
                <div class="col-md-4">
                  <p class="mb-0 text-muted">Contact</p>
                  <p class="m-0">
                    Alex Donald <br />
                    Phone: +255787214587 <br />
                    Email: info@mywebsite.com
                  </p>
                </div>
                <!-- col.// -->
                <div class="col-md-4 border-start">
                  <p class="mb-0 text-muted">Shipping address</p>
                  <p class="m-0">
                    Tanzania <br />
                    Dar es salaam, Mikocheni, Warioba St
                  </p>
                </div>
                <!-- col.// -->
                <div class="col-md-4 border-start">
                  <p class="mb-0 text-muted">Payment</p>
                  <p class="m-0">
                    <span class="text-success"> Visa **** 0932 </span> <br />
                    Shipping fee: Tsh 5,000<br />
                    Total paid: Tsh 35,000
                  </p>
                </div>
                <!-- col.// -->
              </div>
              <!-- row.// -->
              <hr />
              <ul class="row">
                <li class="col-lg-4 col-md-6">
                  <div class="itemside mb-3">
                    <div class="aside">
                      <img
                        width="72"
                        height="72"
                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/6.jpg"
                        class="img-sm rounded border"
                      />
                    </div>
                    <div class="info">
                      <p class="title">Apple SmartWatch Series 4 Space Gray</p>
                      <strong> 2x = Tsh 304,000 </strong>
                    </div>
                  </div>
                </li>
                <li class="col-lg-4 col-md-6">
                  <div class="itemside mb-3">
                    <div class="aside">
                      <img
                        width="72"
                        height="72"
                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.jpg"
                        class="img-sm rounded border"
                      />
                    </div>
                    <div class="info">
                      <p class="title">Gaming Headset with mic</p>
                      <strong> 2x = Tsh 234,000 </strong>
                    </div>
                  </div>
                </li>
                <li class="col-lg-4 col-md-6">
                  <div class="itemside mb-3">
                    <div class="aside">
                      <img
                        width="72"
                        height="72"
                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.jpg"
                        class="img-sm rounded border"
                      />
                    </div>
                    <div class="info">
                      <p class="title">Backpack for hiking</p>
                      <strong> 2x = Tsh 50,000 </strong>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- card-body .// -->
          </article>
          <!-- card .// -->
          <article class="card">
            <div class="card-body">
              <header class="d-md-flex">
                <div class="flex-grow-1">
                  <h6 class="mb-0">
                    Order ID: 9088 <i class="dot"></i>
                    <span class="text-success"> Shipped </span>
                  </h6>
                  <span>Date: 12 January 2021</span>
                </div>
                <div>
                  <a :to="{ name: '' }" class="btn btn-sm btn-outline-danger"
                    >Cancel order</a
                  >
                  <a :to="{ name: '' }" class="btn btn-sm btn-primary"
                    >Track order</a
                  >
                </div>
              </header>
              <hr />
              <div class="row">
                <div class="col-md-4">
                  <p class="mb-0 text-muted">Contact</p>
                  <p class="m-0">
                    Mike Johnatan <br />
                    Phone: 371-295-9131 <br />
                    Email: info@mywebsite.com
                  </p>
                </div>
                <!-- col.// -->
                <div class="col-md-4 border-start">
                  <p class="mb-0 text-muted">Shipping address</p>
                  <p class="m-0">
                    Tanzania <br />
                    Dar es salaam, Mikocheni, Warioba St, 19808
                  </p>
                </div>
                <!-- col.// -->
                <div class="col-md-4 border-start">
                  <p class="mb-0 text-muted">Payment</p>
                  <p class="m-0">
                    <span class="text-success"> Visa **** 4216 </span> <br />
                    Shipping fee: Tsh 5,000<br />
                    Total paid: Tsh 35,000
                  </p>
                </div>
                <!-- col.// -->
              </div>
              <!-- row.// -->
              <hr />
              <ul class="row">
                <li class="col-lg-4 col-md-6">
                  <div class="itemside mb-3">
                    <div class="aside">
                      <img
                        width="72"
                        height="72"
                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.jpg"
                        class="img-sm rounded border"
                      />
                    </div>
                    <div class="info">
                      <p class="title">Jeans shorts for men - XL</p>
                      <strong> 2x = Tsh25,000 </strong>
                    </div>
                  </div>
                </li>
                <li class="col-lg-4 col-md-6">
                  <div class="itemside mb-3">
                    <div class="aside">
                      <img
                        width="72"
                        height="72"
                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/12.jpg"
                        class="img-sm rounded border"
                      />
                    </div>
                    <div class="info">
                      <p class="title">T-shirts blue colors - SM</p>
                      <strong> 2x = Tsh 22,000 </strong>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- card-body .// -->
          </article>
          <!-- card .// -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
