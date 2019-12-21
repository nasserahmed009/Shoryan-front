<template>
  <div>
    <h4 class="bold">Add new drug</h4>
    <div class="row">
      <div class="input-field col s6">
        <input id="drugName" type="text" class="validate" v-model="drugName" />
        <label for="drugName">Drug Name</label>
      </div>
      <div class="input-field col s6">
        <input
          id="officialPrice"
          type="number"
          class="validate"
          min="1"
          v-model="drugPrice"
        />
        <label for="officialPrice">Official Price</label>
      </div>

      <div v-if="imgUrls.length">
        Image urls :
        <div class="chip" v-for="(imgUrl, index) in imgUrls" :key="index">
          {{ imgUrl }}
          <!-- <i class="close material-icons">close</i> -->
        </div>
      </div>

      <div class="input-field col s12" v-if="imgUrls.length < 6">
        <input
          id="imgUrl"
          type="text"
          class="validate"
          v-model.lazy="newImgUrl"
        />
        <label for="imgUrl">Image url</label>
      </div>

      <div v-if="effectiveSubstances.length">
        effective substances :
        <div
          class="chip"
          v-for="(effectiveSubstance, index) in effectiveSubstances"
          :key="index"
        >
          {{ effectiveSubstance }}
          <!-- <i class="close material-icons">close</i> -->
        </div>
      </div>

      <div class="input-field col s12">
        <input
          id="effectiveSubstance"
          type="text"
          class="validate"
          v-model.lazy="newEffectiveSubstance"
        />
        <label for="effectiveSubstance">Effective substance</label>
      </div>

      <p class="bold">Categories :</p>
      <p v-for="category in categories" :key="category.id" class="category">
        <label>
          <input
            type="checkbox"
            :value="category.id"
            v-model="selectedCategories"
          />
          <span>{{ category.name }}</span>
        </label>
      </p>
    </div>
    <div class="btn right" @click.prevent="addDrug">Add drug</div>
  </div>
</template>
<script>
import { EventBus } from "@/EventBus.js"; //for pushing notifications

export default {
  mounted() {
    this.getCategories();
  },
  data() {
    return {
      selectedCategories: [],
      drugName: "",
      drugPrice: null,
      newImgUrl: "",
      imgUrls: [],
      categories: [],
      newEffectiveSubstance: "",
      effectiveSubstances: []
    };
  },
  methods: {
    async getCategories() {
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}categories`
      );

      this.categories = response.data;
    },
    async addDrug() {
      try {
        //constructing the payload for the request
        const requestPayload = {
          Drugs: {
            name: this.drugName,
            officialPrice: this.drugPrice,
            imgsUrls: this.imgUrls,
            categoriesIds: this.selectedCategories,
            effectiveSubstances: this.effectiveSubstances
          }
        };

        await this.axios.post(
          `${this.$store.state.baseApiUrl}drugs`,
          requestPayload
        );

        this.resetForm(); //reset the form for adding new drug
        EventBus.$emit("successNotification", "Drug Added successfully"); //push notification
      } catch (err) {
        EventBus.$emit("errorNotification", "Error occured, try again later"); //push notification
      }
    },
    //reset the add drug form
    resetForm() {
      this.drugName = "";
      this.drugPrice = null;
      this.newImgUrl = "";
      this.imgUrls = [];
      this.newEffectiveSubstance = "";
      this.effectiveSubstances = [];
    }
  },
  watch: {
    newImgUrl(newValue) {
      if (newValue.trim() && this.imgUrls.length < 6)
        this.imgUrls.push(newValue);
      this.newImgUrl = "";
    },
    newEffectiveSubstance(newValue) {
      if (newValue.trim()) this.effectiveSubstances.push(newValue);
      this.newEffectiveSubstance = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.category {
  display: inline-block;
  margin: 15px 25px 15px 0px;
}
</style>
