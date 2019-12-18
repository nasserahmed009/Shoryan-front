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
        <router-link :to="{ name: 'SingleItem', params: { itemId: 1 } }">
          <h5>Drug Name</h5>
        </router-link>

        <p>
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </p>
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
