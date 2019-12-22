<template>
  <div>
    <BarChart
      v-if="!isLoading"
      :chart-data="datacollection"
      :options="datacollection.options"
    ></BarChart>
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
            // barPercentage: 0.5,
            // backgroundColor: ["red", "blue"],
            // barThickness: 6,
            // maxBarThickness: 8,
            // minBarLength: 2,
            data: [],
            label: ["Areas delivered to by courier"]
          }
        ],
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  // min: 0,
                  // max: 100
                }
              }
            ]
          }
        }
      }
    };
  },
  components: {
    BarChart: () => import("@/components/Charts/BarChart.vue")
  },
  computed: {
    loggedInUser() {
      return this.$store.state.user;
    }
  },
  methods: {
    async getData() {
      this.isLoading = true;
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}AreasDeliveredToByCourier/${this.loggedInUser.id}`
      );
      let labels = [];
      let values = [];

      for (let data of response.data) {
        labels.push(data.orderArea);
        values.push(data.deliveredOrdersCount);
      }
      this.datacollection.labels = labels;
      this.datacollection.datasets[0].data = values;
      console.log(labels, values);
      this.isLoading = false;
    }
  }
};
</script>
