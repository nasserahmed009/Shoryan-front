<template>
  <div class="order grey lighten-4">
    <a
      class="waves-effect waves-light btn yellow black-text right modal-trigger"
      v-if="(orderState = 'delivered')"
      href="#complaintModal"
    >
      <i class="material-icons left">warning</i>
      Add complaint
    </a>

    <div id="complaintModal" class="modal">
      <div class="modal-content">
        <h4>Add a complaint to order #1234</h4>

        <div class="input-field col s12">
          <input id="subject" type="text" class="validate" />
          <label for="subject">Subject</label>
        </div>

        <div class="input-field col s12">
          <textarea
            id="complaintMessage"
            class="materialize-textarea"
          ></textarea>
          <label for="complaintMessage">Textarea</label>
        </div>

        <a type="submit" class="waves-effect waves-light btn right"
          ><i class="material-icons right">send</i>Add complaint</a
        >

        <div class="clear"></div>
      </div>
    </div>

    <a
      class="waves-effect waves-light btn green right"
      v-if="orderState != 'delivered'"
    >
      <i class="material-icons left">shopping_cart</i>
      Order delivered
    </a>

    <h6>
      <span class="bold"> Order number : </span>
      {{ Order.id }}
    </h6>
    <h6>
      <span class="bold"> Order date : </span>
      {{ Order.orderDate }}
    </h6>
    <h6>
      <span class="bold"> Total price : </span>
      {{ totalOrderPrice }}
    </h6>
    <h6 class="bold">Order items :</h6>

    <div v-for="listing in listings" :key="listing.id">
      <cartItem :Listing="listing" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $(".modal").modal();
    this.getListingsInOrder();
  },
  updated() {
    $(".modal").modal();
  },
  data() {
    return {
      orderState: "delivered",
      listings: null
    };
  },
  components: {
    cartItem: () => import("@/components/Home/PastOrdersCard")
  },
  props: {
    // the component expect to get an drug data to be viewed
    Order: {
      type: Object,
      required: true
    }
  },
  computed: {
    totalOrderPrice() {
      return (
        this.Order.deliverPrice + this.Order.itemsPrice - this.Order.discount
      );
    }
  },
  methods: {
    async getListingsInOrder() {
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}ListingsInOrder/` + this.Order.id
      );
      this.listings = response.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.order {
  padding: 15px 20px;
  border-radius: 30px;
}
</style>
