<template>
  <div>
    <div class="row">
      <div class="col s4">
        <ProfileInfoSideBar />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ProfileInfoSideBar: () => import("@/components/Home/ProfileInfoSideBar")
  }
};
</script>

<style></style>
