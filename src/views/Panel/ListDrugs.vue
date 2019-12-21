<template>
  <div>
    <div class="row">
      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large" :to="{ name: 'addDrug' }">
          <i class="large material-icons">add</i>
        </router-link>
      </div>

      <!-- search box -->
      <form class="col s3 right" @submit.prevent="search">
        <div class="input-field">
          <i class="material-icons prefix">search</i>
          <input type="text" placeholder="search" v-model.lazy="searchtext" />
          <label for="icon_prefix2"></label>
        </div>
      </form>
    </div>
    <DataTable
      :header-fields="headerFields"
      :data="tableData || []"
      :css="tableStyles"
    >
      <div class="" slot="actions" slot-scope="props">
        <button
          class="btn-floating waves-effect waves-light tooltipped red"
          data-position="top"
          data-tooltip="Delete drug"
          @click="deleteDrug(props.rowData.id, props.rowIndex)"
        >
          <i class="large material-icons">delete</i>
        </button>
      </div>
    </DataTable>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js";

import { DataTable } from "v-datatable-light";
import tableStyles from "@/assets/js/TableStyles";
export default {
  mounted() {
    this.getAllItems();
  },
  data() {
    return {
      tableData: [],
      searchtext: null,
      tableStyles: tableStyles,
      headerFields: [
        {
          label: "id",
          name: "id"
        },
        {
          label: "Drug name",
          name: "name"
        },
        {
          label: "Official Price",
          name: "officialPrice"
        },
        {
          label: "effective substances",
          name: "effectiveSubstances",
          format: this.formatEffectiveSubstances
        },
        {
          label: "categories",
          name: "categories"
        },
        {
          label: "actions",
          name: "actions",
          customElement: "actions"
        }
      ]
    };
  },
  components: {
    DataTable
  },
  methods: {
    search() {
      alert("search");
    },
    async getAllItems() {
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}drugs`
      );
      this.tableData = response.data; //add the listings in array in the table data to be viewed
    },
    //take the array of effective substances and return a string with them
    formatEffectiveSubstances(effectiveSubstancesArray) {
      if (effectiveSubstancesArray.length == 0) return "Not defined";

      let effectiveSubstances = "";
      for (let effectiveSubstance of effectiveSubstancesArray) {
        effectiveSubstances += " - " + effectiveSubstance;
      }
      return effectiveSubstances.trim().slice(1);
    },
    async getSearchedDrugs() {
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}searchDrugs/` + this.searchtext
      );
      this.tableData = response.data; //add the users in array in the table data to be viewed
    },
    async deleteDrug(drugId, drugIndex) {
      try {
        //request to delete the drug
        await this.axios.delete(
          `${this.$store.state.baseApiUrl}drugs/${drugId}`
        );

        //remove the drug from the component
        this.tableData.splice(drugIndex, 1);
        //push notification on deleting successfully
        EventBus.$emit("successNotification", "Drug deleted successfully");
      } catch (err) {
        //push notification with the error
        EventBus.$emit(
          "errorNotification",
          "Error occured, please try again later"
        );
      }
    }
  },
  watch: {
    searchtext(newValue) {
      this.searchtext = newValue;
      if (newValue == "") {
        this.getAllItems();
      } else {
        this.getSearchedDrugs();
      }
    }
  }
};
</script>
