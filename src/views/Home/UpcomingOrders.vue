<template>
  <div class="container">
    <div class="row" style="padding-left:42%; margin-top:5%">
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
    <hr style="margin:10px 0% 10px 42% " />
    <div class="row" style="padding-top:10px">
      <div class="col s5">
        <!-- <ProfileInfo /> -->
      </div>
      <div class="col s7">
        <upcomingOrdersCard v-for="i in 3" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    upcomingOrdersCard: () => import("@/components/Home/UpcomingOrderCard")
    // ProfileInfo: () => import("@/components/Home/Profile")
  }
};
</script>

<style>
.text {
  font-size: 20px;
}
</style>
