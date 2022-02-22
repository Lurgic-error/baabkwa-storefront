<template>
  <section>
    <div class="container padding-y">
      <div class="row justify-content-center">
        <article class="col-lg-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <h4 class="mb-4">Sign in</h4>
              <form>
                <div class="d-flex gap-2">
                  <a
                    href="#"
                    class="d-flex align-items-center btn btn-light w-100"
                  >
                    <img
                      class="me-2"
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/icons/social/facebook.svg"
                      height="20"
                      width="20"
                    />
                    Facebook
                  </a>
                  <a
                    href="#"
                    class="d-flex align-items-center btn btn-light w-100"
                  >
                    <img
                      class="me-2"
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/icons/social/google.svg"
                      height="20"
                      width="20"
                    />
                    Google
                  </a>
                </div>
                <p class="text-divider my-4">Or login with username</p>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                  />
                </div>
                <div class="mb-3 input-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                  <button type="button" class="btn btn-light">
                    <i class="text-muted fa fa-eye"></i>
                  </button>
                </div>
                <div class="mb-3">
                  <label class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      checked=""
                    />
                    <span class="form-check-label"> Remember </span>
                  </label>
                </div>
                <!-- col end.// -->
                <div class="mb-4">
                  <button class="btn w-100 btn-primary" type="button">
                    Sign in
                  </button>
                </div>
                <p class="mb-1 text-center">
                  Don’t have an account? <a href="#">Sign Up</a>
                </p>
              </form>
              <!-- form end.// -->
            </div>
            <!-- card-body end.// -->
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup></script>
