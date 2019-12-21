<template>
  <div>
    <!-- <div class="col s12 m4 l3"> -->
    <div class="card">
      <div class="card-image">
        <img
          src="https://wusfnews.wusf.usf.edu/sites/wusf/files/styles/medium/public/201908/pills_prescription_istock_2018.jpg"
        />
      </div>
      <div class="card-content">
        <router-link :to="{ name: 'SingleItem', params: { itemId: item.id } }">
          <h5>{{ item.name }}</h5>
        </router-link>

        <p><b>Shreets : </b> {{ item.shreets }}</p>
        <p><b>Elbas : </b> {{ item.elbas }}</p>
        <p><b>Price : </b> {{ item.price }}</p>
        <p v-if="this.loggedIn == true && this.loggedInUser.id != item.userId">
          <b>Seller : </b> {{ item.sellerName }}
        </p>
      </div>
      <div
        class="card-action"
        v-if="this.loggedIn == true && item.userId != this.loggedInUser.id"
      >
        <button
          class="waves-effect waves-light btn"
          @click.prevent="addItemToCart"
          v-if="!addedToCart && loggedInUser.type == 'Normal'"
        >
          <i class="material-icons left">add</i>Add to cart
        </button>
        <button
          class="btn green"
          v-if="addedToCart && loggedInUser.type == 'Normal'"
        >
          <i class="material-icons left">add</i>
          Added to cart
        </button>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { EventBus } from "@/EventBus.js";

export default {
  data() {
    return {
      addedToCart: false
    };
  },
  props: {
    // the component expect to get an item date to be viewed
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    loggedInUser() {
      return this.$store.state.user;
    }
  },
  methods: {
    //function that add the current item to the logged in user cart
    async addItemToCart() {
      console.log("hello");
      if (!this.loggedIn) return;
      console.log("hello");
      try {
        this.axios.post(
          `${this.$store.state.baseApiUrl}userCart/${this.loggedInUser.id}/${this.item.id}`,
          {}
        );

        this.$store.dispatch("addCartListingId", this.item.id);
        this.addedToCart = true;
      } catch (err) {
        EventBus.$emit("errorNotification", "Error occured, try again later");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
}
</style>
