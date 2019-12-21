<template>
  <div>
    <div class="row">
      <form class="col s3 right" @submit.prevent="search">
        <div class="input-field">
          <i class="material-icons prefix">search</i>
          <input type="text" placeholder="search" v-model.lazy="searchtext" />
          <label for="icon_prefix2"></label>
        </div>
      </form>
    </div>

    <Loading loadingMessage="Retriving all the listings" v-if="isLoading" />
    <DataTable
      v-if="!isLoading"
      :header-fields="headerFields"
      :data="tableData || []"
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
      isLoading: false,
      tableData: [],
      searchtext: null,
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
    DataTable,
    Loading: () => import("@/components/Loading")
  },
  methods: {
    search() {
      alert("search");
    },
    async getAllItems() {
      this.isLoading = true;
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}listings/`
      );
      this.tableData = response.data; //add the listings in array in the table data to be viewed
      this.isLoading = false;
    },
    async getSearchedListings() {
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}searchListings/` + this.searchtext
      );
      this.tableData = response.data; //add the users in array in the table data to be viewed
    }
  },
  watch: {
    searchtext(newValue) {
      this.searchtext = newValue;
      console.log(this.searchtext);
      if (newValue == "") {
        console.log("all");
        this.getAllItems();
      } else {
        console.log("searched");
        this.getSearchedListings();
      }
    }
  }
};
</script>
