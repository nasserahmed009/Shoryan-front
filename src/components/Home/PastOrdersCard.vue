<template>
  <!-- <div class="row container"> -->
  <div class="grey lighten-3 flex cartItemContainer">
    <div class=" bar">
      <i class="medium material-icons">remove_circle</i>
    </div>
    <div class="">
      <H4>{{ Listing.name }}</H4>
      <p style="font-size=10px">{{ Listing.sellerName }}</p>
    </div>
    <div class=" bar">
      <p style="font-size:20px">
        <b> {{ Listing.price }} </b>
      </p>
      <p style="font-size:20px">
        <b> EGP </b>
      </p>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  props: {
    Listing: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.bar {
  margin: 30px 0px;
}
.cartItemContainer {
  justify-content: space-around;
  border-radius: 30px;
}
.iconContainer {
  width: 60px;
  height: 60px;
  border: 1px solid #f44336;
  border-radius: 50%;
  line-height: 70px;
  cursor: pointer;
  transition: all 0.3s ease-out;
}
.iconContainer i {
  color: #f44336;
}
.iconContainer:hover {
  background: #f44336;
}
.iconContainer:hover i {
  color: #fff;
}
</style>
