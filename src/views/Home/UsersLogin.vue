<template>
  <div>
    <div class="container">
      <form @submit.prevent="login">
        <h4 class="bold">Login</h4>
        <div class="login-form row">
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
          <button
            class="btn waves-effect waves-light right"
            type="submit"
            name="action"
          >
            Login
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js";

export default {
  mounted() {},
  data() {
    return {
      email: null, //the email entered by the user
      password: null //the password entered by the user
    };
  },
  methods: {
    async login() {
      EventBus.$emit("clearNotifications"); // to clear any existing notifications

      //the data that will be sent to the api
      const credentials = {
        User_Details: {
          email: this.email,
          password: this.password
        }
      };

      try {
        await this.$store.dispatch("login", credentials); //login
        this.$router.push("/"); //return to the home page
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
