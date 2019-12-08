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
      Profile content goes here
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $(document).ready(function() {
      $("select").formSelect();
    });
  },
  data: function() {
    return {
      join_date: "25 jan 2018"
    };
  }
};
</script>

<style scoped>
.sidebar {
  padding: 50px 0px;
  min-height: calc(100vh - 231px - 64px);
  flex-direction: column;
  justify-content: space-between;
}
</style>
