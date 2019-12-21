<template>
  <div class="order grey lighten-4">
    <a
      class="waves-effect waves-light btn yellow black-text right modal-trigger"
      href="#complaintModal"
      v-if="Order.state == 'Delivered'"
    >
      <i class="material-icons left">warning</i>
      Add complaint
    </a>

    <div id="complaintModal" class="modal">
      <div class="modal-content">
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

          <div class="input-field col s12">
            <textarea
              id="complaintMessage"
              class="materialize-textarea"
              v-model="message"
            ></textarea>
            <label for="complaintMessage">Textarea</label>
          </div>

          <button type="submit" class="waves-effect waves-light btn right">
            <i class="material-icons right">send</i>Add complaint
          </button>
        </form>
        <div class="clear"></div>
      </div>
    </div>

    <a
      class="waves-effect waves-light btn green right"
      v-if="Order.state == 'NotDelivered'"
      @click.prevent="markOrderAsDelivered"
    >
      <i class="material-icons left">check</i>
      Mark order as delivered
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
    },
    async markOrderAsDelivered() {
      //send the request to mark the order as completed
      try {
        await this.axios.post(
          `${this.$store.state.baseApiUrl}Order/${this.Order.id}`,
          {}
        );

        this.$emit("orderCompleted", this.Order.id);
      } catch (err) {
        EventBus.$emit("errorNotification", "Error occured, try again later");
      }
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
