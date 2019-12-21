<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="insert-image col s8 m4">
          <MultiImgViewer :imagesPaths="selectedImagesPaths" />
          <form action="#">
            <div class="file-field input-field">
              <div class="btn">
                <span>File</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  @change="parseImgs($event)"
                />
              </div>
              <div class="file-path-wrapper">
                <input
                  class="file-path validate"
                  type="text"
                  placeholder="Upload one or more files"
                />
              </div>
            </div>
          </form>
        </div>

        <div class="input-field col s12 m6">
          <form @submit.prevent="addListing">
            <div class="input-field col s12">
              <select v-model="drugid">
                <option disabled selected>Drugs</option>
                <option
                  v-for="drug in this.drugs"
                  :key="drug.id"
                  :value="drug.id"
                  >{{ drug.name }}</option
                >
              </select>
            </div>

            <div class="input-field col s12">
              <input
                type="text"
                class="datepicker"
                placeholder="Expiry Date"
                :value="expirationDate"
              />
            </div>

            <div class="input-field col s12">
              <input
                id="price"
                type="number"
                class="validate"
                v-model="price"
              />
              <label for="price">Price</label>
            </div>

            <div class="input-field col s6">
              <input
                id="shreet"
                type="number"
                class="validate"
                v-model="shreets"
              />
              <label for="shreet">Shreet</label>
            </div>

            <div class="input-field col s6">
              <input id="elba" type="number" class="validate" v-model="elbas" />
              <label for="elba">3elba</label>
            </div>

            <button
              class="btn waves-effect waves-light right"
              type="submit"
              name="action"
            >
              Submit
              <i class="material-icons right">send</i>
            </button>

            <!-- <a class="waves-effect waves-light btn right">Preview</a> -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    MultiImgViewer: () => import("@/components/Home/MultiImageViewer")
  },
  mounted() {
    this.isLoading = true;
    this.getDrugs();
    this.isLoading = false;

    $(".datepicker").datepicker({
      onSelect: this.setExpiryDate
    });

    $(document).ready(function() {
      $("select").formSelect();
      $(".materialboxed").materialbox();
    });
  },
  updated() {
    $("select").formSelect();
  },
  data() {
    return {
      drugs: null,
      selectedImagesPaths: [],
      drugid: null,
      userid: this.$store.getters.loggedIn ? this.$store.state.user.id : null,
      expirationDate: null,
      shreets: 0,
      elbas: 0,
      price: null
    };
  },
  methods: {
    setExpiryDate(date) {
      this.expirationDate = date;
    },
    async getDrugs() {
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}drugs`
      );

      this.drugs = response.data;
    },
    addListing() {
      const listingData = {
        drugId: this.drugid,
        userid: this.userid,
        expirationDate: this.expirationDate,
        shreets: this.shreets,
        elbas: this.elbas,
        price: this.price
      };
      this.axios.post(`${this.$store.state.baseApiUrl}listings`, listingData);
    },
    parseImgs(event) {
      let files = event.target.files;
      if (files) {
        let SelectedImagesPaths = [];

        for (let i = 0; i < files.length; i++) {
          let reader = new FileReader();
          reader.readAsDataURL(files[i]);
          reader.onload = function(e) {
            SelectedImagesPaths.push(e.target.result);
          };
        }

        this.selectedImagesPaths = SelectedImagesPaths;
      }
    }
  }
};
</script>

<style scoped></style>
