<template>
  <section>
    <div class="container padding-y">
      <div class="row justify-content-center">
        <article class="col-lg-6 col-md-8">
          <aside class="">
            <!-- ================ COMPONENT SIGNUP ================= -->
            <div class="card mb-4">
              <article class="card-body">
                <h4 class="mb-4">Create accaunt</h4>
                <form>
                  <div class="row gx-3">
                    <div class="col mb-4">
                      <label class="form-label">First name</label>
                      <input type="text" class="form-control" placeholder="" />
                    </div>
                    <!-- col end.// -->
                    <div class="col mb-4">
                      <label class="form-label">Last name</label>
                      <input type="text" class="form-control" placeholder="" />
                    </div>
                    <!-- col end.// -->
                  </div>
                  <!-- row end.// -->
                  <div class="row">
                    <div class="col-auto mb-3">
                      <label class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="choose_a"
                          checked=""
                        />
                        <span class="form-check-label"> Buyer </span>
                      </label>
                    </div>
                    <!-- col end.// -->
                    <div class="col-auto mb-3">
                      <label class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="choose_a"
                        />
                        <span class="form-check-label"> Seller </span>
                      </label>
                    </div>
                    <!-- col end.// -->
                    <div class="col-auto mb-3">
                      <label class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="choose_a"
                        />
                        <span class="form-check-label"> Both </span>
                      </label>
                    </div>
                    <!-- col end.// -->
                  </div>
                  <!-- row end.// -->
                  <div class="row gx-3">
                    <div class="col mb-3">
                      <label class="form-label">City</label>
                      <input type="text" class="form-control" />
                    </div>
                    <!-- col end.// -->
                    <div class="col mb-3">
                      <label class="form-label">Country</label>
                      <select class="form-select">
                        <option value="none">Choose...</option>
                        <option selected="" value="uz">Tanzania</option>
                        <option value="ru">Kenya</option>
                        <option>Uganda</option>
                        <option value="in">Rwanda</option>
                        <option value="af">Burundi</option>
                      </select>
                    </div>
                    <!-- col end.// -->
                    <div class="col-12 mb-3">
                      <label class="form-label">Address</label>
                      <input type="text" class="form-control" placeholder="" />
                    </div>
                    <!-- col end.// -->
                    <div class="col-6 mb-3">
                      <label class="form-label">Email</label>
                      <input type="email" class="form-control" placeholder="" />
                      <small class="form-text"
                        >We'll never share your email</small
                      >
                    </div>
                    <!-- col end.// -->
                    <div class="col-6 mb-3">
                      <label class="form-label">Phone</label>
                      <div class="input-group">
                        <select class="form-select" style="max-width: 120px">
                          <option value="uz">TZ +255</option>
                          <option value="us">KE+254</option>
                          <option value="uz">TZ +255</option>
                          <option value="ru">UG +256</option>
                        </select>
                        <input
                          type="email"
                          class="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <!-- col end.// -->
                    <div class="col mb-3">
                      <label class="form-label">Create password</label>
                      <input class="form-control" type="password" />
                    </div>
                    <!-- col end.// -->
                    <div class="col mb-3">
                      <label class="form-label">Repeat password</label>
                      <input class="form-control" type="password" />
                    </div>
                    <!-- col end.// -->
                  </div>
                  <!-- row end.// -->
                  <div class="row mt-3 mb-4 align-items-center">
                    <div class="col-auto">
                      <button class="btn btn-primary" type="button">
                        Register now
                      </button>
                    </div>
                    <div class="col">
                      <label class="form-check me-auto">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span class="form-check-label">
                          I agree with Terms and Conditions
                        </span>
                      </label>
                    </div>
                  </div>
                </form>
                <!-- form end.// -->
                <hr />
                <p class="mb-0">
                  Already have an account? <a href="#">Sign in</a>
                </p>
              </article>
              <!-- card-body end .// -->
            </div>
            <!-- card end.// -->
            <!-- ============== COMPONENT SIGNUP END.// ============== -->
          </aside>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup></script>
