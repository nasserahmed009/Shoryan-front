<template>
  <div>
    <!-- <div class="col s12 m4 l3"> -->
    <div class="card">
      <div class="card-image">
        <img
          v-if="drug.imgsUrls && drug.imgsUrls[0]"
          :src="drug.imgsUrls[0]"
          width="200"
          height="250"
        />
        <img
          v-if="!(drug.imgsUrls && drug.imgsUrls[0])"
          :src="'https://i.imgur.com/QFH6uL3.png'"
          width="200"
          height="250"
        />
      </div>
      <div class="card-content">
        <!-- <router-link :to="{ name: 'SingleItem', params: { itemId: item.id } }"> -->
        <h5>{{ drug.name }}</h5>
        <!-- </router-link> -->

        <p><b>Official Price : </b> {{ drug.officialPrice }}</p>
      </div>
      <div class="card-action">
        <a class="waves-effect waves-light btn"
          ><i class="material-icons left">visibility</i>View listings</a
        >
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
  }
};
</script>
