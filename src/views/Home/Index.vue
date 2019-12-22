<template>
  <div>
    <Carousel />

    <Loading v-if="isLoading" />

    <div class="container" v-if="!isLoading">
      <h4 class="bold">Some available drugs</h4>
      <div class="row" v-if="drugs">
        <div
          class="col m3 s12"
          v-for="drug in drugs.slice(0, 8)"
          :key="drug.id"
        >
          <DrugCard :drug="drug" />
        </div>
      </div>
      <div style="margin-right:10px">
        <router-link
          class="settings-button btn waves-effect waves-light right"
          :to="{ name: 'AllDrugs' }"
        >
          View All
          <i class="material-icons right">send</i>
        </router-link>
      </div>
      <br />

      <h4 class="bold">Categories</h4>
      <div class="row" v-if="categories">
        <div
          class="col  col m4 s12"
          v-for="category in categories.slice(0, 6)"
          :key="category.id"
        >
          <CategoryCard :category="category" />
        </div>
      </div>
      <div style="margin-right:10px; padding-bottom:60px">
        <router-link
          class="settings-button btn waves-effect waves-light right"
          :to="{ name: 'AllCategories' }"
        >
          View All
          <i class="material-icons right">send</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js";
export default {
  mounted() {
    this.getDrugs();
    this.getCategories();
  },
  data() {
    return {
      isLoading: false, // to show the preloader or not§1
      drugs: null, //items to be viewed in the index page
      categories: null
    };
  },
  components: {
    DrugCard: () => import("@/components/Home/DrugCard"),
    Carousel: () => import("@/components/Home/Carousel"),
    CategoryCard: () => import("@/components/Home/CategoryCard"),
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
    },
    async getCategories() {
      this.isLoading = true;

      try {
        const response = await this.axios.get(
          `${this.$store.state.baseApiUrl}categories`
        );
        this.categories = response.data;
      } catch (error) {
        EventBus.$emit("errorNotification", error.response.data);
      }

      this.isLoading = false;
    }
  }
};
</script>
