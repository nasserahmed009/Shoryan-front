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
    />
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
          label: "Elbas",
          name: "elbas"
        },
        {
          label: "Shreets",
          name: "shreets"
        },
        {
          label: "price",
          name: "price"
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
        `${this.$store.state.baseApiUrl}listings/`
      );
      this.tableData = response.data; //add the listings in array in the table data to be viewed
    }
  }
};
</script>
