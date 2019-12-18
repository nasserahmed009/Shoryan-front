<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col m4 s12 overflowhidden ">
          <div class="mainImage">
            <img
              src="https://216348-656719-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/02/03-antinal-egypt-compressor.jpg"
              alt=""
            />
          </div>
          <div class="otherImages flex">
            <img
              src="https://216348-656719-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/02/03-antinal-egypt-compressor.jpg"
              alt=""
            />
            <img
              src="https://216348-656719-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/02/03-antinal-egypt-compressor.jpg"
              alt=""
            />
            <img
              src="https://216348-656719-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/02/03-antinal-egypt-compressor.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="col m8 s12">
          <h4 class="bold">Product Name</h4>
          <div class="itemSection itemDescriptionSection">
            <h6>Description :</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              quis, vero impedit sed eaque explicabo enim, optio exercitationem
              perferendis non porro pariatur perspiciatis rerum nesciunt iusto
              laudantium modi, id dolores?
            </p>
          </div>
          <div class="itemPriceSection itemSection">
            <a class="btn-floating btn-small waves-effect waves-light red">
              <i class="material-icons">attach_money</i>
            </a>
            <h6 class="inline verticalMiddle bold">200 EGP</h6>
          </div>
          <div class="itemSection itemBulletinSection">
            <a class="btn-floating btn-small waves-effect waves-light red">
              <i class="material-icons"> local_pharmacy </i>
            </a>
            <h6 class="inline verticalMiddle">View drug bulletin</h6>
          </div>
          <div class="itemSection">
            <a class="waves-effect waves-light btn"
              ><i class="material-icons left">add</i>Add to card</a
            >
          </div>
        </div>
      </div>

      <h3 class="bold col s10 nomargin" style="color=black">
        Sellers
      </h3>

      <SellerCard v-for="i in 6" :key="i" class="col s6" />

      <h3 class="bold col s10 nomargin" style="color=black">
        Similar Products
      </h3>
      <div class="row">
        <div class="col m3 s12" v-for="i in 4" :key="i">
          <ItemCard />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoed>
.mainImage img {
  width: 100%;
}
.otherImages {
  justify-content: space-between;
}
.otherImages img {
  width: 32%;
}
.itemSection {
  margin: 15px 0px;
}
.btn-floating {
  margin: 0px 10px;
}
</style>
<script>
export default {
  components: {
    SellerCard: () => import("@/components/Home/SellerCard"),
    ItemCard: () => import("@/components/Home/ItemCard")
  }
};
</script>
