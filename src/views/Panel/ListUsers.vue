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
    <DataTable :header-fields="headerFields" :data="data" :css="tableStyles" />
  </div>
</template>

<script>
import { DataTable } from "v-datatable-light";
import tableStyles from "@/assets/js/TableStyles";
export default {
  data() {
    return {
      data: [
        {
          id: 3,
          name: "hamda",
          location: "talbya",
          email: "hamada@gmail.com"
        },
        {
          id: 3,
          name: "hamda",
          location: "talbya",
          email: "hamada@gmail.com"
        },
        {
          id: 3,
          name: "hamda",
          location: "talbya",
          email: "hamada@gmail.com"
        },
        {
          id: 3,
          name: "hamda",
          location: "talbya",
          email: "hamada@gmail.com"
        },
        {
          id: 3,
          name: "hamda",
          location: "talbya",
          email: "hamada@gmail.com"
        },
        {
          id: 3,
          name: "hamda",
          location: "talbya",
          email: "hamada@gmail.com"
        },
        {
          id: 3,
          name: "hamda",
          location: "talbya",
          email: "hamada@gmail.com"
        },
        {
          id: 3,
          name: "hamda",
          location: "talbya",
          email: "hamada@gmail.com"
        },
        {
          id: 3,
          name: "hamda",
          location: "talbya",
          email: "hamada@gmail.com"
        },
        {
          id: 4,
          name: "shomma",
          location: "matba3a",
          email: "shomma@gmail.com"
        }
      ],
      tableStyles: tableStyles,
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
          label: "location",
          name: "location"
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
    }
  }
};
</script>
