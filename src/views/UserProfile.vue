<template>
  <section class="padding-y- bg-light">
    <div class="container">
      <div class="row">
        <aside class="col-lg-3">
          <!-- COMPONENT MENU LIST -->
          <div class="card p-3 h-100">
            <nav class="nav flex-column nav-pills">
              <router-link class="nav-link active" :to="{ name: 'UserProfile' }"
                >Profile</router-link
              >
              <router-link class="nav-link" :to="{ name: 'TheOrders' }"
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
          <article class="card">
            <div class="card-body">
              <div class="itemside align-items-center">
                <div class="aside">
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/avatars/avatar.jpg"
                    class="icon-md img-avatar"
                  />
                </div>
                <div class="info">
                  <h6 class="title">Mr. Kinjekitile Ngwale</h6>
                  <p>
                    Email: kinjeninja05@gmail.com, Phone: +255756234321
                    <a href="#" class="px-2"><i class="bi bi-pen"></i></a>
                  </p>
                </div>
              </div>
              <hr />
              <p class="text-muted">Delivery addresses</p>
              <div class="row g-2 mb-3">
                <div class="col-md-6">
                  <article class="box">
                    <b class="mx-2 text-muted"
                      ><i class="fa fa-map-marker-alt"></i
                    ></b>
                    Dar es salaam, Kimara Stop Over, Tonge Nyama
                  </article>
                </div>
                <!-- col.// -->
                <div class="col-md-6">
                  <article class="box">
                    <b class="mx-2 text-muted"
                      ><i class="fa fa-map-marker-alt"></i
                    ></b>
                    Dar es salaam, Mikocheni, Kwa Nyerere
                  </article>
                </div>
                <!-- col.// -->
              </div>
              <!-- row.// -->
              <a href="#" class="btn btn-outline-primary">
                <i class="me-2 fa fa-plus"></i> Add new address
              </a>
              <hr />
              <p class="text-muted">Payment methods</p>
              <div class="row g-2 mb-3">
                <div class="col-md-6">
                  <article class="box">
                    <b class="mx-2 text-muted"
                      ><i class="fa fa-credit-card"></i
                    ></b>
                    Visa •••• 9905, Exp: 12/24
                  </article>
                </div>
                <!-- col.// -->
              </div>
              <!-- row.// -->
              <a href="#" class="btn btn-outline-primary">
                <i class="me-2 fa fa-plus"></i> Add payment method
              </a>
            </div>
            <!-- card-body .// -->
          </article>
          <!-- card .// -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.padding-y {
  padding-top: 40px;
  padding-bottom: 40px;
}

.content-body {
  flex: 1 1 auto;
  padding: 1.88rem;
}
</style>
