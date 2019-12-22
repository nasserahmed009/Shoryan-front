<template>
  <div>
    <!-- <div class="col s12 m4 l3"> -->
    <div class="card">
      <div class="card-image">
        <img :src="drugImgUrl" width="200" height="250" />
      </div>
      <div class="card-content">
        <!-- <router-link :to="{ name: 'SingleItem', params: { itemId: item.id } }"> -->
        <h5>{{ drug.name }}</h5>
        <!-- </router-link> -->

        <p><b>Official Price : </b> {{ drug.officialPrice }}</p>
      </div>
      <div class="card-action">
        <router-link
          :to="{ name: 'listingsOfDrug', params: { drugId: drug.id } }"
          class="waves-effect waves-light btn"
        >
          <i class="material-icons left">visibility</i>View listings
        </router-link>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    // the component expect to get an drug data to be viewed
    drug: {
      type: Object,
      required: true
    }
  },
  computed: {
    drugImgUrl() {
      if (this.drug.imgsUrls && this.drug.imgsUrls[0])
        return `${this.$store.state.baseUrl}${this.drug.imgsUrls[0]}`;
      else return `https://i.imgur.com/QFH6uL3.png`;
    }
  }
};
</script>
