<template>
  <div>
    <!-- Dropdown Structure -->
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li class="divider"></li>
      <li><a href="#!">three</a></li>
    </ul>
    <nav class="">
      <div class="nav-wrapper container">
        <router-link :to="{ name: 'Index' }">
          <img src="@/assets/images/shoryanLogo.png" alt="" class="logo" />
        </router-link>

        <ul class="right hide-on-med-and-down">
          <li><a href="sass.html">Categories</a></li>

          <!-- Dropdown Trigger -->
          <li>
            <a class="dropdown-trigger" href="#!" data-target="dropdown1"
              >User<i class="material-icons right">arrow_drop_down</i></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  height: 35px;
  vertical-align: middle;
}
nav {
  position: sticky;
  top: 0px;
}
</style>
