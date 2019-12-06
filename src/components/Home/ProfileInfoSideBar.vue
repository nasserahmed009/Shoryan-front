// https://i.imgur.com/qtobdbx.png
<template>
  <div class="center sidebar">
    <a href="#user">
      <img
        class="circle userAvatar"
        src="../../assets/images/drug.jpg"
        width="350px"
        height="350px"
      />
    </a>
    <h5>User Name</h5>
    <h6>Rating</h6>
    <h6 class="location-header">
      <i class="tiny location-icon material-icons">location_on</i>
      Location
    </h6>
    <h6>Joined {{ join_date }}</h6>
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
.location-icon {
  display: inline-block;
}
.settings-button {
  margin-left: 20%;
  margin-right: 20%;
}
.sidebar {
  /* margin-top: 5%; */
  background-color: #dddddd;
  padding-top: 20%;
  padding-bottom: 60%;
}
</style>
