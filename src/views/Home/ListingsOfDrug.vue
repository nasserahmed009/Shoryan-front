<template>
  <div>
    <div class="pageHeader grey lighten-2">
      <div class="container">
        <h3 class="bold">
          Listings of Drug
        </h3>
      </div>
    </div>

    <div class="container">
      <Loading v-if="isLoading" />
      <div class="row" v-if="!isLoading">
        <div class="nolistings" v-if="listings == null || listings.length == 0">
          <h6>No listings for this drug</h6>
        </div>
        <div class="col m3 s12" v-for="listing in listings" :key="listing.id">
          <!-- <DrugCard :drug="drug" /> -->
          <ItemCard :item="listing" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js"; //for notifications

export default {
  mounted() {
    this.getListingsOfDrug(this.drugId);
  },
  data() {
    return {
      isLoading: false,
      listings: null
    };
  },
  methods: {
    async getListingsOfDrug(drugId) {
      this.isLoading = true;
      try {
        const response = await this.axios.get(
          `${this.$store.state.baseApiUrl}ListingsInOrder/${drugId}`
        );

        this.listings = response.data;
      } catch (err) {
        EventBus.$emit("errorNotification", "Error occured, try again later");
      }

      this.isLoading = false;
    }
  },
  components: {
    ItemCard: () => import("@/components/Home/ItemCard"),
    Loading: () => import("@/components/Loading")
  },
  props: {
    drugId: {
      type: [String, Number],
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.pageHeader {
  padding: 20px;
}
.nolistings {
  margin: 25px 0px;
}
</style>
