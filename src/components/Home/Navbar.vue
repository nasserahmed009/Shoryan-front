<template>
  <div class="navbar">
    <nav>
      <div class="nav-wrapper container">
        <router-link :to="{ name: 'Index' }">
          <img src="@/assets/images/shoryanLogo.png" alt="" class="logo" />
        </router-link>

        <ul class="right hide-on-med-and-down">
          <div v-if="!loggedIn">
            <!-- register button -->
            <router-link
              :to="{ name: 'Register' }"
              class="waves-effect waves-teal btn-flat white-text"
              >Register</router-link
            >
            <!-- login button -->
            <router-link
              :to="{ name: 'Login' }"
              class="waves-effect waves-light btn white blue-text"
              >login</router-link
            >
          </div>
          <div v-if="loggedIn">
            <a
              class="dropdown-trigger "
              href="#"
              data-target="userAvatarDropdown"
            >
              <img
                src="https://img.freepik.com/free-vector/pig-smiling_24640-54623.jpg"
                alt="userAvatar"
                class="userAvatar"
              />
              <span class="bold">John Doe</span>
            </a>

            <!-- Dropdown Structure -->
            <ul id="userAvatarDropdown" class="dropdown-content">
              <li>
                <router-link :to="{ name: 'MyCart' }" href="#!">
                  My Cart
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Profile' }" href="#!">
                  Profile
                </router-link>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li>
                <a
                  href="#!"
                  class="red-text bold"
                  @click.prevent="loggedIn = false"
                  >Logout</a
                >
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.loggedIn) $(".dropdown-trigger").dropdown();
  },
  data() {
    return {
      loggedIn: true
    };
  }
};
</script>
<style lang="scss" scoped>
.logo {
  height: 35px;
  vertical-align: middle;
}
.navbar {
  position: sticky;
  top: 0px;
  z-index: 999;
}
.userAvatar {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
</style>
