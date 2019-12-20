<template>
  <div>
    <Carousel />
    <div class="container">
      <h4 class="bold">Most ordered products</h4>
      <div class="row">
        <div
          class="col m3 s12"
          v-for="item in items.slice(0, 8)"
          :key="item.id"
        >
          <ItemCard :item="item" />
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
    this.getListings();
    this.getCategories();
  },
  data() {
    return {
      items: null, //items to be viewed in the index page
      categories: null
    };
  },
  components: {
    ItemCard: () => import("@/components/Home/ItemCard"),
    Carousel: () => import("@/components/Home/Carousel"),
    CategoryCard: () => import("@/components/Home/CategoryCard")
  },
  methods: {
    async getListings() {
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}Listings`
      );

      this.items = response.data;
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
