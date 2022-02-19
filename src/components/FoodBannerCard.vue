<template>
    <div class="card">
        <header class="card-img-top overflow-hidden bg-cover"
            style="background-image: url('https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/banners/bg-cafe.jpg');">
            <div class="card-body bg-dark-50">
                <div class="d-lg-flex align-items-end">
                    <div class="itemside mt-lg-5 flex-auto">
                        <div class="aside"> <img
                                src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/brands/cafe-logo3.jpg"
                                class="img-md rounded-3" width="96" height="96"> </div>
                        <div class="info">
                            <p class="text-white">Mlimani city</p>
                            <h3 class="text-white">McDonalds Mlimani</h3>
                            <p class="text-white-50">National food of Dar city citizens.</p>
                        </div>
                    </div>
                    <div class="flex-shrink-0 mt-3"> <span class="btn btn-sm btn-gray"> <i class="bi bi-truck"></i>
                            15-20 min, Tsh 12,000</span> <span class="btn btn-sm btn-warning"> <i class="bi bi-star"></i> 4.7
                        </span> <a class="btn btn-sm btn-outline-light" href="#"> More info </a> </div>
                </div>
            </div> <!-- card-body.// -->
        </header>
        <div class="row g-0">
            <aside class="col-lg-3 border-end">
                <nav class="nav flex-column nav-pills m-3"> <a href="#" class="nav-link active">Recommended</a>
                    <a href="#" class="nav-link">Hamburgers</a> <a href="#" class="nav-link">Salads and
                        Drinks</a> <a href="#" class="nav-link">Grilled meats</a> <a href="#"
                        class="nav-link">Vegeterian foods</a> <a href="#" class="nav-link">Other meals</a>
                </nav>
            </aside>
            <div class="col-lg-9">
                <div class="content-body card-content-body"  style="
    padding: 1.88rem;
    flex: 1 1 auto;
">
                    <h4 class="card-title">Recommended</h4>
                    <article class="row mb-3">
                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-12"> <img class="rounded w-100 obj-cover mb-3"
                                height="140"
                                src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/food1.jpg">
                        </div>
                        <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12"> <a href="#"
                                class="btn btn-outline-primary float-end"> Add this</a>
                            <h6 class="title">Zanzibar Beef Pilau</h6>
                            <div class="price-wrap mb-2"> <span class="price">Tsh 7,000</span> </div>
                            <!-- price-wrap .// -->
                            <p class="text-muted" style="max-width: 600px">Zanzibarian pilau cooked with chicken meat,
                                carrot and other ingredients and some other descriptions Juicy, tender,
                                succulent chicken</p>
                        </div>
                    </article> <!-- itemside .// -->
                    <article class="row mb-3">
                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-12"> <img class="rounded w-100 obj-cover mb-3"
                                height="140"
                                src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/food2.jpg">
                        </div>
                        <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12"> <a href="#"
                                class="btn btn-outline-primary float-end"> Add this</a>
                            <h6 class="title">Chicken Pizza </h6>
                            <div class="price-wrap mb-2"> <span class="price">Tsh 15,000</span> <del class="text-muted">
                                    Tsh 20,000</del> <span class="ms-2 text-danger"> 5% off
                                </span> </div> <!-- price-wrap .// -->
                            <p class="text-muted" style="max-width: 600px">Juicy, tender, succulent chicken
                                strips. Served with a choice of house made dips chicken meat and rice, carrot
                                and other ingredients</p>
                        </div> <!-- col .// -->
                    </article> <!-- itemside .// -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .bg-cover {
        background-size: cover;
    }

    .card-content-body {
        flex: 1 1 auto;
        padding: 1.88rem;
    }

    .obj-cover {
        object-fit: cover;
    }
</style>