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
        <<<<<<< HEAD
        <h4>Add a complaint to order {{ Order.id }}</h4>
        <form @submit.prevent="Complain">
          <div class="input-field col s12">
            <input
              id="subject"
              type="text"
              class="validate"
              v-model="subject"
            />
            <label for="subject">Subject</label>
          </div>
          =======
          <h4>Add a complaint to order #1234</h4>

          <div class="input-field col s12">
            <input id="subject" type="text" class="validate" />
            <label for="subject">Subject</label>
          </div>
          >>>>>>> 81674bf5e30fe1be5e82567887a0b7b0a2d42988

          <div class="input-field col s12">
            <textarea
              id="complaintMessage"
              class="materialize-textarea"
              v-model="message"
            ></textarea>
            <label for="complaintMessage">Textarea</label>
          </div>

          <<<<<<< HEAD
          <button type="submit" class="waves-effect waves-light btn right">
            <i class="material-icons right">send</i>Add complaint
          </button>
        </form>
        =======
        <a type="submit" class="waves-effect waves-light btn right"
          ><i class="material-icons right">send</i>Add complaint</a
        >

        >>>>>>> 81674bf5e30fe1be5e82567887a0b7b0a2d42988
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
      <span class="bold"> Expected delivery date : </span>
      {{ Order.expectedDeliveryDate }}
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
import { EventBus } from "@/EventBus.js";
export default {
  mounted() {
    $(".modal").modal();
    this.getListingsInOrder();
    this.normalUserID = this.userid;
  },

  data() {
    return {
      userid: this.$store.getters.loggedIn ? this.$store.state.user.id : null,
      orderState: "delivered",
      listings: null,
      subject: null,
      message: null,
      normalUserID: null,
      courierID: this.Order.courierId,
      fromCourierToUser: null
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
    },
    async Complain() {
      EventBus.$emit("clearNotifications"); // to clear any existing notifications
      console.log(this.Complaint);
      //the data that will be sent to the api
      if (this.$store.state.user.type == "Courier") {
        this.fromCourierToUser = 1;
      } else {
        this.fromCourierToUser = 0;
      }
      const complaint = {
        Complaint: {
          subject: this.subject,
          message: this.message,
          normalUserID: this.normalUserID,
          courierID: this.courierID,
          fromCourierToUser: this.fromCourierToUser
        }
      };
      this.axios.post(`${this.$store.state.baseApiUrl}Complaints`, complaint);
      $(".modal").modal("close");
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
