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

        <a class="waves-effect waves-light btn right"
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
      #123989
    </h6>
    <h6>
      <span class="bold"> Order date : </span>
      17 May 2019
    </h6>
    <h6>
      <span class="bold"> Total price : </span>
      500000 EGP
    </h6>
    <h6 class="bold">Order items :</h6>
    <cartItem />
  </div>
</template>

<script>
export default {
  mounted() {
    $(".modal").modal();
  },
  updated() {
    $(".modal").modal();
  },
  data() {
    return {
      orderState: "delivered"
    };
  },
  components: {
    cartItem: () => import("@/components/Home/CartItem")
  }
};
</script>

<style lang="scss" scoped>
.order {
  padding: 15px 20px;
  border-radius: 30px;
}
</style>
