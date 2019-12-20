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
        <div class="input-field col s6">
          <input
            id="password"
            type="password"
            class="validate"
            v-model="userData.confirmPassword"
          />
          <label for="password">Confirm Password</label>
        </div>
      </div>
    </div>

    <!-- additional Information section  -->
    <div class="container">
      <h5 class="bold">Additional Information</h5>
      <hr />
      <div
        class="row nomargin"
        v-for="phoneNumber in phoneNumbers"
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
        <i class="material-icons red-text removePhoneNumber">close</i>
      </div>
      <!-- <p><i class="material-icons">add</i> Add another phone number</p> -->

      <!-- new phone numebr -->
      <div class="row nomargin">
        <div class="input-field col s6">
          <input id="newPhoneNumber" type="text" class="validate" />
          <label for="newPhoneNumber">Add new Phone Number</label>
        </div>
      </div>
    </div>
    <div class="container">
      <button class="btn">Update settings</button>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js";

export default {
  mounted() {
    this.getUserData();
  },
  data() {
    return {
      userData: null,
      phoneNumbers: ["1223342", "12312321", "1231232"]
    };
  },
  computed: {
    loggedInUser() {
      return this.$store.state.user;
    }
  },
  methods: {
    async getUserData() {
      try {
        const response = await this.axios.get(
          `${this.$store.state.baseApiUrl}user/${this.loggedInUser.id}`
        );

        this.userData = response.data;
      } catch (err) {
        EventBus.$emit("errorNotification", "Error occured, try again later");
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
