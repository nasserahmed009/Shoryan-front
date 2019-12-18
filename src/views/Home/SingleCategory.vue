<template>
  <div>
    <div class="pageHeader grey lighten-2">
      <div class="container">
        <h3 class="bold">
          Category Name
        </h3>
      </div>
    </div>
    <div class="container">
      <h4>Drugs in this category</h4>
      <Loading v-if="isLoading" />
      <div class="row" v-if="!isLoading">
        <div class="col m3 s12" v-for="drug in drugs" :key="drug.id">
          <DrugCard :drug="drug" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getCategoryDrugs(this.categoryId);
  },
  data() {
    return {
      drugs: null,
      isLoading: false
    };
  },
  components: {
    DrugCard: () => import("@/components/Home/DrugCard"),
    Loading: () => import("@/components/Loading")
  },
  methods: {
    //function that takes the item id as a parameter and add the item data in the component data
    async getCategoryDrugs(categoryId) {
      this.isLoading = true;

      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}drugsByCategory/${categoryId}`
      );

      this.drugs = response.data;

      this.isLoading = false;
    }
  },
  props: {
    categoryId: {
      type: [Number, String],
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.pageHeader {
  padding: 20px;
}

.breadcrumb:before {
  color: #9e9e9e;
  vertical-align: middle;
}
</style>
