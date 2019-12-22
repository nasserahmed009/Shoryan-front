<template>
  <div>
    <Carousel />

    <Loading v-if="isLoading" />

    <div class="container" v-if="!isLoading">
      <h4 class="bold">Categories</h4>
      <div class="row" v-if="categories">
        <div
          class="col  col m4 s12"
          v-for="category in categories"
          :key="category.id"
        >
          <CategoryCard :category="category" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js";
export default {
  mounted() {
    this.getCategories();
  },
  data() {
    return {
      isLoading: false, // to show the preloader or not§1
      categories: null
    };
  },
  components: {
    Carousel: () => import("@/components/Home/Carousel"),
    CategoryCard: () => import("@/components/Home/CategoryCard"),
    Loading: () => import("@/components/Loading")
  },
  methods: {
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
