<template>
    <div class="container the__view">
        <div class="card d-flex justify-content-center align-items-center flex-column py-5 mt-4 food__banner">
            <h2>Order food online now</h2>
            <p>Discover the best food and drinks in your area</p>
            <form class="row row-cols-lg-auto g-3 align-items-center">
                <div class="col-12">
                    <label class="visually-hidden" for="inlineFormInputGroupUsername"></label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="inlineFormInputGroupUsername"
                            placeholder="What are trying to eat">
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

        <section class="pt-5">
            <div class="card food-category__card">
                <div class="content-body">
                    <nav class="row gy-4">
                        <div class="col-xl col-lg-2 col-md-3 col-4"> <a href="#" class="item-link text-center"> <span
                                    class="icon icon-lg mb-2 rounded-3"> <img width="42" height="42"
                                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/icons/food-svg-gray/hamburger.svg">
                                </span>
                                <span class="text"> Fast food </span> </a> </div> <!-- col.// -->
                        <div class="col-xl col-lg-2 col-md-3 col-4"> <a href="#" class="item-link text-center"> <span
                                    class="icon icon-lg mb-2 rounded-3"> <img width="42" height="42"
                                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/icons/food-svg-gray/steak.svg">
                                </span> <span class="text"> Steaks </span> </a> </div> <!-- col.// -->
                        <div class="col-xl col-lg-2 col-md-3 col-4"> <a href="#" class="item-link text-center"> <span
                                    class="icon icon-lg mb-2 rounded-3"> <img width="42" height="42"
                                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/icons/food-svg-gray/chicken.svg">
                                </span> <span class="text"> Chickens </span> </a> </div> <!-- col.// -->
                        <div class="col-xl col-lg-2 col-md-3 col-4"> <a href="#" class="item-link text-center"> <span
                                    class="icon icon-lg mb-2 rounded-3"> <img width="42" height="42"
                                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/icons/food-svg-gray/pizza.svg">
                                </span> <span class="text"> Pizzas </span> </a> </div> <!-- col.// -->
                        <div class="col-xl col-lg-2 col-md-3 col-4"> <a href="#" class="item-link text-center"> <span
                                    class="icon icon-lg mb-2 rounded-3"> <img width="42" height="42"
                                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/icons/food-svg-gray/cake.svg">
                                </span> <span class="text"> Sweets </span> </a> </div> <!-- col.// -->
                        <div class="col-xl col-lg-2 col-md-3 col-4"> <a href="#" class="item-link text-center"> <span
                                    class="icon icon-lg mb-2 rounded-3"> <img width="42" height="42"
                                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/icons/food-svg-gray/porridge.svg">
                                </span>
                                <span class="text"> National food </span> </a> </div> <!-- col.// -->
                        <div class="col-xl col-lg-2 col-md-3 col-4"> <a href="#" class="item-link text-center"> <span
                                    class="icon icon-lg mb-2 rounded-3"> <img width="42" height="42"
                                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/icons/food-svg-gray/cup.svg">
                                </span> <span class="text"> Cold drink </span> </a> </div> <!-- col.// -->
                        <div class="col-xl col-lg-2 col-md-3 col-4"> <a href="#" class="item-link text-center"> <span
                                    class="icon icon-lg mb-2 rounded-3"> <img width="42" height="42"
                                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/icons/food-svg-gray/chicken.svg">
                                </span> <span class="text"> Grills </span> </a> </div> <!-- col.// -->
                        <div class="col-xl col-lg-2 col-md-3 col-4"> <a href="#" class="item-link text-center"> <span
                                    class="icon icon-lg mb-2 rounded-3"> <img width="42" height="42"
                                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/icons/food-svg-gray/apple.svg">
                                </span> <span class="text"> Fruits </span> </a> </div> <!-- col.// -->
                    </nav>
                </div> <!-- card-body.// -->
            </div>
        </section>

        <section class="pt-5">
            <FoodList />
        </section>

        <section class="pt-5">
            <FoodBannerCard/>
        </section>
    </div>
</template>

<script setup>
    import FoodList from '../components/FoodList.vue';
    import FoodBannerCard from "../components/FoodBannerCard.vue"
</script>

<style>
    .food__banner {
        background-image: url("../assets/imgs/food-1.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 400px;
    }

    h2,
    p {
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    }

    .food-category__card {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(81, 88, 94, .12);
        box-shadow: 0 0.05rem 0.2rem rgb(0 0 0 / 3%);
        border-radius: 0.35rem;
    }

    .food-category__card>.content-body {
        flex: 1 1 auto;
        padding: 1.88rem;
    }

    .item-link {
        width: 100%;
        display: block;
        text-decoration: none;
    }

    .item-link {
        width: 100%;
        display: block;
        text-decoration: none;
    }

    .item-link .text {
        display: block;
        color: #51585e;
    }

    .item-link .icon {
        border: 1px solid #dee2e6;
    }

    .icon-xs,
    .icon-sm,
    .icon-md,
    .icon-lg {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-shrink: 0;
        flex-grow: 0;
    }

    .icon-lg {
        width: 72px;
        height: 72px;
        font-size: 32px;
    }
</style>