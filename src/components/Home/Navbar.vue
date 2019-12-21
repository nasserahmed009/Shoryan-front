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
              <img :src="avatarUrl" alt="userAvatar" class="userAvatar" />
              <span class="bold">{{ loggedInUser.name }}</span>
            </a>

            <!-- Dropdown Structure -->
            <ul id="userAvatarDropdown" class="dropdown-content">
              <li v-if="loggedInUser.type == 'Normal'">
                <router-link :to="{ name: 'MyCart' }" href="#!">
                  My Cart
                </router-link>
              </li>
              <li v-if="loggedInUser.type != 'Admin'">
                <router-link :to="{ name: 'Profile' }" href="#!">
                  Profile
                </router-link>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li>
                <router-link :to="{ name: 'Logout' }" class="red-text bold"
                  >Logout</router-link
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
  updated() {
    if (this.loggedIn) $(".dropdown-trigger").dropdown();
  },
  computed: {
    //return if a user is logged in or not
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    //retutn the logged in user
    loggedInUser() {
      return this.$store.state.user;
    },
    avatarUrl() {
      return this.$store.state.baseUrl + this.loggedInUser.img_url;
    }
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
