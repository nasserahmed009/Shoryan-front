<template>
  <!-- <div class="row container"> -->
  <div class="grey lighten-3 flex cartItemContainer">
    <div class=" bar">
      <i class="medium material-icons">remove_circle</i>
    </div>
    <div class="">
      <H4>Item Name</H4>
      <p>
        <i class="tiny material-icons">access_time</i>
        Estimated Delivery Date
      </p>
      <p style="font-size=10px">Seller Name</p>
    </div>
    <div class=" bar">
      <p style="font-size:20px">
        <b> 123 </b>
      </p>
      <p style="font-size:20px">
        <b> EGP </b>
      </p>
    </div>
    <div class=" bar">
      <div class="iconContainer center">
        <i class="material-icons">delete</i>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<style scoped>
.bar {
  margin: 30px 0px;
}
.cartItemContainer {
  justify-content: space-around;
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
