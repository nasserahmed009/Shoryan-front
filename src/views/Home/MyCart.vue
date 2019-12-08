<template>
  <div>
    <div class="grey lighten-3" style="padding:40px 0px">
      <div class="container">
        <h3 class="bold nomargin">My Cart</h3>
      </div>
    </div>
    <div class="row" style="margin:20px 0px">
      <div class="container">
        <div class="col s8">
          <div>
            <cartItem v-for="i in 4" :key="i" class="cartItem" />
          </div>
        </div>
        <div class="col s4">
          <totalPrice />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    cartItem: () => import("@/components/Home/CartItem"),
    totalPrice: () => import("@/components/Home/TotalPrice")
  }
};
</script>

<style lang="scss" scoped>
.cartItem {
  margin: 10px 0px;
}
</style>
