<template>
  <div>
    <div class="row" style="padding-left:32%; margin-top:5%">
      <p class=" text col s4 bold ">
        Upcoming Orders
      </p>
      <p class="text col s4">
        Past Orders
      </p>
      <p class="text col s4 " style="margin-right=20px">
        Account Balance
      </p>
    </div>
    <hr style="margin:10px 10% 10px 32.5% " />
    <div class="row container" style="padding-top:10px">
      <div class="col s3"></div>
      <div class="col s9">
        <upcomingOrdersCard v-for="i in 3" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    upcomingOrdersCard: () => import("@/components/Home/UpcomingOrderCard")
  }
};
</script>

<style>
.text {
  font-size: 20px;
}
</style>
