<template>
  <div>
    <h5 class="bold">#Drugs in each category</h5>
    <hr />
    <PieChart
      v-if="!isLoading"
      :chart-data="datacollection"
      :options="datacollection.options"
    ></PieChart>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getData();
  },
  data() {
    return {
      isLoading: false,
      datacollection: {
        labels: [],
        datasets: [
          {
            backgroundColor: ["#2196f3", "#ffee58", "#f44336"],
            borderWidth: 0,

            data: []
          }
        ],
        options: {}
      }
    };
  },
  components: {
    PieChart: () => import("@/components/Charts/PieChart.vue")
  },
  methods: {
    getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },

    async getData() {
      this.isLoading = true;
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}DrugsOfEachCategory`
      );

      const drugCategoriesAndCounts = response.data;
      let labels = []; //labels for the pie chart
      let values = []; //values for the pie chart

      for (let drugCategoryAndCount of drugCategoriesAndCounts) {
        labels.push(drugCategoryAndCount.categoryName);
        values.push(drugCategoryAndCount.drugCount);
      }
      let backgroundColors = [];
      labels.forEach(() => {
        backgroundColors.push(this.getRandomColor());
      });
      this.datacollection.datasets[0].backgroundColor = backgroundColors;
      this.datacollection.labels = labels;
      this.datacollection.datasets[0].data = values;

      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
hr {
  border: 1px solid #ccc;
}
</style>
