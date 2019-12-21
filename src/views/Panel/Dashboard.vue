<template>
  <div>
    <div class="row">
      <div class="col s12 m3">
        <div class="card grey ">
          <div class="card-content white-text">
            <span class="card-title">Total Income</span>
            <h3 class="nomargin">$ {{ this.totalIncomeSum }}</h3>
            <span>this month</span>
          </div>
        </div>
      </div>
      <div class="col s12 m3">
        <div class="card grey ">
          <div class="card-content white-text">
            <span class="card-title">New Users</span>
            <h3 class="nomargin">{{ this.newUsersCount }}</h3>
            <span>this month</span>
          </div>
        </div>
      </div>
      <div class="col s12 m3">
        <div class="card grey ">
          <div class="card-content white-text">
            <span class="card-title">Orders</span>
            <h3 class="nomargin">{{ this.ordersCount }}</h3>
            <span>this month</span>
          </div>
        </div>
      </div>
      <div class="col s12 m3">
        <div class="card grey ">
          <div class="card-content white-text">
            <span class="card-title">Complaints</span>
            <h3 class="nomargin">{{ this.complaintsCount }}</h3>
            <span>this month</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col m6">
        <div class="grey lighten-3" style="padding: 20px">
          <UsersOfEachTypeChart />
        </div>
      </div>
      <div class="col m6">
        <div class="grey lighten-3" style="padding: 20px">
          <DrugsOfEachCategory />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="card grey ">
          <div class="card-content white-text">
            <span class="card-title">Other Information May be useful</span>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis in odio adipisci quos, ipsum quo cupiditate dolores
              vitae odit qui laboriosam laudantium, quidem voluptatum et aliquam
              esse deleniti iusto quia.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js"; //for pushing notifications

export default {
  mounted() {
    EventBus.$emit("clearNotifications");
    $(".datepicker").datepicker({
      onSelect: this.setExpiryDate
    });
    this.getDashboardData();
  },
  data() {
    return {
      totalIncomeSum: null,
      newUsersCount: null,
      ordersCount: null,
      complaintsCount: null
    };
  },
  components: {
    UsersOfEachTypeChart: () =>
      import("@/components/Panel/UsersOfEachTypeChart"),
    DrugsOfEachCategory: () => import("@/components/Panel/DrugsOfEachCategory")
  },
  methods: {
    async getDashboardData() {
      try {
        this.totalIncomeSum = await this.axios.get(
          `${this.$store.state.baseApiUrl}getTotalIncomeMonth`
        );
        this.totalIncomeSum = this.totalIncomeSum.data;
      } catch (err) {
        EventBus.$emit("errorNotification", "Could not retrieve income"); //push notification
      }

      try {
        this.newUsersCount = await this.axios.get(
          `${this.$store.state.baseApiUrl}getCountUsersMonth`
        );
        this.newUsersCount = this.newUsersCount.data;
      } catch (err) {
        EventBus.$emit("errorNotification", "Could not retrieve users count"); //push notification
      }

      try {
        this.ordersCount = await this.axios.get(
          `${this.$store.state.baseApiUrl}getCountOrdersMonth`
        );
        this.ordersCount = this.ordersCount.data;
      } catch (err) {
        EventBus.$emit("errorNotification", "Could not retrieve orders count"); //push notification
      }

      try {
        this.complaintsCount = await this.axios.get(
          `${this.$store.state.baseApiUrl}getComplaintsMonth`
        );
        this.complaintsCount = this.complaintsCount.data;
      } catch (err) {
        EventBus.$emit(
          "errorNotification",
          "Could not retrieve complaints count"
        ); //push notification
      }
    }
  }
};
</script>
