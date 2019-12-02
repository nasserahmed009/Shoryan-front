<template>
  <div>
    <ul id="slide-out" class="sidenav sidenav-fixed">
      <li class="grey darken-3">
        <h4 class="bold white-text nomargin">Shoryan</h4>
      </li>
      <li class="userSection">
        <div class="user-view">
          <div class="background">
            <img
              src="https://www.oxygenna.com/wp-content/uploads/2015/11/18.jpg"
            />
          </div>
          <a href="#user">
            <img
              class="circle userAvatar"
              src="https://fsmedia.imgix.net/ee/de/31/4e/1b42/4b9d/9c2a/2bff4db79044/how-anxious-you-are-could-have-to-do-with-how-well-you-are-at-recognizing-faces.jpeg?auto=format%2Ccompress&dpr=2&w=650"
            />
          </a>
          <a href="#name"><span class="white-text name bold">John Doe</span></a>
          <a href="#email"
            ><span class="white-text email">jdandturk@gmail.com</span></a
          >
        </div>
      </li>
      <li>
        <router-link :to="{ name: 'Dashboard' }">
          <i class="material-icons">dashboard</i>Dashboard
        </router-link>
      </li>
      <li>
        <a href="#!"><i class="material-icons">people</i>Users</a>
      </li>
      <li>
        <a href="#!"><i class="material-icons">view_list</i>Items</a>
      </li>
      <li>
        <a href="#!"><i class="material-icons">warning</i>Complaints</a>
      </li>
    </ul>

    <div class="panelMainView">
      <nav class="white">
        <div class="container">
          <div class="nav-wrapper">
            <a href="#" data-target="slide-out" class="sidenav-trigger "
              ><i class="material-icons black-text">menu</i></a
            >
            <h5 class="black-text nomargin bold viewTitle">Dashboard</h5>
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <router-view> </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $(".sidenav").sidenav();
  }
};
</script>

<style lang="scss" scoped>
.panelMainView {
  padding-left: 300px;
}

@media only screen and (max-width: 992px) {
  .panelMainView {
    padding-left: 0;
  }
}
nav {
  position: sticky;
  top: 0px;
  z-index: 997;
}
.sidenav li:first-of-type {
  padding: 15px 10px;
}
.userAvatar {
  object-fit: cover;
}
@media only screen and (min-width: 993px) {
  .container {
    width: 80%;
  }
}
.viewTitle {
  padding: 19px 0px;
}
</style>
