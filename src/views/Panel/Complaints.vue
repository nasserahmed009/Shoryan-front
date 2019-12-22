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

    <Loading v-if="isLoading" loadingMessage="Retriving complaints" />

    <DataTable
      v-if="!isLoading"
      :header-fields="headerFields"
      :data="tableData || []"
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

      <div class="" slot="actions" slot-scope="props">
        <button
          class="btn-floating waves-effect waves-light tooltipped green"
          data-position="top"
          data-tooltip="Delete drug"
          @click="markAsCompleted(props.rowData.id, props.rowIndex)"
        >
          <i class="large material-icons bold">check</i>
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
    this.getAllComplaints();
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
    DataTable,
    Loading: () => import("@/components/Loading")
  },
  methods: {
    search() {
      alert("search");
    },
    trimMessage(message) {
      return message.slice(0, 5);
    },
    async getAllComplaints() {
      this.isLoading = true;
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}complaints`
      );
      this.tableData = response.data; //add the listings in array in the table data to be viewed
      this.isLoading = false;
    },
    async getSearchedComplaints() {
      const response = await this.axios.get(
        `${this.$store.state.baseApiUrl}searchComplaints/` + this.searchtext
      );
      this.tableData = response.data; //add the listings in array in the table data to be viewed
    },
    async markAsCompleted(complaintId, complaintIndex) {
      try {
        await this.axios.post(
          `${this.$store.state.baseApiUrl}answerComplaint/${complaintId}`,
          {}
        );
        EventBus.$emit(
          "successNotification",
          "Complaint addressed successfully"
        );

        this.tableData[complaintIndex].status = "Addressed";
      } catch (err) {
        EventBus.$emit("errorNotification", "Error occured, try again later");
      }
    }
  },
  watch: {
    searchtext(newValue) {
      this.searchtext = newValue;
      if (newValue == "") {
        this.getAllComplaints();
        console.log("ALL");
      } else {
        this.getSearchedComplaints();
        console.log("Searched");
      }
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
