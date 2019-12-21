<template>
  <div class="small">
    <div class="hamada">
      <BarChart
        :chart-data="datacollection"
        :options="datacollection.options"
      ></BarChart>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/Charts/BarChart.vue";

export default {
  components: {
    BarChart
  },
  data() {
    return {
      datacollection: {
        labels: [
          "label1",
          "label2",
          "label1",
          "label2",
          "label2",
          "label1",
          "label2"
        ],
        datasets: [
          {
            // barPercentage: 0.5,
            backgroundColor: ["red", "green", "blue"],
            // barThickness: 6,
            // maxBarThickness: 8,
            // minBarLength: 2,
            data: [10, 20, 30, 40, 50, 60, 70],
            label: ["dsads"]
          }
        ],
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 0,
                  max: 100
                }
              }
            ]
          }
        }
      }
    };
  },
  mounted() {
    // this.fillData();
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
