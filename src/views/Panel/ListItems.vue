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
          id: 1,
          drugName: "Antinal",
          seller: "Hamada adweya",
          quantity: "200"
        },
        {
          id: 1,
          drugName: "Antinal",
          seller: "Hamada adweya",
          quantity: "200"
        },
        {
          id: 1,
          drugName: "Antinal",
          seller: "Hamada adweya",
          quantity: "200"
        },
        {
          id: 1,
          drugName: "Antinal",
          seller: "Hamada adweya",
          quantity: "200"
        },
        {
          id: 1,
          drugName: "Antinal",
          seller: "Hamada adweya",
          quantity: "200"
        },
        {
          id: 1,
          drugName: "Antinal",
          seller: "Hamada adweya",
          quantity: "200"
        }
      ],
      tableStyles: tableStyles,
      headerFields: [
        {
          label: "id",
          name: "id"
        },
        {
          label: "Drug name",
          name: "drugName"
        },
        {
          label: "Seller",
          name: "seller"
        },
        {
          label: "Quantity",
          name: "quantity"
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
