<template>
  <div class="row" style="margin-bottom: 0px">
    <div class="center sidebar col l3 m4 s12 grey lighten-2 flex">
      <div class="userInfo">
        <a href="#user">
          <img
            class="circle userAvatar"
            src="../../assets/images/drug.jpg"
            width="150px"
            height="150px"
          />
        </a>
        <h5>User Name</h5>
        <h6>Rating</h6>
        <h6 class="location-header">
          <i class="tiny location-icon material-icons">location_on</i>
          Location
        </h6>
        <h6>Joined {{ join_date }}</h6>
      </div>
      <button
        class="settings-button btn waves-effect waves-light right"
        type="settings"
        name="action"
        style="margin:0% 30%"
      >
        Profile Settings
        <i class="material-icons right">send</i>
      </button>
    </div>
    <div class="col l9 m8 s">
      <div class="container">
        <div class="row">
          <div class="col s12">
            <ul class="tabs">
              <li class="tab col s3">
                <a class="active" href="#test1">Upcomming orders</a>
              </li>
              <li class="tab col s3">
                <a class="" href="#test2">Past orders</a>
              </li>

              <li class="tab col s3"><a href="#test4">Account balance</a></li>
            </ul>
          </div>
          <div id="test1" class="col s12">
            <cartItem v-for="i in 6" :key="i" class="cartItem" />
            <p>hello</p>
          </div>
          <div id="test2" class="col s12">Test 2</div>
          <div id="test4" class="col s12">Test 4</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $(document).ready(function() {
      $("select").formSelect();
      $(".tabs").tabs({});
    });
  },
  data: function() {
    return {
      join_date: "25 jan 2018"
    };
  },
  components: {
    cartItem: () => import("@/components/Home/CartItem")
  }
};
</script>

<style scoped>
.sidebar {
  padding: 50px 0px;
  min-height: calc(100vh - 64px);
  position: sticky;
  top: 64px;
  /* min-height: 100vh; */
  flex-direction: column;
  justify-content: space-between;
}
.cartItem {
  margin: 15px 0px;
}
</style>
