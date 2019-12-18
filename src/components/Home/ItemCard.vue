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
        <router-link :to="{ name: 'SingleItem', params: { itemId: item.id } }">
          <h5>Drug name</h5>
        </router-link>

        <p><b>Shreets : </b> {{ item.shreets }}</p>
        <p><b>Elbas : </b> {{ item.elbas }}</p>
        <p><b>Price : </b> {{ item.price }}</p>
      </div>
      <div class="card-action">
        <a class="waves-effect waves-light btn"
          ><i class="material-icons left">add</i>Add to card</a
        >
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    // the component expect to get an item date to be viewed
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
