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
            <cartItem
              v-for="cartitem in cartItems"
              :key="cartitem.id"
              class="cartItem"
              :cartitem="cartitem"
              v-on:deleteCartItem="deleteCartItem"
            />
          </div>
        </div>
        <div class="col s4">
          <totalPrice :cartItems="cartItems" v-on:emptyCart="emptyCart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js";
export default {
  components: {
    cartItem: () => import("@/components/Home/CartItem"),
    totalPrice: () => import("@/components/Home/TotalPrice")
  },
  mounted() {
    this.getCartItems();
    this.emptyCart();
  },
  data() {
    return {
      userid: this.$store.getters.loggedIn ? this.$store.state.user.id : null,
      cartItems: []
    };
  },
  methods: {
    async getCartItems() {
      try {
        const response = await this.axios.get(
          `${this.$store.state.baseApiUrl}userCart/${this.userid}`
        );
        this.cartItems = response.data;
      } catch (error) {
        EventBus.$emit("errorNotification", error.response.data);
      }
    },
    emptyCart() {
      this.cartItems = [];
    },
    deleteCartItem(listingId) {
      this.cartItems = this.cartItems.filter(
        cartItem => cartItem.listingId != listingId
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.cartItem {
  margin: 10px 0px;
}
</style>
