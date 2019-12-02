<template>
  <div>
    <div class="grey" style="padding:40px 0px">
      <div class="container">
        <h3 class="HeaderText white-text nomargin">My Cart</h3>
      </div>
    </div>
    <div class="row" style="margin:20px 0px">
      <div class="col s8">
        <div>
          <cartItem v-for="i in 4" :key="i" />
        </div>
      </div>
      <div class="col s4">
        <totalPrice />
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
