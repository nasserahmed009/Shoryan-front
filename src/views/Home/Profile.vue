<template>
  <div class="row" style="margin-bottom: 0px">
    <Loading v-if="!user" />
    <div class="center sidebar col l3 m4 s12 grey lighten-2 flex" v-if="user">
      <div class="userInfo">
        <a href="#user">
          <img
            class="circle userAvatar"
            :src="baseUrl + user.imgUrl"
            width="150px"
            height="150px"
          />
        </a>
        <h5 class="bold">{{ user.name }}</h5>
        <h6>Rating: {{ user.rating }}</h6>
        <h6 class="location-header">
          <i class="tiny location-icon material-icons">location_on</i>
          {{ user.address }}
        </h6>
        <h6>Joined {{ user.registrationDate }}</h6>
        <div v-if="this.userType == 'Normal'">
          <h6 style="margin: 15px 0px">
            <i class="material-icons verticalMiddle" style="margin: 0px 15px"
              >account_balance_wallet</i
            >
            <b>Balance : {{ user.balance }}</b>
          </h6>
          <form @submit.prevent="redeem">
            <div class="input-field col s10 " style="margin-left:40px">
              <input
                id="code"
                type="text"
                class="validate"
                v-model="giftCardCode"
              />
              <label class="center" for="code">GiftCard Code</label>
              <button type="submit" class="waves-effect waves-light btn right">
                <i class="material-icons right">send</i>Redeem
              </button>
            </div>
          </form>
        </div>
      </div>
      <router-link
        class="settings-button btn waves-effect waves-light right"
        :to="{ name: 'EditProfile' }"
      >
        Profile Settings
        <i class="material-icons right">settings</i>
      </router-link>
    </div>
    <div class="col l9 m8 s" v-if="user">
      <div class="container">
        <div class="row">
          <div class="col s12">
            <div v-if="user.type == 'Courier'">
              <ul class="tabs">
                <li class="tab col s3">
                  <a class="active" href="#PastOrders">Past orders</a>
                </li>
                <li class="tab col s3">
                  <a href="#UpcomingOrders">Upcoming orders</a>
                </li>

                <li class="tab col s3"><a href="#test4">Account balance</a></li>
              </ul>
              <div id="PastOrders" class="col s12">
                <div v-for="order in this.pastOrders" :key="order.id">
                  <order :Order="order" />
                </div>
              </div>
              <div id="UpcomingOrders" class="col s12">
                <div v-for="order in this.upcomingOrders" :key="order.id">
                  <order :Order="order" v-on:orderCompleted="orderCompleted" />
                </div>
              </div>
              <div id="test4" class="col s12">Test 4</div>
            </div>
            <div v-else>
              <ul class="tabs">
                <li class="tab col s3">
                  <a class="active" href="#ActiveListings">Active Listings</a>
                </li>
                <li class="tab col s3">
                  <a href="#PastOrders">past orders</a>
                </li>
                <li class="tab col s3">
                  <a href="#Statistics">Statistics</a>
                </li>
              </ul>
              <div id="ActiveListings" class="col s12">
                <Loading v-if="loadingActiveListing" />
                <div class="row" v-if="!loadingActiveListing">
                  <div
                    class="col m4 s12"
                    v-for="item in ActiveListings"
                    :key="item.id"
                  >
                    <ItemCard :item="item" />
                  </div>
                </div>
              </div>
              <div id="PastOrders" class="col s12">
                <Loading v-if="loadingUserPastOrders" />
                <div v-if="!loadingUserPastOrders">
                  <div v-for="order in this.userPastOrders" :key="order.id">
                    <order :Order="order" />
                  </div>
                </div>
              </div>
              <div id="Statistics" class="col s12">
                <MoneyGainedInYearChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js";
export default {
  async mounted() {
    $(document).ready(function() {
      $("select").formSelect();
      $(".tabs").tabs();
    });

    await this.getUser();

    if (this.user.type == "Normal") {
      //for normal user
      await this.getActiveListings();
      await this.getNormalUserPastOrders();
    } else if (this.user.type == "Courier") {
      //for couriers
      await this.getUpcomingOrders();
      await this.getPastOrders();
    }
  },
  updated() {
    $(".tabs").tabs();
  },
  data: function() {
    return {
      userid: this.$store.getters.loggedIn ? this.$store.state.user.id : null,
      userType: this.$store.state.user.type,
      user: null,
      upcomingOrders: null,
      pastOrders: null,
      ActiveListings: null,
      userPastOrders: null,
      giftCardCode: null,
      loadingActiveListing: false,
      loadingUserPastOrders: false,
      loadingUpcommingOrders: false,
      loadingPastOrders: false
    };
  },
  components: {
    ItemCard: () => import("@/components/Home/ItemCard"),
    Loading: () => import("@/components/Loading"),
    order: () => import("@/components/Home/Order"),
    MoneyGainedInYearChart: () =>
      import("@/components/Home/MoneyGainedInYearChart")
  },
  computed: {
    baseUrl() {
      return this.$store.state.baseUrl;
    }
  },
  methods: {
    async getUser() {
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}user/` + this.userid
      );

      this.user = response.data;
    },
    async getUpcomingOrders() {
      this.loadingUpcommingOrders = true;
      try {
        const response = await this.axios.get(
          `${this.$store.state.baseApiUrl}UpcommingOrders/` + this.userid
        );
        this.upcomingOrders = response.data;
      } catch (err) {
        EventBus.$emit("errorNotification", "Error occured,try again later");
      }
      this.loadingUpcommingOrders = false;
    },
    async getPastOrders() {
      this.loadingPastOrders = true;
      try {
        const response = await this.axios.get(
          `${this.$store.state.baseApiUrl}PastOrders/` + this.userid
        );

        this.pastOrders = response.data;
      } catch (err) {
        EventBus.$emit("errorNotification", "Error occured,try again later");
      }

      this.loadingPastOrders = false;
    },

    async getActiveListings() {
      this.loadingActiveListing = true;
      try {
        const response = await this.axios.get(
          `${this.$store.state.baseApiUrl}ActiveListings/` + this.userid
        );
        this.ActiveListings = response.data;
      } catch (err) {
        EventBus.$emit("errorNotification", "Error occured,try again later");
      }
      this.loadingActiveListing = false;
    },

    async getNormalUserPastOrders() {
      this.loadingUserPastOrders = true;
      try {
        const response = await this.axios.get(
          `${this.$store.state.baseApiUrl}OrdersOfUser/` + this.userid
        );
        this.userPastOrders = response.data;
        console.log(this.userPastOrders);
      } catch (err) {
        EventBus.$emit("errorNotification", "Error occured, try again later");
      }

      this.loadingUserPastOrders = false;
    },
    async redeem() {
      EventBus.$emit("clearNotifications"); // to clear any existing notifications
      console.log(this.giftCardCode);
      try {
        await this.axios.put(
          `${this.$store.state.baseApiUrl}GiftCards/` +
            this.giftCardCode +
            "/" +
            this.$store.state.user.id
        );
        this.$router.go();
      } catch (error) {
        EventBus.$emit("errorNotification", error.response.data);
      }
    },
    orderCompleted(orderId) {
      this.upcomingOrders = this.upcomingOrders.filter(
        order => order.id != orderId
      );
    }
  }
};
</script>

<style scoped>
.sidebar {
  padding: 50px 0px;
  min-height: calc(100vh - 64px);
  position: sticky;
  top: 64px;
  /* min-height: 100vh; */
  flex-direction: column;
  justify-content: space-between;
  background-image: url(https://i.ytimg.com/vi/AeP7CVDEQGg/maxresdefault.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.cartItem {
  margin: 15px 0px;
}
.order {
  margin: 10px 0px;
}
.settings-button {
  width: 210px;
  margin-left: auto;
  margin-right: auto;
}
.userAvatar {
  object-fit: cover;
  border: 2px solid #eee;
}
</style>
