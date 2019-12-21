<template>
  <div class="grey lighten-3">
    <div class="center" style="padding:50px">
      <p>
        subtotal
      </p>
      <p>
        <b>{{ subTotalPrice }}</b>
      </p>
      <p>
        <b>+</b>
      </p>
      <p>
        Delivery Fees
      </p>
      <p style="padding-bottom:10px">
        <b>{{ deliveryFees }}</b>
      </p>
      <hr style="margin:0px 10%; border: 1px solid #ccc" />
      <p style="padding-top:10px">
        <b>{{ newTotalPrice }}</b>
      </p>
      <button
        style="margin-top:10px"
        class="waves-effect waves-light btn blue darken-1"
        @click.prevent="checkout"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js";

export default {
  mounted() {
    this.getUser();
  },
  data() {
    return {
      deliveryFees: 20,
      user: null,
      discount: null
    };
  },
  computed: {
    subTotalPrice() {
      if (this.cartItems.length == 0) return 0;

      let subTotal = 0;
      for (let cartItem of this.cartItems) {
        subTotal += cartItem.price;
      }
      return subTotal;
    },
    totalPrice() {
      return this.subTotalPrice + this.deliveryFees;
    },
    newBalance() {
      return Math.max(0, this.user.balance - this.totalPrice);
    },
    newTotalPrice() {
      return Math.max(0, this.totalPrice - this.user.balance);
    },
    cartListingsIds() {
      let cartListingsIds = [];
      for (let cartItem of this.cartItems) {
        cartListingsIds.push(cartItem.listingId);
      }
      return cartListingsIds;
    },
    loggedInUser() {
      return this.$store.state.user;
    }
  },
  props: {
    cartItems: {
      type: Array,
      required: true
    }
  },
  methods: {
    async checkout() {
      try {
        this.updateBalance();
        const requestPayload = {
          Order: {
            orderDate: new Date(), //order date
            //set the expected delivery date to a week later
            expectedDeliveryDate: new Date(
              new Date().getTime() + 7 * 24 * 60 * 60 * 1000
            ),
            itemsPrice: this.newTotalPrice - this.deliveryFees,
            userId: this.loggedInUser.id,
            deliverPrice: this.deliveryFees,
            discount: 0,
            courierId: 7,
            listingsIds: this.cartListingsIds
          }
        };

        //add new order in the db with the current listings and the current user
        await this.axios.post(
          `${this.$store.state.baseApiUrl}Order`,
          requestPayload
        );

        //empty the cart for this user
        await this.axios.delete(
          `${this.$store.state.baseApiUrl}emptyCart/${this.loggedInUser.id}`
        );

        this.$emit("emptyCart");

        EventBus.$emit(
          "successNotification",
          `Order added, Estimated delivery date : ${requestPayload.Order.expectedDeliveryDate}`
        );
      } catch (err) {
        EventBus.$emit("errorNotification", "Error occured, try again later");
      }
    },
    async getUser() {
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}user/${this.loggedInUser.id}`
      );
      this.user = response.data;
      console.log(this.user.balance);
    },
    async updateBalance() {
      await this.axios.post(
        `${this.$store.state.baseApiUrl}Balance/` +
          this.loggedInUser.id +
          "/" +
          this.newBalance
      );
    }
  }
};
</script>
