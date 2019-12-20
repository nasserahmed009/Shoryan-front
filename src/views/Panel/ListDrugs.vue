<template>
  <div>
    <div class="row">
      <form class="col s3 right" @submit.prevent="search">
        <div class="input-field">
          <i class="material-icons prefix">search</i>
          <input type="text" placeholder="search" />
          <label for="icon_prefix2"></label>
        </div>
      </form>
    </div>
    <DataTable
      :header-fields="headerFields"
      :data="tableData"
      :css="tableStyles"
    >
      <div class="" slot="actions">
        <button
          class="btn-floating waves-effect waves-light tooltipped red"
          data-position="top"
          data-tooltip="Delete drug"
        >
          <i class="large material-icons">delete</i>
        </button>
      </div>
    </DataTable>
  </div>
</template>

<script>
import { DataTable } from "v-datatable-light";
import tableStyles from "@/assets/js/TableStyles";
export default {
  mounted() {
    this.getAllItems();
  },
  data() {
    return {
      tableData: [],
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
    }
  }
};
</script>
