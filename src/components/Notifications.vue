<template>
  <div>
    <!-- error handling -->
    <div
      v-for="(error, errorIndex) in errors"
      :key="errorIndex"
      class="notification errorNotification notification red lighten-1 white-text"
    >
      <!-- <div class="container"> -->
      <i
        class="material-icons right "
        @click="hideErrorNotification(errorIndex)"
        >close</i
      >
      {{ error }}
      <!-- </div> -->
    </div>
    <div
      v-for="(successNotification,
      successNotificationIndex) in successNotifications"
      :key="successNotificationIndex"
      class="notification successNotification notification green accent-1"
    >
      <!-- <div class="container"> -->
      <i
        class="material-icons right green-text"
        @click="hideSuccessNotification(successNotificationIndex)"
        >close</i
      >
      {{ successNotification }}
      <!-- </div> -->
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js";

export default {
  mounted() {
    EventBus.$on("errorNotification", err => {
      this.showErrorNotification(err);
    });
    EventBus.$on("successNotification", notification => {
      this.showSuccessNotification(notification);
    });
    EventBus.$on("clearNotifications", () => {
      this.clearNotifications();
    });
  },
  data() {
    return {
      errors: [],
      successNotifications: []
    };
  },
  methods: {
    showSuccessNotification(notification) {
      this.successNotifications.push(notification);
      window.scrollTo(0, 0);
    },
    hideSuccessNotification(successNotificationIndex) {
      this.successNotifications.splice(successNotificationIndex, 1);
    },
    showErrorNotification(error) {
      this.errors.push(error);
      window.scrollTo(0, 0);
      // setTimeout(() => this.hideErrorNotification(errorIndex - 1), 1000);
    },
    hideErrorNotification(errorIndex) {
      this.errors.splice(errorIndex, 1);
    },
    clearNotifications() {
      this.errors = [];
      this.successNotifications = [];
    }
  },
  beforeRouteUpdate(to, from, next) {
    alert("casds");
    this.errors = [];
    this.successNotifications = [];
    next();
  }
};
</script>

<style lang="scss" scoped>
.notification {
  margin: 20px auto;
  padding: 20px 15px;
  border-radius: 5px;
}
.notification i {
  cursor: pointer;
}
</style>
