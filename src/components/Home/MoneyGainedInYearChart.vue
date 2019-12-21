<template>
  <div>
    <BarChart
      :chart-data="datacollection"
      :options="datacollection.options"
    ></BarChart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datacollection: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            // barPercentage: 0.5,
            backgroundColor: ["red", "green", "blue"],
            // barThickness: 6,
            // maxBarThickness: 8,
            // minBarLength: 2,
            data: [10, 20, 30, 40, 50, 60, 70],
            label: [" Money Gained In Year 2019"]
          }
        ],
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 100
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
  }
};
</script>
