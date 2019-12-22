<template>
  <div>
    <footer class="page-footer blue lighten-1">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Shoryan</h5>
            <p class="grey-text text-lighten-4">
              We hope our service is healing you
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <router-link :to="{ name: 'AllCategories' }"
                ><li>
                  <a class="grey-text text-lighten-3" href="#!"
                    >All Categories</a
                  >
                </li></router-link
              >
              <router-link :to="{ name: 'AllDrugs' }"
                ><li>
                  <a class="grey-text text-lighten-3" href="#!">All Drugs</a>
                </li></router-link
              >
              <router-link :to="{ name: 'Profile' }"
                ><li>
                  <a class="grey-text text-lighten-3" href="#!">Profile</a>
                </li></router-link
              >
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2019 Shoryan
        </div>
      </div>
    </footer>
  </div>
</template>
