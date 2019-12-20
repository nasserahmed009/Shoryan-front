<template>
  <div>
    <h4 class="bold">Add gift card</h4>
    <!-- code -->
    <div class="input-field col s6">
      <input id="code" type="text" class="validate" v-model="code" />
      <label for="code" :class="{ active: this.code }">code</label>
    </div>

    <!-- value -->
    <div class="input-field col s6">
      <input id="value" type="number" class="validate" v-model="value" />
      <label for="value" :class="{ active: this.value }">value</label>
    </div>

    <!-- expiryDate -->
    <input
      type="text"
      class="datepicker"
      placeholder="expiration date"
      :value="expiryDate"
    />

    <button class="btn right" @click.prevent="addGiftCard">
      Add gift card
    </button>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js"; //for pushing notifications

export default {
  mounted() {
    $(".datepicker").datepicker({
      onSelect: this.setExpiryDate
    });
  },
  data() {
    return {
      expiryDate: null,
      code: null,
      value: null
    };
  },
  methods: {
    setExpiryDate(date) {
      this.expiryDate = date;
    },
    async addGiftCard() {
      try {
        //constructing the payload for the request
        const requestPayload = {
          giftCards: {
            code: this.code,
            value: this.value,
            expiryDate: this.expiryDate
          }
        };

        await this.axios.post(
          `${this.$store.state.baseApiUrl}GiftCards`,
          requestPayload
        );

        this.resetForm(); //reset the form for adding new drug
        EventBus.$emit("successNotification", "Gift card Added successfully"); //push notification
      } catch (err) {
        EventBus.$emit("errorNotification", "Error occured, try again later"); //push notification
      }
    },
    resetForm() {
      this.code = this.value = this.expiryDate = null;
    }
  }
};
</script>
