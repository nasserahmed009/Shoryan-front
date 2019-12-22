<template>
  <div>
    <Carousel />
    <Loading v-if="isLoading" />
    <div class="container" v-if="!isLoading">
      <h4 class="bold">All Drugs</h4>
      <div class="row" v-if="drugs">
        <div class="col m3 s12" v-for="drug in drugs" :key="drug.id">
          <DrugCard :drug="drug" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js";
export default {
  mounted() {
    this.getDrugs();
  },
  data() {
    return {
      isLoading: false, // to show the preloader or not§1
      drugs: null //items to be viewed in the index page
    };
  },
  components: {
    DrugCard: () => import("@/components/Home/DrugCard"),
    Carousel: () => import("@/components/Home/Carousel"),
    Loading: () => import("@/components/Loading")
  },
  methods: {
    async getDrugs() {
      this.isLoading = true;
      try {
        const response = await this.axios.get(
          `${this.$store.state.baseApiUrl}drugs`
        );
        this.drugs = response.data;
      } catch (error) {
        EventBus.$emit("errorNotification", error.response.data);
      }

      this.isLoading = false;
    }
  }
};
</script>
