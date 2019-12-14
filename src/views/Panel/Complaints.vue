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
    <DataTable :header-fields="headerFields" :data="data" :css="tableStyles">
      <div class="complaintMessage" slot="complaintMessage" slot-scope="props">
        <span>{{ props.rowData.message.slice(0, 100) }} ... see more </span>
      </div>
    </DataTable>
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
          username: "Hamda",
          orderId: 10,
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: new Date().toLocaleString()
        },
        {
          id: 1,
          username: "Hamda",
          orderId: 10,
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: new Date().toLocaleString()
        },
        {
          id: 1,
          username: "Hamda",
          orderId: 10,
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: new Date().toLocaleString()
        },
        {
          id: 1,
          username: "Hamda",
          orderId: 10,
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: new Date().toLocaleString()
        },
        {
          id: 1,
          username: "Hamda",
          orderId: 10,
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: new Date().toLocaleString()
        },
        {
          id: 1,
          username: "Hamda",
          orderId: 10,
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: new Date().toLocaleString()
        }
      ],
      tableStyles: tableStyles,
      headerFields: [
        {
          label: "id",
          name: "id"
        },
        {
          label: "User",
          name: "username"
        },
        {
          label: "Order id",
          name: "orderId"
        },
        {
          label: "Complaint message",
          name: "message",
          format: this.trimMessage,
          customElement: "complaintMessage"
        },
        {
          label: "Date",
          name: "date"
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
    trimMessage(message) {
      return message.slice(0, 5);
    }
  }
};
</script>

//
<style lang="scss" scoped>
.complaintMessage {
  max-width: 400px;
  display: inline-block;
}
</style>
