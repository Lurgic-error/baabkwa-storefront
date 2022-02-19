<template>
    <footer class="section-footer bg-white shadow">
        <div class="container">
            <section class="footer-main py-5">
                <div class="row">
                    <aside class="col-md-12 col-lg-3 col-xl-3">
                        <article class=""> <img src="../assets/logo.svg"  class="logo-footer">
                            <p class="mt-3"> © 2022 Baabkubwa. <br> All rights reserved. </p>
                        </article>
                    </aside>
                    <aside class="col-6 col-md-3 col-lg-2 col-xl-2">
                        <h6 class="title">Store</h6>
                        <ul class="list-menu mb-3">
                            <li> <a href="#">About us</a></li>
                            <li> <a href="#">Find store</a></li>
                            <li> <a href="#">Categories</a></li>
                            <li> <a href="#">Blogs</a></li>
                        </ul>
                    </aside>
                    <aside class="col-6 col-md-3 col-lg-2 col-xl-2">
                        <h6 class="title">Information</h6>
                        <ul class="list-menu mb-3">
                            <li> <a href="#">Help center</a></li>
                            <li> <a href="#">Money refund</a></li>
                            <li> <a href="#">Shipping info</a></li>
                            <li> <a href="#">Refunds</a></li>
                        </ul>
                    </aside>
                    <aside class="col-6 col-md-3 col-lg-2 col-xl-2">
                        <h6 class="title">Support</h6>
                        <ul class="list-menu mb-3">
                            <li> <a href="#"> Help center </a></li>
                            <li> <a href="#"> Documents </a></li>
                            <li> <a href="#"> Account restore </a></li>
                            <li> <a href="#"> My Orders </a></li>
                        </ul>
                    </aside>
                    <aside class="col-6 col-md-3 col-lg-3 col-xl-3">
                        <h6 class="title">Call us</h6>
                        <p class="h5 mb-0">0754 587 254</p> <small class="text-muted">(9-13 and 14-18 ;
                            Mon-Fri)</small>
                        <nav class="mt-3"> <a class="btn btn-icon btn-light" title="Facebook" target="_blank"
                                href="#"><i class="bi bi-facebook"></i></a> <a class="btn btn-icon btn-light"
                                title="Instagram" target="_blank" href="#"><i class="bi bi-instagram"></i></a> <a
                                class="btn btn-icon btn-light" title="Youtube" target="_blank" href="#"><i
                                    class="bi bi-youtube"></i></a> <a class="btn btn-icon btn-light" title="Twitter"
                                target="_blank" href="#"><i class="bi bi-twitter"></i></a> </nav>
                    </aside>
                </div> <!-- row.// -->
            </section> <!-- footer-top.// -->
            <section class="footer-bottom d-flex justify-content-between border-top">
                <div> <i class="fab fa-lg fa-cc-visa"></i> <i class="fab fa-lg fa-cc-amex"></i> <i
                        class="fab fa-lg fa-cc-mastercard"></i> <i class="fab fa-lg fa-cc-paypal"></i> </div>
                <nav class="dropup"> <button class="dropdown-toggle btn d-flex align-items-center py-0" type="button"
                        data-bs-toggle="dropdown"> <img
                            src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/flags/flag-usa.png"
                            class="me-2" height="20"> <span>English</span> </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#">Russian</a></li>
                        <li><a class="dropdown-item" href="#">Arabic</a></li>
                        <li><a class="dropdown-item" href="#">Spanish</a></li>
                    </ul>
                </nav>
            </section>
        </div> <!-- container end.// -->
    </footer>
</template>

<script setup></script>

<style scoped>
    .section-footer {
        box-shadow: 0 2px 10px rgb(51 51 51 / 10%);
        position: relative;
    }

    .section-footer .logo-footer {
        max-height: 90px;
    }

    .section-footer .title {
        margin-bottom: 10px;
    }

    .list-icon,
    .list-bullet,
    .list-dots,
    .list-check,
    .list-menu {
        list-style: none;
        margin-left: 0;
        padding-left: 0;
    }


    .list-icon li,
    .list-bullet li,
    .list-dots li,
    .list-check li,
    .list-menu li {
        position: relative;
        margin-bottom: 4px;
    }

    .list-menu li>a {
        display: block;
        color: #51585e;
        text-decoration: none;
    }

    .btn-light {
        background-color: #fff;
        border-color: #dee2e6;
        color: #212529;
    }

    .btn-icon {
        width: 2.6rem;
        padding-left: 0px;
        padding-right: 0px;
    }
</style>