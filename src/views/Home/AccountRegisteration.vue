<template>
  <div>
    <div class="container">
      <!-- <div class="row"> -->
      <form @submit.prevent="register">
        <h4 class="bold ">Create a new account</h4>
        <div class="register-form row">
          <div class="input-field col s6">
            <input
              id="first_name"
              type="text"
              class="validate"
              required
              v-model="firstname"
            />
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
            <input
              id="last_name"
              type="text"
              class="validate"
              required
              v-model="lastname"
            />
            <label for="last_name">Last Name</label>
          </div>
          <div class="input-field col s12">
            <input
              id="email"
              type="email"
              class="validate"
              required
              v-model="email"
            />
            <label for="email">Email</label>
          </div>
          <div class="input-field col s12">
            <input
              id="password"
              type="password"
              class="validate"
              required
              v-model="password"
            />
            <label for="password">Password</label>
          </div>
          <div class="input-field col s12">
            <input
              id="phonenumber"
              type="text"
              class="validate"
              required
              v-model="phoneNumbers"
            />
            <label for="phonenumber">Phone Number</label>
          </div>
          <div class="input-field col s12">
            <input
              id="address"
              type="text"
              class="validate"
              required
              v-model="address"
            />
            <label for="address">Address</label>
          </div>
          <div class="input-field col s12">
            <select id="type" v-model="type">
              <option value="Normal">Normal</option>
              <option value="Pharmacy">Pharmacy</option>
              <option value="Courier">Courier</option>
            </select>
            <label>Account type</label>
          </div>
          <div v-if="type == 'Normal'" class="input-field col s12">
            <select id="gender" v-model="gender">
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            <label>Gender</label>
          </div>
          <div
            v-if="type == 'Normal' || type == 'Courier'"
            class="input-field col s12"
          >
            <select id="area" v-model="area">
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

          <button
            class="btn waves-effect waves-light right"
            type="submit"
            name="action"
          >
            Register
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js";

export default {
  updated() {
    $("select").formSelect();
  },
  mounted() {
    $(document).ready(function() {
      $("select").formSelect();
    });
  },
  data() {
    return {
      firstname: null, //the email entered by the user
      lastname: null,
      password: null, //the password entered by the user
      email: null,
      phoneNumbers: null,
      address: null,
      type: "Normal",
      gender: "M",
      area: "haram"
    };
  },
  methods: {
    async register() {
      EventBus.$emit("clearNotifications"); // to clear any existing notifications

      //the data that will be sent to the api
      const requestPayload = {
        User_Details: {
          name: this.firstname + " " + this.lastname,
          password: this.password,
          email: this.email,
          phoneNumbers: [this.phoneNumbers],
          address: this.address,
          type: this.type,
          imgUrl: "images/profilePics/default.png"
        },
        Couriers: {
          area: this.area
        },
        NormalUsers: {
          gender: this.gender,
          area: this.area
        }
      };

      try {
        await this.axios.post(
          `${this.$store.state.baseApiUrl}user`,
          requestPayload
        );
        this.$router.push("/Login"); //return to the home page
      } catch (err) {
        EventBus.$emit("errorNotification", err.response.data); //error notification if  error occured
      }
    }
  }
};
</script>

<style scoped>
form {
  max-width: 700px;
  margin: 0 auto;
}
</style>
