<template>
  <div>
    <!-- <div class="col s12 m4 l3"> -->
    <div class="card">
      <div class="card-image">
        <img
          src="https://wusfnews.wusf.usf.edu/sites/wusf/files/styles/medium/public/201908/pills_prescription_istock_2018.jpg"
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
