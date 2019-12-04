// https://i.imgur.com/qtobdbx.png
<template>
  <div class="center sidebar">
    <a href="#user">
      <img
        class="circle userAvatar"
        src="https://fsmedia.imgix.net/ee/de/31/4e/1b42/4b9d/9c2a/2bff4db79044/how-anxious-you-are-could-have-to-do-with-how-well-you-are-at-recognizing-faces.jpeg?auto=format%2Ccompress&dpr=2&w=650"
      />
    </a>
    <h5>User Name</h5>
    <h6>Rating</h6>
    <i class="location-icon material-icons left">send</i>
    <h6 class="location-header">
      Location
    </h6>
    <h6>Joined {{ join_date }}</h6>
    <button
      class="settings-button btn waves-effect center waves-light right"
      type="settings"
      name="action"
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
  margin-top: 5%;
  background-color: #dddddd;
  padding-top: 20%;
  padding-bottom: 60%;
}
</style>
