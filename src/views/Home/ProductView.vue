<template>
  <div>
    <div class="container" style="margin-top:2%">
      <ProductViewCard />
    </div>
    <div class="row container">
      <h3 class="bold col s10 nomargin" style="color=black">
        Sellers
      </h3>
      <div class="s2">
        <h5 class="nomargin">
          Filter
          <i class="material-icons" style="padding-top:15px">filter_list</i>
        </h5>
      </div>
    </div>
    <div class="row container">
      <SellerCard v-for="i in 6" :key="i" class="col s6" />
    </div>
    <div class="container">
      <h3 class="bold col s10 nomargin" style="color=black">
        Similar Products
      </h3>
    </div>
    <div class="row container">
      <ItemCard v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ProductViewCard: () => import("@/components/Home/ProductViewCard"),
    SellerCard: () => import("@/components/Home/SellerCard"),
    ItemCard: () => import("@/components/Home/ItemCard")
  }
};
</script>

<style></style>
