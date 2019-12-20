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
      <div class="complaintMessage" slot="complaintMessage" slot-scope="props">
        <span
          >{{
            props.rowData.message.length > 150
              ? props.rowData.message.slice(0, 100) + "..."
              : props.rowData.message
          }}
        </span>
      </div>
    </DataTable>
  </div>
</template>

<script>
import { DataTable } from "v-datatable-light";
import tableStyles from "@/assets/js/TableStyles";
export default {
  mounted() {
    this.getAllComplaints();
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
          label: "Subject",
          name: "subject"
        },
        {
          label: "Courier id",
          name: "courierId"
        },
        {
          label: "user id",
          name: "normalUserId"
        },
        {
          label: "Complaint message",
          name: "message",
          format: this.trimMessage,
          customElement: "complaintMessage"
        },
        {
          label: "Status",
          name: "status"
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
    },
    async getAllComplaints() {
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}complaints`
      );
      this.tableData = response.data; //add the listings in array in the table data to be viewed
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
