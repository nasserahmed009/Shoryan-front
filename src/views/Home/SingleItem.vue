<template>
  <div>
    <Loading v-if="isLoading" />
    <div class="container" v-if="!isLoading">
      <div class="row">
        <div class="col m4 s12 overflowhidden" style="padding-top:30px">
          <multiImageViewer :imagesPaths="imagesPaths" />
        </div>
        <div class="col m8 s12">
          <h4 class="bold">{{ itemData.drugName }}</h4>
          <div class="itemSection itemDescriptionSection">
            <h6 class="bold">Description:</h6>
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
            <h6 class="inline verticalMiddle bold">{{ itemData.price }} EGP</h6>
          </div>
          <h6><b>Seller: </b> {{ itemData.sellerName }}</h6>
          <h6><b>Shreets: </b> {{ itemData.shreets }}</h6>
          <h6><b>Elbas: </b> {{ itemData.elbas }}</h6>
          <h6><b>Expiration Date: </b> {{ itemData.expirationDate }}</h6>
          <div class="itemSection">
            <a class="waves-effect waves-light btn"
              ><i class="material-icons left">add</i>Add to cart</a
            >
          </div>
        </div>
      </div>

      <h3 class="bold col s10 nomargin" style="color=black">
        Other Sellers
      </h3>

      <SellerCard v-for="i in 6" :key="i" class="col s6" />

      <!-- <h3 class="bold col s10 nomargin" style="color=black">
        Similar Products
      </h3>
      <div class="row">
        <div class="col m3 s12" v-for="i in 4" :key="i">
          <ItemCard />
        </div>
      </div> -->
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
import { EventBus } from "@/EventBus.js";
export default {
  mounted() {
    this.getItemData(this.itemId);
    this.getListingImages(this.itemId);
  },
  data() {
    return {
      itemData: {
        drugName: null,
        sellerName: null,
        shreets: null,
        elbas: null,
        expirationDate: null
      },
      imagesUrls: null,
      imagesPaths: [],
      isLoading: false
    };
  },
  components: {
    SellerCard: () => import("@/components/Home/SellerCard"),
    // ItemCard: () => import("@/components/Home/ItemCard"),
    Loading: () => import("@/components/Loading"),
    MultiImageViewer: () => import("@/components/Home/MultiImageViewer")
  },
  props: {
    //this view expects to get the item id to get its data
    itemId: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    //function that takes the item id as a parameter and add the item data in the component data
    async getItemData(itemId) {
      this.isLoading = true;

      try {
        const response = await this.axios.get(
          `${this.$store.state.baseApiUrl}Listings/${itemId}`
        );
        this.itemData = response.data;
      } catch (error) {
        EventBus.$emit("errorNotification", error.response.data);
      }

      this.isLoading = false;
    },
    async getListingImages(itemId) {
      this.isLoading = true;

      try {
        const response = await this.axios.get(
          `${this.$store.state.baseApiUrl}ListingsImgs/${itemId}`
        );
        this.imagesUrls = response.data;

        this.imagesPaths = this.imagesUrls.map(
          x => `${this.$store.state.baseUrl}${x.url}`
        );
      } catch (error) {
        EventBus.$emit("errorNotification", error.response.data);
      }

      this.isLoading = false;
    }
  }
};
</script>
