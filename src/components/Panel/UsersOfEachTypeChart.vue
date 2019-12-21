<template>
  <div>
    <h5 class="bold">Users of each type</h5>
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
    async getData() {
      this.isLoading = true;
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}UsersOfEachType`
      );

      const userTypesAndCounts = response.data;
      let labels = []; //labels for the pie chart
      let values = []; //values for the pie chart

      for (let userTypeAndCount of userTypesAndCounts) {
        labels.push(userTypeAndCount.userType);
        values.push(userTypeAndCount.count);
      }

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
