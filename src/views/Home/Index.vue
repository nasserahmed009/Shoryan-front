<template>
  <div>
    <Carousel />
    <div class="container">
      <h4 class="bold">Most ordered products</h4>
      <div class="row">
        <div class="col m3 s12" v-for="item in items" :key="item.id">
          <ItemCard :item="item" />
        </div>
      </div>

      <h4 class="bold">Categories</h4>
      <div class="row">
        <CategoryCard v-for="i in 6" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getListings();
  },
  data() {
    return {
      items: null //items to be viewed in the index page
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
    }
  }
};
</script>
