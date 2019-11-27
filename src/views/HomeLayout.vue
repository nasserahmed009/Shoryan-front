<template>
  <div>
    <Navbar />
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import("@/components/Home/Navbar"),
    Footer: () => import("@/components/Home/Footer")
  }
};
</script>
