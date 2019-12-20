<template>
  <div>
    <Loading v-if="isLoading" />
    <Carousel />

    <div class="container" v-if="!isLoading">
      <h4 class="bold">Most ordered products</h4>
      <div class="row">
        <div
          class="col m3 s12"
          v-for="drug in drugs.slice(0, 8)"
          :key="drug.id"
        >
          <DrugCard :drug="drug" />
        </div>
      </div>

      <h4 class="bold">Categories</h4>
      <div class="row">
        <div
          class="col  col m4 s12"
          v-for="category in categories.slice(0, 6)"
          :key="category.id"
        >
          <CategoryCard :category="category" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.isLoading = true;
    this.getDrugs();
    this.getCategories();
    this.isLoading = false;
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
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}drugs`
      );

      this.drugs = response.data;
    },
    async getCategories() {
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}categories`
      );
      this.categories = response.data;
    }
  }
};
</script>
