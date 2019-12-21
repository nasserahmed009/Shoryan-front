<template>
  <div>
    <div class="pageHeader grey lighten-2">
      <div class="container">
        <h3 class="bold">
          Edit profile settings
        </h3>
      </div>
    </div>
    <!-- <hr /> -->
    <!-- basic Information section  -->
    <div class="container">
      <h5 class="bold">Basic Information</h5>
      <hr />
      <div class="row">
        <!-- editing name -->
        <div class="input-field col s6">
          <input
            id="name"
            type="text"
            class="validate"
            v-model="userData.name"
          />
          <label for="name" class="active">Name</label>
        </div>

        <!-- editing email -->
        <div class="input-field col s6">
          <input
            id="email"
            type="email"
            class="validate"
            v-model="userData.email"
          />
          <label for="email" class="active">Email</label>
        </div>

        <!-- editing address -->
        <div class="input-field col s6">
          <input
            id="address"
            type="text"
            class="validate"
            v-model="userData.address"
          />
          <label for="address" class="active">Email</label>
        </div>

        <div
          v-if="
            this.userData.type == 'Normal' || this.userData.type == 'Courier'
          "
          class="input-field col s6"
        >
          <select id="area" v-model="this.userData.area">
            <option value="" disabled selected>Choose your option</option>
            <option value="giza">Giza</option>
            <option value="haram">Haram</option>
            <option value="shoubra">Shoubra</option>
            <option value="nasrCity">Nasr City</option>
            <option value="heliopolis">Heliopolis</option>
            <option value="ramsis">Ramsis</option>
            <option value="dokki">Dokki</option>
          </select>
          <label>Area</label>
        </div>
      </div>
    </div>

    <!-- security Information section  -->
    <div class="container">
      <h5 class="bold">Security Information</h5>
      <hr />
      <div class="row">
        <!-- editing password -->
        <div class="input-field col s6">
          <input
            id="password"
            type="password"
            class="validate"
            v-model="userData.password"
          />
          <label for="password" class="active">Password</label>
        </div>
        <!-- confirmimg password -->
        <!-- <div class="input-field col s6">
          <input
            id="password"
            type="password"
            class="validate"
            v-model="userData.confirmPassword"
          />
          <label for="password">Confirm Password</label>
        </div> -->
      </div>
    </div>

    <!-- additional Information section  -->
    <div class="container">
      <h5 class="bold">Additional Information</h5>
      <hr />
      <div
        class="row nomargin"
        v-for="(phoneNumber, phoneNumberIndex) in userData.phoneNumbers"
        :key="phoneNumber"
      >
        <!-- editing password -->
        <div class="input-field col s6">
          <input
            id="number"
            type="text"
            class="validate"
            :value="phoneNumber"
          />
          <label for="number" class="active">Phone Number</label>
        </div>

        <i
          class="material-icons red-text removePhoneNumber"
          @click.prevent="deletePhoneNumber(phoneNumber, phoneNumberIndex)"
          >close</i
        >
      </div>
      <!-- <p><i class="material-icons">add</i> Add another phone number</p> -->

      <!-- new phone numebr -->
      <div class="row nomargin">
        <div class="input-field col s6">
          <input
            id="newPhoneNumber"
            type="text"
            class="validate"
            @keydown.enter="addPhoneNumber"
            v-model="newPhoneNumber"
          />
          <label for="newPhoneNumber">Add new Phone Number</label>
        </div>
      </div>
    </div>
    <div class="container">
      <button class="btn" @click="updateSettings">Update settings</button>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js";

export default {
  mounted() {
    this.getUserData();
    $(document).ready(function() {
      $("select").formSelect();
    });
  },
  data() {
    return {
      userData: null,
      phoneNumbers: [],
      newPhoneNumber: ""
    };
  },
  updated() {
    EventBus.$emit("clearNotifications"); // to clear any existing notifications
    $("select").formSelect();
  },
  computed: {
    loggedInUser() {
      return this.$store.state.user;
    }
  },
  methods: {
    async getUserData() {
      this.isLoading = true;
      try {
        const response = await this.axios.get(
          `${this.$store.state.baseApiUrl}user/${this.loggedInUser.id}`
        );
        this.userData = response.data;
      } catch (err) {
        EventBus.$emit("errorNotification", "Error occured, try again later");
      }
      this.isLoading = false;
    },
    async addPhoneNumber() {
      try {
        await this.axios.post(
          `${this.$store.state.baseApiUrl}userPhoneNumber/${this.loggedInUser.id}/${this.newPhoneNumber}`
        );
        this.userData.phoneNumbers.push(this.newPhoneNumber);
        this.newPhoneNumber = "";
      } catch (err) {
        EventBus.$emit("errorNotification", err.response.data);
      }
    },
    async deletePhoneNumber(phoneNumber, phoneNumberIndex) {
      try {
        await this.axios.delete(
          `${this.$store.state.baseApiUrl}deletePhoneNumber/${this.loggedInUser.id}/${phoneNumber}`
        );
      } catch (error) {
        EventBus.$emit("errorNotification", error.response.data);
      }

      this.userData.phoneNumbers.splice(phoneNumberIndex, 1);
    },
    async updateSettings() {
      const requestPayload = {
        User_Details: this.userData
      };

      console.log(requestPayload);
      try {
        await this.axios.put(
          `${this.$store.state.baseApiUrl}user`,
          requestPayload
        );
      } catch (error) {
        EventBus.$emit("errorNotification", error.response.data);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pageHeader {
  padding: 20px;
}
.removePhoneNumber {
  line-height: 80px;
  cursor: pointer;
}
hr {
  margin: 20px 0px;
  border: 1px solid #eee;
}
</style>
