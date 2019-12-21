<template>
  <div class="center preloader">
    <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <h4>{{ loadingMessage }}</h4>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    loadingMessage: {
      type: String,
      default: "Loading"
    }
  }
};
</script>

<style lang="scss" scoped>
.preloader {
  margin: 80px 0px;
}
</style>
