<template>
    <div class="product-item__card">
        <figure class="card">
            <img src="../assets/imgs/product-1.jpg" alt="" class="card-img-top">
            <figcaption class="card-body">
                <div class="d-flex align-items-center justify-content-between">
                    <a href="#" class="title text-truncate">Macbook Air</a>
                <a href="#" class="btn btn-light btn-icon"> <i class="bi bi-heart"></i> </a>
                </div>
                <!-- <small class="text-muted">Sizes: S, M, XL</small> -->
                <div class="price-wrap">
                    <span class="price">Tsh 2,030,000</span> <del class="price-old">Tsh 2,170,000</del>
                </div>
            </figcaption>
        </figure>
    </div>
</template>


<style scoped>
    .card-img-top {
        height: 240px;
        border-radius: 0.25rem 0.25rem 0 0;
        position: relative;
        text-align: center;
        overflow: hidden;
        display: block;
    }

    .card-body {
        padding: 1rem 1.2rem;
        overflow: hidden;
        border-top: 1px solid #dee2e6 !important;
    }
</style>