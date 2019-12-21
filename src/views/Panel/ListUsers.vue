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
    <DataTable
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
    this.getAllUsers();
  },
  data() {
    return {
      tableData: [],
      tableStyles: tableStyles,
      searchtext: null,
      headerFields: [
        {
          label: "id",
          name: "id"
        },
        {
          label: "name",
          name: "name"
        },
        {
          label: "email",
          name: "email"
        },
        {
          label: "address",
          name: "address"
        },
        {
          label: "user type",
          name: "type"
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
    async getAllUsers() {
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}user/`
      );
      this.tableData = response.data; //add the users in array in the table data to be viewed
    },
    async getSearchedUsers() {
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}searchUsers/` + this.searchtext
      );
      this.tableData = response.data; //add the users in array in the table data to be viewed
    }
  },
  watch: {
    searchtext(newValue) {
      this.searchtext = newValue;
      if (newValue == "") {
        this.getAllUsers();
      } else {
        this.getSearchedUsers();
      }
    }
  }
};
</script>
