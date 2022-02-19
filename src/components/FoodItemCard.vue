<template>
    <div class="food-item__card">
        <article class="card card-product-grid"> <a href="#"> <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/food1.jpg"
                    height="200" class="card-img-top" alt="product image"> </a>
            <div class="card-body pt-0">
                <div class="float-end mt-n5"> <img class="img-sm rounded-3 obj-contain border"
                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/brands/cafe-logo1.jpg" width="72" height="72"> </div>
                <div class="pt-3 pe-5">
                    <h6 class="card-title mb-0"> <a href="#">KFC Mikoocheni</a> </h6>
                    <p class="mb-1 text-muted">Fast food, halal food</p> <span class="badge bg-warning"> <i
                            class="fa fa-star"></i> 4.7 </span> <span class="text-success small ms-2"> <i
                            class="fa fa-truck"></i> 5-10 min, free</span>
                </div>
            </div> <!-- card-body.// -->
        </article>
    </div>
</template>

<style scoped>
.card.card-product-grid, .card.card-product-list {
    box-shadow: 0 1px 2px rgb(51 51 51 / 7%);
}
.card-product-grid {
    margin-bottom: 20px;
}

.obj-contain {
    -o-object-fit: contain;
    object-fit: contain;
}
.img-sm {
    width: 72px;
    height: 72px;
}

.img-xs, .img-sm, .img-md, .img-lg {
    display: inline-block;
    -o-object-fit: cover;
    object-fit: cover;
    flex-shrink: 0;
    flex-grow: 0;
}

</style>