<template>
  <div>
    <img
      src="@/assets/images/addImageCamera.png"
      alt=""
      height="200"
      width="200"
      v-if="imagesPaths.length == 0"
    />
    <div class="imageBox" v-if="imagesPaths.length > 0">
      <img
        class="materialboxed"
        height="220"
        width="250"
        :src="imagesPaths[0]"
        alt=""
      />
    </div>
    <div class="miniImageBoxes" v-if="imagesPaths.length > 1">
      <img
        class="materialboxed"
        height="50"
        width="50"
        v-for="(imagePath, index) in imagesPaths"
        :src="imagePath"
        :key="index"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagesPaths: {
      type: Array,
      required: true
    }
  },
  mounted() {
    $(document).ready(function() {
      $("select").formSelect();
      $(".materialboxed").materialbox();
    });
  }
};
</script>

<style scoped>
.imageBox {
  margin-top: 25px;
  /* border: 1px groove #555555; */
}
.miniImageBoxes img {
  width: 50px;
  margin-top: 5px;
  margin-right: 8px;
  display: inline-block;
}
</style>
